using Api.Controllers.DTOs;
using Api.Controllers.DTOs.Habitacion;
using Api.Controllers.DTOs.Usuario;
using AutoMapper;
using Api.Core.Models;

namespace Api.Controllers.Mapping
{
    public class ModelToDTOProfile : Profile
    {
        public ModelToDTOProfile()
        {
            CreateMap<Huesped, HuespedDTO>();
            CreateMap<Habitacion, HabitacionDTO>();
            CreateMap<CamaIndividual, CamaIndividualDTO>();
            CreateMap<CamaMatrimonial, CamaMatrimonialDTO>();
            CreateMap<CamaMarinera, CamaMarineraDTO>();

            CreateMap<Usuario, RegistrarDTO>();
        }
    }
}
