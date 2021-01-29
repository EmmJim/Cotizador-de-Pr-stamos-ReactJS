import React, {useState, Fragment} from 'react';
import {calcularTotal} from '../helpers';

const Formulario = (props) => {
    const {cantidad, totalCantidad, plazo, totalPlazo, guardarTotal, guardarCargando} = props;

    const [error, guardarError] = useState(false);


    const cotizar = (e) =>{
        e.preventDefault();
        
        if(cantidad === 0 || plazo === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarCargando(true);

        setTimeout(() => {
            //Cotizar
            const total = calcularTotal(cantidad, plazo);
            guardarTotal(total);
            guardarCargando(false);
        }, 3000);
        
    }

    return ( 
        <Fragment>
            <form onSubmit={cotizar}>
                <div>
                    {cantidad}
                        <div className="row">
                            <label>Cantidad Prestamo: </label>
                            <input  
                                type="number" 
                                placeholder="Ejemplo: 3000"
                                className="input"
                                onChange = {e => totalCantidad(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="row">
                            <label>Plazo para Pagar: </label>
                            <select 
                                className="select"
                                onChange={e => totalPlazo(parseInt(e.target.value))}
                            >
                                <option value="">Seleccionar</option>
                                <option value="3">3 meses</option>
                                <option value="6">6 meses</option>
                                <option value="12">12 meses</option>
                                <option value="24">24 meses</option>
                            </select>
                        </div>
                        <div className="row">
                            <input 
                                type="submit" 
                                value="Calcular"
                                className="btn"  
                            />
                        </div>
                    </div>
            </form>
            {(error) ?<p className="error">Todos los campos son obligatorios</p> : null}
            
        </Fragment>
    );
}
 
export default Formulario;