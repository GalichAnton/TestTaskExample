import axios from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IUser } from '../components/Table/Table'



export const useServerData = (): [
  users: IUser[],
  isLoading: boolean,
  setUsers: Dispatch<SetStateAction<IUser[]>>,
  setChoiseData: Dispatch<SetStateAction<string>>] => {
  const [users, setUsers] = useState<IUser[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [choiseData, setChoiseData] = useState<string>('')

  useEffect(() => {
    if (choiseData) {
      const getData = async () => {
        setIsLoading(true)
        await axios.get(choiseData).then(res => {
          setUsers(res.data)
          setIsLoading(false)
        }).catch(e => {
          console.log('Something goin wrong', e)
          setIsLoading(false)
        })
      }
      getData()
    }
  }, [choiseData])

  return [users, isLoading, setUsers, setChoiseData]
}