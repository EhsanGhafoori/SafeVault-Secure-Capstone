namespace UserManagementAPI.Middleware;

public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var startTime = DateTime.UtcNow;

        // Log incoming request
        _logger.LogInformation(
            "Incoming Request: {Method} {Path} from {RemoteIp}",
            context.Request.Method,
            context.Request.Path,
            context.Connection.RemoteIpAddress
        );

        // Capture the original response body stream
        var originalBodyStream = context.Response.Body;

        using (var responseBody = new MemoryStream())
        {
            context.Response.Body = responseBody;

            await _next(context);

            var elapsed = (DateTime.UtcNow - startTime).TotalMilliseconds;

            // Log response
            _logger.LogInformation(
                "Outgoing Response: {Method} {Path} - Status: {StatusCode} - Duration: {Elapsed}ms",
                context.Request.Method,
                context.Request.Path,
                context.Response.StatusCode,
                elapsed
            );

            // Copy the response back to the original stream
            await responseBody.CopyToAsync(originalBodyStream);
        }
    }
}
