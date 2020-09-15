using System.ComponentModel.DataAnnotations;

namespace Api.Core.Models
{
    public class CamaMarinera
    {
        public int Id { get; set; }

        [Required, MaxLength(30)]
        public string NombreAbajo { get; set; }

        [Required, MaxLength(30)]
        public string NombreArriba { get; set; }

        public int HabitacionId { get; set; }
        public Habitacion Habitacion { get; set; }
    }
}
