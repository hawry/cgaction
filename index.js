const core = require("@actions/core")
const github = require("@actions/github")

const { promises: fs } = require("fs")


const main = async () => {

  const api_key = core.getInput("api_key")
  const template = core.getInput("template")
  
  console.log("using " + template + " as input")
  console.log("using " + api_key + " as key")

  const content = await fs.readFile(template, 'utf8')
  console.log(content)

  core.setOutput("diagram", "thisissupposedtobeadiagram")


  await fs.writeFile(core.getInput("output_file"), "this is the xml stuff you know")
}

main().catch(err => core.setFailed(err.message))