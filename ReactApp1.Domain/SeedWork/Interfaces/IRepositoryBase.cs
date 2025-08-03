using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Domain.SeedWork.Interfaces
{
    public interface IRepositoryBase<TEntity> where TEntity : EntityBase
    {
        Task<TEntity?> GetByIdAsync(params object[] id);

        Task AddAsync(TEntity entity);

        Task AddAsync(TEntity entity, CancellationToken cancellationToken);

        Task AddRangeAsync(IEnumerable<TEntity> entities);

        Task AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken);

        void Update(TEntity entity);

        void UpdateRange(IEnumerable<TEntity> entities);

        Task DeleteAsync(params object[] id);

        void Delete(TEntity entity);

        void DeleteRange(IEnumerable<TEntity> entities);

        Task RemoveAsync(params object[] id);

        void Remove(TEntity entity);

        void RemoveRange(IEnumerable<TEntity> entities);
        
        Task<int> SaveChangesAsync();
    }
}
