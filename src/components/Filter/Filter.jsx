export const Filter = ({onChange, filter}) => {
    return (<label>
        Find contacts by name
        <input type="text" name="filter" onChange={onChange} value={filter}/>
    </label>)
}