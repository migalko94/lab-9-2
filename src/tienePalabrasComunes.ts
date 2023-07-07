import { ValidacionClave, claveValida, controlErrores } from "./constantes";

const noValidaPalabrasComunes: ValidacionClave = {
  esValida: false,
  error: "La clave no debe contener palabras comunes",
};

const hayPalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): boolean =>
  commonPasswords.some((commonPasswords) => clave.includes(commonPasswords));

const controlErroresPalabrasComunes = (commonPasswords: string[]) => {
  if (!commonPasswords || commonPasswords.length === 0) {
    throw new Error("El parámetro introducido no es correcto");
  }
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  controlErrores(clave);
  controlErroresPalabrasComunes(commonPasswords);
  return hayPalabrasComunes(clave, commonPasswords)
    ? noValidaPalabrasComunes
    : claveValida;
};
