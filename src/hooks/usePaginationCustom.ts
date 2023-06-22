import getValueParamFromQuery from 'utils/getValueParamFromQuery/getValueParamFromQuery'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { useState } from 'react'
import useFetching from './useFetching'

interface IPaginationCustom<T> {
  initialOffset?: number
  initialLimit?: number
  isInfinity?: boolean
  condition?: boolean
  initialState?: T[]
  queryParam?: {}
}

type ICallback<T> = (params: any) => Promise<IPagination<T[]>>

const usePaginationCustom = <T>(
  callback: ICallback<T>,
  {
    isInfinity = false,
    initialState = [],
    initialLimit = 15,
    initialOffset = 0,
    condition = true,
    queryParam
  }: IPaginationCustom<T> = {}
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

  function saveNextPage(response: IPagination<T[]>) {
    if (response.next) {
      setOffset(+getValueParamFromQuery(response.next, 'offset'))
      setHasNextPage(true)
    } else {
      setHasNextPage(false)
    }
  }

  function savePreviousPage(response: IPagination<T[]>) {
    if (response.previous) {
      setOffset(+getValueParamFromQuery(response.previous, 'offset'))
      setHasPreviousPage(true)
    } else {
      setHasPreviousPage(false)
    }
  }

  async function fetchQuery(savePage: (response: IPagination<T[]>) => void) {
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
