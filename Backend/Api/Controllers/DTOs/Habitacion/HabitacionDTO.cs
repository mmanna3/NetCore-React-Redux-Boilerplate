using System;
using System.Collections.Generic;
using System.Linq;

namespace Api.Controllers.DTOs.Habitacion
{
    public class HabitacionDTO
    {
        public int Id { get; set; }

        [YKNRequired, YKNStringLength(Maximo = 30)]
        public string Nombre { get; set; }

        public List<CamaIndividualDTO> CamasIndividuales { get; set; }

        public List<CamaMarineraDTO> CamasMarineras { get; set; }

        public List<CamaMatrimonialDTO> CamasMatrimoniales { get; set; }
    }
}
