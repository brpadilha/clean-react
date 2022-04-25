import { RequiredFieldValidation } from '../required-field/required-field-validation'
import { ValidationBuilder } from './validation-builder'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation ', () => {
    const validations = ValidationBuilder.field('fieldName').required().build()

    expect(validations).toEqual([new RequiredFieldValidation('fieldName')])
  })
})
