// import React, {useEffect} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchUsers } from './userSlice'

function UserView() {
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [dispatch])
  return (
    <div>
      <h2>List of Users</h2>
      <button onClick={() => dispatch(fetchUsers())}>Render</button>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading ?
            <ul>
                {user.users.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul> : null
      }
    </div>
  )
}

export default UserView
