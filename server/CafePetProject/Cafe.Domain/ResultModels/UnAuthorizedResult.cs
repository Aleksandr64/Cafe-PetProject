namespace Cafe.Domain.ResultModels;

public class UnAuthorizedResult<T> : Result<T>
{
    private readonly string _error;

    public UnAuthorizedResult(string  error)
    {
        _error = error;
    }
    public override ResultTypes ResultType => ResultTypes.UnAuthorized;
    public override List<string> Errors => new List<string>() { _error ?? "Error entity was empty" };
    public override T Data => default!;
}