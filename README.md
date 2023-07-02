# Módulo 9 - Laboratorio 9.2 Clave fuerte

En el proceso que de creación de una cuenta queremos evitar que el usuario puede crear una clave débil, para ellos nos piden que:

- La clave debe tener mayúsculas y minúsculas.
- La clave debe tener números.
- La clave debe tener caracteres especiales (@,#,+, \_, ...)
- La clave debe tener una longitud mínima de 8 caracteres.
- La clave no debe tener el nombre del usuario.
- La clave no debe contener palabras comunes (le pasaremos un array de palabras comunes).

En la firma evaluamos si pasa o no, y también devolvemos un tipo de error, que indica donde ha fallado.

La función para validar la clave se sirve de funciones auxiliares para cada uno de los cometidos.
Hemos implementado tests.
