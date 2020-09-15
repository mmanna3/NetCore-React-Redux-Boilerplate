using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Api.Core.Models;
using Api.Core.Repositories;
using Api.Persistence.Config;
using Microsoft.EntityFrameworkCore;

namespace Api.Persistence.Repositories
{
    public class HabitacionRepository : BaseRepository, IHabitacionRepository
    {
        public HabitacionRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Habitacion>> ListAsync()
        {
            return await _context.Habitaciones
                                    .Include(x => x.CamasIndividuales)
                                    .Include(x => x.CamasMarineras)
                                    .Include(x => x.CamasMatrimoniales)
                                    .ToListAsync();
        }

        public void Create(Habitacion habitacion)
        {
            _context.Habitaciones.Add(habitacion);
        }

        public async Task<Habitacion> FindByIdAsync(int id)
        {
            return await _context.Habitaciones.FindAsync(id);
        }

        public void Modify(Habitacion old, Habitacion current)
        {
            _context.Entry(old).CurrentValues.SetValues(current);
        }
    }
}
