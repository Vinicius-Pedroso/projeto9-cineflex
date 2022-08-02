import React from 'react';
import styled from 'styled-components';

export default function boxhorario() {
    return (
        <boxhorario>
            <h1>Quinta-feira - xx/yy/zzzz</h1>
            <span>
                <hora>
                    <p>15h00</p>
                </hora>
                <hora>
                    <p>18h40</p>
                </hora>
            </span>
        </boxhorario>
    );
}

const boxhorario = styled.div`
    margin-top: 20px;
    padding-left: 15%;
    background-color: white;
`
const hora = styled.button`
    margin-top: 22px;
    margin-right: 8px;
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    color: white;
    border: none;
    border-radius: 3px;
`
const p = styled.p`
    color: #293845;
    font-family: 'Roboto';
    font-size: 18px;
`