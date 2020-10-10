import React from 'react'
import { useSelector, useDispatch } from '@/utils/ReduxHooks'

const UserSearch: React.FC = ()  => {
  const searchWords = useSelector(state => state.searchWords) as string
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'UPDATE_SEARCH',
      payload: e.target.value
    })
  }

  return (
    <div>
      <input type="text" value={searchWords} onChange={handleChange} />
    </div>
  )
}

export default UserSearch