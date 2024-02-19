export interface Incidente {
    fecha: string;
    descripcion: string;
    impacto: 'ALTO' | 'MEDIO' | 'BAJO';
    personalInvolucrado: string;
    antecedentes: string;
    registroFotografico?: File | null;
    accionesInmediatas: string;
    atencionEvento: string;
}