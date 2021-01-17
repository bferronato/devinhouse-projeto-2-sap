import "../components/button.css";


export default function Button(props) {
    const { label, variation } = props
   
    return (
        <>
           <button className={variation} type="button">{label}</button>
           
        </>
    )
}