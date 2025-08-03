using Microsoft.EntityFrameworkCore;
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
    public abstract class RepositoryBase<TEntity>(InfrastructureContext context)
        : IRepositoryBase<TEntity> where TEntity : EntityBase
    {
        protected readonly DbSet<TEntity> DbSet = context.Database.Set<TEntity>();

        public async Task<TEntity?> GetByIdAsync(params object[] id)
        {
            return await DbSet.FindAsync(id);
        }

        public async Task AddAsync(TEntity entity)
        {
            entity.MarkAsCreated();
            await DbSet.AddAsync(entity);
        }

        public async Task AddAsync(TEntity entity, CancellationToken cancellationToken)
        {
            entity.MarkAsCreated();
            await DbSet.AddAsync(entity, cancellationToken);
        }

        public async Task AddRangeAsync(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                entity.MarkAsCreated();
            }

            await DbSet.AddRangeAsync(entities);
        }

        public async Task AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken)
        {
            foreach (var entity in entities)
            {
                entity.MarkAsCreated();
            }

            await DbSet.AddRangeAsync(entities, cancellationToken);
        }

        public void Update(TEntity entity)
        {
            entity.MarkAsUpdated();
        }

        public void UpdateRange(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                entity.MarkAsUpdated();
            }
        }

        public async Task DeleteAsync(params object[] id)
        {
            var entity = await DbSet.FindAsync(id);
            if (entity == null)
            {
                throw new KeyNotFoundException($"Entity with ID {id} not found.");
            }

            entity.MarkAsDeleted();
        }

        public void Delete(TEntity entity)
        {
            entity.MarkAsDeleted();
        }

        public void DeleteRange(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                entity.MarkAsDeleted();
            }
        }

        public async Task RemoveAsync(params object[] id)
        {
            var entity = await DbSet.FindAsync(id);
            if(entity == null)
            {
                throw new KeyNotFoundException($"Entity with ID {id} not found.");
            }
            
            DbSet.Remove(entity);
        }

        public void Remove(TEntity entity)
        {
            DbSet.Remove(entity);
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            DbSet.RemoveRange(entities);
        }

        public async Task<int> SaveChangesAsync()
        {
            return await context.Database.SaveChangesAsync();
        }
    }
}
