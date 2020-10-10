const core = require("@actions/core")
const github = require("@actions/github")
const { promises: fs } = require("fs")
const zlib = require("zlib")

const axios = require('axios')


const main = async () => {
  // const template = core.getInput("template")
  const template = "example.yml"
  const content = await fs.readFile(template, 'utf8')
  // console.log(content)

  let deflated = await zlib.deflateSync(content).toString('base64')
  console.log(deflated)

  axios.post(
    "https://cg.deforest.io/live/convert",
    {
      data: deflated,
    }
  ).then(res => {
    let inflated = zlib.inflateSync(Buffer.from(res.data.data, 'base64')).toString()
    console.log(inflated)
  }).catch(err => {
    console.log(err.bo)
  })

  core.setOutput("diagram", "thisissupposedtobeadiagram")
}

main().catch(err => core.setFailed(err.message))