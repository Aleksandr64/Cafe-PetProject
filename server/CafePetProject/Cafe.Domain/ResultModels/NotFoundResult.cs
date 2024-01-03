namespace Cafe.Domain.ResultModels;

public class NotFoundResult<T> : Result<T>
{
    private readonly string _error;
    public NotFoundResult(string error)
    {
        _error = error;
    }

    public override ResultTypes ResultType => ResultTypes.NotFound;

    public override List<string> Errors => new List<string>() { _error ?? "Error entity was empty" };

    public override T Data => default!;
}