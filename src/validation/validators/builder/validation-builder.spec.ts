import { RequiredFieldValidation, ValidationBuilder } from '..'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation ', () => {
    const validations = ValidationBuilder.field('fieldName').required().build()

    expect(validations).toEqual([new RequiredFieldValidation('fieldName')])
  })
})
