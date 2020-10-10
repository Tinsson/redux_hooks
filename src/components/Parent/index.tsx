import React from 'react'
import ReduxProvider from '@/utils/ReduxProvider'
import Child1 from './Child1'
import Child2 from './Child2'

const UserLayout = () => {
  return (
    <ReduxProvider>
      <>
        <Child1 />
        <Child2 />
      </>
    </ReduxProvider>
  )
}

export default UserLayout
