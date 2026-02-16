using Microsoft.AspNetCore.Mvc;
using UserManagementAPI.Models;
using UserManagementAPI.Services;
using System.ComponentModel.DataAnnotations;

namespace UserManagementAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly ILogger<UsersController> _logger;

    public UsersController(IUserService userService, ILogger<UsersController> logger)
    {
        _userService = userService;
        _logger = logger;
    }

    /// <summary>
    /// Get all users
    /// </summary>
    /// <returns>List of all users</returns>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult<IEnumerable<User>> GetAllUsers()
    {
        _logger.LogInformation("Getting all users");
        var users = _userService.GetAllUsers();
        return Ok(users);
    }

    /// <summary>
    /// Get user by ID
    /// </summary>
    /// <param name="id">User ID</param>
    /// <returns>User details</returns>
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<User> GetUserById(int id)
    {
        _logger.LogInformation("Getting user with ID: {UserId}", id);
        var user = _userService.GetUserById(id);
        
        if (user == null)
        {
            _logger.LogWarning("User with ID {UserId} not found", id);
            return NotFound(new { message = $"User with ID {id} not found." });
        }

        return Ok(user);
    }

    /// <summary>
    /// Create a new user
    /// </summary>
    /// <param name="user">User data</param>
    /// <returns>Created user</returns>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status409Conflict)]
    public ActionResult<User> CreateUser([FromBody] User user)
    {
        _logger.LogInformation("Creating new user with email: {Email}", user.Email);

        // Validate model
        if (!ModelState.IsValid)
        {
            _logger.LogWarning("Invalid user data provided");
            return BadRequest(ModelState);
        }

        try
        {
            var createdUser = _userService.CreateUser(user);
            _logger.LogInformation("User created successfully with ID: {UserId}", createdUser.Id);
            return CreatedAtAction(nameof(GetUserById), new { id = createdUser.Id }, createdUser);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning("Failed to create user: {Error}", ex.Message);
            return Conflict(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Update an existing user
    /// </summary>
    /// <param name="id">User ID</param>
    /// <param name="user">Updated user data</param>
    /// <returns>Updated user</returns>
    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status409Conflict)]
    public ActionResult<User> UpdateUser(int id, [FromBody] User user)
    {
        _logger.LogInformation("Updating user with ID: {UserId}", id);

        // Validate model
        if (!ModelState.IsValid)
        {
            _logger.LogWarning("Invalid user data provided for update");
            return BadRequest(ModelState);
        }

        try
        {
            var updatedUser = _userService.UpdateUser(id, user);
            
            if (updatedUser == null)
            {
                _logger.LogWarning("User with ID {UserId} not found for update", id);
                return NotFound(new { message = $"User with ID {id} not found." });
            }

            _logger.LogInformation("User with ID {UserId} updated successfully", id);
            return Ok(updatedUser);
        }
        catch (InvalidOperationException ex)
        {
            _logger.LogWarning("Failed to update user: {Error}", ex.Message);
            return Conflict(new { message = ex.Message });
        }
    }

    /// <summary>
    /// Delete a user
    /// </summary>
    /// <param name="id">User ID</param>
    /// <returns>No content</returns>
    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult DeleteUser(int id)
    {
        _logger.LogInformation("Deleting user with ID: {UserId}", id);
        
        var deleted = _userService.DeleteUser(id);
        
        if (!deleted)
        {
            _logger.LogWarning("User with ID {UserId} not found for deletion", id);
            return NotFound(new { message = $"User with ID {id} not found." });
        }

        _logger.LogInformation("User with ID {UserId} deleted successfully", id);
        return NoContent();
    }
}
