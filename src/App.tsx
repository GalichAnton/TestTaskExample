import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import './App.css'
import Buttons from './components/Buttons/Button';
import Pagination from './components/Pagination/Pagination';
import Table, { IUser } from './components/Table/Table';
import { useServerData } from './hooks/useServerData';



function App() {
  const limitRows = 50
  const [users, isLoading, setUsers, setChoiseData] = useServerData()
  const [disabled, setDisabled] = useState(false)
  const [currentUsers, setCurrentUsers] = useState<IUser[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const loadData = (str: string) => {
    setChoiseData(str)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(users.length/limitRows)
  const Pages: number[] = []
  for (let i = 1; i <= totalPages; i++) {
    Pages.push(i)
  }

  const lastUserIndex = currentPage * limitRows
  const firstUserIndex = lastUserIndex - limitRows
  
  useEffect(()=>{
    setCurrentUsers(users.slice(firstUserIndex,lastUserIndex))
    console.log(currentUsers)
  },[users])

  

  const paginate = (page:number) => {
    setCurrentPage(page)
    setCurrentUsers(users.slice(firstUserIndex,lastUserIndex))
    setDisabled(false)
  }

  const onNext = () => {
    if(currentPage < totalPages){
      setDisabled(false)
      setCurrentPage(prev=> prev + 1)
      return
    }
    setDisabled(true)
  }

  const onPrev= () => {
    if(currentPage > 2){
      setDisabled(false)
      setCurrentPage(prev=> prev - 1)
      return
    }
    setDisabled(true)
  }

  return (
    <div className="container" >
      <Buttons loadData={loadData} />
      <Pagination Pages={Pages} paginate={paginate} onNext={onNext} onPrev={onPrev} disabled={disabled}/>
      {users && <Table isLoading={isLoading} users={currentUsers} setUsers={setCurrentUsers} />}
    </div>
  );
}

export default App;
