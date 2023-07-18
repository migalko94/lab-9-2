import {
  ValidacionClave,
  caracteresEspeciales,
  controlErrores,
  claveValida,
} from "./constantes";

const noValidaCaracteresEspeciales: ValidacionClave = {
  esValida: false,
  error: "La clave debe tener caracteres especiales",
};

export const hayCaracteresEspeciales = (clave: string): boolean =>
  [...caracteresEspeciales].some((caracter) => clave.includes(caracter));

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  controlErrores(clave);
  return !hayCaracteresEspeciales(clave)
    ? noValidaCaracteresEspeciales
    : claveValida;
};
