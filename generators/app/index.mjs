/*
 * @Author: taozhiyaoyao taozhiyaoyao9527@outlook.com
 * @Date: 2022-11-10 17:29:42
 * @LastEditors: taozhiyaoyao taozhiyaoyao9527@outlook.com
 * @LastEditTime: 2022-11-15 22:29:18
 * @FilePath: \generator-mommy\generators\app\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
        message: "Please enter your project name:(Default mommy-express-app)",
        default: "mommy-express-app"
      },
      {
        type: "input",
        name: "author",
        message: "Please enter the name of the project author:(Default JammieGriffin)",
        default: "JammieGriffin"
      },
      {
        type: "list",
        name: "license",
        message: "Please select a license for the project:",
        choices: ["MIT", "Apache", "Select later"]
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
    pkg.license = this.fields.license === "Select latter" ? "" : this.fields.license;
    this.fs.writeJSON(this.destinationPath("package.json"), pkg)
  }
  ending() {
    this.log("Complete ~~");
  }

}