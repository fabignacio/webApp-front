import { Dispatch, SetStateAction } from "react";
import { IIncidente } from "../../../interfaces/Incidente";

interface Props {
  incidente: IIncidente;
  setIncidente: Dispatch<SetStateAction<IIncidente>>;
  setFoto: Dispatch<SetStateAction<string>>;
}

export const ImgComponent = ({ incidente, setIncidente, setFoto }: Props) => {
  const handleFotoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFoto: File = event.target.files[0];

      // Convertir el archivo a una cadena base64
      const reader = new FileReader();
      reader.readAsDataURL(selectedFoto);
      reader.onload = () => {
        const base64Data = reader.result?.toString();
        if (base64Data) {
          // Extraer solo los datos base64 eliminando el prefijo
          const base64Only = base64Data.split(",")[1];
          setIncidente({ ...incidente, ImagenBase64: base64Only });
        }
      };
      reader.onerror = (error) => {
        console.error("Error al leer el archivo:", error);
      };
    }
  };

  return (
    <>
      <label
        htmlFor="foto"
        className="form-label"
        style={{ color: "#66667F", fontFamily: "Bebas Neue" }}
      >
        Registro Fotográfico
      </label>
      <input
        type="file"
        className="form-control"
        id="foto"
        accept="image/*"
        onChange={handleFotoChange}
      />
    </>
  );
};
