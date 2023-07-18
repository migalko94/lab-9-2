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
  [...mayusculas].some((letra) => clave.includes(letra));

const tieneMinusculas = (clave: string): boolean =>
  [...minusculas].some((letra) => clave.includes(letra));

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  controlErrores(clave);
  return !tieneMayusculas(clave) || !tieneMinusculas(clave)
    ? noValidaMayusculasYMinusculas
    : claveValida;
};
