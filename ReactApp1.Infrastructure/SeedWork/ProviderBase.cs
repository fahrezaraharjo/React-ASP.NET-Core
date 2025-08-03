using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using ReactApp1.Application.Configuration.Context;
using ReactApp1.Domain.SeedWork;
using ReactApp1.Domain.SeedWork.Interfaces;
using ReactApp1.Infrastructure.Context;
using ReactApp1.Infrastructure.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.SeedWork
{
    public abstract class ProviderBase<TEntity>(InfrastructureContext context)
        : IProviderBase where TEntity : EntityBase
    {
        protected readonly DbSet<TEntity> DbSet = context.Database.Set<TEntity>();

        public async Task<IEnumerable<TDto>> GetAllAsync<TDto>()
        {
            return await DbSet
                .AsNoTracking()
                .ProjectTo<TDto>(context.Mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public async Task<TDto> GetByIdAsync<TDto>(params object[] id)
        {
            // It's impossible to use ProjectTo from FindAsync, because it needs Where clause (which requires concrete
            // ID properties inside the entity), so use this temporary "hack".
            var entity = await DbSet.FindAsync(id);

            var result = context.Mapper.Map<TDto>(entity);
            return result;
        }

        public async Task<DateTime?> GetLastUpdateAsync()
        {
            return await DbSet
                .AsNoTracking()
                .MaxAsync(e => (e.UpdatedAt ?? e.CreatedAt));
        }
    }
}
