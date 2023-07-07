import { tieneLongitudMinima } from "./tieneLongitudMinima";

describe("tieneLongitudMinima", () => {
  it("debería devolver un throw si clave es undefined", () => {
    // Arrange
    const clave: any = undefined;

    // Act
    const result = () => tieneLongitudMinima(clave);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("debería devolver un throw si las entradas son null", () => {
    // Arrange
    const clave: any = null;

    // Act
    const result = () => tieneLongitudMinima(clave);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });
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
