const core = require("@actions/core")
const github = require("@actions/github")

try {
  
  const api_key = core.getInput("api_key")
  const template = core.getInput("template")
  
  console.log("using " + template + " as input")
  console.log("using " + api_key + " as key")
  
  core.setOutput("diagram", "thisissupposedtobeadiagram")
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(payload)  
  console.log(process.env.GITHUB_TOKEN)
} catch (error) {
  core.setFailed(error.message)
}