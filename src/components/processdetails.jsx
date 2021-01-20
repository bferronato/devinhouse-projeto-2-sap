import { Grid, Typography, Card, Box, Button } from '@material-ui/core';

export default function ProcessDetails(props) {
    const { viewProcess, processes, setProcesses, setOpenDetails, setOpenModal } = props
    
    const handleRemove = (id) => {
         const result = processes.filter(item => item.id !== id)
         setProcesses(result)
         setOpenDetails("none")
     }

     const handleEditProcess = (process) => {
         setOpenModal(true)
        
    }

    return (
        <Card >
            <Box p={2}>
                <Grid container spacing={2} >
                    <Grid style={{ position: "relative" }} container item xs={12} spacing={2}>
                        <Box style={{ position: "absolute", right: 0 }}>x</Box>
                        <Grid item xs={12} sm={12} md={3} lg={3}><img style={{ width: 70, height: 70 }} src="#" alt="" className="" /></Grid>
                        <Grid container item xs={12} sm={12} md={9} lg={9} >
                            <Grid container item xs={12} >
                                <Grid item xs={12} sm={12} md={5} lg={5}>
                                    <Typography variant="subtitle1">Processo</Typography>
                                    <Typography variant="body1">{viewProcess.numero}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Typography variant="subtitle1">Data</Typography>
                                    <Typography variant="body1">{viewProcess.data}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Assunto</Typography>
                                <Typography variant="body1">{viewProcess.assunto}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Interessados</Typography>

                        {viewProcess.interessados ? viewProcess.interessados.map(interessado => (
                            <Typography gutterBottom key={interessado.id}>{interessado.name}</Typography>
                        ))
                            : ""
                        }

                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Descrição</Typography>
                        <Typography variant="body1">{viewProcess.descricao}</Typography>
                    </Grid>
                    <Grid container justify="flex-end" >
                        <Box style={{ marginRight: 5 }}>
                            <Button variant="outlined" onClick={() => handleRemove(viewProcess.id)}>Remover</Button>
                        </Box>
                        <Button variant="outlined" onClick={() => handleEditProcess(viewProcess)}>Editar</Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>

    )
}
