using AutoMapper;
using ReactApp1.Application.Configuration.Caching;
using ReactApp1.Application.Configuration.Context;
using ReactApp1.Infrastructure.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Context
{
    public class InfrastructureContext(IMapper mapper, IAppMemoryCache cache, IUserContext user, AppDbContext database)
    {
        public IMapper Mapper { get; } = mapper;
        public IAppMemoryCache Cache { get; } = cache;
        public IUserContext User { get; } = user;

        public AppDbContext Database { get; } = database;
    }
}
