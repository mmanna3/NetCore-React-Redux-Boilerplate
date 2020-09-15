using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Core.Models;

namespace Api.Core.Repositories
{
    public interface IHuespedRepository
    {
        Task<IEnumerable<Huesped>> ListAsync();
        void Create(Huesped habitacion);
        Task<Huesped> FindByIdAsync(int id);
        void Modify(Huesped old, Huesped current);
    }
}
