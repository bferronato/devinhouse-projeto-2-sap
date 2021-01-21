import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar() {

    const handleChange = (event) => {
        const { value, name } = event.target
        console.log(name, value)
        //searchTerm({ [name]: value })

    }

    const handleClickSearch = () => {
        console.log("teste")

    };


    return (
        <>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Pesquise por uma informação do processo"
                fullWidth
                onChange={handleChange}
                //value={searchTerm}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="pesquisar" onClick={handleClickSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

        </>
    )

}












