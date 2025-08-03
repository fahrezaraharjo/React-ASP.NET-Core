using Microsoft.Extensions.DependencyInjection;
using ReactApp1.Application.Configuration.Caching;
using ReactApp1.Application.Configuration.Emails;
using ReactApp1.Application.Configuration.Emails.Interfaces;
using ReactApp1.Infrastructure.Caching;
using ReactApp1.Infrastructure.Context;
using ReactApp1.Infrastructure.Emails;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Configuration
{
    public static class CommonModule
    {
        public static void Register(IServiceCollection services)
        {
            services.AddSingleton<IAppMemoryCache, AppMemoryCache>();
            services.AddScoped<IEmailService, EmailService>();

            services.AddScoped<InfrastructureContext>();
            services.AddScoped<EmailSettings>();
        }
    }
}
