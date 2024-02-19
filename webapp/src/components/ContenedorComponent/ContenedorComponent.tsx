import { HeaderComponent, RegistroComponent } from "../FormComponent";

export const ContenedorComponent = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-start w-100">
          <HeaderComponent />
        </div>
        <div className="mt-5">
          <RegistroComponent />
        </div>
      </div>
    </>
  );
};
