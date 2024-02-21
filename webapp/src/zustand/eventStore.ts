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
