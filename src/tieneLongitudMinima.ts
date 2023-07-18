import { ValidacionClave, claveValida, controlErrores } from "./constantes";

const noValidaLongitud: ValidacionClave = {
  esValida: false,
  error: "La clave debe tener una longitud mínima de 8 caracteres",
};

//Utilizamos replace y regex
const esLongitudMinima = (clave: string): boolean =>
  clave.replace(/\s+/g, "").length >= 8;

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  controlErrores(clave);
  return esLongitudMinima(clave) ? claveValida : noValidaLongitud;
};
