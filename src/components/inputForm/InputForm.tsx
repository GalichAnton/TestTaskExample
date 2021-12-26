import { FC, SyntheticEvent, useState } from 'react'
import { IUser } from '../Table/Table'

interface IProps {
  sendUserData: (user:IUser)=> void
}

const InputForm: FC<IProps> = ({sendUserData}) => {
  const [opened, setOpened] = useState(false)
  const [userData, setUserData] = useState<IUser>({} as IUser)
  const openForm = () => {
    setOpened(!opened)
  }

  const submitHandler = (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData)
    sendUserData(userData)
  }

  return (
    <>
      <button onClick={openForm} className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>Add user</button>
      <form
        onSubmit={submitHandler}
        className="needs-validation p-4 flex-column"
        style={{ display: `${opened ? 'flex' : ' none'}` }} >
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">ID</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip01"
              required
              onChange={(e) => setUserData({ ...userData, id: Number(e.currentTarget.value) })}
              value={userData?.id}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">First name</label>
            <input value={userData?.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.currentTarget.value })}
              type="text"
              className="form-control"
              id="validationTooltip01"
              required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Last name</label>
            <input value={userData?.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.currentTarget.value })} type="text" className="form-control" id="validationTooltip02" required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Phone</label>
            <input value={userData?.phone} onChange={(e) => setUserData({ ...userData, phone: e.currentTarget.value })} type="text" className="form-control" id="validationTooltip02" required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltipUsername">Email</label>
            <div className="input-group">
              <input value={userData?.email} onChange={(e) => setUserData({ ...userData, email: e.currentTarget.value })} type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />

            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">City</label>
            <input value={userData?.address?.city}
              onChange={(e) => setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  city: e.currentTarget.value
                }
              })}
              type="text"
              className="form-control"
              id="validationTooltip03"
              required />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">State</label>
            <input value={userData?.address?.state}
              onChange={(e) => setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  state: e.currentTarget.value
                }
              })}
              type="text" className="form-control" id="validationTooltip05" required />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Street</label>
            <input
              onChange={(e) => setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  streetAddress: e.currentTarget.value
                }
              })}
              value={userData?.address?.streetAddress} type="text" className="form-control" id="validationTooltip05" required />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Zip</label>
            <input
              onChange={(e) => setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  zip: e.currentTarget.value
                }
              })}
              value={userData?.address?.zip} type="text" className="form-control" id="validationTooltip05" required />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    </>
  )
}

export default InputForm
