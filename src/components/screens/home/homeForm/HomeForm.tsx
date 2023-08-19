import { ComponentWithAuthorized } from 'hocs/ComponentWithAuthorized'
import React, { useState } from 'react'

import CreationPost from './creationPost/CreationPost'
import SearchPost from './searchPost/SearchPost'
import styles from './HomeForm.module.scss'

const HomeForm = () => {
  const [isActive, setIsActive] = useState(false)

  function changeStateActive() {
    setIsActive((state) => (state = !state))
  }

  return (
    <div className={styles.wrapper}>
      <ComponentWithAuthorized
        Component={
          <SearchPost changeStateActive={changeStateActive}></SearchPost>
        }
      >
        <>
          {isActive ? (
            <SearchPost changeStateActive={changeStateActive}></SearchPost>
          ) : (
            <CreationPost changeStateActive={changeStateActive}></CreationPost>
          )}
        </>
      </ComponentWithAuthorized>
    </div>
  )
}

export default HomeForm
