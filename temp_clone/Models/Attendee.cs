namespace EventEase.Models;

public class Attendee
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public int EventId { get; set; }
    public DateTime RegistrationDate { get; set; } = DateTime.Now;
    public string Notes { get; set; } = string.Empty;
}
