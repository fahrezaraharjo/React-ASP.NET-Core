using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReactApp1.API.Configuration.Auth;
using ReactApp1.API.Shared.Responses;

namespace ReactApp1.API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController(AuthService service) : ControllerBase
    {
        /// <summary>
        /// Send Authname and password to get validation login and JWT token.
        /// </summary>
        /// <returns></returns>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] AuthRequest request)
        {
            try
            {
                var token = service.GenerateJwtToken();
                var response = AppResponse.Ok(token);

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, AppResponse.Error(ex.Message));
            }
        }
    }
}
