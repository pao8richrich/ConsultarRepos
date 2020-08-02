
import * as actionsTypes from "../actions/actionsTypes";

const INITIAL_STATE = {
    cargando: false,
    user: "pao8richrich",
    lista: [null], 
    userInfo: {}
};


const reducer = (state = INITIAL_STATE,{ type, payload }) => {
    switch (type) {
        case actionsTypes.TRAER_TODOS:
            return {
                ...state, user: payload
            }
           
            case actionsTypes.CARGANDO:
                return {
                    ...state, cargando: !state.cargando
                }
               
            case actionsTypes.LIMPIAR:
                    return {
                        ...state, user: null
                    }
                 
            case actionsTypes.ACTUALIZAR_LISTADO:

                return {
                    ...state, lista: payload
                }
            case actionsTypes.ACTUALIZAR_USER_INFO:
                return {
                    ...state, userInfo: payload
                }
              
            default:
                return state
    }
  
};

export default reducer;