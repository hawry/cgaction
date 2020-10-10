const core = require("@actions/core")
const github = require("@actions/github")
const { exec } = require("child_process");
const { promises: fs } = require("fs")

const ls = (dir) => {
  exec("ls -la " + dir, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }

    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }

    console.log(`stdout: ${stdout}`)
  })
}

const main = async () => {

  ls("./")
  ls("/github/")
  ls("/github/home")
  ls("/github/workspaces")
 

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