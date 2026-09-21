import { Injectable } from "@nestjs/common";
import type { Horario } from "../dominio/entidades.js";
import type { HorarioRepository } from "../dominio/horario.repository.js";
import type { CrearHorarioDto } from "../dto/crear-horario.dto.js";
import type { ActualizarHorarioDto } from "../dto/actualizar-horario.dto.js";

@Injectable()
export class HorarioMemoriaRepository implements HorarioRepository {
    private horarios: Horario[] = [
        { id: 1, claseId: 1, dia: "lunes", horaInicio: "07:00", cupoMaximo: 2, entrenador: "Ana Robles" },
        { id: 2, claseId: 1, dia: "miercoles", horaInicio: "07:00", cupoMaximo: 3, entrenador: "Ana Robles" },
        { id: 3, claseId: 2, dia: "martes", horaInicio: "19:00", cupoMaximo: 4, entrenador: "Luis Fierro" },
    ];

    private siguienteId = 4;

    async listar(): Promise<Horario[]> {
        return this.horarios;
    }

    async buscarPorId(id: number): Promise<Horario | null> {
        for (const horario of this.horarios) {
            if (horario.id === id) {
                return horario;
            }
        }
        return null;
    }

    async crear(datos: CrearHorarioDto): Promise<Horario> {
        const nuevo: Horario = {
            id: this.siguienteId++,
            claseId: datos.claseId,
            dia: datos.dia,
            horaInicio: datos.horaInicio,
            cupoMaximo: datos.cupoMaximo,
            entrenador: datos.entrenador,
        };
        this.horarios.push(nuevo);
        return nuevo;
    }

    async actualizar(id: number, datos: ActualizarHorarioDto): Promise<Horario | null> {
        const horario = await this.buscarPorId(id);
        if (!horario) {
            return null;
        }
        if (datos.claseId !== undefined) horario.claseId = datos.claseId;
        if (datos.dia !== undefined) horario.dia = datos.dia;
        if (datos.horaInicio !== undefined) horario.horaInicio = datos.horaInicio;
        if (datos.cupoMaximo !== undefined) horario.cupoMaximo = datos.cupoMaximo;
        if (datos.entrenador !== undefined) horario.entrenador = datos.entrenador;
        return horario;
    }

    async eliminar(id: number): Promise<Horario | null> {
        for (let i = 0; i < this.horarios.length; i++) {
            if (this.horarios[i].id === id) {
                const [eliminado] = this.horarios.splice(i, 1);
                return eliminado;
            }
        }
        return null;
    }
}