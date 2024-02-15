using FluentValidation.Results;

namespace Cafe.Domain.ResultModels;

public class BadRequestResult<T> : Result<T>
{
    private readonly List<string> _error = new List<string>();
    public BadRequestResult(string error)
    {
        _error.Add(error);
    }
    public BadRequestResult(List<ValidationFailure> error)
    {
        _error = error.Select(failure => failure.ErrorMessage).ToList();
    }

    public override ResultTypes ResultType => ResultTypes.Invalid;

    public override List<string> Errors =>  _error;

    public override T Data => default!;
}