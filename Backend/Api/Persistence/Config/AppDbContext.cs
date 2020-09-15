using Api.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Persistence.Config
{
    public class AppDbContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Habitacion> Habitaciones { get; set; }

        public DbSet<CamaIndividual> CamasIndividuales { get; set; }
        public DbSet<CamaMatrimonial> CamasMatrimoniales { get; set; }
        public DbSet<CamaMarinera> CamasMarineras { get; set; }
        public DbSet<Huesped> Huespedes { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.RemovePluralizingTableNameConvention();
        }
    }
}

