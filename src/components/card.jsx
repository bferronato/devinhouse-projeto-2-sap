import "../components/card.css";


export default function Card(props) {
    const { numero, assunto, interessados, descricao } = props
    console.log(interessados)

    return (

        <div className="card">


            <div style={{width:"10%"}}><img src="#" alt="" className="" /></div>
            <div style={{width:"20%"}}><p>Número</p><p>{numero}</p></div>
            <div style={{width:"20%"}}><p>Assunto</p><p>{assunto}</p></div>
            <div style={{width:"30%"}}><p>Interessado</p>{interessados.map(interessado => (
                <p key={interessado.id}>{interessado.name}</p>
            ))} </div>
            <div style={{width:"20%"}}><p>Descrição</p><p>{descricao}</p></div>

        </div>

    )
}

{/* {processes.map(process => (
                            <Box key={process.id}>
                                <Card
                                    numero={process.numero}
                                    assunto={process.assunto}
                                    interessado={process.interessados}
                                    descricao={process.descricao}
                                    >
                                </Card>
                            </Box>
                        ))} */}