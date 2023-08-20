import { ICursorPagination } from 'shared/interfaces/pagination.interface'
import getParams from 'utils/getParams/getParams'
import { useState } from 'react'

import useFetching from './useFetching'

interface ICallbackParams {
  offset: number
  limit: number
}

interface IPaginationCustom<T, P> {
  initialOffset?: number
  initialLimit?: number
  isInfinity?: boolean
  condition?: boolean
  initialState?: T[]
  queryParam?: P
}

type ICallback<T, P extends Partial<ICallbackParams>> = (
  params: P
) => Promise<ICursorPagination<T[]>>

const usePaginationCustom = <T, P>(
  callback: ICallback<T, P>,
  {
    isInfinity = false,
    initialState = [],
    initialLimit = 15,
    initialOffset = 0,
    condition = true,
    queryParam
  }: IPaginationCustom<T, P> = {}
) => {
  const [limit, setLimit] = useState(initialLimit)
  const [offset, setOffset] = useState(initialOffset)
  const [hasNextPage, setHasNextPage] = useState(false)
  const [hasPreviousPage, setHasPreviousPage] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
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
      setOffset(+getParams(response.next)?.['offset'])
      setHasNextPage(true)
    } else {
      setHasNextPage(false)
    }
  }

  function savePreviousPage(response: ICursorPagination<T[]>) {
    if (response.previous) {
      setOffset(+getParams(response.previous)?.['offset'])
      setHasPreviousPage(true)
    } else {
      setHasPreviousPage(false)
    }
  }

  async function fetchQuery(
    savePage: (response: ICursorPagination<T[]>) => void
  ) {
    const params = {
      offset,
      limit,
      ...queryParam
    }
    const response = await callback(params)

    savePage(response)

    setTotalCount(response.count)
    setFirstQuery(false)

    return response.results
  }

  async function fetchNextPage() {
    await handlerQuery(() => fetchQuery(saveNextPage))
  }

  async function fetchPreviousPage() {
    await handlerQuery(() => fetchQuery(savePreviousPage))
  }

  return {
    ...otherQueryProps,
    fetchPreviousPage,
    hasPreviousPage,
    fetchNextPage,
    hasNextPage,
    totalCount,
    fetchQuery,
    data
  }
}

export default usePaginationCustom
