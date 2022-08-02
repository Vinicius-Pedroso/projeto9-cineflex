export default function legenda() {
    return (
        <>
            <legenda>
                <selecionado></selecionado>
                <lugar></lugar>
                <indisponivel></indisponivel>
            </legenda>
            <legenda>
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponível</p>
            </legenda>
        </>
    );
}

const legenda = styled.div`
    margin-left: 20%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    p{
        font-size: 13px;
    }
`
const lugar = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 11px;
    }
`

const selecionado = styled.div`
    width: 26px;
    height: 26px;
    background-color: #8DD7CF;
    border: 1px solid;
    border-color: #1AAE9E;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 11px;
    }
`

const indisponivel = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid;
    background-color: #FBE192;
    border-color: #F7C52B;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 11px;
    }
`