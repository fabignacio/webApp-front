import { create } from 'zustand'
import { IIncidente } from '../interfaces/Incidente'
import { insertarDocumento } from '../api';

interface State {
    respuesta: IIncidente | null
    insertarEvento: (data: IIncidente) => void;
}

const useStoreEvent = create<State>((set) => ({
    respuesta: null,
    insertarEvento: async (data: IIncidente) => {
        const response: IIncidente | any = await insertarDocumento(data)
        console.log(response)
        set({ respuesta: response })
    }
}))

export default useStoreEvent;