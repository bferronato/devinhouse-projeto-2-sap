import { useState } from "react";
import { Link, Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@material-ui/core';
import RegisterForm from "../components/registerform";

export default function FormWindow(props) {
    const { isHome } = props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log("teste")

    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {isHome ? <p className="subtitle">Voce pode criar um novo processo <Link href="#" onClick={handleClickOpen}> clicando aqui </Link></p>
                : <Box ml={1}><Button onClick={handleClickOpen} variant="outlined">Novo</Button></Box>
            }
            <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Cadastro de Processo</DialogTitle>
                <DialogContent>
                    <RegisterForm></RegisterForm>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                        </Button>
                    <Button onClick={handleClose} color="primary">
                        Salvar
                        </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}
