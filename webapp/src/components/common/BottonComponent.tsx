interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export const BottonComponent = ({ handleSubmit }: Props) => {
  return (
    <>
      <button
        style={{
          backgroundColor: "#2B0FBD",
          color: "rgb(255, 207, 0)",
          paddingTop: "10px",
          paddingBottom: "5px",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "5px",
          fontFamily: "Bebas Neue",
        }}
      >
        Guardar
      </button>
    </>
  );
};
