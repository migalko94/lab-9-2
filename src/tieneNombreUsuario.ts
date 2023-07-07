import { ValidacionClave, claveValida, controlErrores } from "./constantes";

const noValidaNombreUsuario: ValidacionClave = {
  esValida: false,
  error: "La clave no debe tener el nombre del usuario",
};

const hayNombreUsuario = (nombreUsuario: string, clave: string): boolean =>
  clave.includes(nombreUsuario);

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  controlErrores(clave);
  return hayNombreUsuario(nombreUsuario, clave)
    ? noValidaNombreUsuario
    : claveValida;
};
