
import { HttpResponse } from './http-response'

// Cria as interfaces para o HttpPostClient
// it will make the request on the backend
export type HttpPostParams<T> = {
  url: string
  body?: T
}

// T, R -> T is the type of the body, R is the type of the response
export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
