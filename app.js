import store from './store.js';
import { add, reduce } from './actions.js';

const default_state = 0;

// Puedes suscribirte manualmente a los cambios, o conectar tu vista
// directamente
store.subscribe(() => {
    console.log(store.getState());
});

// La única forma de modificar el estado interno es despachando acciones.
// Las acciones pueden ser serializadas, registradas o almacenadas luego para
// volver a ejecutarlas.
store.dispatch(add(3));

store.dispatch(reduce(1));

store.dispatch(add(7));
