import { useState } from "react";
import SearchBar from "../components/searchbar";
import Card from "../components/card";
import "../pages/processos.css";
import FormWindow from "../containers/formwindow";
import { Box } from '@material-ui/core';





export default function Processos() {

    const [processes] = useState([
        {
            id: 1,
            numero: "SOFT 0001/2018",
            assunto: "In vestibulum dis",
            interessado: "Danilo Barbosa Correia",
            descricao: "Etiam aliquam aliquam"
        },
        {
            id: 1,
            numero: "SOFT 0001/2018",
            assunto: "In vestibulum dis",
            interessado: "Danilo Barbosa Correia",
            descricao: "Etiam aliquam aliquam"
        }
    ])


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
                        {processes.map(process => (
                            <Box>
                                <Card
                                    numero={process.numero}
                                    assunto={process.assunto}
                                    interessado={process.interessado}
                                    descricao={process.descricao}>
                                </Card>
                            </Box>

                        ))}
                    </div>
                </div>

            </div>


        </>
    )
}