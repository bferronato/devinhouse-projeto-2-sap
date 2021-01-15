import SearchBar from "../components/searchbar";
import Card from "../components/card";
import Button from "../components/button";
import "../pages/processos.css";

export default function Processos() {
    return (
        <>
            <div className="container flex">
                <div className="page-title">
                    Busca de Processos
                </div>
                
                <div className="page-content">
                    <div className="flex">
                    <SearchBar type="search"> </SearchBar>
                    <Button variation="white new" label="Novo"></Button>
                    </div>
                    <div className="card-list">
                        <Card></Card>
                    </div>
                </div>
            </div>

        </>
    )
}