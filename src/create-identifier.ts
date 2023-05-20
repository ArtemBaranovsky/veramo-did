import { agent } from './veramo/setup.js'

async function main() {
  // const identifier = await agent.didManagerCreate({ alias: 'artem-key', provider: 'did:key', kms: 'local' })
  const identifier = await agent.didManagerCreate({ alias: 'exercise-1', provider: 'did:ethr:goerli', kms: 'local' })
  console.log(`New identifier created`)
  console.log(JSON.stringify(identifier, null, 2))
}

main().catch(console.log)