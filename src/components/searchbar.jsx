import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { Redirect } from 'react-router-dom'

export default function SearchBar(props) {
    const { searchValue } = props


    const [filter, setFilter] = useState(searchValue)
    const [isRedirect, setIsRedirect] = useState(false)

    const onChangeSearch = (e) => {
        setFilter(e.target.value)
    }

    const onClickSearch = (e) => {
        e.preventDefault()
        setIsRedirect(true)
    }

    // const searchProcess = async (filter) => {
    //     const processData = await ProcessAPI.searchProcess(filter)
    //     setProcesses(processData)
    // } 

    //  useEffect(() => {
    //     searchProcess(filter)
    // }, [filter])


    return (
        <>
        {isRedirect && <Redirect to={`/processos/${filter}`} />}
            <TextField
                variant="outlined"
                size="small"
                placeholder="Pesquise por uma informação do processo"
                fullWidth
                value={filter}
                onChange={onChangeSearch}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton  onClick={onClickSearch} aria-label="pesquisar">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

        </>
    )

}












