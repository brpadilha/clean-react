
import faker from 'faker'
import { FieldValidationSpy } from '../test'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
  fieldName: string
};

const makeSut = (): SutTypes => {
  const fieldName = faker.database.column()

  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]

  const sut = ValidationComposite.build(fieldValidationSpy)
  return {
    sut,
    fieldValidationSpy,
    fieldName
  }
}

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const { sut, fieldValidationSpy, fieldName } = makeSut()

    const errorMessage = faker.random.words()

    fieldValidationSpy[0].error = new Error(errorMessage)
    fieldValidationSpy[1].error = new Error(faker.random.words())

    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBe(errorMessage)
  })

  test('should return falsy if validation dont fails', () => {
    const { sut, fieldName } = makeSut()

    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBeFalsy()
  })
})
