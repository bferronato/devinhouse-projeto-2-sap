import "../components/card.css";


export default function Card(props) {
    const {numero, assunto, interessado, descricao} = props
   
    return (

        <div className="card">
            
                
                    <div><img src="#" alt="" className="" /></div>
                    <div><p>Número</p><p>{numero}</p></div>
                    <div><p>Assunto</p><p>{assunto}</p></div>
                    <div><p>Interessado</p><p>{interessado}</p></div>
                    <div><p>Descrição</p><p>{descricao}</p></div>

               

        </div>

    )
}
