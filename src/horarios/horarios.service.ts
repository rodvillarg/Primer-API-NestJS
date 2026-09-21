import { Inject, Injectable } from "@nestjs/common";
import { HORARIO_REPOSITORY } from "./horarios.tokens.js";
import type { HorarioRepository } from "./dominio/horario.repository.js";
import type { Horario } from "./dominio/entidades.js";
import type { CrearHorarioDto } from "./dto/crear-horario.dto.js";
import type { ActualizarHorarioDto } from "./dto/actualizar-horario.dto.js";

@Injectable()
export class HorariosService {
    constructor(
        @Inject(HORARIO_REPOSITORY)
        private readonly repo: HorarioRepository
    ) {}

    listar(): Promise<Horario[]> {
        return this.repo.listar();
    }

    buscar(id: number): Promise<Horario | null> {
        return this.repo.buscarPorId(id);
    }

    crear(dto: CrearHorarioDto): Promise<Horario> {
        return this.repo.crear(dto);
    }

    actualizar(id: number, dto: ActualizarHorarioDto): Promise<Horario | null> {
        return this.repo.actualizar(id, dto);
    }

    eliminar(id: number): Promise<Horario | null> {
        return this.repo.eliminar(id);
    }
}
