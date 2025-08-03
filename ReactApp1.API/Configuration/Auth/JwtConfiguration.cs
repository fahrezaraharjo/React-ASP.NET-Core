namespace ReactApp1.API.Configuration.Auth
{
    /// <summary>
    /// Configuration class for JWT (JSON Web Token).
    /// Store information related to token settings such as secret, issuer, audience, and expiration time.
    /// </summary>
    public class JwtConfiguration
    {
        /// <summary>
        /// Secret key used to sign the JWT.
        /// Must be kept secure and not shared publicly.
        /// </summary>
        public string Secret { get; set; }

        /// <summary>
        /// The issuer of the JWT.
        /// Typically represents the name of the application or domain that issues the token.
        /// </summary>
        public string Issuer { get; set; }

        /// <summary>
        /// The audience of the JWT.
        /// Typically represents the application or service that will consume the token.
        /// </summary>
        public string Audience { get; set; }

        /// <summary>
        /// Token expiration time in minutes.
        /// Specifies how long the token remains valid before needing renewal.
        /// </summary>
        public int ExpirationInMinutes { get; set; }
    }
}
