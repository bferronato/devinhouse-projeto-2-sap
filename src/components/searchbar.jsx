import "../components/searchbar.css"

export default function SearchBar(props) {
    const { name, label, type, placeholder } = props;
    return (
        <>
            <label for="process-search">{label}</label>

            <div className="searchbar">
                <input type={type} id="process-search" name={name} placeholder={placeholder}/>
                <button><img src="img/search.svg" alt="" /></button>
            </div>
        </>
    )
}