import { useState } from "react";

import { INITIAL_VALUES_INCIDENTE } from "../../utils/initialValues";
import { FormularioComponent } from "./FormularioComponent/FormularioComponent";
import useStoreDocumento from "../../zustand/eventStore";

export const RegistroComponent = () => {
  const useControlEvent = useStoreDocumento((store) => store);
  const [incidente, setIncidente] = useState(INITIAL_VALUES_INCIDENTE);
  const [foto, setFoto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    useControlEvent.insertarDocumento(incidente);
  };

  const onChangeRegistro = (event) => {
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
