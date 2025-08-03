using MediatR;
using ReactApp1.Domain.SeedWork.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.SeedWork.Interfaces
{
    public interface IQueryHandler<in TQuery, TResult> : IRequestHandler<TQuery, TResult> 
        where TQuery : IQuery<TResult>
    {

    }
}
