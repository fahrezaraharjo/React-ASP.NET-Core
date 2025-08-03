using ReactApp1.Application.SeedWork.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Application.Domain.Samples.Services.Add
{
    public class AddSampleCommand : ICommand
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
