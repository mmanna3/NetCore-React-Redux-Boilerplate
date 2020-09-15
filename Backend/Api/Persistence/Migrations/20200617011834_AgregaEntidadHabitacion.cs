using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.Persistence.Migrations
{
    public partial class AgregaEntidadHabitacion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Habitacion",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(maxLength: 30, nullable: false),
                    CamasIndividuales = table.Column<byte>(nullable: false),
                    CamasMarineras = table.Column<byte>(nullable: false),
                    CamasMatrimoniales = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Habitacion", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Habitacion");
        }
    }
}
