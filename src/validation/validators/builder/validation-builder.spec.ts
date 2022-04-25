import { RequiredFieldValidation, ValidationBuilder as sut } from '..'
import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation ', () => {
    const validations = sut.field('fieldName').required().build()

    expect(validations).toEqual([new RequiredFieldValidation('fieldName')])
  })

  test('should return EmailValidation ', () => {
    const validations = sut.field('any_field').email().build()

    expect(validations).toEqual([new EmailValidation('any_field')])
  })
  test('should return Min-lenght ', () => {
    const validations = sut.field('any_field').min(5).build()

    expect(validations).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
