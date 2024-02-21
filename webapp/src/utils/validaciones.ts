export const validarFecha = () => {
    console.log('hola')
}

export const obtenerHoraActual = () => {
    // Obtener la fecha y hora actuales
    const fechaActual: Date = new Date();

    // Obtener la hora actual
    const horaActual: number = fechaActual.getHours();

    // Obtener los minutos actuales
    const minutosActuales: number = fechaActual.getMinutes();

    // Obtener los segundos actuales
    const segundosActuales: number = fechaActual.getSeconds();

    // Formatear la hora en un formato legible
    const horaFormateada: string = `${horaActual}:${minutosActuales}:${segundosActuales}`;

    return horaFormateada;

}