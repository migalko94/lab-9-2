import { tieneNombreUsuario } from "./tieneNombreUsuario";

describe("tieneNombreUsuario", () => {
  it("debería devolver un throw si clave es undefined", () => {
    // Arrange
    const clave: any = undefined;
    const nombreUsuario = "Aleatorio1";

    // Act
    const result = () => tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("debería devolver un throw si las entradas son null", () => {
    // Arrange
    const clave: any = null;
    const nombreUsuario = "Aleatorio1";
    // Act
    const result = () => tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene el nombre de usuario. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const nombreUsuario = "UsuarioEjemplo1234";
    const clave = "1234";

    const resultadoEsperado = {
      esValida: true,
    };
    // Act
    const resultadoFuncion = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene el nombre de usuario. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const nombreUsuario = "UsuarioEjemplo1234";
    const clave = "UsuarioEjemplo";

    const resultadoEsperado = {
      esValida: true,
    };
    // Act
    const resultadoFuncion = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene el nombre de usuario. Caso contrario, false indicando el mensaje de error correspondiente", () => {
    // Arrange
    const nombreUsuario = "UsuarioEjemplo1234";
    const clave = "Clave€€_UsuarioEjemplo1234";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    // Act
    const resultadoFuncion = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
