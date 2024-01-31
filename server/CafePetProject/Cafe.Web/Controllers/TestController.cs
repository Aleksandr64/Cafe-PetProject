using Cafe.Web.Attribute;
using Microsoft.AspNetCore.Mvc;

namespace Cafe.Web.Controllers;

public class TestController : BaseApiController
{
    [HttpGet]
    public IActionResult FirstTestEndPoint()
    {
        return Ok("End point work!");
    }

    [HttpGet]
    [AuthorizationRole]
    public IActionResult TestAuthAttribute(string? userName)
    {
        return Ok($"User: {userName}  Authorize!");
    }
}