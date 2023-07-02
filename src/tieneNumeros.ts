import { ValidacionClave } from "./constantes";

export const hayNumero = (clave: string): boolean => {
  const numeros = "0123456789";
  for (let i = 0; i < clave.length; i++) {
    if (numeros.includes(clave[i])) {
      return true;
    }
  }
  return false;
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!hayNumero(clave)) {
    return {
      esValida: false,
      error: "La clave debe tener números",
    };
  } else {
    return {
      esValida: true,
    };
  }
};
