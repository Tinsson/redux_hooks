import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '@/utils/ReduxProvider'

const Child2: React.FC = ()  => {
  const searchWords = useSelector((state: StateType) => state.searchWords)

  return (
    <div>
      {searchWords}
    </div>
  )
}

export default Child2