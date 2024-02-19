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
    console.log("Foto seleccionada:", foto);
  };

  return <FormularioComponent handleSubmit={handleSubmit} setFoto={setFoto} />;
};
