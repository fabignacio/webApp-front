import { Dispatch, SetStateAction } from "react";
import { IIncidente } from "../../../interfaces/Incidente";
import {
  FormularioAntecedentes,
  FormularioIncidente,
  FormularioPersonal,
} from "./Formularios";
import { BottonComponent } from "../../common";
import useStoreDocumento from "../../../zustand/eventStore";

interface Props {
  incidente: IIncidente;
  setIncidente: Dispatch<SetStateAction<IIncidente>>;
  setFoto: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeRegistro: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const FormularioComponent = ({
  incidente,
  setIncidente,
  setFoto,
  handleSubmit,
  onChangeRegistro,
}: Props) => {
  const pdfUrl = useStoreDocumento((store) => store);

  return (
    <>
      <form
        className="row g-3"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <FormularioIncidente
            incidente={incidente}
            setIncidente={setIncidente}
            setFoto={setFoto}
            onChangeRegistro={onChangeRegistro}
          />
        </div>
        <div className="col-md-6">
          <FormularioAntecedentes onChangeRegistro={onChangeRegistro} />
          <FormularioPersonal onChangeRegistro={onChangeRegistro} />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <BottonComponent handleSubmit={handleSubmit} />
          </div>
        </div>
      </form>
    </>
  );
};
