using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Shared.Results
{
    public record PaginatedResult<T>(ICollection<T> Items, int Count);
}
