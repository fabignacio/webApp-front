export const FormComponent = () => {
  return (
    <form>
      <div className="mb-3">
        <label
          htmlFor="fecha"
          className="form-label"
          style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
        >
          Fecha *
        </label>
        <input type="date" className="form-control" id="fecha" required />
      </div>
      <div className="mb-3">
        <label
          htmlFor="descripcion"
          className="form-label"
          style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
        >
          Descripción *
        </label>
        <textarea className="form-control" id="descripcion" required></textarea>
      </div>
      <div className="mb-3">
        <label
          htmlFor="impacto"
          className="form-label"
          style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
        >
          Impacto *
        </label>
        <select className="form-select" id="impacto" required>
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
        <textarea className="form-control" id="personal" required></textarea>
      </div>
      <div className="mb-3">
        <label
          htmlFor="antecedentes"
          className="form-label"
          style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
        >
          Antecedentes *
        </label>
        <textarea
          className="form-control"
          id="antecedentes"
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
        <textarea className="form-control" id="acciones" required></textarea>
      </div>
      <div className="mb-3">
        <label
          htmlFor="atencion"
          className="form-label"
          style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
        >
          Atención al Evento *
        </label>
        <textarea className="form-control" id="atencion" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};
