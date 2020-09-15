namespace Api.Controllers.DTOs.Habitacion
{
    public class CamaMarineraDTO
    {
        public int Id { get; set; }

        [YKNStringLength(Maximo = 30)]
        public string NombreAbajo { get; set; }

        [YKNStringLength(Maximo = 30)]
        public string NombreArriba { get; set; }
    }
}
