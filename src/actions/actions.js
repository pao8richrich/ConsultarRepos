import * as actionsTypes from "./actionsTypes";

export const traerTodas = (data) => ({
    type: actionsTypes.TRAER_TODOS,
    payload: data
})

export const cargando = (data) => ({
    type: actionsTypes.CARGANDO,
    payload: data
})

export const limpiar = (data) => ({
    type: actionsTypes.LIMPIAR,
    payload: data
})

export const actualizarListado = (data) => ({
    type: actionsTypes.ACTUALIZAR_LISTADO,
    payload: data
})

export const hacerFetch = (user) =>{
    return dispatch => {
      fetch(`https://api.github.com/users/${user}/repos?sort=updated`)
        .then(response => response.json())
        .then(response => {
        //   console.log("response", response);
         
          dispatch(actualizarListado(response));
         
        });
    };
  }

export const hacerFetchUser = (user) =>{
    return dispatch => {
      fetch(`https://api.github.com/users/${user}`)
        .then(response =>
            {
                console.log("response", response.status)
                if(response.status === 404){
                    return [undefined]
                }else{
                    return response.json()}
                }
        )
        .then(response => {
             console.log("response", response); 
             dispatch(actualizarUserInfo(response))
            // if(response.message !== "Not Found"){
            //     dispatch(actualizarUserInfo(response));
            // }else{
                
            //     dispatch(actualizarUserInfo([undefined]));
            // }
         
         
        });
    };
}
  export const actualizarUserInfo = (data) => ({
    type: actionsTypes.ACTUALIZAR_USER_INFO,
    payload: data
})