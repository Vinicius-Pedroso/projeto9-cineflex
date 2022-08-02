import React from 'react';
import styled from 'styled-components';

export default function tela4() {
    return (
        <>
            <div class="boxfilme">
                <p>
                    Pedido feito com sucesso
                </p>
            </div>
            <h1>Filme e sessão</h1>
            <h2>Filmi du Kafé</h2>
            <h3>xx/yy/zzzz</h3>
            <h1>Ingressos</h1>
            <h2>Assento 1</h2>
            <h3>Assento 50</h3>
            <h1>Comprador</h1>
            <h2>Bob o bobo</h2>
            <h3>cpf: 5151 6969 51</h3>
        </>
    );
}

const boxfilme = styled.div`
    height: 80px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p {
        font-family: 'Roboto';
        font-size: 24px;
        color: #247A6B;
        font-weight: 700;
    }
`
const h1 = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-bottom: 15px;
`

const h2 = styled.h2`
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
    color: #293845;
    margin-bottom: 2px;
`

const h3 = styled.h2`
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
    color: #293845;
    margin-bottom: 35px;
`