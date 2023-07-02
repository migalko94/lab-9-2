import { ValidacionClave } from "./constantes";

export const tieneMayusculas = (clave: string): boolean => {
  const mayusculas: string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  for (let i = 0; i < clave.length; i++) {
    if (mayusculas.includes(clave[i])) {
      return true;
    }
  }
  return false;
};

export const tieneMinusculas = (clave: string): boolean => {
  const minusculas: string = "abcdefghijklmnñopqrstuvwxyz";
  for (let i = 0; i < clave.length; i++) {
    if (minusculas.includes(clave[i])) {
      return true;
    }
  }
  return false;
};

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!tieneMayusculas(clave) || !tieneMinusculas(clave)) {
    return {
      esValida: false,
      error: "La clave debe tener mayúsculas y minúsculas",
    };
  } else {
    return {
      esValida: true,
    };
  }
};
