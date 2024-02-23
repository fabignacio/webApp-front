import {
  FormularioAntecedentes,
  FormularioIncidente,
  FormularioPersonal,
} from "./Formularios";
import { BottonComponent } from "../../common";

export const FormularioComponent = ({
  incidente,
  setIncidente,
  setFoto,
  handleSubmit,
  onChangeRegistro,
}) => {
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
            <BottonComponent />
          </div>
        </div>
      </form>
    </>
  );
};
