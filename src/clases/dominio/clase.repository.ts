import type { Clase } from "./entidades.js";
import type { CrearClaseDto } from "../dto/crear-clase.dto.js";
import type { ActualizarClaseDto } from "../dto/editar-clase.dto.js";

export interface ClaseRepository{
    listar(): Promise<Clase[]>;
    buscarPorId(id: number): Promise<Clase | null>;
    crear(datos: CrearClaseDto): Promise<Clase>;
    actualizar(id: number, datos: ActualizarClaseDto): Promise<Clase | null>;
    eliminar(id: number): Promise<Clase | null>;
}