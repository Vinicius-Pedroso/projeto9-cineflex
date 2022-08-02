import React from 'react';
import styled from 'styled-components';

export default function cabecario() {
    return (
        <cabeca>
            <h1>CINEFLEX</h1>
        </cabeca>
    );
}

const cabeca = styled.div`
width: auto;
height: 67px;
background-color: #C3CFD9;
display: flex;
align-items: center;
justify-content: center;
`;


const h1 = styled.div`
    font-family: 'Roboto';
    color: #E8833A;
    font-size: 34px;
`;