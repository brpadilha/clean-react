
import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '../../protocols/field-validation'

class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, readonly minLength: number) {}
  validate (value: string): Error {
    return value.length === this.minLength ? null : new InvalidFieldError()
  }
}

describe('Min-length', () => {
  test('should return an error if value has not min-length invalid', () => {
    const sut = new MinLengthValidation('email', 5)

    const error = sut.validate('a')
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy if value has min-length', () => {
    const sut = new MinLengthValidation('email', 5)

    const error = sut.validate('aaaaa')
    expect(error).toBeFalsy()
  })
})
