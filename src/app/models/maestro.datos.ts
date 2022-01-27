import { Aficion } from "./aficiones.model";
import { Grupo } from "./grupo.model";
import { Sector } from "./sector.model";

export const GRUPOS: Array<Grupo> = [
    { id: 1, nombre: 'Familia', descripcion: '' },
    { id: 2, nombre: 'Amigos', descripcion: '' },
    { id: 3, nombre: 'Negocios', descripcion: '' },
    { id: 4, nombre: 'Trabajo', descripcion: '' },
    { id: 5, nombre: 'Otros', descripcion: '' }
];
export const SECTORES: Array<Sector> = [
    { id: 1, nombre: 'Tecnico', descripcion: '' },
    { id: 2, nombre: 'Creativo', descripcion: '' },
    { id: 3, nombre: 'Comercial', descripcion: '' },
    { id: 4, nombre: 'Otros', descripcion: '' },
];

export const AFICIONES: Array<Aficion> = [
    { id: 1, nombre: 'Tecnico', descripcion: '' },
    { id: 2, nombre: 'Creativo', descripcion: '' },
    { id: 3, nombre: 'Comercial', descripcion: '' },
    { id: 4, nombre: 'Otros', descripcion: '' },
];