using UserManagementAPI.Models;

namespace UserManagementAPI.Services;

public interface IUserService
{
    IEnumerable<User> GetAllUsers();
    User? GetUserById(int id);
    User CreateUser(User user);
    User? UpdateUser(int id, User user);
    bool DeleteUser(int id);
    bool EmailExists(string email, int? excludeId = null);
}
