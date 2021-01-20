
import { Typography, Box, Paper } from "@material-ui/core";


export default function Card(props) {
    const { numero, assunto, interessados, descricao } = props
    console.log(interessados)

    return (
        <>
            <Box display="flex" flexWrap="wrap" component={Paper} marginTop={3} elevation={3}>

                <Box><img style={{padding: 10, width:70, height:70}} src="#" alt="" className="" /></Box>
                <Box m={2}><Typography gutterBottom>Número</Typography><Typography gutterBottom>{numero}</Typography></Box>
                <Box m={2}> <Typography gutterBottom>Assunto</Typography><Typography gutterBottom>{assunto}</Typography></Box>
                <Box m={2}><Typography gutterBottom>Interessado</Typography>{interessados.map(interessado => (
                    <Typography gutterBottom key={interessado.id}>{interessado.name}</Typography>
                ))}</Box>
                <Box m={2}><Typography gutterBottom>Descrição</Typography><Typography gutterBottom>{descricao}</Typography></Box>
            </Box>

        </>
    )
}

