import {
  ValidacionClave,
  claveValida,
  controlErrores,
  numeros,
} from "./constantes";

const noValidaNumeros: ValidacionClave = {
  esValida: false,
  error: "La clave debe tener números",
};

const hayNumero = (clave: string): boolean =>
  [...clave].some((clave) => numeros.includes(clave));

export const tieneNumeros = (clave: string): ValidacionClave => {
  controlErrores(clave);
  return !hayNumero(clave) ? noValidaNumeros : claveValida;
};
