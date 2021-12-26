import { IUser } from '../Table/Table'
import styles from '../Table/table.module.css'

interface IProps {
  user:IUser | null
}

const DetailInfo = ({user}:IProps) => {
  return (
    <>
      <div className={styles.userDetailed}>
        <h2>Detailed info</h2>
        <span className={styles.userInfo}>{user?.firstName}</span>
        <span className={styles.userInfo}>{user?.lastName}</span>
        <span className={styles.userInfo}>{user?.address.city + ' ' + user?.address.streetAddress + ' ' + user?.address.state + ' ' + user?.address.zip}</span>
        <span className={styles.userInfo}>{user?.email}</span>
        <span className={styles.userInfo}>{user?.phone}</span>
      </div>
      <p className={styles.desc}>{user?.description}</p>
    </>
  )
}

export default DetailInfo
