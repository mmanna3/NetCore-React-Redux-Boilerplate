namespace Api.Controllers.DTOs
{
    public class HuespedDTO
    {
        public int Id { get; set; }

        [YKNRequired, YKNStringLength(Maximo = 30)]
        public string Nombre { get; set; }
    }
}
