using System.ComponentModel.DataAnnotations;

namespace Api.Controllers.DTOs.Usuario
{
    public class AutenticarDTO
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}