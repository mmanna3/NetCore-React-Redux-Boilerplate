using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Core.Models;
using Api.Core.Repositories;
using Api.Core.Services.Interfaces;

namespace Api.Core.Services
{
    public class HabitacionService : IHabitacionService
    {
        private readonly IHabitacionRepository _habitacionRepository;
        private readonly IUnitOfWork _unitOfWork;

        public HabitacionService(IHabitacionRepository habitacionRepository, IUnitOfWork unitOfWork)
        {
            _habitacionRepository = habitacionRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Habitacion>> ListarAsync()
        {
            return await _habitacionRepository.ListAsync();
        }

        public async Task<int> CrearAsync(Habitacion habitacion)
        {
            if (HayCamasSinNombre(habitacion))
                throw new AppException("Todas las camas deben tener Identificador");

            if (HayCamasConIdentificadorRepetido(habitacion))
                throw new AppException("No puede haber camas con el mismo Identificador");

            _habitacionRepository.Create(habitacion);
            await _unitOfWork.CompleteAsync();
            return habitacion.Id;
        }

        public async Task ModificarAsync(int id, Habitacion habitacion)
        {
            var habitacionAModificar = await _habitacionRepository.FindByIdAsync(id);

            if (habitacionAModificar == null)
                throw new AppException($"No se encontró la habitación de id:{id}");

            habitacion.Id = habitacionAModificar.Id;
            _habitacionRepository.Modify(habitacionAModificar, habitacion);
            
            await _unitOfWork.CompleteAsync();
        }

        private static bool HayCamasSinNombre(Habitacion habitacion)
        {
            return habitacion.CamasIndividuales != null && habitacion.CamasIndividuales.Exists(x => string.IsNullOrEmpty(x.Nombre)) ||
                   habitacion.CamasMatrimoniales != null && habitacion.CamasMatrimoniales.Exists(x => string.IsNullOrEmpty(x.Nombre)) ||
                   habitacion.CamasMarineras != null && habitacion.CamasMarineras.Exists(x => string.IsNullOrEmpty(x.NombreArriba) || string.IsNullOrEmpty(x.NombreAbajo))
                ;
        }

        private static bool HayCamasConIdentificadorRepetido(Habitacion habitacion)
        {
            var nombres = new List<string>();

            if (habitacion.CamasMatrimoniales != null)
                nombres.AddRange(habitacion.CamasMatrimoniales?.Select(x => x.Nombre));

            if (habitacion.CamasMarineras != null)
            {
                nombres.AddRange(habitacion.CamasMarineras.Select(x => x.NombreAbajo));
                nombres.AddRange(habitacion.CamasMarineras.Select(x => x.NombreArriba));
            }

            if (habitacion.CamasIndividuales != null)
                nombres.AddRange(habitacion.CamasIndividuales.Select(x => x.Nombre));

            return nombres.GroupBy(x => x).Any(g => g.Count() > 1);
        }
    }
}
