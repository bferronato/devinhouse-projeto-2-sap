import { useState } from "react";
import SearchBar from "../components/searchbar";
import "../pages/home.css";
import FormWindow from "../containers/formwindow"
import { useEffect } from "react"
import ProcessAPI from "../services/process";
import { Typography, Box } from "@material-ui/core";


export default function Home() {
    const [processes, setProcesses] = useState([])
    const [process, setProcess] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const [interested, setInterested] = useState([])
    const searchValue = ""

    useEffect(() => {
        loadProcess()
    }, [])

    const loadProcess = async () => {
        const processData = await ProcessAPI.searchProcess()
        console.log(processData)
        setProcesses(processData)
    }

    return (
        <>
            <div className="container-home">
                <div className="content-home">
                    <Box mb={2}><Typography style={{ fontSize: '24px' }} variant="h5" color="primary">Busca de processos</Typography></Box>
                    <SearchBar 
                    type="search" 
                    placeholder="Pesquise por uma informação do processo"
                    setProcesses={setProcesses}
                    searchValue={searchValue}
                    >
                    </SearchBar>    
                    <FormWindow 
                    isHome={true} 
                    processes={processes}
                    setProcesses={setProcesses}
                    process={process} 
                    interested={interested}
                    setInterested={setInterested}
                    setProcess={setProcess} 
                    setOpenModal={setOpenModal} 
                    openModal={openModal}
                    ></FormWindow>
                </div>
            </div>

        </>
    )
}