using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using ReactApp1.API.Configuration;
using ReactApp1.API.Configuration.Auth;

var builder = WebApplication.CreateBuilder(args);

// Configure authentication.
builder.Services.AddAuthConfiguration(builder.Configuration);

// Configure CORS.
builder.Services.AddCorsConfiguration(builder.Configuration);

// Configure Database.
builder.Services.AddDbConfiguration(builder.Configuration, builder.Environment);

// Configure Dependency Injection.
builder.Services.RegisterModule();

// Configure MediatR.
builder.Services.AddMediatRConfiguration();

// Configure general services.
builder.Services.AddAuthorization();
builder.Services.AddAutoMapper(cfg => cfg.AddMaps(AppDomain.CurrentDomain.GetAssemblies()));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddMemoryCache();

builder.Services.AddScoped<AuthService>();
builder.Services.AddHttpContextAccessor();

// Configure Swagger Documentation.
builder.Services.AddSwaggerConfiguration();

var app = builder.Build();

if (builder.Configuration.GetValue<bool>("AllowSwagger"))
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

await app.RunAsync();
