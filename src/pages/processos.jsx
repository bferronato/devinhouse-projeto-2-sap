import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import SearchBar from "../components/searchbar";
import Card from "../components/processcard";
import "../pages/processos.css";
import FormWindow from "../containers/formwindow";
import { Box, Typography } from '@material-ui/core';
import ProcessDetails from "../components/processdetails";
import ProcessAPI from "../services/process";
import { Grid } from "@material-ui/core";
import Message from "../components/message"

export default function Processos() {
    const [processes, setProcesses] = useState([])
    const [interested, setInterested] = useState([])
    const [openDetails, setOpenDetails] = useState("none")
    const [openModal, setOpenModal] = useState(false)
    const [process, setProcess] = useState({})
    const [viewProcess, setViewProcess] = useState({})
    const { searchValue } = useParams()
    const [openMessage, setOpenMessage] = useState(false);
    const [messageText, setMessageText] = useState("")

    useEffect(() => {
        if (searchValue) {
            loadProcess(searchValue)
        } else {
            loadProcess()
        }
    }, [])

    useEffect(() => {
        if (!searchValue) {
            loadProcess()
        }
    }, [process])

    const loadProcess = async (searchText) => {
        const processData = await ProcessAPI.searchProcess(searchText)
        setProcesses(processData)
    }


    return (
        <>
            <Box mt={4} mx={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={2}><Typography variant="h5">
                        Busca de Processos</Typography>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} lg={10}>
                        <Grid container item xs={12}>
                            <Grid item xs={11} sm={9} md={6} lg={4}>
                                <SearchBar
                                    setProcesses={setProcesses}
                                    searchValue={searchValue}
                                >
                                </SearchBar>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
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
                                    setOpenMessage={setOpenMessage}
                                    setMessageText={setMessageText}
                                >
                                </FormWindow>
                            </Grid>
                        </Grid>
                        <Box className="flex" style={{ width:"100%"}}>
                            <Box item style={{ width:"100%"}}>
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
                            </Box>
                            <Box className="details-content" item style={{ display: openDetails }}>
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
                                    setOpenMessage={setOpenMessage}
                                    setMessageText={setMessageText}
                                >
                                </ProcessDetails>

                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Message openMessage={openMessage} setOpenMessage={setOpenMessage} messageText={messageText}></Message>
        </>
    )
}