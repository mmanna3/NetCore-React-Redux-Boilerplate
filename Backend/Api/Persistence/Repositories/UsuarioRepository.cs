using System.Threading.Tasks;
using Api.Core.Models;
using Api.Core.Repositories;
using Api.Persistence.Config;
using Microsoft.EntityFrameworkCore;

namespace Api.Persistence.Repositories
{
    public class UsuarioRepository : BaseRepository, IUsuarioRepository
    {
        public UsuarioRepository(AppDbContext context) : base(context)
        {
        }

        public async Task AddAsync(Usuario usuario)
        {
            await _context.Usuarios.AddAsync(usuario);
        }

        public async Task<Usuario> FindByUsernameAsync(string username)
        {
            return await _context.Usuarios.SingleOrDefaultAsync(x => x.Username == username);
        }

        public async Task<Usuario> GetById(int id)
        {
            return await _context.Usuarios.SingleOrDefaultAsync(x => x.Id == id);
        }
    }
}
