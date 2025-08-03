using ReactApp1.Application.Domain.Samples.Interfaces;
using ReactApp1.Application.Domain.Samples.Results;
using ReactApp1.Application.SeedWork.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Domain.Samples.Services.Get
{
    public class GetSampleQueryHandler(ISampleProvider provider) : IQueryHandler<GetSampleQuery, SampleBaseDto>
    {
        public async Task<SampleBaseDto> Handle(GetSampleQuery request, CancellationToken cancellationToken)
        {
            // return await provider.GetByIdAsync<SampleBaseDto>(request.Id);

            // Simulate an asynchronous operation to retrieve a sample by ID.
            // For demonstration purposes, returning a dummy SampleBaseDto.
            await Task.Delay(100, cancellationToken); // Simulating async work.
            return new SampleBaseDto
            {
                Id = request.Id,
                Name = "Sample Name",
                Description = "Sample Description"
            };
        }
    }
}
