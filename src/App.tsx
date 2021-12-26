import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import './App.css'
import Buttons from './components/Buttons/Button';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Table, { IUser } from './components/Table/Table';
import { useServerData } from './hooks/useServerData';



function App() {
  const limitRows = 50
  const [users, isLoading, setUsers, setChoiseData] = useServerData()
  const [disabled, setDisabled] = useState(false)
  const [currentUsers, setCurrentUsers] = useState<IUser[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const loadData = (str: string) => {
    setChoiseData(str)
    setCurrentPage(1)
  }

  const lastUserIndex = currentPage * limitRows
  const firstUserIndex = lastUserIndex - limitRows

  const getFilteredData = () => {
    if (searchText === '') {
      return users
    }
    return users.filter(item => {
      return (item.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase()) 
      )
    })
  }

  const filteredData = getFilteredData()
  console.log(filteredData)
  const totalPages = Math.ceil(filteredData.length / limitRows)
  const Pages: number[] = []
  for (let i = 1; i <= totalPages; i++) {
    Pages.push(i)
  }

  useEffect(() => {
    setCurrentUsers(filteredData.slice(firstUserIndex, lastUserIndex))
  }, [users,searchText])



  const paginate = (page: number) => {
    setCurrentPage(page)
    setCurrentUsers(filteredData.slice(firstUserIndex, lastUserIndex))
    setDisabled(false)
  }

  const onNext = () => {
    if (currentPage < totalPages) {
      setDisabled(false)
      setCurrentPage(prev => prev + 1)
      return
    }
    setDisabled(true)
  }

  const onPrev = () => {
    if (currentPage > 2) {
      setDisabled(false)
      setCurrentPage(prev => prev - 1)
      return
    }
    setDisabled(true)
  }

  const onSearch = (str: string) => {
    setSearchText(str)
  }

  return (
    <div className="container" >
      <Buttons loadData={loadData} />
      <Search onSearch={onSearch} />
      <Pagination Pages={Pages} paginate={paginate} onNext={onNext} onPrev={onPrev} disabled={disabled} />
      {users && <Table isLoading={isLoading} users={currentUsers} setUsers={setCurrentUsers} />}
    </div>
  );
}

export default App;
