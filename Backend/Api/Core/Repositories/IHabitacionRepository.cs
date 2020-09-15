using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Core.Models;

namespace Api.Core.Repositories
{
    public interface IHabitacionRepository
    {
        Task<IEnumerable<Habitacion>> ListAsync();
        void Create(Habitacion habitacion);
        Task<Habitacion> FindByIdAsync(int id);
        void Modify(Habitacion old, Habitacion current);
    }
}
