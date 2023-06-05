//declare todo o componente formulário e seus inputs. Exporte o formulário.
import { DesignDoForm, Select, Label , Input, Button} from "./estiloDoFormulario";



function FormularioCard (props){

    const botaoEnviar = () => {
        props.setPagamento("")
        props.setNum("")
        props.setNome("")
        props.setCvc("")
        props.setVal("")
        alert("Seu cartão foi enviado com sucesso!")
    }

    
    return (
        <>
            <Select value={props.pagamento} onChange={props.mudarPagamento}>
                <option>Crédito</option>
                <option>Débito</option>
		    </Select>  
        
            <DesignDoForm>
                <Label>Nome</Label>
                <Input 
                    type="text"
                    value={props.nome}
                    onChange={props.mudarNome}
                    ></Input>

                <Label>Numero o cartão</Label>
                <Input
                    value={props.num}
                    onChange={props.mudarNum}
                    ></Input>

                <Label>Validade:</Label>
                <Input
                    value={props.val}
                    onChange={props.mudarVal}
                    ></Input>

                <Label>CVC</Label>
                <Input
                    value={props.cvc}
                    onChange={props.mudarCvc}
                    ></Input>
                <Button type="submit" onClick={() => botaoEnviar()}>Enviar</Button>
            </DesignDoForm> 
        </>
    )
}

export default FormularioCard;