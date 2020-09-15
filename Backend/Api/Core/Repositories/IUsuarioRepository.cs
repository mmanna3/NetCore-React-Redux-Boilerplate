using System.Threading.Tasks;
using Api.Core.Models;

namespace Api.Core.Repositories
{
    public interface IUsuarioRepository
    {
        Task AddAsync(Usuario usuario);
        Task<Usuario> FindByUsernameAsync(string username);
        Task<Usuario> GetById(int id);
    }
}
