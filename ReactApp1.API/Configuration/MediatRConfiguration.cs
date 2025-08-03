using ReactApp1.Application.Configuration;

namespace ReactApp1.API.Configuration
{
    public static class MediatRConfiguration
    {
        public static void AddMediatRConfiguration(this IServiceCollection services)
        {
            services.AddMediatR(cfg =>
            {
                cfg.RegisterServicesFromAssembly(typeof(ApplicationLayerMarker).Assembly);
            });
        }
    }
}
