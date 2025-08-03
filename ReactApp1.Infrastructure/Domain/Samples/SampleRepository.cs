using ReactApp1.Domain.Entities.Samples;
using ReactApp1.Domain.Entities.Samples.Interfaces;
using ReactApp1.Infrastructure.Context;
using ReactApp1.Infrastructure.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Domain.Samples
{
    public class SampleRepository(InfrastructureContext context) : RepositoryBase<SampleEntity>(context), ISampleRepository
    {

    }
}
