import { ValidacionClave } from "./constantes";
import { tieneMayusculasYMinusculas } from "./mayusculasyminusculas";
import { tieneNumeros } from "./tieneNumeros";
import { tieneCaracteresEspeciales } from "./tieneCaracteresEspeciales";
import { tieneLongitudMinima } from "./tieneLongitudMinima";
import { tieneNombreUsuario } from "./tieneNombreUsuario";
import { tienePalabrasComunes } from "./tienePalabrasComunes";

import "./style.css";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const claveTieneMayusculasYMinusculas = tieneMayusculasYMinusculas(clave);
  const claveTieneNumeros = tieneNumeros(clave);
  const claveTieneCaracteresEspeciales = tieneCaracteresEspeciales(clave);
  const claveTieneLongitudMinima = tieneLongitudMinima(clave);
  const contenidoNombreUsuario = tieneNombreUsuario(nombreUsuario, clave);
  const contenidoPalabrasComunes = tienePalabrasComunes(clave, commonPasswords);

  if (!claveTieneMayusculasYMinusculas.esValida) {
    return { esValida: false, error: claveTieneMayusculasYMinusculas.error };
  }

  if (!claveTieneNumeros.esValida) {
    return { esValida: false, error: claveTieneNumeros.error };
  }

  if (!claveTieneCaracteresEspeciales.esValida) {
    return { esValida: false, error: claveTieneCaracteresEspeciales.error };
  }

  if (!claveTieneLongitudMinima.esValida) {
    return { esValida: false, error: claveTieneLongitudMinima.error };
  }

  if (!contenidoNombreUsuario.esValida) {
    return { esValida: false, error: contenidoNombreUsuario.error };
  }

  if (!contenidoPalabrasComunes.esValida) {
    return { esValida: false, error: contenidoPalabrasComunes.error };
  }

  return { esValida: true };
};
