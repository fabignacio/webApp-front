import { Dispatch, SetStateAction } from "react";
import { IIncidente } from "../../../interfaces/Incidente";

interface Props {
  incidente: IIncidente;
  setIncidente: Dispatch<SetStateAction<IIncidente>>;
  setFoto: Dispatch<SetStateAction<string>>;
}

export const ImgComponent = ({ incidente, setIncidente, setFoto }: Props) => {
  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFoto = event.target.files[0];
      const reader: FileReader = new FileReader();

      reader.onload = () => {
        const base64String: string | undefined = reader.result?.toString();
        if (base64String) {
          setFoto(base64String);
          setIncidente({ ...incidente, registoFotografico: base64String });
        }
        reader.readAsDataURL(selectedFoto);
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
