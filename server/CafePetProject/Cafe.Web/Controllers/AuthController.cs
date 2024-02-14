using Cafe.Application.DTOs.UserDTOs.Request;
using Cafe.Application.Services.Inteface;
using Cafe.Web.Helper;
using Microsoft.AspNetCore.Mvc;

namespace Cafe.Web.Controllers;

public class AuthController : BaseApiController
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost]
    public async Task<IActionResult> Login([FromBody] UserLoginRequest userLogin)
    {
        var result = await _authService.LoginUser(userLogin);
        return this.GetResponse(result);
    }
    
    [HttpPost]
    public async Task<IActionResult> RegisterUser([FromBody] RegisterUserRequest user)
    {
        var result = await _authService.RegisterUser(user);
        return this.GetResponse(result);
    }

    [HttpPost]
    public async Task<IActionResult> GetNewAccessToken([FromBody] TokenRequest tokenRequest)
    {
        var result = await _authService.GetNewAccessToken(tokenRequest);
        return this.GetResponse(result);
    }

    [HttpPost]
    public async Task<IActionResult> Logout(string accessToken)
    {
        var result = await _authService.Logout(accessToken);
        return this.GetResponse(result);
    }
}