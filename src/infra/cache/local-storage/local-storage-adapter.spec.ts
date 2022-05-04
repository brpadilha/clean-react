import faker from 'faker'
import 'jest-localstorage-mock'
import { LocalStorageAdapter } from './local-storage-adapter'

describe('LocalStorageAdapter ', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should Call local storage with correct Values', async () => {
    const sut = new LocalStorageAdapter()
    const key = faker.random.uuid()
    const value = faker.random.word()

    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      value
    )
  })
})