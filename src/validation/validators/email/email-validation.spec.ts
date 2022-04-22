import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'

const makeSut = (): EmailValidation => new EmailValidation('email')

describe('EmailValidation', () => {
  test('should return an error if email is invalid', () => {
    const sut = makeSut()

    const error = sut.validate()
    expect(error).toEqual(new InvalidFieldError())
  })
})
