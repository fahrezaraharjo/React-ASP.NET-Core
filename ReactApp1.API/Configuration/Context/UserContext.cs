using ReactApp1.Application.Configuration.Context;
using System.Security.Claims;

namespace ReactApp1.API.Configuration.Context
{
    public class UserContext(IHttpContextAccessor httpContextAccessor) : IUserContext
    {
        public string? UserName => GetUserName();
        public string? UserRole => GetUserRole();

        public string? GetUserName()
        {
            return httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.Name)?.Value;
        }

        public string? GetUserRole()
        {
            return httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.Role)?.Value;
        }
    }
}
