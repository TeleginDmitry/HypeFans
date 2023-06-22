import React, { useState } from 'react'

import styles from './MediaRecorder.module.scss'
import Recording from './recording/Recording'
import Showing from './showing/Showing'

const MediaRecorder = () => {
  const [isShowMedia, setIsShowMedia] = useState(false)
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  return (
    <div className={styles.wrapper}>
      {isShowMedia ? (
        <Showing
          setRecordedChunks={setRecordedChunks}
          setSelectedFile={setSelectedFile}
          setIsShowMedia={setIsShowMedia}
          recordedChunks={recordedChunks}
          selectedFile={selectedFile}
        ></Showing>
      ) : (
        <Recording
          setRecordedChunks={setRecordedChunks}
          setSelectedFile={setSelectedFile}
          setIsShowMedia={setIsShowMedia}
        ></Recording>
      )}
    </div>
  )
}

export default MediaRecorder
