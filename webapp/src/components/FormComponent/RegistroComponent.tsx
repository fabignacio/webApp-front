import { useState } from "react";

import { Incidente } from "../../interfaces/incidente";
import { INITIAL_VALUES_INCIDENTE } from "../../utils/initialValues";
import { FormularioComponent } from "./FormularioComponent/FormularioComponent";

export const RegistroComponent = () => {
  const [incidente, setIncidente] = useState<Incidente>(
    INITIAL_VALUES_INCIDENTE
  );
  const [foto, setFoto] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIncidente({ ...incidente, registroFotografico: foto });
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
      handleSubmit={handleSubmit}
      setFoto={setFoto}
      onChangeRegistro={onChangeRegistro}
    />
  );
};
