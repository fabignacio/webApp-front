export interface IIncidente {
    Fecha: Date | string,
    Descripcion: string,
    Impacto: string,
    AccionesInmediatas: string,
    AtencionEvento: string,
    ImagenBase64?: string

    /* Datos Antecedentes */
    Operacion: string,
    FechaAntecedente: Date | string,
    Ubicacion: string,
    HoraInformada?: string,

    /* Datos PersonalInvolucrado */
    Nombre: string,
    Cargo: string,
    DanioGenerado: string,
    Equipos: string,
}