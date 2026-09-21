import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { HorariosService } from "./horarios.service.js";
import type { Horario } from "./dominio/entidades.js";
import type { CrearHorarioDto } from "./dto/crear-horario.dto.js";
import type { ActualizarHorarioDto } from "./dto/actualizar-horario.dto.js";

@Controller("horarios")
export class HorariosController {

    constructor(
        private readonly horariosService: HorariosService
    ) {}

    @Get()
    listar(): Promise<Horario[]> {
        return this.horariosService.listar();
    }

    @Get(":id")
    async buscar(@Param("id") id: string) {
        const horario = await this.horariosService.buscar(Number(id));
        if (!horario) {
            throw new NotFoundException("No existe el horario");
        }
        return horario;
    }

    @Post()
    @HttpCode(201)
    crear(@Body() cuerpo: CrearHorarioDto) {
        return this.horariosService.crear(cuerpo);
    }

    @Patch(":id")
    async actualizar(@Param("id") id: string, @Body() dto: ActualizarHorarioDto) {
        const horario = await this.horariosService.actualizar(Number(id), dto);
        if (!horario) {
            throw new NotFoundException("No existe el horario para actualizarlo");
        }
        return horario;
    }

    @Delete(":id")
    async eliminar(@Param("id") id: string) {
        const horario = await this.horariosService.eliminar(Number(id));
        if (!horario) {
            throw new NotFoundException("No existe el horario");
        }
        return horario;
    }
}
