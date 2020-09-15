using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Core.Models;
using Api.Core.Repositories;
using Api.Core.Services.Interfaces;

namespace Api.Core.Services
{
    public class HuespedService : IHuespedService
    {
        private readonly IHuespedRepository _huespedRepository;
        private readonly IUnitOfWork _unitOfWork;

        public HuespedService(IHuespedRepository huespedRepository, IUnitOfWork unitOfWork)
        {
            _huespedRepository = huespedRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Huesped>> ListAsync()
        {
            return await _huespedRepository.ListAsync();
        }

        public async Task<int> CreateAsync(Huesped huesped)
        {
            _huespedRepository.Create(huesped);

            await _unitOfWork.CompleteAsync();
            
            return huesped.Id;
        }
    }
}
