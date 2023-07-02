import { esLongitudMinima, tieneLongitudMinima } from "./tieneLongitudMinima";

describe("esLongitudMinima", () => {
  it("Debe devolver true si la clave tiene una longitud mínima de 8 caracteres. Caso contrario, false", () => {
    // Arrange
    const clave = "Hola";

    const resultadoEsperado = false;
    // Act
    const resultadoFuncion = esLongitudMinima(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
  it("Debe devolver true si la clave tiene una longitud mínima de 8 caracteres. Caso contrario, false", () => {
    // Arrange
    const clave = "1_2_3_4_";

    const resultadoEsperado = true;
    // Act
    const resultadoFuncion = esLongitudMinima(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
  it("Debe devolver true si la clave tiene una longitud mínima de 8 caracteres. Caso contrario, false", () => {
    // Arrange
    const clave = "1234567 ";

    const resultadoEsperado = false;
    // Act
    const resultadoFuncion = esLongitudMinima(clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

describe("tieneLongitudMinima", () => {
  it("Debe devolver el objeto ValidacionClave con true si la clave tiene una longitud mínima de 8 caracteres. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "Hola";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    };
    // Act
    const resultadoFuncion = tieneLongitudMinima(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
  it("Debe devolver el objeto ValidacionClave con true si la clave tiene una longitud mínima de 8 caracteres. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "1_2_3_4_";

    const resultadoEsperado = {
      esValida: true,
    };
    // Act
    const resultadoFuncion = tieneLongitudMinima(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
  it("Debe devolver el objeto ValidacionClave con true si la clave tiene una longitud mínima de 8 caracteres. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const clave = "1234567 ";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    };
    // Act
    const resultadoFuncion = tieneLongitudMinima(clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
