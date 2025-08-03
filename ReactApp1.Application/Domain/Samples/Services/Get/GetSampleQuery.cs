using ReactApp1.Application.Domain.Samples.Results;
using ReactApp1.Application.SeedWork.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Domain.Samples.Services.Get
{
    public class GetSampleQuery(Guid id) : IQuery<SampleBaseDto>
    {
        public Guid Id { get; set; } = id;
    }
}
