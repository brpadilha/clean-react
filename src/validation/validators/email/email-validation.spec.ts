import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'
import { EmailValidation } from './email-validation'

const makeSut = (): EmailValidation => new EmailValidation(faker.random.word())

describe('EmailValidation', () => {
  test('should return an error if email is invalid', () => {
    const sut = makeSut()

    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy is email is valid', () => {
    const sut = makeSut()

    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })

  test('should return falsy if email is empty', () => {
    const sut = makeSut()

    const error = sut.validate('')
    expect(error).toBeFalsy()
  })
})
