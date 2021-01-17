import { FormControl, TextField } from '@material-ui/core';
import Button from "./button";
import "../components/registerform.css";

export default function RegisterForm() {

    return (
        <>
        <div className="title-form">Cadastro de processo</div>
        <div className="form-container">
            <FormControl>
                <TextField
                    id="assunto"
                    label="Assunto"
                    multiline="multiline"
                    margin="dense"
                    size="small"
                    variant="standard"
                    fullWidth
                     />
                
                <TextField
                    id="interessados"
                    label="Interessados"
                    multiline="multiline"
                    margin="dense"
                    size="small"
                    variant="standard" 
                    fullWidth
                    />
                <TextField
                    id="novoInteressado"
                    label="Novo Interessado"
                    multiline="multiline"
                    margin="dense"
                    size="small"
                    variant="standard"
                    fullWidth
                    />
                <TextField
                    id="descricao"
                    label="Descrição"
                    multiline="multiline"
                    margin="dense"
                    size="small"
                    variant="standard" 
                    fullWidth
                    />
            </FormControl>
            <div className="btn-add">
            <Button label="Adicionar" variation="grey"></Button>
            </div>
            </div>
            <div className="btn-save">
            <Button label="Salvar" variation="blue"></Button>
            </div>
        </>
    )
}

