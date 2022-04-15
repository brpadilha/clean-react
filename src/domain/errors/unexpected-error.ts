export class UnexpectedError extends Error {
  constructor () {
    super('Unexpected error happens')
    this.name = 'UnexpectedError'
  }
}
