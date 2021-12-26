import { FC } from 'react'
import { baseUrl, bigDataUrl } from '../../constants/constants';
interface IProps{
  loadData:(str:string)=>void
}

const Buttons:FC<IProps> = ({loadData}:IProps) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'20px'}}>
      <button onClick={()=>loadData(baseUrl)} className="btn btn-secondary">Small Data</button>
      <button onClick={()=>loadData(bigDataUrl)}  type="button" className="btn btn-secondary">Big Data</button>
    </div>
  )
}

export default Buttons
