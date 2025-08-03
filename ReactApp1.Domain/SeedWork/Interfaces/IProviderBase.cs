using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Domain.SeedWork.Interfaces
{
    public interface IProviderBase
    {
        Task<IEnumerable<TDto>> GetAllAsync<TDto>();

        Task<TDto> GetByIdAsync<TDto>(params object[] id);

        Task<DateTime?> GetLastUpdateAsync();
    }
}
