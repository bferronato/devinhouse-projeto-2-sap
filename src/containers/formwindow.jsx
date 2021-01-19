import { useState } from "react";
import { Link, Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, TextField, Grid, Typography } from '@material-ui/core';

export default function FormWindow(props) {
    const { isHome, processes, setProcesses, process, setProcess } = props;
    const [open, setOpen] = useState(false);
    const [interested, setInterested] = useState([{ id: 1, name: "Julia Barros Correia" }, { id: 2, name: "Antônio Ribeiro Fernandes" }])
    const [interest, setInterest] = useState({})

    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeInterest = (event) => {
        const { value, name } = event.target
        console.log(name, value)
        setInterest({ ...interest, [name]: value })
    };

    const handleAddToInterested = () => {
        setInterested([
            ...interested,
            {
                id: Math.random().toString(36).substr(2, 9),
                ...interest,
            }
        ])
    }

    const handleAddProcess = () => {
        setProcesses([
            ...processes,
            {
                id: Math.random().toString(36).substr(2, 9),
                numero: "SOFT 0001/2018",
                interessados: interested,
                ...process,
            }
        ])
        console.log(processes)
        setOpen(false)
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        console.log(name, value)
        setProcess({ ...process, [name]: value })
    };


    return (
        <>
            {isHome ? <p className="subtitle">Voce pode criar um novo processo <Link href="#" onClick={handleClickOpen}> clicando aqui </Link></p>
                : <Box ml={1}><Button onClick={handleClickOpen} variant="outlined">Novo</Button></Box>
            }
            <Box component="form" >
                <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Cadastro de Processo</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} direction="column">
                            <Grid item xs={12}>
                                <TextField
                                    id="assunto"
                                    label="Assunto"
                                    margin="dense"
                                    size="small"
                                    variant="standard"
                                    fullWidth
                                    name="assunto"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Interessados</Typography>
                                {interested.map(interest => (
                                    <Typography key={interest.id}> {interest.name}</Typography>
                                ))}
                            </Grid>
                            <Grid container item alignItems="flex-end">
                                <Grid item xs={8}>
                                    <TextField
                                        id="name"
                                        label="Novo Interessado"
                                        margin="dense"
                                        size="small"
                                        variant="standard"
                                        fullWidth
                                        name="name"
                                        onChange={handleChangeInterest}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Box ml={1}>
                                        <Button
                                            onClick={handleAddToInterested}
                                            variant="contained">Adicionar
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="descricao"
                                    label="Descrição"
                                    margin="dense"
                                    size="small"
                                    variant="standard"
                                    fullWidth
                                    name="descricao"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleAddProcess}>
                            Salvar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>

        </>
    )
}
