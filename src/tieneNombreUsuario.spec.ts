import { hayNombreUsuario, tieneNombreUsuario } from "./tieneNombreUsuario";

describe("hayNombreUsuario", () => {
  it("Debe devolver true si la clave contiene el nombre de usuario. Caso contrario, false", () => {
    // Arrange
    const nombreUsuario = "UsuarioEjemplo1234";
    const clave = "1234";

    const resultadoEsperado = false;
    // Act
    const resultadoFuncion = hayNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver true si la clave contiene el nombre de usuario. Caso contrario, false", () => {
    // Arrange
    const nombreUsuario = "UsuarioEjemplo1234";
    const clave = "UsuarioEjemplo";

    const resultadoEsperado = false;
    // Act
    const resultadoFuncion = hayNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver true si la clave contiene el nombre de usuario. Caso contrario, false", () => {
    // Arrange
    const nombreUsuario = "UsuarioEjemplo1234";
    const clave = "Clave€€_UsuarioEjemplo1234";

    const resultadoEsperado = true;
    // Act
    const resultadoFuncion = hayNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

describe("tieneNombreUsuario", () => {
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
