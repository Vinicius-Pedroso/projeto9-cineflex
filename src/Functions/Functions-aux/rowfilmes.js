import React from 'react';
import styled from 'styled-components';

export default function rowfilmes() {
    return (
        <row>
            <img src="img/cafe.jpg" />
            <img src="img/cafe.jpg" />
        </row>
    );
}

const row = styled.div`
    background-color: #E5E5E5;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 35px;

    img {
        width: 129px;
        height: 193px;
    }
`;