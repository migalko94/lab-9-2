import { tieneNumeros } from "./tieneNumeros";
describe("tieneNumeros", () => {
  it("debería devolver un throw si clave es undefined", () => {
    // Arrange
    const clave: any = undefined;
    // Act
    const result = () => tieneNumeros(clave);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

  it("debería devolver un throw si las entradas son null", () => {
    // Arrange
    const clave: any = null;
    // Act
    const result = () => tieneNumeros(clave);
    // Assert
    expect(result).toThrowError("El parámetro introducido no es correcto");
  });

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
