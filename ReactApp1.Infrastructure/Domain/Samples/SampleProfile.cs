using AutoMapper;
using ReactApp1.Application.Domain.Samples.Results;
using ReactApp1.Application.Domain.Samples.Services.Add;
using ReactApp1.Domain.Entities.Samples;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Domain.Samples
{
    public class SampleProfile : Profile
    {
        public SampleProfile()
        {
            CreateMap<SampleEntity, SampleBaseDto>();
            CreateMap<AddSampleCommand, SampleEntity>();
        }
    }
}
