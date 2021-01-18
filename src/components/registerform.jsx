import { TextField, Button, Grid, Typography, Box } from '@material-ui/core';


export default function RegisterForm() {
    return (
        <>
            <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                    <TextField
                        id="assunto"
                        label="Assunto"
                        multiline="multiline"
                        margin="dense"
                        size="small"
                        variant="standard"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Interessados
                    </Typography>
                    <Typography>
                        Julia barros
                    </Typography>
                    <Typography>
                        Julia barros
                    </Typography>

                </Grid>
                <Grid container item alignItems="flex-end">
                    <Grid item xs={8}>
                        <TextField
                            id="novoInteressado"
                            label="Novo Interessado"
                            multiline="multiline"
                            margin="dense"
                            size="small"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                    <Grid xs={4}>
                        <Box ml={1}>
                            <Button variant="contained">Adicionar
                        </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="descricao"
                        label="Descrição"
                        multiline="multiline"
                        margin="dense"
                        size="small"
                        variant="standard"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </>
    )
}

