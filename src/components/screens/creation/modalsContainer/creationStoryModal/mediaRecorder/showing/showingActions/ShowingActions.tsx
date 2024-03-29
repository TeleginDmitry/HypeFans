import { Download, LetterT, X } from 'icons-hypefans-lib'
import React, { useCallback } from 'react'

import styles from './ShowingActions.module.scss'

interface IShowingActions {
  setRecordedChunks: React.Dispatch<React.SetStateAction<Blob[]>>
  setIsShowMedia: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedFile: React.Dispatch<React.SetStateAction<File>>
  recordedChunks: Blob[]
  selectedFile: File
}

const ShowingActions = ({
  setRecordedChunks,
  setSelectedFile,
  setIsShowMedia,
  recordedChunks,
  selectedFile
}: IShowingActions) => {
  const handleDownload = useCallback(() => {
    let media: { href?: string; type?: string } = {}

    if (selectedFile) {
      media = {
        href: URL.createObjectURL(selectedFile),
        type: selectedFile.type
      }
    } else {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm'
      })
      media = {
        href: URL.createObjectURL(blob),
        type: 'video/webm'
      }
    }

    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style.display = 'none'
    a.href = media.href
    a.download = media.type
    a.click()
    window.URL.revokeObjectURL(media.href)
  }, [selectedFile, recordedChunks])

  const handleDeleteVideo = useCallback(() => {
    setIsShowMedia(false)
    setRecordedChunks([])
    setSelectedFile(null)
  }, [setIsShowMedia, setRecordedChunks])

  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <X onClick={handleDeleteVideo}></X>
      </div>
      <div className={styles.other}>
        <LetterT></LetterT>
        <Download onClick={handleDownload}></Download>
      </div>
    </div>
  )
}

export default ShowingActions
