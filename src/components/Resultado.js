import React from 'react';

const Resultado = ({total, plazo, cantidad}) => {
    return (
        <div className="cotizacion">
            <h2>Resúmen</h2>
            <p>La cantidad solicitada es: ${cantidad}</p>
            <p>A pagar en: {plazo} Meses</p>
            <p>Su pago Mensual es de: ${(total/plazo).toFixed(2)}</p>
            <p>Total a pagar: ${(total).toFixed(2)}</p>
        </div>  
    );
}

export default Resultado;