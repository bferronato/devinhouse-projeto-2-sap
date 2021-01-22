import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import ProcessAPI from "../services/process";

export default function SearchBar(props) {
    const { setProcesses } = props


    const [filter, setFilter] = useState()
    const [isClicked, setClicked] = useState(false)

    const searchProcess = async (filter) => {
        const processData = await ProcessAPI.searchProcess(filter)
        setProcesses(processData)
    } 

     useEffect(() => {
        searchProcess(filter)
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
                            <IconButton aria-label="pesquisar">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

        </>
    )

}












