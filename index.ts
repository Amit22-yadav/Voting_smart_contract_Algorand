import * as algokit from '@algorandfoundation/algokit-utils'
import { consoleLogger } from '@algorandfoundation/algokit-utils/types/logging'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/appspec'
import fs from 'fs/promises'
import path from 'path'
import { contracts, deploy } from './deploy-config'

algokit.Config.configure({
  logger: consoleLogger,
})
;(async () => {
  for (const app of contracts) {
    console.info(`Deploying ${app}`)
    let appSpec: AppSpec
    try {
      const appSpecJson = await fs.readFile(path.join(__dirname, 'artifacts', app, 'application.json'))
      appSpec = JSON.parse(appSpecJson.toString('utf-8')) as AppSpec
    } catch (e) {
      console.error(
        `Received error reading the application spec for app ${app}; has the contract been built and is in artifacts/${app}/application.json?`,
        e,
      )
      continue
    }
    try {
      await deploy(app, appSpec)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if ('led' in e) {
        console.error('Received logic error', e.led)
      }
      throw e
    }
  }
})()
