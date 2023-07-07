import { ValidacionClave, claveValida } from "./constantes";
import { tieneMayusculasYMinusculas } from "./mayusculasyminusculas";
import { tieneNumeros } from "./tieneNumeros";
import { tieneCaracteresEspeciales } from "./tieneCaracteresEspeciales";
import { tieneLongitudMinima } from "./tieneLongitudMinima";
import { tieneNombreUsuario } from "./tieneNombreUsuario";
import { tienePalabrasComunes } from "./tienePalabrasComunes";

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
    return claveTieneMayusculasYMinusculas;
  }

  if (!claveTieneNumeros.esValida) {
    return claveTieneNumeros;
  }

  if (!claveTieneCaracteresEspeciales.esValida) {
    return claveTieneCaracteresEspeciales;
  }

  if (!claveTieneLongitudMinima.esValida) {
    return claveTieneLongitudMinima;
  }

  if (!contenidoNombreUsuario.esValida) {
    return contenidoNombreUsuario;
  }

  if (!contenidoPalabrasComunes.esValida) {
    return contenidoPalabrasComunes;
  }

  return claveValida;
};
