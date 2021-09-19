const DEPOSITAR_DINERO = "DEPOSITAR_DINERO";
const RETIRAR_DINERO = "RETIRAR_DINERO";

const depositarDinero = () =>{
    return{
        type: DEPOSITAR_DINERO,
        payload: 10,
    }
}


const retirarDinero = () =>{
    return{
        type: RETIRAR_DINERO,
        payload: -10,
    }
}

export { depositarDinero, retirarDinero };