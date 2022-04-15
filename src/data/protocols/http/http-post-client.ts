
import { HttpResponse } from './http-response'

// Cria as interfaces para o HttpPostClient
// it will make the request on the backend
export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>
}
