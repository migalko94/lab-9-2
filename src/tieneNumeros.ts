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
  [...numeros].some((numero) => clave.includes(numero));

export const tieneNumeros = (clave: string): ValidacionClave => {
  controlErrores(clave);
  return hayNumero(clave) ? claveValida : noValidaNumeros;
};
