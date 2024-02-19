import { Dispatch, SetStateAction } from "react";

interface Props {
  setFoto: Dispatch<SetStateAction<File | null>>;
}

export const ImgComponent = ({ setFoto }: Props) => {
  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFoto = event.target.files[0];
      setFoto(selectedFoto);
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
