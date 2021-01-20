import "../components/searchbar.css"
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar() {

    return (
        <>
            <OutlinedInput className="searchbar"
            
                placeholder="Pesquise por uma informação do processo"
                fullWidth
                endAdornment=
                {<InputAdornment position="end">
                    <IconButton className="search-button" aria-label="pesquisar">
                        <SearchIcon></SearchIcon>
                    </IconButton>
                </InputAdornment>}
            />
        </>
    )

}












