import { makeLoginValidation } from './login-validation-factory'
import {
  ValidationBuilder,
  ValidationComposite
} from '@/validation/validators'

describe('LoginValidationFactory', () => {
  test('should make ValidationComposit with correct validations', () => {
    const composite = makeLoginValidation()

    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().min(5).build()
      ])
    )
  })
})
