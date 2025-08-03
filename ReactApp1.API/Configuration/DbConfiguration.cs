using Microsoft.EntityFrameworkCore;
using ReactApp1.Infrastructure.Persistence;

namespace ReactApp1.API.Configuration
{
    public static class DbConfiguration
    {
        public static void AddDbConfiguration(this IServiceCollection services, IConfiguration configuration,
            IWebHostEnvironment environment)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            if (string.IsNullOrEmpty(connectionString))
            {
                throw new InvalidOperationException("Database connection string is not configured.");
            }

            services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(connectionString);

                if (environment.IsDevelopment())
                {
                    options.EnableSensitiveDataLogging();
                    options.LogTo(Console.WriteLine, LogLevel.Information);
                }
            });
        }
    }
}
