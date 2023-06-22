import { Button } from 'ui-hypefans-lib'
import Video from '@ui/video/Video'
import React from 'react'

import ShowingActions from './showingActions/ShowingActions'
import styles from './Showing.module.scss'

interface IShowing {
  setRecordedChunks: React.Dispatch<React.SetStateAction<Blob[]>>
  setIsShowMedia: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedFile: React.Dispatch<React.SetStateAction<File>>
  selectedFile: File | null
  recordedChunks: Blob[]
}

const Showing = ({
  setRecordedChunks,
  setSelectedFile,
  setIsShowMedia,
  recordedChunks,
  selectedFile
}: IShowing) => {
  if (!recordedChunks.length && !selectedFile) return null
  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <ShowingActions
          setRecordedChunks={setRecordedChunks}
          setSelectedFile={setSelectedFile}
          setIsShowMedia={setIsShowMedia}
          recordedChunks={recordedChunks}
          selectedFile={selectedFile}
        ></ShowingActions>
      </div>
      <div className={styles.media}>
        {selectedFile ? (
          <>
            {selectedFile.type.includes('video') ? (
              <Video
                src={URL.createObjectURL(selectedFile)}
                autoPlay
                loop
              ></Video>
            ) : (
              <img
                src={URL.createObjectURL(selectedFile)}
                className={styles.image}
                alt='Selected'
              />
            )}
          </>
        ) : (
          <Video
            src={URL.createObjectURL(recordedChunks[0])}
            classVideo={styles.video}
            autoPlay
            loop
          ></Video>
        )}
      </div>
      <div className={styles.buttons}>
        <Button>Опубликовать</Button>
      </div>
    </div>
  )
}

export default Showing
