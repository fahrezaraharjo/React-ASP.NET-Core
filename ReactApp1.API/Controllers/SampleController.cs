using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReactApp1.API.Shared.Responses;
using ReactApp1.Application.Domain.Samples.Services.Add;
using ReactApp1.Application.Domain.Samples.Services.Get;

namespace ReactApp1.API.Controllers
{
    [ApiController]
    [Route("api/sample")]
    [Authorize]
    public class SampleController(IMediator mediator) : ControllerBase
    {
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSampleById(Guid id)
        {
            var request = new GetSampleQuery(id);

            var result = await mediator.Send(request);
            if (result == null)
            {
                return NotFound(AppResponse.NotFound());
            }

            return Ok(AppResponse.Ok(result));
        }

        [HttpPost]
        public async Task<IActionResult> AddSample([FromBody] AddSampleCommand request)
        {
            await mediator.Send(request);

            var response = AppResponse.Created();
            return Created(string.Empty, response);
        }
    }
}
