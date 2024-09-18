#!/usr/bin/env node

import degit from "degit";
import { execSync } from "child_process";

const repo = "https://github.com/iskan-iskra/react-template-iskan-iskra"; // Замените на свой репозиторий с шаблоном
const emitter = degit(repo, {
  cache: false,
  force: true,
  verbose: true,
});

emitter.on("info", (info) => {
  console.log(info.message);
});

emitter.clone(process.cwd()).then(() => {
  console.log("Project setup complete.");
  console.log("Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });
});
