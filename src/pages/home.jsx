import SearchBar from "../components/searchbar";

export default function Home () {
    return (
        <>
        <div>Busca de processos</div>
        <SearchBar type="search"> </SearchBar>
        <p>Voce pode criar um novo processo <span>clicando aqui</span></p>
        </>
    )
}