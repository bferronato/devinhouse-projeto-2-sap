import { useState } from "react";
import SearchBar from "../components/searchbar";
import Card from "../components/processcard";
import "../pages/processos.css";
import FormWindow from "../containers/formwindow";
import { Box } from '@material-ui/core';
import ProcessDetails from "../components/processdetails";
import { useEffect } from "react"
import ProcessAPI from "../services/process";
import { useParams } from "react-router-dom";



export default function Processos() {
    const [processes, setProcesses] = useState([])   
    const [interested, setInterested] = useState([])
    const [openDetails, setOpenDetails] = useState("none")
    const [openModal, setOpenModal] = useState(false)
    const [process, setProcess] = useState({})
    const [viewProcess, setViewProcess] = useState({})
    const { searchValue } = useParams();

   useEffect(() => {
       if(searchValue) {
        loadProcess(searchValue)
       } else {
        loadProcess()
       }
    }, [])

    useEffect(() => {
        if(!searchValue) {
        loadProcess()
        }
    }, [process])

    const loadProcess = async (searchText) => {
        const processData = await ProcessAPI.searchProcess(searchText)
        setProcesses(processData)
    } 


    return (
        <>
            <div className="container flex">
                <div className="page-title">
                    Busca de Processos
                </div>

                <div className="page-content">
                    <div className="flex search-container">
                        <SearchBar type="search"
                         setProcesses={setProcesses}
                         searchValue={searchValue}
                         >
                        </SearchBar>
                        <FormWindow
                            isHome={false}
                            processes={processes}
                            setProcesses={setProcesses}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            process={process}
                            setProcess={setProcess}
                            setViewProcess={setViewProcess}
                            interested={interested}
                            setInterested={setInterested}
                        >
                        </FormWindow>

                    </div>
                    <div className="flex">
                        <div className="card-list">
                             {processes.length > 0 ? processes.map(item => (
                                <Box key={item.id} mt={3}>
                                    <Card
                                        setViewProcess={setViewProcess}
                                        viewProcess={item}
                                        openDetails={openDetails}
                                        setOpenDetails={setOpenDetails}
                                    >
                                    </Card>
                                </Box>
                            ))
                        : <Box pt={4}> Nenhum processo encontrado </Box>
                        }
                        </div>
                        <div className="details-content" style={{ display: openDetails }}>
                            <ProcessDetails
                                viewProcess={viewProcess}
                                setViewProcess={setViewProcess}
                                setProcess={setProcess}
                                processes={processes}
                                setProcesses={setProcesses}
                                openDetails={openDetails}
                                setOpenDetails={setOpenDetails}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                                setInterested={setInterested}
                            >
                            </ProcessDetails>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}