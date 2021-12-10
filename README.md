# NgSmoothSizeChange
Librería para Angular que proporciona un componente capaz de animar cambios de tamaño cuando estos suceden por la adición/eliminación de elementos dentro de un bloque (por ejemplo un listado con ngFor que cambie en algún momento).

Recibe un parámetro "trigger", que será la variable que cambie y detone el recálculo de tamaño cada vez que se modifica el contenido del bloque (que puede ser el propio array de elementos si fuera un ngFor, o una variable cualquiera que simplemente "cambie" en ese momento).
