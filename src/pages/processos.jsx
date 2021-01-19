import { useState } from "react";
import SearchBar from "../components/searchbar";
import Card from "../components/card";
import "../pages/processos.css";
import FormWindow from "../containers/formwindow";
import { Box } from '@material-ui/core';
import ProcessDetails from "../components/processdetails";


export default function Processos() {

    const [processes, setProcesses] = useState([
        {
            id: 1,
            numero: "SOFT 0001/2018",
            assunto: "In vestibulum dis",
            interessados: [{ id: 1, name: "Julia Barros Correia" }],
            descricao: "Etiam aliquam aliquam"
        },
        {
            id: 2,
            numero: "SOFT 0002/2018",
            assunto: "In vestibulum dis",
            interessados: [{ id: 2, name: "Julia Barros Correia" }],
            descricao: "Etiam aliquam aliquam"
        },
        {
            id: 3,
            numero: "SOFT 0003/2018",
            assunto: "In vestibulum dis",
            interessados: [{ id: 3, name: "Julia Barros Correia" }],
            descricao: "Etiam aliquam aliquam"
        }
    ])
    const [process, setProcess] = useState({})

    return (
        <>
            <div className="container flex">
                <div className="page-title">
                    Busca de Processos
                </div>

                <div className="page-content">
                    <div className="flex search-container">
                        <SearchBar type="search"> </SearchBar>
                        <FormWindow isHome={false} processes={processes} setProcesses={setProcesses} process={process} setProcess={setProcess}></FormWindow>

                    </div>
                    <div className="card-list">
                        {processes.map(process => (
                            <Box key={process.id}>
                                <Card
                                    numero={process.numero}
                                    assunto={process.assunto}
                                    interessados={process.interessados}
                                    descricao={process.descricao}
                                >
                                </Card>
                            </Box>
                        ))}
                    </div>

                </div>
                <ProcessDetails></ProcessDetails>
            </div>
        </>
    )
}