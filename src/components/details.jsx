import { Grid, Typography } from '@material-ui/core';

export default function Details() {
    return (

        <Grid container spacing={2}>
            <Grid container item xs={12} spacing={2}>
                <Grid item xs={2}><img src="#" alt="" className=""/></Grid>
                <Grid container item xs={10}>
                    <Grid container item xs={12}>
                        <Grid item xs={5}><Typography variant="subtitle1">Processo</Typography><Typography variant="body1">SOFT 0001/2018</Typography></Grid>
                        <Grid item xs={6}><Typography variant="subtitle1">Data</Typography><Typography variant="body1">07/08/2018</Typography></Grid>
                        <Grid item xs={1}>x</Grid>
                    </Grid>
                    <Grid item xs={12}><Typography variant="subtitle1">Assunto</Typography><Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}><Typography variant="subtitle1">Interessados</Typography><Typography variant="body1">Danilo Barbosa</Typography>
                <Typography variant="body1">Nicolas Castro</Typography><Typography variant="body1">Manuela Oliveira</Typography>
            </Grid>
            <Grid item xs={12}><Typography variant="subtitle1">Descrição</Typography><Typography variant="body1">Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.Qui deserunt sequi dignissimos eos repellendus consequatur
            quidem veritatis totam architecto perferendis quibusdam itaque unde fuga,
            harum, eveniet incidunt aliquid modi quas.</Typography></Grid>
        </Grid>
    )
}
