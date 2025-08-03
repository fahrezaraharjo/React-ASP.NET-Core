using ReactApp1.Domain.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Domain.Entities.Users
{
    public class UserEntity : EntityBase
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public bool IsAllowLogin { get; set; }
        public string RoleName { get; set; }
    }
}
