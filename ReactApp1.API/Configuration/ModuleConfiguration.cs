using ReactApp1.API.Configuration.Context;
using ReactApp1.Application.Configuration.Context;
using ReactApp1.Infrastructure.Configuration;
using ReactApp1.Infrastructure.Domain.Samples;

namespace ReactApp1.API.Configuration
{
    public static class ModuleConfiguration
    {
        public static void RegisterModule(this IServiceCollection services)
        {
            CommonModule.Register(services);
            SampleModule.Register(services);

            services.AddSingleton<IUserContext, UserContext>();
        }
    }
}
