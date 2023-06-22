import {
  returnStylesByСondition,
  creationDefaultColor,
  creationGrayColor
} from 'shared/creationsChooseVariableColors'
import {
  CREATE_STORY_VALUE,
  CREATE_POST_VALUE,
  CREATE_PARAM
} from 'configs/index.config'
import { useSearchParams } from 'react-router-dom'
import React, { useEffect } from 'react'

import styles from './CreationChoose.module.scss'

interface ICreationChoose {
  theme?: 'gray'
}

const CreationChoose = ({ theme }: ICreationChoose) => {
  const [URLSearchParams, setURLSearchParams] = useSearchParams()

  const createParam = URLSearchParams.get(CREATE_PARAM)

  function handlerClickCreatePost() {
    URLSearchParams.set(CREATE_PARAM, CREATE_POST_VALUE)
    setURLSearchParams(URLSearchParams)
  }

  function handlerClickCreateStory() {
    URLSearchParams.set(CREATE_PARAM, CREATE_STORY_VALUE)
    setURLSearchParams(URLSearchParams)
  }

  useEffect(() => {
    if (
      createParam !== null &&
      createParam !== CREATE_STORY_VALUE &&
      createParam !== CREATE_POST_VALUE
    ) {
      URLSearchParams.delete(CREATE_PARAM)
      setURLSearchParams(URLSearchParams)
    }
  }, [createParam])

  const colors = theme === 'gray' ? creationGrayColor : creationDefaultColor

  return (
    <div
      style={{ backgroundColor: colors.wrapperBackground }}
      className={styles.wrapper}
    >
      <button
        style={returnStylesByСondition(
          createParam === CREATE_POST_VALUE || createParam === null,
          colors
        )}
        onClick={handlerClickCreatePost}
        className={styles.button}
      >
        Новый пост
      </button>
      <button
        style={returnStylesByСondition(
          createParam === CREATE_STORY_VALUE,
          colors
        )}
        onClick={handlerClickCreateStory}
        className={styles.button}
      >
        Новая история
      </button>
    </div>
  )
}

export default CreationChoose
