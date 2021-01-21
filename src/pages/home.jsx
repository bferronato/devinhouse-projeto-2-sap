import { useState } from "react";
import SearchBar from "../components/searchbar";
import "../pages/home.css";
import FormWindow from "../containers/formwindow"
import Button from '@material-ui/core/Button';


export default function Home() {
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
    const [openModal, setOpenModal] = useState(false)
   
    return (
        <>
            <div className="container-home">
                <div className="content-home">
                    <div className="title">Busca de processos</div>
                    <SearchBar type="search" placeholder="Pesquise por uma informação do processo"></SearchBar>
                    <Button></Button>
                    <FormWindow isHome={true} processes={processes} setProcesses={setProcesses} process={process} setProcess={setProcess} setOpenModal={setOpenModal} openModal={openModal}></FormWindow>
                </div>
            </div>

        </>
    )
}