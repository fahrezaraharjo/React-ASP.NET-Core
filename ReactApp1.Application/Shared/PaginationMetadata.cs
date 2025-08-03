using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Shared
{
    public record PaginationMetadata(int PageNumber, int PageSize, int From, int To, int Total, int LastPage);
}
