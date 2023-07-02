import { ValidacionClave } from "./constantes";

export const hayNombreUsuario = (
  nombreUsuario: string,
  clave: string
): boolean => {
  if (clave.includes(nombreUsuario)) {
    return true;
  }
  return false;
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (hayNombreUsuario(nombreUsuario, clave)) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  } else {
    return {
      esValida: true,
    };
  }
};
