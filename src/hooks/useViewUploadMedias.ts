import generateId from 'utils/generateId/GenerateId'
import { useState } from 'react'

interface IViewMedia {
  isInfinity?: boolean
}

export interface IResponseViewMedia {
  upload: File
  view: string
  id: number
}

const useViewUploadMedias = ({ isInfinity = false }: IViewMedia = {}) => {
  const [medias, setMedias] = useState<IResponseViewMedia[]>([])

  const handlerMedia = (mediasList: FileList) => {
    const arrayMedias = [...mediasList]
    arrayMedias.forEach((file, index) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = {
          view: reader.result.toString(),
          id: generateId(index),
          upload: file
        }
        setMedias((state) => (isInfinity ? [...state, result] : [result]))
      }
      reader.readAsDataURL(file)
    })
  }

  return [medias, setMedias, handlerMedia] as const
}

export default useViewUploadMedias
