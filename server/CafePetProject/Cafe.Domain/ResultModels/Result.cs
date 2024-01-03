namespace Cafe.Domain.ResultModels;

public abstract class Result<T>
{
    public abstract ResultTypes ResultType { get; }
    public abstract List<string> Errors { get; }
    public abstract T Data { get; }
}