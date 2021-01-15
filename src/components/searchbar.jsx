export default function SearchBar(props) {
    const {name, label, type } = props;
    return (
        <>
            <label for="process-search">{label}</label>
            <input type={type} id="process-search" name={name}
                aria-label="Busque o processo desejado" />
        </>
    )
}