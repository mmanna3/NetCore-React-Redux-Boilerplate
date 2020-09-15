using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.Persistence.Migrations
{
    public partial class AgregaCamasMarineraYMatrimonial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CamasMarineras",
                table: "Habitacion");

            migrationBuilder.DropColumn(
                name: "CamasMatrimoniales",
                table: "Habitacion");

            migrationBuilder.CreateTable(
                name: "CamaMarinera",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreAbajo = table.Column<string>(maxLength: 30, nullable: false),
                    NombreArriba = table.Column<string>(maxLength: 30, nullable: false),
                    HabitacionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CamaMarinera", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CamaMarinera_Habitacion_HabitacionId",
                        column: x => x.HabitacionId,
                        principalTable: "Habitacion",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CamaMatrimonial",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(maxLength: 30, nullable: false),
                    HabitacionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CamaMatrimonial", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CamaMatrimonial_Habitacion_HabitacionId",
                        column: x => x.HabitacionId,
                        principalTable: "Habitacion",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CamaMarinera_HabitacionId",
                table: "CamaMarinera",
                column: "HabitacionId");

            migrationBuilder.CreateIndex(
                name: "IX_CamaMatrimonial_HabitacionId",
                table: "CamaMatrimonial",
                column: "HabitacionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CamaMarinera");

            migrationBuilder.DropTable(
                name: "CamaMatrimonial");

            migrationBuilder.AddColumn<byte>(
                name: "CamasMarineras",
                table: "Habitacion",
                type: "tinyint",
                nullable: false,
                defaultValue: (byte)0);

            migrationBuilder.AddColumn<byte>(
                name: "CamasMatrimoniales",
                table: "Habitacion",
                type: "tinyint",
                nullable: false,
                defaultValue: (byte)0);
        }
    }
}
