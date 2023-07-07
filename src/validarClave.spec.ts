import { validarClave } from "./validarClave";
import { commonPasswords } from "./constantes";

describe("validarClave", () => {
  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre. Si la clave no tiene mayúsculas y minúsculas, no es válida y debe mostrarse este tipo de error", () => {
    // Arrange

    const nombreUsuario = "USUARIO";
    const clave = "aleatoria098_!";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener mayúsculas y minúsculas",
    };
    // Act
    const resultadoFuncion = validarClave(
      nombreUsuario,
      clave,
      commonPasswords
    );

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre. Si la clave no tiene números, no es válida y debe mostrarse este tipo de error", () => {
    // Arrange

    const nombreUsuario = "Usuario1234";
    const clave = "€€UsuarioA";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener números",
    };
    // Act
    const resultadoFuncion = validarClave(
      nombreUsuario,
      clave,
      commonPasswords
    );

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre. Si la clave no tiene caracteres especiales, no es válida y debe mostrar este tipo de error", () => {
    // Arrange

    const nombreUsuario = "Usuario1234";
    const clave = "UsuariO1234";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener caracteres especiales",
    };
    // Act
    const resultadoFuncion = validarClave(
      nombreUsuario,
      clave,
      commonPasswords
    );

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre. Si la clave no tiene una longitud mínima de 8 caracteres, no es válida y debe indicarse este error", () => {
    // Arrange

    const nombreUsuario = "Usuario1234";
    const clave = "€€UsA5";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    };
    // Act
    const resultadoFuncion = validarClave(
      nombreUsuario,
      clave,
      commonPasswords
    );

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre. La clave no puede contener el nombre de usuario. Si es así, no es válida y debe mostrarse que ahí está el error", () => {
    // Arrange

    const nombreUsuario = "Usuario1234";
    const clave = "€€Usuario1234";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    // Act
    const resultadoFuncion = validarClave(
      nombreUsuario,
      clave,
      commonPasswords
    );

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre. La clave no puede contener palabras comunes de un listado determinado. Si contiene alguna de ellas, se muestra la validación errónea", () => {
    // Arrange

    const nombreUsuario = "Usuario1234";
    const clave = "€89Bmonkey";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave no debe contener palabras comunes",
    };
    // Act
    const resultadoFuncion = validarClave(
      nombreUsuario,
      clave,
      commonPasswords
    );

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre. Si la clave es válida, simplemente se indica así", () => {
    // Arrange

    const nombreUsuario = "Usuario1234";
    const clave = "€89Bvalida";

    const resultadoEsperado = { esValida: true };
    // Act
    const resultadoFuncion = validarClave(
      nombreUsuario,
      clave,
      commonPasswords
    );

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
