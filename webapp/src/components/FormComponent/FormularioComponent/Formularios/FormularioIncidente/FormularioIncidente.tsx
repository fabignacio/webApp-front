import { ImgComponent } from "../../../ImgComponent/ImgComponent";

export const FormularioIncidente = ({
  onChangeRegistro,
  incidente,
  setIncidente,
  setFoto,
}) => {
  return (
    <>
      <h1
        className="text-center"
        style={{ fontFamily: "Bebas Neue", color: "#5B75A6" }}
      >
        Incidente
      </h1>
      <div className="row-g3">
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
            name="Fecha"
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
            name="Descripcion"
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
            name="Impacto"
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
            htmlFor="AccionesInmediatas"
            className="form-label"
            style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
          >
            Acciones Inmediatas *
          </label>
          <textarea
            name="AccionesInmediatas"
            onChange={onChangeRegistro}
            className="form-control"
            id="AccionesInmediatas"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="AtencionEvento"
            className="form-label"
            style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
          >
            Atención al Evento *
          </label>
          <textarea
            name="AtencionEvento"
            onChange={onChangeRegistro}
            className="form-control"
            id="AtencionEvento"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <ImgComponent
            incidente={incidente}
            setIncidente={setIncidente}
            setFoto={setFoto}
          />
        </div>
      </div>
    </>
  );
};
