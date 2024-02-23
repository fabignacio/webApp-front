import { create } from 'zustand';
import { insertarDocumento } from '../api';

const useStoreDocumento = create((set) => ({
    pdfData: null,
    insertarDocumento: async (data) => {
        try {
            const response = await insertarDocumento(data);
            if (response.status === 200) {
                const blob = new Blob([response.data], { type: "application/pdf" });

                //Creamos una URL para el Blob
                const blobUrl = URL.createObjectURL(blob);

                //Creamos un link oculto para descargar el PDF
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = 'Evento.pdf'; //Nombre del archivo que se descargará

                //Simulamos un click en el enlace para iniciar la descarga
                link.click();

                //Liberamos la URL del Blob después de que se haya iniciado la descarga
                URL.revokeObjectURL(blobUrl);

                set({ pdfData: response.data });
            } else {
                console.error('Error al insertar el documento:', response);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }
}));

export default useStoreDocumento;
