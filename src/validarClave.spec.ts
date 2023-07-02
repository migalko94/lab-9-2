import { validarClave } from "./validarClave";

describe("validarClave", () => {
  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre", () => {
    // Arrange
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];
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
  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre", () => {
    // Arrange
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];
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

  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre", () => {
    // Arrange
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];
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
  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre", () => {
    // Arrange
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];
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

  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre", () => {
    // Arrange
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];
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

  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre", () => {
    // Arrange
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];
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

  it("Debe devolver un objeto indicando si la clave es válida. Caso de no serlo, además de mostrar que no lo es, también el primer error que encuentre", () => {
    // Arrange
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];
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
