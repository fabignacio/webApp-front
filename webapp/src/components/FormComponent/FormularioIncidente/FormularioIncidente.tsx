import React from "react";

interface Props {
  onChangeRegistro: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const FormularioIncidente = ({ onChangeRegistro }: Props) => {
  return (
    <>
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
    </>
  );
};
