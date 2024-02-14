namespace Cafe.Application.DTOs.UserDTOs.Responce;

public class TokenResponse
{
    public string AccessToken { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
}