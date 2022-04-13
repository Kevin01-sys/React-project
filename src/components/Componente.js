import React, {Component} from "react";
/* Expressed function with arrow Function */
const Componente = props => <h2>{props.msg}</h2>;

/* Declared function */
/* function Componente(props){
    return <h2>{props.msg}</h2>
} */

/* class Componente extends Component {
    render(){
        return <h2>{this.props.msg}</h2>
    }
} */

export default Componente;