import { FC } from 'react'

interface IProps {
  Pages:number[]
  paginate: (page:number)=> void
  onNext:()=>void
  onPrev:()=>void
  disabled:boolean
}

const Pagination:FC<IProps> = ({Pages,paginate, onPrev, onNext,disabled}:IProps) => {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li onClick={onPrev} className={`page-item ${disabled ? 'disabled' : ''}`}>
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
        </li>
        {Pages.map((page)=>{
          return <li 
          className="page-item"
          onClick={()=>paginate(page)} 
          key={page}><a className="page-link" href="!#">{page}</a></li>
        })}
        
        {/* <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">2 <span className="sr-only"></span></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li> */}
        <li onClick={onNext} className={`page-item ${disabled ? 'disabled' : ''}`}>
          <a  className="page-link" href='!#'>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
