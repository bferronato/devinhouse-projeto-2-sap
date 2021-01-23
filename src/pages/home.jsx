import { useState } from "react";
import SearchBar from "../components/searchbar";
import "../pages/home.css";
import FormWindow from "../containers/formwindow"
import Button from '@material-ui/core/Button';
import { useEffect } from "react"
import ProcessAPI from "../services/process";


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
                    <div className="title">Busca de processos</div>
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