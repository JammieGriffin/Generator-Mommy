import Generator from "yeoman-generator";
import fs from "fs-extra";
import pkg from "./package-template.json" assert {type:"json"}

export default class extends Generator {
  initializing() {
    this.log("Welcome to the Mommy Express Project Generator ~~");
    this.fields = {}
  }
  async prompting() {
    const fields = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your project name:(Default mommy-express-ts-app)",
        default: "mommy-express-ts-app"
      },
      {
        type: "input",
        name: "author",
        message: "Please enter the name of the project author:(Default JammieGriffin)",
        default: "JammieGriffin"
      },
      
    ]);
    Object.assign(this.fields, fields)
  }
  async configuring() {
    this.log("Generating the project file ...");
    try {
      await fs.copy(`${this.sourceRoot()}`, `${this.destinationRoot()}`);
    } catch (err) {
      this.log(err)
    }
  }
  writing() {
    this.log("Generating package.json ...");
    pkg.name = this.fields.name;
    pkg.author = this.fields.author;
    this.fs.writeJSON(this.destinationPath("package.json"), pkg)
  }
  ending() {
    this.log("Complete ~~");
  }

}