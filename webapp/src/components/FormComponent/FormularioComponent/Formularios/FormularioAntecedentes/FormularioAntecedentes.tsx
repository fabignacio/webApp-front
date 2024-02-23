export const FormularioAntecedentes = ({ onChangeRegistro }) => {
  return (
    <>
      <h1
        className="text-center"
        style={{ fontFamily: "Bebas Neue", color: "#5B75A6" }}
      >
        Antecedentes
      </h1>

      <div className="row g-3">
        <div className="mb-3">
          <label
            htmlFor="Operacion"
            style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
          >
            Operación *
          </label>
          <input
            type="text"
            name="Operacion"
            className="form-control"
            onChange={onChangeRegistro}
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="FechaAntecedente"
            style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
          >
            Fecha *
          </label>
          <input
            type="date"
            name="FechaAntecedente"
            className="form-control"
            onChange={onChangeRegistro}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor=""
            style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
          >
            Ubicación *
          </label>
          <input
            type="text"
            name="Ubicacion"
            className="form-control"
            onChange={onChangeRegistro}
            required
          />
        </div>
      </div>
    </>
  );
};
