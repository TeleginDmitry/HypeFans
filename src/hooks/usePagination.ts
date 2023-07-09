import {
  UseInfiniteQueryOptions,
  QueryFunctionContext,
  useInfiniteQuery
} from '@tanstack/react-query'
import getValueParamFromQuery from 'utils/getValueParamFromQuery/getValueParamFromQuery'
import { IPagination } from 'shared/interfaces/pagination.interface'
import { useState } from 'react'

type ICallback<T> = (options: QueryFunctionContext) => Promise<IPagination<T[]>>

interface IUsePagination<T>
  extends Omit<
    UseInfiniteQueryOptions<IPagination<T[]>>,
    'getPreviousPageParam' | 'keepPreviousData' | 'getNextPageParam' | 'queryFn'
  > {
  queryFn: ICallback<T>
  nameParam?: string
}

const usePagination = <T>(options: IUsePagination<T>) => {
  const { nameParam = 'offset', queryFn: callback, ...queryOptions } = options

  const [countElements, setCountElements] = useState<number | null>(null)

  const { data, ...result } = useInfiniteQuery({
    queryFn: async (options) => {
      const response = await callback(options)

      return response
    },
    onSuccess(data) {
      const lastPage = data.pages.at(-1)
      setCountElements(lastPage.count)
    },
    getPreviousPageParam: (lastPage) =>
      getValueParamFromQuery(lastPage.previous, nameParam),
    getNextPageParam: (lastPage) =>
      getValueParamFromQuery(lastPage.next, nameParam),
    keepPreviousData: true,
    ...queryOptions
  })

  return { data: data ? data.pages.flat() : [], countElements, ...result }
}

export default usePagination
