import {
  UseInfiniteQueryOptions,
  QueryFunctionContext,
  useInfiniteQuery
} from '@tanstack/react-query'
import { ICursorPagination } from 'shared/interfaces/pagination.interface'
import getParams from 'utils/getParams/getParams'
import { useMemo } from 'react'

type ICallback<T> = (
  options: QueryFunctionContext
) => Promise<ICursorPagination<T[]>>

interface IUsePagination<T>
  extends Omit<
    UseInfiniteQueryOptions<ICursorPagination<T[]>>,
    'getPreviousPageParam' | 'keepPreviousData' | 'getNextPageParam' | 'queryFn'
  > {
  queryFn: ICallback<T>
  nameParam?: string
}

const usePagination = <T>(options: IUsePagination<T>) => {
  const { nameParam = 'offset', queryFn: callback, ...queryOptions } = options

  const { data, ...allInfiniteQuery } = useInfiniteQuery({
    queryFn: async (options) => {
      const response = await callback(options)

      return response
    },

    getPreviousPageParam: (lastPage) =>
      getParams(lastPage.previous)?.[nameParam],
    getNextPageParam: (lastPage) => getParams(lastPage.next)?.[nameParam],
    keepPreviousData: true,
    ...queryOptions
  })

  const result: T[] = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      page.results.forEach((element) => {
        acc.push(element)
      })

      return acc
    }, [])
  }, [data])

  return { data: Array.isArray(result) ? result : [], ...allInfiniteQuery }
}

export default usePagination
