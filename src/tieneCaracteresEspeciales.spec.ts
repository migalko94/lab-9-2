import {
  hayCaracteresEspeciales,
  tieneCaracteresEspeciales,
} from "./tieneCaracteresEspeciales";

describe("hayCaracteresEspeciales", () => {
  it("Debe devolver true si la clave contiene caracteres especiales. Caso contrario, false", () => {
    // Arrange
    const clave = "Hola, mundo";

    const resultadoEsperado = true;

    // Act
    const resultadoFuncion = hayCaracteresEspeciales(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
  it("Debe devolver true si la clave contiene caracteres especiales. Caso contrario, false", () => {
    // Arrange
    const clave = "Hola MUNDO 1234";

    const resultadoEsperado = false;

    // Act
    const resultadoFuncion = hayCaracteresEspeciales(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Debe devolver Debe devolver el objeto ValidacionClave con true si la clave contiene caracteres especiales. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "Hola, mundo";

    const resultadoEsperado = {
      esValida: true,
    };

    // Act
    const resultadoFuncion = tieneCaracteresEspeciales(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
  it("Debe devolver Debe devolver el objeto ValidacionClave con true si la clave contiene caracteres especiales. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "Hola MUNDO 1234";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener caracteres especiales",
    };

    // Act
    const resultadoFuncion = tieneCaracteresEspeciales(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
