import { Dispatch, SetStateAction } from "react";
import { ImgComponent } from "../ImgComponent/ImgComponent";

interface Props {
  setFoto: Dispatch<SetStateAction<File | null>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeRegistro: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const FormularioComponent = ({
  setFoto,
  handleSubmit,
  onChangeRegistro,
}: Props) => {
  return (
    <>
      <form
        className="row g-3"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <div className="mb-3">
            <label
              htmlFor="fecha"
              className="form-label"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Fecha *
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              name="fechaRegistro"
              onChange={onChangeRegistro}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="descripcion"
              className="form-label"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Descripción *
            </label>
            <textarea
              name="descripcion"
              onChange={onChangeRegistro}
              className="form-control"
              id="descripcion"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="impacto"
              className="form-label"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Impacto *
            </label>
            <select
              className="form-select"
              name="impacto"
              id="impacto"
              onChange={onChangeRegistro}
              required
            >
              <option value="" disabled>
                Selecciona el impacto
              </option>
              <option value="ALTO">Alto</option>
              <option value="MEDIO">Medio</option>
              <option value="BAJO">Bajo</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="personal"
              className="form-label"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Personal Involucrado *
            </label>
            <textarea
              name="personalInvolucrado"
              className="form-control"
              id="personal"
              onChange={onChangeRegistro}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label
              htmlFor="antecedentes"
              className="form-label"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Antecedentes *
            </label>
            <textarea
              name="antecedentes"
              className="form-control"
              id="antecedentes"
              onChange={onChangeRegistro}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="acciones"
              className="form-label"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Acciones Inmediatas *
            </label>
            <textarea
              name="accionesInmediatas"
              onChange={onChangeRegistro}
              className="form-control"
              id="acciones"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="atencion"
              className="form-label"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Atención al Evento *
            </label>
            <textarea
              name="atencionEvento"
              onChange={onChangeRegistro}
              className="form-control"
              id="atencion"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <ImgComponent setFoto={setFoto} />
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Enviar reporte
          </button>
        </div>
      </form>
    </>
  );
};
