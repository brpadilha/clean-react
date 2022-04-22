
import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (): MinLengthValidation => new MinLengthValidation('email', 5)

describe('Min-length', () => {
  test('should return an error if value has not min-length invalid', () => {
    const sut = makeSut()

    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy if value has min-length', () => {
    const sut = makeSut()

    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
