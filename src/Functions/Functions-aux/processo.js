import React from 'react';
import styled from 'styled-components';

export default function processo() {
    return (
        <progresso>
            <caixa>
                <img src="img/box.jpg" />
            </caixa>
            <textfilme>
                <p>Fiume du kafé</p>
            </textfilme>
        </progresso>
    );
}

const progresso = styled.span`
    border: solid;
    border-width: 1px;
    border-color: #9EADBA;
    width: 100%;
    height: 117px;
    padding-left: 15%;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0px;
    display: flex;
    align-items: center;
`

const caixa = styled.div`
    height: 88px;
    width: 64px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin: 8px,8px,8px,8px;
        background-color: white;
        width: 48px;
        height: 72px;
    }
`

const textfilme = styled.div`
    width: 100%;

    p {
        margin-left: 20px;
        color: #293845;
        font-size: 26px;
    }
`