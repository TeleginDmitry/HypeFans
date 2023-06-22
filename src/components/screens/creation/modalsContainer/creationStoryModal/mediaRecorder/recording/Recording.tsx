import CreationChoose from 'components/shared/creationChoose/CreationChoose'
import React, { useCallback, useState, useRef } from 'react'
import cn from '@utils/classNames/classNames'
import Webcam from 'react-webcam'

import RecordingActions from './recordingActions/RecordingActions'
import styles from './Recording.module.scss'

interface IRecording {
  setRecordedChunks: React.Dispatch<React.SetStateAction<Blob[]>>
  setIsShowMedia: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedFile: React.Dispatch<React.SetStateAction<File>>
}

const Recording = ({
  setRecordedChunks,
  setSelectedFile,
  setIsShowMedia
}: IRecording) => {
  const webcamRef = useRef<Webcam | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const [capturing, setCapturing] = useState(false)
  const [cameraMode, setCameraMode] = useState<'environment' | 'user'>('user')

  async function handleStartCapture() {
    setCapturing(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: cameraMode },
        audio: true
        // preferCurrentTab: true,
      })
      if (webcamRef.current && webcamRef.current.video) {
        webcamRef.current.video.srcObject = stream
        mediaRecorderRef.current = new MediaRecorder(stream, {
          mimeType: 'video/webm'
        })
        mediaRecorderRef.current.addEventListener(
          'dataavailable',
          handleDataAvailable
        )
        mediaRecorderRef.current.addEventListener('stop', () =>
          setIsShowMedia(true)
        )
        mediaRecorderRef.current.start()
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
  }

  const handleDataAvailable = useCallback(
    ({ data }: BlobEvent) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data))
      }
    },
    [setRecordedChunks]
  )

  const handleStopCapture = useCallback(() => {
    if (!mediaRecorderRef.current) return

    mediaRecorderRef.current.stop()
    setCapturing(false)
  }, [mediaRecorderRef, setCapturing])

  const onChangeCamera = () => {
    setCameraMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedFile(file)
    setIsShowMedia(true)
  }

  function onClickRecord(): void {
    if (capturing) handleStopCapture()
    else handleStartCapture()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.choose__container}>
        <CreationChoose theme='gray'></CreationChoose>
      </div>
      <Webcam
        className={cn(
          [styles.video],
          [cameraMode === 'environment', styles.video__reversed]
        )}
        videoConstraints={{
          facingMode: cameraMode
        }}
        ref={webcamRef}
        audio={false}
      />

      <div className={styles.actions}>
        <RecordingActions
          onChangeCamera={onChangeCamera}
          onUploadFile={handleFileChange}
          onClickRecord={onClickRecord}
          condition={capturing}
        ></RecordingActions>
      </div>
    </div>
  )
}

export default Recording
