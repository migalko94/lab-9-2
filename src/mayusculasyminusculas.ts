import {
  ValidacionClave,
  mayusculas,
  minusculas,
  controlErrores,
  claveValida,
} from "./constantes";

const noValidaMayusculasYMinusculas: ValidacionClave = {
  esValida: false,
  error: "La clave debe tener mayúsculas y minúsculas",
};

const tieneMayusculas = (clave: string): boolean =>
  [...clave].some((clave) => mayusculas.includes(clave));

const tieneMinusculas = (clave: string): boolean =>
  [...clave].some((clave) => minusculas.includes(clave));

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  controlErrores(clave);
  return !tieneMayusculas(clave) || !tieneMinusculas(clave)
    ? noValidaMayusculasYMinusculas
    : claveValida;
};
