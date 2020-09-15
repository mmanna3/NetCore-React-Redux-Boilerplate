using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.Persistence.Migrations
{
    public partial class AgregaCamasIndividualesAHabitaciones : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CamasIndividuales",
                table: "Habitacion");

            migrationBuilder.CreateTable(
                name: "CamaIndividual",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(maxLength: 30, nullable: false),
                    HabitacionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CamaIndividual", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CamaIndividual_Habitacion_HabitacionId",
                        column: x => x.HabitacionId,
                        principalTable: "Habitacion",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CamaIndividual_HabitacionId",
                table: "CamaIndividual",
                column: "HabitacionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CamaIndividual");

            migrationBuilder.AddColumn<byte>(
                name: "CamasIndividuales",
                table: "Habitacion",
                type: "tinyint",
                nullable: false,
                defaultValue: (byte)0);
        }
    }
}
