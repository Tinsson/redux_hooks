import React from 'react'
import ReduxHooks from '@/utils/ReduxHooks'
import UserSearch from '../UserSearch'
import UserList from '../UserList'

const UserLayout = () => {
  return (
    <ReduxHooks>
      <>
        <UserSearch />
        <UserList />
      </>
    </ReduxHooks>
  )
}

export default UserLayout
