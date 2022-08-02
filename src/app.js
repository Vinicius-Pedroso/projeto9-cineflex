import cabecario from "./Functions/Functions-aux/cabecario"
import processo from "./Functions/Functions-aux/processo"
import tela1 from "./Functions/tela1";
import tela2 from "./Functions/tela2";
import tela3 from "./Functions/tela3";
import tela4 from "./Functions/tela4";
//import { BrowserRouter as Router, Routes } from "react-router-dom";

export default function App (){
    return (
        <>
            <cabecario/>
            <tela1/>
            <tela2/>
            <tela3/>
            <tela4/>
            <processo/>
        </>
    );
}
