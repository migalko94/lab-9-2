import { tieneMayusculasYMinusculas } from "./mayusculasyminusculas";

describe("tieneMayusculasYMinusculas", () => {
  it("debería devolver un throw si clave es undefined", () => {
    // Arrange
    const clave: any = undefined;

    // Act
    const result = () => tieneMayusculasYMinusculas(clave);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("debería devolver un throw si las entradas son null", () => {
    // Arrange
    const clave: any = null;

    // Act
    const result = () => tieneMayusculasYMinusculas(clave);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

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
