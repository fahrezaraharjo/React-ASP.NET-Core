using Microsoft.Extensions.DependencyInjection;
using ReactApp1.Application.Domain.Samples;
using ReactApp1.Application.Domain.Samples.Interfaces;
using ReactApp1.Domain.Entities.Samples.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Domain.Samples
{
    public static class SampleModule
    {
        public static void Register(IServiceCollection services)
        {
            // Register the sample service and its dependencies.
            services.AddScoped<ISampleProvider, SampleProvider>();
            services.AddScoped<ISampleRepository, SampleRepository>();
        }
    }
}
