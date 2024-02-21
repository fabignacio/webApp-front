export interface IIncidente {
    fecha: Date | string,
    descripcion: string,
    impacto: string,
    personalInvolucrado: string,
    antecedentes: string,
    accionesInmediatas: string,
    atencionEvento: string,
    registoFotografico?: string
}