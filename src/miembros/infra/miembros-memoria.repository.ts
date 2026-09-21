import { Injectable } from "@nestjs/common";
import type { Miembro } from "../dominio/entidades.js";
import type { MiembroRepository } from "../dominio/miembro.repository.js";
import type { CrearMiembroDto } from "../dto/crear-miembro.dto.js";
import type { ActualizarMiembroDto } from "../dto/actualizar-miembro.dto.js";

@Injectable()
export class MiembroMemoriaRepository implements MiembroRepository {
    private miembros: Miembro[] = [
        { id: 1, nombre: 'Karla Duarte', correo: 'karla@itson.mx', membresia: 'premium', activo: true },
        { id: 2, nombre: 'Omar Valdez', correo: 'omar@itson.mx', membresia: 'plus', activo: true },
        { id: 3, nombre: 'Sofia Ibarra', correo: 'sofia@itson.mx', membresia: 'basica', activo: true },
    ];

    private siguienteId = 4;

    async listar(): Promise<Miembro[]> {
        return this.miembros;
    }

    async buscarPorId(id: number): Promise<Miembro | null> {
        for (const miembro of this.miembros) {
            if (miembro.id === id) {
                return miembro;
            }
        }
        return null;
    }

    async crear(datos: CrearMiembroDto): Promise<Miembro> {
        const nuevo: Miembro = {
            id: this.siguienteId++,
            nombre: datos.nombre,
            correo: datos.correo,
            membresia: datos.membresia,
            activo: true,
        };
        this.miembros.push(nuevo);
        return nuevo;
    }

    async actualizar(id: number, datos: ActualizarMiembroDto): Promise<Miembro | null> {
        const miembro = await this.buscarPorId(id);
        if (!miembro) {
            return null;
        }
        if (datos.nombre !== undefined) miembro.nombre = datos.nombre;
        if (datos.correo !== undefined) miembro.correo = datos.correo;
        if (datos.membresia !== undefined) miembro.membresia = datos.membresia;
        if (datos.activo !== undefined) miembro.activo = datos.activo;
        return miembro;
    }

    async eliminar(id: number): Promise<Miembro | null> {
        for (let i = 0; i < this.miembros.length; i++) {
            if (this.miembros[i].id === id) {
                const [eliminado] = this.miembros.splice(i, 1);
                return eliminado;
            }
        }
        return null;
    }
}