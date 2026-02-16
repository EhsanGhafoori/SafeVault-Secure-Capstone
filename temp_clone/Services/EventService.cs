using EventEase.Models;

namespace EventEase.Services;

public class EventService
{
    private List<Event> events = new List<Event>
    {
        new Event 
        { 
            Id = 1, 
            Title = "Tech Conference 2024", 
            Date = DateTime.Now.AddDays(30), 
            Location = "Convention Center", 
            Description = "Annual technology conference featuring the latest innovations.",
            MaxAttendees = 500
        },
        new Event 
        { 
            Id = 2, 
            Title = "Developer Workshop", 
            Date = DateTime.Now.AddDays(45), 
            Location = "Tech Hub", 
            Description = "Hands-on workshop for developers.",
            MaxAttendees = 50
        },
        new Event 
        { 
            Id = 3, 
            Title = "Networking Event", 
            Date = DateTime.Now.AddDays(60), 
            Location = "Business Center", 
            Description = "Professional networking opportunity.",
            MaxAttendees = 200
        }
    };

    public List<Event> GetAllEvents()
    {
        return events;
    }

    public Event? GetEventById(int id)
    {
        return events.FirstOrDefault(e => e.Id == id);
    }

    public void AddEvent(Event newEvent)
    {
        if (newEvent.Id == 0)
        {
            newEvent.Id = events.Count > 0 ? events.Max(e => e.Id) + 1 : 1;
        }
        events.Add(newEvent);
    }

    public void UpdateEvent(Event updatedEvent)
    {
        var existingEvent = events.FirstOrDefault(e => e.Id == updatedEvent.Id);
        if (existingEvent != null)
        {
            existingEvent.Title = updatedEvent.Title;
            existingEvent.Date = updatedEvent.Date;
            existingEvent.Location = updatedEvent.Location;
            existingEvent.Description = updatedEvent.Description;
            existingEvent.MaxAttendees = updatedEvent.MaxAttendees;
        }
    }

    public void DeleteEvent(int id)
    {
        var eventToDelete = events.FirstOrDefault(e => e.Id == id);
        if (eventToDelete != null)
        {
            events.Remove(eventToDelete);
        }
    }
}
