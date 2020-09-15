using System.ComponentModel.DataAnnotations;

namespace Api.Core.Models
{
    public class CamaIndividual
    {
        public int Id { get; set; }

        [Required, MaxLength(30)]
        public string Nombre { get; set; }

        public int HabitacionId { get; set; }
        public Habitacion Habitacion { get; set; }
    }
}
