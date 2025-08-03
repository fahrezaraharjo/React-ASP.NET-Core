using ReactApp1.Application.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Helpers
{
    public static class PaginationHelper
    {
        /// <summary>
        /// Get metadata for the paginated response.
        /// </summary>
        /// <param name="pageNumber">Page number.</param>
        /// <param name="pageSize">Page size.</param>
        /// <param name="totalCount">Total data retrieved.</param>
        /// <returns>Pagination metadata.</returns>
        public static PaginationMetadata CalculateMetadata(int totalCount, int pageNumber, int pageSize)
        {
            int skip = (pageNumber - 1) * pageSize;
            int from = skip + 1;
            int to = Math.Min(skip + pageSize, totalCount);
            int lastPage = (int)Math.Ceiling(totalCount / (double)pageSize);

            return new PaginationMetadata(pageNumber, pageSize, from, to, totalCount, lastPage);
        }
    }
}
