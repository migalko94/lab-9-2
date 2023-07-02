import {
  hayPalabrasComunes,
  tienePalabrasComunes,
} from "./tienePalabrasComunes";

describe("hayPalabrasComunes", () => {
  it("Debe devolver true si la clave contiene palabras comunes. Caso contrario, false", () => {
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
    const clave = "ClaveAleatoria";

    const resultadoEsperado = false;
    // Act
    const resultadoFuncion = hayPalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver true si la clave contiene palabras comunes. Caso contrario, false", () => {
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
    const clave = "987654321";

    const resultadoEsperado = true;
    // Act
    const resultadoFuncion = hayPalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });

  it("Debe devolver true si la clave contiene palabras comunes. Caso contrario, false", () => {
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
    const clave = "welcomemyfriend";

    const resultadoEsperado = true;
    // Act
    const resultadoFuncion = hayPalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toBe(resultadoEsperado);
  });
});

describe("tienePalabrasComunes", () => {
  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene palabras comunes. Caso contrario, false indicando el mensaje de error correspondiente", () => {
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
    const clave = "ClaveAleatoria";

    const resultadoEsperado = {
      esValida: true,
    };
    // Act
    const resultadoFuncion = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene palabras comunes. Caso contrario, false indicando el mensaje de error correspondiente", () => {
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
    const clave = "987654321";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave no debe contener palabras comunes",
    };
    // Act
    const resultadoFuncion = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });

  it("Debe devolver el objeto ValidacionClave con true si la clave no contiene palabras comunes. Caso contrario, false indicando el mensaje de error correspondiente", () => {
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
    const clave = "welcomemyfriend";

    const resultadoEsperado = {
      esValida: false,
      error: "La clave no debe contener palabras comunes",
    };
    // Act
    const resultadoFuncion = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultadoFuncion).toEqual(resultadoEsperado);
  });
});
