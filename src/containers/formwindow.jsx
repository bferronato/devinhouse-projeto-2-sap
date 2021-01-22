import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link, Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, TextField, Grid, Typography } from '@material-ui/core';
import ProcessAPI from "../services/process";
import moment from 'moment';



export default function FormWindow(props) {
    const { isHome,
        processes,
        setProcesses,
        openModal,
        setOpenModal,
        process,
        setProcess,
        setViewProcess,
        interested,
        setInterested,
    } = props;

    const [interest, setInterest] = useState({})
    const history = useHistory();

    useEffect(() => {
        setProcess({ ...process, interessados: interested })
    }, [interested]);

    const handleClickOpen = () => {
        setOpenModal(true);
        setProcess({ assunto: "", descricao: "", data: moment().format('YYYY-MM-DD') , numero: "SOFT 0001/2018" })
        setInterested([{ id: 0, nome: ""}]) 

    };
    const handleClose = () => {
        setOpenModal(false);
    };

    const handleChangeInterest = (event) => {
        const { value, name } = event.target
        //console.log(name, value)
        setInterest({ ...interest, [name]: value })
    };

    const handleAddToInterested = () => {
        //console.log(interest)
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
        //console.log(name, value)   
        setProcess({ ...process, [name]: value })
    };

    const handleSubmitProcess = (event) => {
        
        const existProcess = processes.some(item => item.id === process.id)
      
        if (existProcess) {
            const result = processes.map(item => {
                if (item.id === process.id) {
                    return process
                }
                else {
                    return item
                }
            })
            setProcesses(result)
            setViewProcess({
                id: process.id,
                numero: process.numero,
                assunto: process.assunto,
                data: process.data,
                interessados: interested,
                descricao: process.descricao
            })
            ProcessAPI.updateProcess(process, process.id)
        } else {
            setProcesses([
                ...processes,
                {
                    id: Math.random().toString(36).substr(2, 9),
                    interessados: interested,
                    ...process,
                }
            ])
            ProcessAPI.insertProcess(process)
            setProcess({ id: 0, assunto: "", data: "", interessados: [], descricao: "" });
            setInterested([])
        }
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
                                {interested.map(item => (
                                    <Typography key={item.id}>
                                        {item.nome}
                                    </Typography>
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
                                        name="nome"
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

                        <Button variant="contained" color="primary" onClick={handleSubmitProcess}>
                            Salvar
                        </Button>
                    </DialogActions>
                </Dialog>

            </Box>

        </>
    )
}
