using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Api.Controllers.DTOs.Habitacion;
using FluentAssertions;
using NUnit.Framework;

namespace Api.IntegrationTests
{
    public class HabitacionesIT : BaseAutenticadoIT
    {
        private const string ENDPOINT = "/api/habitaciones";

        [Test]
        public async Task CreaHabitacionCorrectamente()
        {
            var response = await CrearUnaHabitacion();
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var consultarHabitacionesResponse = await ListarHabitaciones();
            consultarHabitacionesResponse.StatusCode.Should().Be(HttpStatusCode.OK);
            var habitaciones = await consultarHabitacionesResponse.Content.ReadAsAsync<IEnumerable<HabitacionDTO>>();

            habitaciones.Count().Should().Be(1);
            var habitacion = habitaciones.ToList().First();
            habitacion.CamasMatrimoniales.Count.Should().Be(1);
        }

        [Test, Ignore("Esto no funca, cuando hagas la edición, revisalo piola")]
        public async Task ModificaHabitacionCorrectamente()
        {
            var response = await CrearUnaHabitacion();
            var id = await response.Content.ReadAsAsync<int>();

            var body = new HabitacionDTO
            {
                Nombre = "Roja",
                CamasIndividuales = new List<CamaIndividualDTO>(),
                CamasMatrimoniales = new List<CamaMatrimonialDTO>(),
                CamasMarineras = new List<CamaMarineraDTO>
                {
                    new CamaMarineraDTO
                    {
                        NombreAbajo = "Abajo",
                        NombreArriba = "Arriba",
                    }
                }
            };

            var responseModificar = await _httpClient.PutAsJsonAsync($"{ENDPOINT}/{id}", body);
            responseModificar.StatusCode.Should().Be(HttpStatusCode.OK);


            var consultarHabitacionesResponse = await ListarHabitaciones();
            consultarHabitacionesResponse.StatusCode.Should().Be(HttpStatusCode.OK);
            var habitaciones = await consultarHabitacionesResponse.Content.ReadAsAsync<IEnumerable<HabitacionDTO>>();

            habitaciones.Count().Should().Be(1);

            var habitacion = habitaciones.ToList().First();
            
            habitacion.CamasIndividuales.Count.Should().Be(0);
            habitacion.CamasMatrimoniales.Count.Should().Be(0);
            habitacion.CamasMarineras.Count.Should().Be(1);
            habitacion.Nombre.Should().Be("Roja");
        }

        private async Task<HttpResponseMessage> CrearUnaHabitacion()
        {
            var body = new HabitacionDTO
            {
                Nombre = "Azul",
                CamasIndividuales = new List<CamaIndividualDTO>(),
                CamasMatrimoniales = new List<CamaMatrimonialDTO>
                {
                    new CamaMatrimonialDTO
                    {
                        Nombre = "Matrimonial1"
                    }
                },
                CamasMarineras = new List<CamaMarineraDTO>(),
            };

            return await _httpClient.PostAsJsonAsync(ENDPOINT, body);
        }

        private async Task<HttpResponseMessage> ListarHabitaciones()
        {
            return await _httpClient.GetAsync(ENDPOINT);
        }
    }
}