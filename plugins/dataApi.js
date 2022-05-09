export default function(context, inject) {
  const appId = 'KYQCY5NOCO'
  const apiKey = 'fd0a965f2d4f0e25ad130228c326dd6d'

  inject('dataApi', { getHome })

  async function getHome(homeId) {
    const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
      headers: {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId
      }
    })
    const json = await response.json()
    return json
  }
}