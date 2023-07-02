import { hayNumero, tieneNumeros } from "./tieneNumeros";

describe("hayNumero", () => {
  it("Debe devolver true si la clave contiene números. Caso contrario, false", () => {
    // Arrange
    const clave = "Hola, mundo";

    const resultadoEsperado = false;
    // Act
    const resultadoFuncion = hayNumero(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
  it("Debe devolver true si la clave contiene números. Caso contrario, false", () => {
    // Arrange
    const clave = "Hola, usuario1234";

    const resultadoEsperado = true;
    // Act
    const resultadoFuncion = hayNumero(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

describe("tieneNumeros", () => {
  it("Debe devolver el objeto ValidacionClave con true si la clave contiene números. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "Hola, mundo";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener números",
    };
    // Act
    const resultadoFuncion = tieneNumeros(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
  it("Debe devolver el objeto ValidacionClave con true si la clave contiene números. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "Hola, usuario1234";

    const resultadoEsperado = {
      esValida: true,
    };
    // Act
    const resultadoFuncion = tieneNumeros(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
