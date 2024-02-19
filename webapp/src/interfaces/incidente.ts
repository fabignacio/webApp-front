export interface Incidente {
    fecha: string;
    descripcion: string;
    impacto: string;
    personalInvolucrado: string;
    antecedentes: string;
    registroFotografico?: File | null;
    accionesInmediatas: string;
    atencionEvento: string;
}