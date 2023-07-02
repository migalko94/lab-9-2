import { ValidacionClave } from "./constantes";

export const hayCaracteresEspeciales = (clave: string): boolean => {
  const caracteresEspeciales = "¡!\"#$€%&'()*+,-./:;<=>¿?@[\\]^_`{|}~";
  for (let i = 0; i < clave.length; i++) {
    if (caracteresEspeciales.includes(clave[i])) {
      return true;
    }
  }
  return false;
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!hayCaracteresEspeciales(clave)) {
    return {
      esValida: false,
      error: "La clave debe tener caracteres especiales",
    };
  } else {
    return {
      esValida: true,
    };
  }
};
