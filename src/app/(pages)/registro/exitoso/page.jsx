export default function RegistroExitoso() {
  return (
    <div className="min-h-[30vh] flex justify-center items-center flex-col">
      <h1 className="text-3xl text-main font-bold mb-4">
        ¡Su registro fue exitoso!
      </h1>
      <p className="max-w-md text-base mb-6">
        Ya tiene su cuenta de Insignia creada, revise su dirección de email que
        utilizo para poder activar su cuenta correctamente.
        <br />
        <br />
        Puede iniciar sesion desde el boton de <i>Ingresar</i>, que se encuentra
        arriba a la derecha.
      </p>
    </div>
  );
}
