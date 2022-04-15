import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credential-erros'

// Cria o remoteAuthentication que vai pegar os parametros do AuthenticationParams e passar para o HttpPostClient
export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const response = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (response.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      // everything different from ok and unauthorized is unexpected error
      default: throw new UnexpectedError()
    }
  }
}
