export interface ICursorPagination<T> {
  previous: string | null
  next: string | null
  count: number
  results: T
}

export interface ILimitOffsetPagination {
  offset: number
  limit: number
}


