// reference: https://www.npmjs.com/package/dotenv
const fs = require('node:fs')

function config (options = {}) {
  const fileExist = fs.existsSync(options.path || '.env')

  if (fileExist) {
    const envFileContent = fs.readFileSync(options.path || '.env', 'utf-8')

    envFileContent.split('\n').forEach(env => {
      const envArr = env.split('=')

      const envName = envArr[0]
      const envValue = envArr[1].replaceAll('"','')

      process.env[envName] = envValue
    })
  }
}

module.exports = { config }
