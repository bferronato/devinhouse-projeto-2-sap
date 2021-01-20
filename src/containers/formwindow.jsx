import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { Link, Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, TextField, Grid, Typography } from '@material-ui/core';


export default function FormWindow(props) {
    const { isHome, processes, setProcesses, openModal, setOpenModal } = props;
    const [process, setProcess] = useState({})
    const [interested, setInterested] = useState([])
    const [interest, setInterest] = useState({})
    const history = useHistory();

   

    const handleClickOpen = () => {
        setOpenModal(true);
       
    };
    const handleClose = () => {
        setOpenModal(false);
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

    const handleChange = (event) => {
        const { value, name } = event.target
        //console.log(name, value)~          
            setProcess({ ...process, [name]: value })
       
        
    };

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
        //console.log(processes)
        setOpenModal(false)
        history.push("/processos");
       
    }

    return (
        <>
            {isHome ? <p className="subtitle">Voce pode criar um novo processo <Link href="#" onClick={handleClickOpen}> clicando aqui </Link></p>
                : <Box ml={1}><Button onClick={handleClickOpen} variant="outlined">Novo</Button></Box>
            }
            <Box component="form" >
                <Dialog fullWidth open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Cadastro de Processo</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} direction="column">
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="assunto"
                                    label="Assunto"
                                    margin="dense"
                                    size="small"
                                    variant="standard"
                                    fullWidth
                                    name="assunto"
                                    value={process.assunto}
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
                                    value={process.descricao}
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
