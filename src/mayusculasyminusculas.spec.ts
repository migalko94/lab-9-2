import {
  tieneMayusculas,
  tieneMayusculasYMinusculas,
  tieneMinusculas,
} from "./mayusculasyminusculas";

describe("tieneMayusculas", () => {
  it("Debe devolver true si la clave contiene mayúsculas. Caso contrario, false", () => {
    // Arrange
    const clave = "Hola, mundo";

    const resultadoEsperado = true;
    // Act
    const resultadoFuncion = tieneMayusculas(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver true si la clave contiene mayúsculas. Caso contrario, false", () => {
    // Arrange
    const clave = "hola, mundo";

    const resultadoEsperado = false;
    // Act
    const resultadoFuncion = tieneMayusculas(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

describe("tieneMinusculas", () => {
  it("Debe devolver true si la clave contiene minúsculas. Caso contrario, false", () => {
    // Arrange
    const clave = "Hola, mundo";

    const resultadoEsperado = true;
    // Act
    const resultadoFuncion = tieneMinusculas(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver true si la clave contiene minúsculas. Caso contrario, false", () => {
    // Arrange
    const clave = "HOLA, MUNDO";

    const resultadoEsperado = false;
    // Act
    const resultadoFuncion = tieneMinusculas(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

describe("tieneMayusculasYMinusculas", () => {
  it("Debe devolver el objeto ValidacionClave con true si la clave contiene mayúsculas y minúsculas. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "Hola, mundo";

    const resultadoEsperado = {
      esValida: true,
    };

    // Act
    const resultadoFuncion = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave contiene mayúsculas y minúsculas. Caso contrario, false indicando el mensaje de error", () => {
    // Arrange
    const clave = "hola, mundo";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener mayúsculas y minúsculas",
    };

    // Act
    const resultadoFuncion = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave contiene mayúsculas y minúsculas. Caso contrario, false indicando el mensaje de error", () => {
    // Arrange
    const clave = "HOLA, MUNDO";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener mayúsculas y minúsculas",
    };

    // Act
    const resultadoFuncion = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
