using Microsoft.EntityFrameworkCore;
using ReactApp1.Domain.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Persistence
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
            ApplySoftDeleteQueryFilters(modelBuilder);
        }

        // Apply soft delete query filters to all entities inheriting from EntityBase.
        private static void ApplySoftDeleteQueryFilters(ModelBuilder modelBuilder)
        {
            var entityTypes = modelBuilder.Model.GetEntityTypes()
                .Where(entityType => typeof(EntityBase).IsAssignableFrom(entityType.ClrType))
                .Select(entityType => entityType.ClrType);

            foreach (var clrType in entityTypes)
            {
                var parameter = Expression.Parameter(clrType, "e");
                var property = Expression.Property(parameter, nameof(EntityBase.IsDeleted));

                var notExpression = Expression.Not(property);
                var lambda = Expression.Lambda(notExpression, parameter);

                modelBuilder.Entity(clrType).HasQueryFilter(lambda);
            }
        }
    }
}
