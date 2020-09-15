using System.ComponentModel.DataAnnotations;

namespace Api.Controllers.DTOs.Usuario
{
    public class RegistrarDTO
    {
        [Required]
        public string Nombre { get; set; }

        [Required]
        public string Apellido { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}