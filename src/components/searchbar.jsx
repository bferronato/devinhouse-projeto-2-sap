import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import ProcessAPI from "../services/process";

export default function SearchBar(props) {
    const { setProcesses } = props


    const [filter, setFilter] = useState()

    const filterData = () => {
        console.log("filtro", filter)
    }

    useEffect(() => {
        const result = ProcessAPI.searchProcess(filter)
        setProcesses(result)

    }, [filter])

    return (
        <>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Pesquise por uma informação do processo"
                fullWidth
                onChange={(e) => setFilter(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="pesquisar" onClick={filterData}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

        </>
    )

}

/* const Busca = props => {

    const { filtrarDados } = props;

    const [ filtro, setFiltro ] = useState();

    return (
        <Grid container spacing={2} >
            <Grid item xs={11} >
                <Grid item >
                    <TextField variant="outlined" onChange={(e) => setFiltro(e.target.value)} size="small">Novo</TextField>
                    <Button variant="contained" onClick={() => filtrarDados(filtro)}>Buscar</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Busca; */












