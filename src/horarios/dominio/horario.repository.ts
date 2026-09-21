import type { Horario } from "./entidades.js";
import type { CrearHorarioDto } from "../dto/crear-horario.dto.js";
import type { ActualizarHorarioDto } from "../dto/actualizar-horario.dto.js";

export interface HorarioRepository {
    listar(): Promise<Horario[]>;
    buscarPorId(id: number): Promise<Horario | null>;
    crear(datos: CrearHorarioDto): Promise<Horario>;
    actualizar(id: number, datos: ActualizarHorarioDto): Promise<Horario | null>;
    eliminar(id: number): Promise<Horario | null>;
}