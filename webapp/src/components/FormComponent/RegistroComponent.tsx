import { useState } from "react";

import { INITIAL_VALUES_INCIDENTE } from "../../utils/initialValues";
import { FormularioComponent } from "./FormularioComponent/FormularioComponent";
import { IIncidente } from "../../interfaces/Incidente";
import useStoreEvent from "../../zustand/eventStore";

export const RegistroComponent = () => {
  const useControlEvent = useStoreEvent((store) => store);
  const [incidente, setIncidente] = useState<IIncidente>(
    INITIAL_VALUES_INCIDENTE
  );
  const [foto, setFoto] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    useControlEvent.insertarEvento(incidente);
  };

  const onChangeRegistro = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setIncidente({ ...incidente, [name]: value });
  };

  return (
    <FormularioComponent
      incidente={incidente}
      setIncidente={setIncidente}
      handleSubmit={handleSubmit}
      setFoto={setFoto}
      onChangeRegistro={onChangeRegistro}
    />
  );
};
