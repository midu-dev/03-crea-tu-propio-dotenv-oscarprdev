// reference: https://www.npmjs.com/package/dotenv
const fs = require('node:fs')

function config (options = {}) {
  const path = options.path || '.env'
  const fileExist = fs.existsSync(path)

  if (fileExist) {
    const envFileContent = fs.readFileSync(path, 'utf-8')

    envFileContent.split('\n').forEach(env => {
      const [key, value] = env.split('=')

      process.env[key] = value.replaceAll('"','')
    })
  }
}

module.exports = { config }
