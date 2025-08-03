using Microsoft.IdentityModel.Tokens;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ReactApp1.API.Configuration.Auth
{
    public class AuthService(IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
    {
        public JwtConfiguration GetJwtConfiguration()
        {
            var jwtConfig = configuration.GetSection("JwtConfig").Get<JwtConfiguration>()
                ?? throw new InvalidOperationException("JWT configuration is not set.");

            return jwtConfig;
        }

        public string GenerateJwtToken()
        {
            var jwtConfig = GetJwtConfiguration();

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfig.Secret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddMinutes(jwtConfig.ExpirationInMinutes);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: jwtConfig.Issuer,
                audience: jwtConfig.Audience,
                claims: claims,
                expires: expiration,
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
