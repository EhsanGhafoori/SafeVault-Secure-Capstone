using UserManagementAPI.Models;

namespace UserManagementAPI.Services;

public class UserService : IUserService
{
    private readonly List<User> _users = new List<User>
    {
        new User
        {
            Id = 1,
            FirstName = "John",
            LastName = "Doe",
            Email = "john.doe@example.com",
            Phone = "+1234567890",
            Age = 30,
            CreatedAt = DateTime.UtcNow.AddDays(-30)
        },
        new User
        {
            Id = 2,
            FirstName = "Jane",
            LastName = "Smith",
            Email = "jane.smith@example.com",
            Phone = "+1987654321",
            Age = 25,
            CreatedAt = DateTime.UtcNow.AddDays(-20)
        },
        new User
        {
            Id = 3,
            FirstName = "Bob",
            LastName = "Johnson",
            Email = "bob.johnson@example.com",
            Phone = "+1555555555",
            Age = 35,
            CreatedAt = DateTime.UtcNow.AddDays(-10)
        }
    };

    public IEnumerable<User> GetAllUsers()
    {
        return _users;
    }

    public User? GetUserById(int id)
    {
        return _users.FirstOrDefault(u => u.Id == id);
    }

    public User CreateUser(User user)
    {
        if (EmailExists(user.Email))
        {
            throw new InvalidOperationException($"User with email {user.Email} already exists.");
        }

        user.Id = _users.Count > 0 ? _users.Max(u => u.Id) + 1 : 1;
        user.CreatedAt = DateTime.UtcNow;
        _users.Add(user);
        return user;
    }

    public User? UpdateUser(int id, User user)
    {
        var existingUser = GetUserById(id);
        if (existingUser == null)
        {
            return null;
        }

        if (EmailExists(user.Email, id))
        {
            throw new InvalidOperationException($"User with email {user.Email} already exists.");
        }

        existingUser.FirstName = user.FirstName;
        existingUser.LastName = user.LastName;
        existingUser.Email = user.Email;
        existingUser.Phone = user.Phone;
        existingUser.Age = user.Age;
        existingUser.UpdatedAt = DateTime.UtcNow;

        return existingUser;
    }

    public bool DeleteUser(int id)
    {
        var user = GetUserById(id);
        if (user == null)
        {
            return false;
        }

        _users.Remove(user);
        return true;
    }

    public bool EmailExists(string email, int? excludeId = null)
    {
        return _users.Any(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase) 
            && (excludeId == null || u.Id != excludeId));
    }
}
