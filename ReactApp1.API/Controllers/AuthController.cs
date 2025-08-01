using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Dump;
using ReactApp1.Server.Dump.Auth;

namespace ReactApp1.Server.Controllers
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
