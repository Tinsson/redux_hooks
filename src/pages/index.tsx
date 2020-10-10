import React from 'react';
import styles from './index.less';
import { useSelector } from 'umi'
import { IndexModelState } from '@/models/index'

export default () => {
  const name = useSelector((state: {
    index: IndexModelState
  }) => state.index.name)

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <span>{name}</span>
    </div>
  );
}
