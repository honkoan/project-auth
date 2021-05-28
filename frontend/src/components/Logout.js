import React from 'react'
import { batch, useSelector, useDispatch } from 'react-redux'

import user from '../reducers/user'
import listitems from '../reducers/listitems'

const Logout = () => {
  const accessToken = useSelector(store => store.user.accessToken)
  const dispatch = useDispatch()

  const onButtonClick = () => {
    batch(() => {
      dispatch(user.actions.setUsername(null))
      dispatch(user.actions.setAccessToken(null))
      dispatch(listitems.actions.setErrors(null))

      localStorage.removeItem('user')
    })
  }
  return (
    <div>
        {accessToken && <button className="logout-button" onClick={onButtonClick}>Logout</button>}
    </div>
  )
}

export default Logout
