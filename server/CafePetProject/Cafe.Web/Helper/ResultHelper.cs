using Cafe.Domain.ResultModels;
using Microsoft.AspNetCore.Mvc;

namespace Cafe.Web.Helper;

public static class ResultHelper
{
    public static ActionResult GetResponse<T>(this ControllerBase controller, Result<T> result)
    {
        return result.ResultType switch
        {
            ResultTypes.Success => result.Data == null ? controller.NoContent() : controller.Ok(result.Data),
            ResultTypes.Invalid => controller.BadRequest(result.Errors),
            ResultTypes.NotFound => controller.NotFound(result.Errors),
            _ => controller.BadRequest()
        };
    }
}