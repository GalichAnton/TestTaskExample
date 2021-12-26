import { ChangeEvent, FC, useState } from 'react'
interface IProps{
  onSearch:(str:string)=>void
}

const Search:FC<IProps> = ({onSearch}:IProps) => {
  const [inputValue, setInputValue] = useState('')
  const onChangeValue = (e:ChangeEvent<HTMLInputElement>) =>{
    setInputValue(e.currentTarget.value)
  } 
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Recipient's username" value={inputValue} onChange={onChangeValue}/>
      <div className="input-group-append">
        <button 
        className="btn btn-outline-secondary" 
        type="button" 
        id="button-addon2"
        onClick={()=>onSearch(inputValue)}
        >Button</button>
      </div>
    </div>
  )
}

export default Search
