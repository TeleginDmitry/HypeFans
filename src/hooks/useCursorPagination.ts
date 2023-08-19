import getValueParamFromQuery from 'utils/getValueParamFromQuery/getValueParamFromQuery'
import { ICursorPagination } from 'shared/interfaces/pagination.interface'
import { IntersectionOptions } from 'react-intersection-observer'
import { useState } from 'react'

import useFetching from './useFetching'

interface ICallbackParams {
  cursor: string
}

interface IUseCursorPagination<T, P extends ICallbackParams> {
  observerParams?: IntersectionOptions
  isInfinity?: boolean
  condition?: boolean
  initialState?: T[]
  queryParam?: P
}

type ICallback<T, P extends ICallbackParams> = (
  params: P
) => Promise<ICursorPagination<T[]>>

const useCursorPagination = <T, P extends ICallbackParams>(
  callback: ICallback<T, P>,
  {
    isInfinity = false,
    initialState = [],
    condition = true,
    queryParam
  }: IUseCursorPagination<T, P> = {}
) => {
  const [hasNextPage, setHasNextPage] = useState<boolean>()
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>()
  const [cursorNext, setCursorNext] = useState('')
  const [cursorPrevious, setCursorPrevious] = useState('')
  const [data, setData] = useState<T[]>(initialState)
  const [isFirstQuery, setFirstQuery] = useState(true)

  const { handlerQuery, ...otherQueryProps } = useFetching<T[]>({
    onSuccess(data) {
      if (isFirstQuery) {
        setData(data)
      } else {
        if (isInfinity) {
          setData((state) => [...state, ...data])
        } else {
          setData(data)
        }
      }
    },
    condition
  })

  function saveNextPage(response: ICursorPagination<T[]>) {
    if (response.next) {
      setHasNextPage(true)
      setCursorNext(getValueParamFromQuery(response.next, 'cursor'))
    } else setHasNextPage(false)
  }

  function savePreviousPage(response: ICursorPagination<T[]>) {
    if (response.previous) {
      setHasPreviousPage(true)
      setCursorPrevious(getValueParamFromQuery(response.previous, 'cursor'))
    } else setHasPreviousPage(false)
  }

  function savePage(response: ICursorPagination<T[]>) {
    saveNextPage(response)
    savePreviousPage(response)

    setFirstQuery(false)
  }

  async function fetchQuery(cursor: string) {
    const params = {
      ...queryParam
    }
    if (cursor) {
      params['cursor'] = cursor
    }
    const response = await callback(params)

    savePage(response)

    return response.results
  }

  async function fetchNextPage() {
    await handlerQuery(() => fetchQuery(cursorNext))
  }

  async function fetchPreviousPage() {
    await handlerQuery(() => fetchQuery(cursorPrevious))
  }

  return {
    ...otherQueryProps,
    fetchPreviousPage,
    hasPreviousPage,
    fetchNextPage,
    hasNextPage,
    fetchQuery,
    data
  }
}

export default useCursorPagination
