import SearchBar from "../components/searchbar";
import "../pages/home.css";
import FormWindow from "../containers/formwindow"
import Button from '@material-ui/core/Button';


export default function Home() {

    return (
        <>
            <div className="container-home">
                <div className="content-home">
                    <div className="title">Busca de processos</div>
                    <SearchBar type="search" placeholder="Pesquise por uma informação do processo"></SearchBar>
                    <Button></Button>
                    <FormWindow isHome={true}></FormWindow>
                </div>
            </div>

        </>
    )
}