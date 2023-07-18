import { tienePalabrasComunes } from "./tienePalabrasComunes";
import { commonPasswords } from "./constantes";

describe("tienePalabrasComunes", () => {
  it("debería devolver un throw si clave es undefined", () => {
    // Arrange
    const clave: any = undefined;

    // Act
    const result = () => tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("debería devolver un throw si clave es null", () => {
    // Arrange
    const clave: any = null;

    // Act
    const result = () => tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("debería devolver un throw si el array de palabras comunes es undefined", () => {
    // Arrange
    const clave = "ClaveAleatoria";
    const commonPasswords: any = undefined;

    // Act
    const result = () => tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("debería devolver un throw si el array de palabras comunes es null", () => {
    // Arrange
    const clave = "ClaveAleatoria";
    const commonPasswords: any = null;

    // Act
    const result = () => tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("debería devolver un throw si el array de palabras está vacío", () => {
    // Arrange
    const clave = "ClaveAleatoria";
    const commonPasswords: string[] = [];

    // Act
    const result = () => tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene palabras comunes. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "ClaveAleatoria";

    const resultadoEsperado = {
      esValida: true,
    };
    // Act
    const resultadoFuncion = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene palabras comunes. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange

    const clave = "987654321";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave no debe contener palabras comunes",
    };
    // Act
    const resultadoFuncion = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene palabras comunes. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange

    const clave = "welcomemyfriend";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave no debe contener palabras comunes",
    };
    // Act
    const resultadoFuncion = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
