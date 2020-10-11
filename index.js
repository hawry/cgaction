const core = require("@actions/core")
const { promises: fs } = require("fs")
const zlib = require("zlib")
const axios = require('axios')

const main = async () => {
  const template = core.getInput("template")
  const content = await fs.readFile(template, 'utf8')
  let deflated = await zlib.deflateSync(content).toString('base64')
  axios.post(
    "https://cg.deforest.io/live/convert",
    {
      data: deflated,
    }
  ).then(res => {
    let inflated = zlib.inflateSync(Buffer.from(res.data.data, 'base64')).toString()
    core.setOutput("diagram", inflated)
  }).catch(err => {
    console.log(err.bo)
  })

}

main().catch(err => core.setFailed(err.message))