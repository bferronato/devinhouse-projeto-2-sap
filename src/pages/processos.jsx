import { useState } from "react";
import SearchBar from "../components/searchbar";
import Card from "../components/processcard";
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
            interessados: [{ id: 1, name: "Julia Barros Correia" }, { id: 2, name: "Pedro Barros Correia" }],
            descricao: "Etiam aliquam aliquam",
            data: "15/08/2001"
        },
        {
            id: 2,
            numero: "SOFT 0002/2018",
            assunto: "In vestibulum dis",
            interessados: [{ id: 3, name: "Julia Barros Correia" }],
            descricao: "Etiam aliquam aliquam",
            data: "15/08/2001"
        },
        {
            id: 3,
            numero: "SOFT 0003/2018",
            assunto: "In vestibulum dis",
            interessados: [{ id: 4, name: "Maria Joana" }],
            descricao: "Etiam aliquam aliquam",
            data: "15/08/2001"
        }
    ])
    const [viewProcess, setViewProcess] = useState({})
    const [openDetails, setOpenDetails] = useState("none")
    const [openModal, setOpenModal] = useState(false)
    const [process,setProcess] = useState({})
    return (
        <>
            <div className="container flex">
                <div className="page-title">
                    Busca de Processos
                </div>

                <div className="page-content">
                    <div className="flex search-container">
                        <SearchBar type="search">
                        </SearchBar>
                        <FormWindow
                            isHome={false}
                            processes={processes}
                            setProcesses={setProcesses}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            process={process}
                            setProcess={setProcesses}
                        >
                        </FormWindow>

                    </div>
                    <div className="flex">
                        <div className="card-list">
                            {processes.map(viewProcess => (
                                <Box key={viewProcess.id} mt={3}>
                                    <Card
                                        id={viewProcess.id}
                                        numero={viewProcess.numero}
                                        assunto={viewProcess.assunto}
                                        interessados={viewProcess.interessados}
                                        descricao={viewProcess.descricao}
                                        setViewProcess={setViewProcess}
                                        viewProcess={viewProcess}
                                        openDetails={openDetails}
                                        setOpenDetails={setOpenDetails}
                                    >
                                    </Card>
                                </Box>
                            ))}
                        </div>
                        <div className="details-content" style={{ display: openDetails }}>
                            <ProcessDetails
                                viewProcess={viewProcess}
                                processes={processes}
                                setProcesses={setProcesses}
                                openDetails={openDetails}
                                setOpenDetails={setOpenDetails}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                                process={process}
                                setProcess={setProcesses}
                            >

                            </ProcessDetails>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}