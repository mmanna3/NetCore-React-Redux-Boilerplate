using System.ComponentModel.DataAnnotations;

namespace Api.Core.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        
        [Required, MaxLength(30)]
        public string Nombre { get; set; }

        [Required, MaxLength(30)]
        public string Apellido { get; set; }

        [Required, MaxLength(30)]
        public string Username { get; set; }

        [Required]
        public byte[] PasswordHash { get; set; }

        [Required]
        public byte[] PasswordSalt { get; set; }
    }
}