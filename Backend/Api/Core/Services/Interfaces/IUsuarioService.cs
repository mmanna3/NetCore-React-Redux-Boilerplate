using System.Threading.Tasks;
using Api.Core.Models;

namespace Api.Core.Services.Interfaces
{
    public interface IUsuarioService
    {
        Task<Usuario> Autenticar(string username, string password);
        Task<Usuario> AddAsync(Usuario usuario, string password);
        Task<Usuario> GetById(int id);
        string ObtenerToken(int usuarioId);
    }
}
