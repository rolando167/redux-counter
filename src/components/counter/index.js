import { depositarDinero, retirarDinero } from "../../store/amount/action";
import { connect } from "react-redux";
import { selectCurrentAmount } from "../../store/amount/reducer";

const mapStateToProps =(state) =>{
    return {
        // amount: state.cantidadReducer.amount,
        amount: selectCurrentAmount(state),
    }
}

const Counter = ({amount, depositarDinero, retirarDinero }) => {
    return (
        <div>
           <h1>React - Redux - Ejemplo Básico 🚀</h1>
           <hr/>
           <h2><ins>${amount}</ins></h2>
           <button onClick={()=> depositarDinero()} className="mx-10 p-10">Depositar + 💸10</button>
           <button onClick={()=> retirarDinero()} className="mx-10 p-10">Retirar - 💸10</button>
        </div>
     );
}

// export default Counter;

export default connect(mapStateToProps, { depositarDinero, retirarDinero })(Counter);