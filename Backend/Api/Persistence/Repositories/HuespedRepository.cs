using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Core.Models;
using Api.Core.Repositories;
using Api.Persistence.Config;
using Microsoft.EntityFrameworkCore;

namespace Api.Persistence.Repositories
{
    public class HuespedRepository : BaseRepository, IHuespedRepository
    {
        public HuespedRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Huesped>> ListAsync()
        {
            return await _context.Huespedes.ToListAsync();
        }

        public void Create(Huesped huesped)
        {
            _context.Huespedes.Add(huesped);
        }

        public async Task<Huesped> FindByIdAsync(int id)
        {
            return await _context.Huespedes.FindAsync(id);
        }

        public void Modify(Huesped old, Huesped current)
        {
            _context.Entry(old).CurrentValues.SetValues(current);
        }
    }
}
