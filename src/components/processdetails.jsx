import { Grid, Typography, Card, Box, IconButton, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import ProcessAPI from "../services/process"


export default function ProcessDetails(props) {
    const { viewProcess,
        setProcess,
        processes,
        setProcesses,
        setOpenDetails,
        setOpenModal,
        setInterested,
        setOpenMessage,
        setMessageText
    } = props

    const handleRemove = (id) => {
        const result = processes.filter(item => item.id !== id)
        setProcesses(result)
        setOpenDetails("none")
        ProcessAPI.deleteProcess(id)
        setMessageText("Removido com sucesso!")
        setOpenMessage(true)
    }

    const handleEditProcess = (id) => {
        const processEditing = processes.find(item => item.id === id)
        setProcess(processEditing)
        setInterested(processEditing.interessados)
        setOpenModal(true)

    }

    const handleCloseDetails = () => {
        setOpenDetails("none")
    }

    return (
        <>
            <Card >
                <Box p={2}>
                    <Grid container spacing={2} >
                        <Grid style={{ position: "relative" }} container item xs={12} spacing={2}>
                            <IconButton onClick={handleCloseDetails} style={{ position: "absolute", right: 0 }}><CloseIcon /></IconButton>
                            <Grid item xs={12} sm={12} md={12} lg={3}><img style={{ width: 84, height: 84 }} src="img/placeholder.png" alt="#" /></Grid>
                            <Grid container item xs={12} sm={12} md={12} lg={9} >
                                <Grid container item xs={12} >
                                    <Grid item xs={12} sm={12} md={12} lg={5}>
                                        <Typography variant="subtitle1" style={{ fontSize: '14px', fontWeight: "bold" }}>Processo</Typography>
                                        <Typography variant="body1" style={{ fontSize: '24px' }}>{viewProcess.numero}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6}>
                                        <Typography variant="subtitle1" style={{ fontSize: '14px', fontWeight: "bold" }}>Data</Typography>
                                        <Typography variant="body1" style={{ fontSize: '24px' }}>{viewProcess.data}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" style={{ fontSize: '14px', fontWeight: "bold" }}>Assunto</Typography>
                                    <Typography variant="body1" style={{ fontSize: '24px' }}>{viewProcess.assunto}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" style={{ fontSize: '14px', fontWeight: "bold" }}>Interessados</Typography>

                            {viewProcess.interessados ? viewProcess.interessados.map(interessado => (
                                <Typography style={{ fontSize: '16px' }} key={interessado.id}>{interessado.nome}</Typography>
                            ))
                                : ""
                            }

                        </Grid>
                        <Grid item xs={12}>
                            <Typography noWrap variant="subtitle1" style={{ fontSize: '14px', fontWeight: "bold" }}>Descrição</Typography>
                            <Typography variant="body1" style={{ fontSize: '16px' }}>{viewProcess.descricao}</Typography>
                        </Grid>
                        <Grid container justify="flex-end" >
                            <Box style={{ marginRight: 5 }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    style={{ fontSize: '14px' }}
                                    onClick={() => handleRemove(viewProcess.id)}
                                >
                                    Remover
                            </Button>
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ fontSize: '14px' }}
                                onClick={() => handleEditProcess(viewProcess.id)}
                            >
                                Editar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </>
    )
}
