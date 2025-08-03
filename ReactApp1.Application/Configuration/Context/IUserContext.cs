using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Configuration.Context
{
    public interface IUserContext
    {
        string? UserName { get; }
        string? UserRole { get; }

        string? GetUserName();
        string? GetUserRole();
    }
}
