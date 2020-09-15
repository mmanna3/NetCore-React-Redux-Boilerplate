using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Controllers.DTOs.Habitacion;
using Api.Core.Models;

namespace Api.Core.Services.Interfaces
{
    public interface IHuespedService
    {
        Task<IEnumerable<Huesped>> ListAsync();
        Task<int> CreateAsync(Huesped huesped);
    }
}
