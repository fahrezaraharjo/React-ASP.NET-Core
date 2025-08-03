namespace ReactApp1.API.Configuration
{
    public static class CorsConfiguration
    {
        public static void AddCorsConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            var allowedOrigins = configuration.GetSection("Cors:Origins").Get<string[]>();
            var allowedMethods = configuration.GetSection("Cors:Methods").Get<string[]>();
            var allowedHeaders = configuration.GetSection("Cors:Headers").Get<string[]>();

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                {
                    if (allowedOrigins != null && allowedOrigins.Length > 0)
                    {
                        policy.WithOrigins(allowedOrigins).AllowCredentials();
                    }
                    else
                    {
                        // Disabled for security reasons.
                        // policy.AllowAnyOrigin().AllowCredentials();
                    }

                    if (allowedMethods != null && allowedMethods.Length > 0)
                    {
                        policy.WithMethods(allowedMethods);
                    }
                    else
                    {
                        policy.AllowAnyMethod();
                    }

                    if (allowedHeaders != null && allowedHeaders.Length > 0)
                    {
                        policy.WithHeaders(allowedHeaders);
                    }
                    else
                    {
                        policy.AllowAnyHeader();
                    }
                });
            });
        }
    }
}
