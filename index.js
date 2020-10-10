const core = require("@actions/core")
const github = require("@actions/github")

try {
  const api_key = core.getInput("api_key")
  const template = core.getInput("template")

  console.log("using " + template + " as input")
  console.log("using " + api_key + " as key")
} catch (error) {
  core.setFailed(error.message)
}