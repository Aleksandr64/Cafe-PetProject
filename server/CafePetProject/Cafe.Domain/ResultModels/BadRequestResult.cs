namespace Cafe.Domain.ResultModels;

public class BadRequestResult<T> : Result<T>
{
    private readonly string _error;

    public BadRequestResult(string error)
    {
        _error = error;
    }

    public override ResultTypes ResultType => ResultTypes.Invalid;

    public override List<string> Errors => new List<string> { _error ?? "The entity format is wrong" };

    public override T Data => default!;
}