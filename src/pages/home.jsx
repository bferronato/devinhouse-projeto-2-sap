import SearchBar from "../components/searchbar";
import "../pages/home.css";

export default function Home() {
    return (
        <>
            <div className="container-home">
                <div className="content-home">
                <div className="title">Busca de processos</div>
                <SearchBar type="search" placeholder="Pesquise por uma informação do processo"> </SearchBar>
                <p className="subtitle">Voce pode criar um novo processo <span>clicando aqui</span></p>
                </div>
            </div>
        </>
    )
}