using System.ComponentModel.DataAnnotations;

namespace Api.Core.Models
{
    public class Huesped
    {
        public int Id { get; set; }

        [Required, MaxLength(30)]
        public string Nombre { get; set; }
    }
}
