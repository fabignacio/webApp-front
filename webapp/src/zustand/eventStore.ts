import { create } from 'zustand'
import { insertarDocumento } from '../api';
import { IIncidente } from '../interfaces/Incidente';

interface State {
    pdfData: ArrayBuffer | null;
    insertarDocumento: (data: IIncidente) => void;
}

const useStoreDocumento = create<State>((set) => ({
    pdfData: null,
    insertarDocumento: async (data: IIncidente) => {
        try {
            const response: any = await insertarDocumento(data);
            if (response.status === 200) {
                const blob: Blob = new Blob([response.data], { type: "application/pdf" })

                //Creamos una URL para el Blob
                const blobUrl: string = URL.createObjectURL(blob);

                //Creamos un link oculto para descargar el PDF
                const link: HTMLAnchorElement = document.createElement('a');
                link.href = blobUrl;
                link.download = 'Evento.pdf' //Nombre del archivo que se descargará

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
