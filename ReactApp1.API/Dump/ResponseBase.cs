namespace ReactApp1.Server.Dump
{
    /// <summary>
    /// Represent the base response.
    /// </summary>
    public record ResponseBase(int Status, string? Message);

    /// <summary>
    /// Represent the base response with data.
    /// </summary>
    public record ResponseBase<TData>(int Status, string? Message, TData? Data);

    /// <summary>
    /// Represent the base response with main data and metadata.
    /// </summary>
    public record ResponseBase<TData, TMeta>(int Status, string? Message, TData? Data, TMeta? Meta);
}
