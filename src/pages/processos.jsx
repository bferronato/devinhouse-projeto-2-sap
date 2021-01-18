import SearchBar from "../components/searchbar";
import Card from "../components/card";
import "../pages/processos.css";
import FormWindow from "../components/formwindow";



export default function Processos() {
    return (
        <>
            <div className="container flex">
                <div className="page-title">
                    Busca de Processos
                </div>

                <div className="page-content">
                    <div className="flex search-container">
                        <SearchBar type="search"> </SearchBar>
                        <FormWindow isHome={false}></FormWindow>
                        
                    </div>
                    <div className="card-list">
                        <Card></Card>
                    </div>
                </div>

            </div>


        </>
    )
}