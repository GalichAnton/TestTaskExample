import { FC, SyntheticEvent, useState } from 'react';
import Loader from '../Loader';
import styles from './table.module.css'
import cn from 'classnames'
import DetailInfo from '../DetailInfo/DetailInfo';


export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  description: string
  address: {
    city: string,
    streetAddress: string,
    state: string,
    zip: string
  }
}
type sortType = 'toUp' | 'toDown'
interface ISort {
  sortId: sortType
  sortFirstName: sortType
  sortLastName: sortType
  sortEmail: sortType
  sortPhone: sortType
}
interface IProps {
  users: IUser[]
  isLoading: boolean
  setUsers: (users: IUser[]) => void
}
const Table: FC<IProps> = ({ users, isLoading, setUsers }: IProps) => {

  const [user, setUser] = useState<IUser | null>(null)
  const [sort, setSort] = useState<ISort>({
    sortId: 'toUp',
    sortFirstName: 'toUp',
    sortLastName: 'toUp',
    sortEmail: 'toUp',
    sortPhone: 'toUp',
  })


  const sortData = (e: SyntheticEvent<HTMLTableRowElement, MouseEvent>) => {
    const target = e.target as HTMLElement;

    const usersCopy: IUser[] = users.concat()
    let sortData: IUser[] = []
    switch (target.id) {
      case 'id':
        if (sort.sortId === 'toUp') {
          sortData = usersCopy.sort((a, b) => a.id > b.id ? 1 : -1)
          setSort({ ...sort, sortId: 'toDown' })
        } else {
          sortData = usersCopy.sort((a, b) => a.id < b.id ? 1 : -1)
          setSort({ ...sort, sortId: 'toUp' })
        }
        return setUsers(sortData)
      case 'firstName':
        if (sort.sortFirstName === 'toUp') {
          sortData = usersCopy.sort((a, b) => a.firstName > b.firstName ? 1 : -1)
          setSort({ ...sort, sortFirstName: 'toDown' })
        } else {
          sortData = usersCopy.sort((a, b) => a.firstName < b.firstName ? 1 : -1)
          setSort({ ...sort, sortFirstName: 'toUp' })
        }
        return setUsers(sortData)
      case 'lastName':
        if (sort.sortLastName === 'toUp') {
          sortData = usersCopy.sort((a, b) => a.lastName > b.lastName ? 1 : -1)
          setSort({ ...sort, sortLastName: 'toDown' })
        } else {
          sortData = usersCopy.sort((a, b) => a.lastName < b.lastName ? 1 : -1)
          setSort({ ...sort, sortLastName: 'toUp' })
        }
        return setUsers(sortData)
      case 'email':
        if (sort.sortEmail === 'toUp') {
          sortData = usersCopy.sort((a, b) => a.email > b.email ? 1 : -1)
          setSort({ ...sort, sortEmail: 'toDown' })
        } else {
          sortData = usersCopy.sort((a, b) => a.email < b.email ? 1 : -1)
          setSort({ ...sort, sortEmail: 'toUp' })
        }
        return setUsers(sortData)
    }

  }

  const detailedUser = (item: IUser) => {
    setUser(item)
  }



  return (
    <>
      {isLoading ?
        (<Loader />) :
        (<table className='table'>
          <thead>
            <tr onClick={(e) => sortData(e)}>
              <th scope="col" >
                Id
                <button id='id' className={cn(styles.sortBtn, {
                  [styles.sortBtn_up]: sort.sortId === 'toUp'
                })}>
                  {'>'}
                </button>
              </th>
              <th scope="col">FirstName
                <button id='firstName' className={cn(styles.sortBtn, {
                  [styles.sortBtn_up]: sort.sortFirstName === 'toUp'
                })}>
                  {'>'}
                </button></th>
              <th scope="col">LastName
                <button id='lastName' className={cn(styles.sortBtn, {
                  [styles.sortBtn_up]: sort.sortLastName === 'toUp'
                })}>
                  {'>'}
                </button></th>
              <th scope="col">email
                <button id='email' className={cn(styles.sortBtn, {
                  [styles.sortBtn_up]: sort.sortEmail === 'toUp'
                })}>
                  {'>'}
                </button></th>
              <th scope="col">Phone
                <button id='Phone' className={cn(styles.sortBtn, {
                  [styles.sortBtn_up]: true
                })}>
                  {'>'}
                </button></th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.phone} onClick={() => { detailedUser(item) }}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>)}
        
      {user && <DetailInfo user={user} />}
    </>
  )
}

export default Table
