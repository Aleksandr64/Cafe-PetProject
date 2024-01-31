using Cafe.Application.Services.Internal.Interface;
using Cafe.Domain;

namespace Cafe.Web.Middleware;

public class AuthorizationMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ITokenService _tokenService;

    public AuthorizationMiddleware(RequestDelegate next, ITokenService tokenService)
    {
        _next = next;
        _tokenService = tokenService;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.Request.Headers.TryGetValue("Authorization", out var authHeaderValue))
        {
            var token = authHeaderValue.ToString().Replace("Bearer ", "");

            if (!string.IsNullOrEmpty(token))
            {
                var isExpiredToken = _tokenService.IsExpired(token);

                if (!isExpiredToken)
                {
                    var principal = _tokenService.GetPrincipalFromExpiredToken(token);

                    var userName = _tokenService.GetUsernameFromToken(principal);
                    var role = _tokenService.GetRoleFromToken(principal);

                    if (!string.IsNullOrEmpty(userName) && !string.IsNullOrEmpty(role))
                    {
                        context.Items[HttpContextItems.USERNAME_ITEM] = userName;
                        context.Items[HttpContextItems.ROLES_ITEM] = role;
                    }
                }
            }
        }
        await _next(context);
    }
}