import React from 'react'
import { useSelector, User } from '@/utils/ReduxHooks'

const UserSearch: React.FC = ()  => {
  const searchWords = useSelector(state => state.searchWords) as string
  const userList = useSelector(state => state.userList) as User[]

  return (
    <div>
      <div>{searchWords}</div>
      {
        userList.map((item: User) => {
          return (
            <div>
              <span>{item.name}</span>
              <span>{item.phone}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserSearch