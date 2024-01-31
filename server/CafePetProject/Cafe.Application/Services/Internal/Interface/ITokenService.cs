using System.Security.Claims;

namespace Cafe.Application.Services.Internal.Interface;

public interface ITokenService
{
    public string GenerateAccessToken(IEnumerable<Claim> authClaims);
    public string GenerateRefreshToken();
    public ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
    public bool IsExpired(string accessToken);
    public string GetUsernameFromToken(ClaimsPrincipal principal);
    public string GetRoleFromToken(ClaimsPrincipal principal);
}