import React, { useState } from 'react';
import styled from 'styled-components';

export default function tela1() {
    {/* última tentativa de api e router. O resto não deu certo 
        const [movie, setMovie] = useState([]);
    const params = useParams();

    useEffect{() => {
        const request = axios.get{
            `http://mock-api.driven.com.br/api/v7/cineflex/movies/${params.id}/showtimes`
        };
        request.then[(film) => { setMovie{film.data}}];
    }, []}
    
*/}


    return (
        <>
            <selecione text="o filme"/>
            <div class="opcoesfilme">
                <rowfilmes/>
                <rowfilmes/>
                <rowfilmes/>
                <rowfilmes/>
            </div>
        </>
    );
}

const opcoesfilme = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
`;
