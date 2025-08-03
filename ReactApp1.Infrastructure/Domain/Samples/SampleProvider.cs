using ReactApp1.Application.Domain.Samples.Interfaces;
using ReactApp1.Domain.Entities.Samples;
using ReactApp1.Infrastructure.Context;
using ReactApp1.Infrastructure.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Domain.Samples
{
    public class SampleProvider(InfrastructureContext context) : ProviderBase<SampleEntity>(context), ISampleProvider
    {

    }
}
