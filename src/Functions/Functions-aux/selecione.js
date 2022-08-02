import React from 'react';
import styled from 'styled-components';

export default function selecione(props) {
    return (
        <boxfilme>
            <p>Selecione {props.text}</p>
        </boxfilme>
    );
}

const boxfilme = styled.div`
    height: 110px;
    width: 100%;
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const p = styled.p`
    font-family: 'Roboto';
    font-size: 24px;
`