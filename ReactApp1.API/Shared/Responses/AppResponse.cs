namespace ReactApp1.API.Shared.Responses
{
    public static class AppResponse
    {
        /// <summary>
        /// Creates a response with a status code of 200 (OK).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase<TData> Ok<TData>(TData data, string message = "Success", int status = 200)
            => new(status, message, data);

        /// <summary>
        /// Returns a response with a status code of 200 (OK).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase<TData, TMeta> Ok<TData, TMeta>(TData data, TMeta? metadata,
            string message = "Success", int status = 200)
            => new(status, message, data, metadata);

        /// <summary>
        /// Creates a response with a status code of 201 (Created).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase Created(string message = "Created", int status = 201)
            => new(status, message);

        /// <summary>
        /// Creates a response with a status code of 201 (Created).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase<TData, TMeta> Created<TData, TMeta>(TData? data, TMeta? metadata,
            string message = "Created", int status = 201)
            => new(status, message, data, metadata);

        /// <summary>
        /// Creates a response with a status code of 204 (No content).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase NoContent(string message = "No content", int status = 204)
            => new(status, message);

        /// <summary>
        /// Creates a response with a status code of 204 (No content).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase<object, TMeta> NoContent<TMeta>(TMeta? metadata, string message = "No content",
            int status = 204)
            => new(status, message, null, metadata);

        /// <summary>
        /// Creates a response with a status code of 400 (Bad request).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase BadRequest(string message = "Bad request", int status = 400)
            => new(status, message);

        /// <summary>
        /// Creates a response with a status code of 400 (Bad request).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase<TData> BadRequest<TData>(TData? data, string message = "Bad request",
            int status = 400)
            => new(status, message, data);

        /// <summary>
        /// Creates a response with a status code of 400 (Bad request).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase<TData, TMeta> BadRequest<TData, TMeta>(TData? data, TMeta? metadata,
            string message = "Bad request", int status = 400)
            => new(status, message, data, metadata);

        /// <summary>
        /// Creates a response with a status code of 404 (Not found).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase NotFound(string message = "Not found", int status = 404)
            => new(status, message);

        /// <summary>
        /// Creates a response with a status code of 404 (Not found).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase<TData> NotFound<TData>(TData? data, string message = "Not found", int status = 404)
            => new(status, message, data);

        /// <summary>
        /// Creates a response with a status code of 400 (Not found).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData, TMeta}"/>.</returns>
        public static ResponseBase<TData, TMeta> NotFound<TData, TMeta>(TData? data, TMeta? metadata,
            string message = "Not found", int status = 404)
            => new(status, message, data, metadata);

        /// <summary>
        /// Creates a response with a status code of 500 (Internal server error).
        /// </summary>
        /// <returns>An instance of <see cref="ResponseBase{TData}"/>.</returns>
        public static ResponseBase Error(string message = "Internal server error", int status = 500)
            => new(status, message);
    }
}
