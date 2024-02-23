export const FormularioPersonal = ({ onChangeRegistro }) => {
  return (
    <>
      <h1
        className="text-center"
        style={{ fontFamily: "Bebas Neue", color: "#5B75A6" }}
      >
        Personal Involucrado
      </h1>

      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label
              htmlFor="Nombre"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Nombre *
            </label>
            <input
              type="text"
              name="Nombre"
              className="form-control"
              onChange={onChangeRegistro}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="Equipos"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Equipos *
            </label>
            <input
              type="text"
              name="Equipos"
              className="form-control"
              onChange={onChangeRegistro}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label
              htmlFor="Cargo"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Cargo *
            </label>
            <input
              type="text"
              name="Cargo"
              className="form-control"
              onChange={onChangeRegistro}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="DanioGenerado"
              style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
            >
              Daño Generado *
            </label>
            <input
              type="text"
              name="DanioGenerado"
              className="form-control"
              onChange={onChangeRegistro}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};
