import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import Formulario from '../Componentes/Formulario';
import React, { useState } from "react";




function PaginaDoCartao() {
    //declare os estados aqui

    const [pagamento, setPagamento] = useState("");
    const [nome, setNome] = useState("");
    const [num, setNum] = useState("");
    const [val, setVal] = useState("");
    const [cvc, setCvc] = useState("");



	const mudarPagamento = (event) => {
	    setPagamento(event.target.value);
	};

	const mudarNome = (event) => {
	    setNome(event.target.value);
	};  

	const mudarNum = (event) => {
	    setNum(event.target.value);
	};

	const mudarVal = (event) => {
	    setVal(event.target.value);
	};

	const mudarCvc = (event) => {
	    setCvc(event.target.value);
	};


    return (
        <LayoutDaPagina>
            <Cartao 
                pagamento={pagamento}
                numero={num}
                nome={nome}
                cvc={cvc}
                validade={val}
            />
            <Formulario
                mudarPagamento={mudarPagamento}
                mudarNum={mudarNum}
                mudarNome={mudarNome}
                mudarCvc={mudarCvc}
                mudarVal={mudarVal}
                
                setPagamento={setPagamento}
                setNum={setNum}
                setNome={setNome}
                setCvc={setCvc}
                setVal={setVal}
            
            />
        </LayoutDaPagina>

    );
}

export default PaginaDoCartao;
