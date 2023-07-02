import { ValidacionClave } from "./constantes";

//Utilizamos replace y regex
export const esLongitudMinima = (clave: string): boolean => {
  const claveSinEspacios = clave.replace(/\s+/g, "");

  if (claveSinEspacios.length >= 8) {
    return true;
  }

  return false;
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!esLongitudMinima(clave)) {
    return {
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    };
  } else {
    return {
      esValida: true,
    };
  }
};
