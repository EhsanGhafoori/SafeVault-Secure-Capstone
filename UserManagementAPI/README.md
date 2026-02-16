# User Management API

A comprehensive RESTful API for managing users, built with ASP.NET Core and Microsoft Copilot. This API provides full CRUD operations with validation, logging, and error handling middleware.

## Features

- ✅ **CRUD Operations**: Complete Create, Read, Update, Delete endpoints for user management
- ✅ **Data Validation**: Comprehensive validation using Data Annotations
- ✅ **Request Logging Middleware**: Logs all incoming requests and responses
- ✅ **Error Handling Middleware**: Centralized error handling with appropriate HTTP status codes
- ✅ **Swagger Documentation**: Interactive API documentation
- ✅ **Structured Logging**: Detailed logging for debugging and monitoring

## Technology Stack

- **.NET 8.0**: Latest .NET framework
- **ASP.NET Core Web API**: RESTful API framework
- **Swagger/OpenAPI**: API documentation
- **Microsoft Copilot**: AI-assisted development

## API Endpoints

### GET /api/users
Get all users.

**Response**: `200 OK`
```json
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "age": 30,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": null
  }
]
```

### GET /api/users/{id}
Get a specific user by ID.

**Response**: `200 OK` or `404 Not Found`

### POST /api/users
Create a new user.

**Request Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "age": 30
}
```

**Response**: `201 Created` or `400 Bad Request` or `409 Conflict`

### PUT /api/users/{id}
Update an existing user.

**Request Body**: Same as POST

**Response**: `200 OK` or `400 Bad Request` or `404 Not Found` or `409 Conflict`

### DELETE /api/users/{id}
Delete a user.

**Response**: `204 No Content` or `404 Not Found`

## Validation Rules

- **FirstName**: Required, 2-50 characters
- **LastName**: Required, 2-50 characters
- **Email**: Required, valid email format, must be unique
- **Phone**: Required, valid phone number format
- **Age**: Required, must be between 18 and 120

## Getting Started

### Prerequisites

- .NET SDK 8.0 or later
- Visual Studio, Visual Studio Code, or any code editor

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/UserManagementAPI.git
cd UserManagementAPI
```

2. Restore dependencies:
```bash
dotnet restore
```

3. Run the application:
```bash
dotnet run
```

4. Open your browser and navigate to:
   - Swagger UI: `https://localhost:5001/swagger`
   - API: `https://localhost:5001/api/users`

## How Microsoft Copilot Assisted in Development

### Activity 1: Writing and Enhancing API Code with Copilot

Microsoft Copilot played a crucial role in the initial development of the User Management API. When creating the API structure, Copilot generated the foundational code for the ASP.NET Core Web API project, including the proper project file configuration and Program.cs setup. The AI assistant suggested the use of dependency injection patterns, which led to the creation of a clean service layer architecture.

Copilot was particularly helpful in generating the CRUD endpoints in the UsersController. The AI assistant provided boilerplate code for GET, POST, PUT, and DELETE operations, following RESTful API best practices. Copilot also suggested proper HTTP status codes and response types, ensuring the API follows industry standards. When implementing the User model, Copilot recommended appropriate data validation attributes, including Required, StringLength, EmailAddress, and RegularExpression attributes, which ensured data integrity from the start.

The AI assistant helped structure the service layer with an interface (IUserService) and implementation (UserService), promoting testability and maintainability. Copilot also suggested implementing proper error handling, including checking for duplicate emails before creating or updating users. This proactive approach prevented data inconsistencies and improved the overall quality of the API.

### Activity 2: Debugging API Code with Copilot

During the debugging phase, Copilot proved to be an invaluable debugging partner. The API encountered several issues, including routing problems, validation errors, and exception handling challenges. Copilot quickly identified and helped resolve these issues by providing context-aware suggestions.

One significant issue was with model validation not being properly triggered. Copilot identified that the ModelState validation needed to be explicitly checked in the controller actions and suggested the proper implementation. The AI assistant also helped debug issues with the email uniqueness check, suggesting improvements to handle case-insensitive email comparisons and exclude the current user when updating.

Copilot assisted in fixing HTTP status code issues, ensuring that the API returns appropriate status codes (201 for Created, 204 for No Content, 404 for Not Found, 409 for Conflict). The AI assistant also helped implement proper error messages in JSON format, making the API more user-friendly for API consumers.

When encountering issues with dependency injection, Copilot suggested the correct service registration in Program.cs and helped resolve circular dependency problems. The debugging assistance significantly reduced development time and resulted in a more robust API.

### Activity 3: Implementing and Managing Middleware with Copilot

In the final activity, Copilot's expertise was crucial in implementing custom middleware for logging and error handling. The AI assistant generated the RequestLoggingMiddleware class structure, which logs all incoming requests with details such as HTTP method, path, remote IP address, and response status codes. Copilot suggested capturing the response body stream to log response times, which provides valuable performance insights.

For the ErrorHandlingMiddleware, Copilot helped implement a comprehensive exception handling strategy. The AI assistant suggested catching different types of exceptions (ArgumentException, InvalidOperationException) and mapping them to appropriate HTTP status codes. Copilot also recommended returning error messages in a consistent JSON format, improving the API's error reporting capabilities.

Copilot guided the middleware registration order in Program.cs, ensuring that the logging middleware captures all requests and the error handling middleware catches all exceptions. The AI assistant also suggested adding structured logging with appropriate log levels (Information, Warning, Error), which makes debugging and monitoring much easier.

Throughout the middleware implementation, Copilot provided best practices for middleware development, including proper async/await patterns, stream handling, and exception propagation. The comprehensive middleware implementation resulted in a production-ready API with excellent observability and error handling.

### Overall Impact

Throughout all three activities, Microsoft Copilot served as an essential development partner that accelerated the API development process, reduced errors, and provided educational insights into ASP.NET Core best practices. The AI assistant not only generated code but also explained the reasoning behind certain patterns, which enhanced understanding of the framework. The collaborative development experience transformed the process from time-consuming and error-prone to efficient and educational. The final API successfully demonstrates all required features: complete CRUD operations, comprehensive data validation, request logging middleware, and error handling middleware, all developed with significant assistance from Microsoft Copilot.

## Project Structure

```
UserManagementAPI/
├── Controllers/
│   └── UsersController.cs
├── Models/
│   └── User.cs
├── Services/
│   ├── IUserService.cs
│   └── UserService.cs
├── Middleware/
│   ├── RequestLoggingMiddleware.cs
│   └── ErrorHandlingMiddleware.cs
├── Program.cs
└── README.md
```

## Testing the API

### Using Swagger UI

1. Navigate to `https://localhost:5001/swagger`
2. Use the interactive interface to test all endpoints

### Using curl

```bash
# Get all users
curl https://localhost:5001/api/users

# Get user by ID
curl https://localhost:5001/api/users/1

# Create user
curl -X POST https://localhost:5001/api/users \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john@example.com","phone":"+1234567890","age":30}'

# Update user
curl -X PUT https://localhost:5001/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Jane","lastName":"Doe","email":"jane@example.com","phone":"+1234567890","age":25}'

# Delete user
curl -X DELETE https://localhost:5001/api/users/1
```

## License

This project is created for educational purposes as part of a peer-graded assignment.

## Acknowledgments

- Microsoft Copilot for AI-assisted development
- ASP.NET Core documentation and community
- Course instructors and peers for feedback
