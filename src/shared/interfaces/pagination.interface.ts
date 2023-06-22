export interface IPagination<T> {
  previous: string | null
  next: string | null
  count: number
  results: T
}

export interface IQueryPagination {
  offset: number
  limit: number
}
