import { AxiosHttpClient } from './axios.http-client'
import { mockAxios } from '@/infra/test'
import { mockPostRequest } from '@/data/test'
import axios from 'axios'
import { mockHttpResponse } from '../../test/mock-axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('should Call axios with correct URL, verb and body', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())

    // DOC
    // mockedAxios.post.mock.results[0].value
    // will return the result of mockResolvedValue
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
  test('should return the correct statusCode and body on failury', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    mockedAxios.post.mockRejectedValueOnce({
      response: mockHttpResponse()
    })
    // DOC
    // mockedAxios.post.mock.results[0].value
    // will return the result of mockResolvedValue
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
