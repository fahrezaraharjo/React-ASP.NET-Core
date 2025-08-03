using AutoMapper;
using ReactApp1.Application.SeedWork.Interfaces;
using ReactApp1.Domain.Entities.Samples;
using ReactApp1.Domain.Entities.Samples.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Domain.Samples.Services.Add
{
    internal class AddSampleCommandHandler(IMapper mapper, ISampleRepository repository) : ICommandHandler<AddSampleCommand>
    {
        public async Task Handle(AddSampleCommand request, CancellationToken cancellationToken)
        {
            var entity = mapper.Map<SampleEntity>(request);
            entity.Id = Guid.NewGuid();

            // await repository.AddAsync(entity, cancellationToken);

            // Simulate adding the entity to the repository.
            await Task.Delay(100, cancellationToken);
        }
    }
}
