export interface Asignatura {
    id?: string;
    name: string;
    id_profesor: number;
    id_curso: number;
}

export interface AsignaturaPorfesor {
    id?: string;
    name: string;
    id_profesor: number;
    id_curso: number;
    name_curso?: string;
}