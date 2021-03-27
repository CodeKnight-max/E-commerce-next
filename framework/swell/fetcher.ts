import { Fetcher } from '@commerce/utils/types'
import { handleFetchResponse } from './utils'
import { swellConfig } from './index'

const fetcher: Fetcher = async ({ method = 'get', variables, query }) => {
  const { swell } = swellConfig
  async function callSwell() {
    if (Array.isArray(variables)) {
      const arg1 = variables[0]
      const arg2 = variables[1]
      const response = await swell[query][method](arg1, arg2)
      console.log(response)
      return handleFetchResponse(response)
    } else {
      const response = await swell[query][method](variables)
      console.log(response)
      return handleFetchResponse(response)
    }
  }
  if (query) {
    return await callSwell()
  }
}

export default fetcher
