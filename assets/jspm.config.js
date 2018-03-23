SystemJS.config({
    baseURL: "assets",
    transpiler: "ts",
    typescriptOptions: {
      "module": "system",
      "target": "es5",
      "tsconfig": true,
      "sourceMap": true
    },
    packages: {  
      "resources": {
        "main": "app",
        "defaultExtension": "ts"
      },
      "": {
        "defaultExtension": "js"
      }
    },
    paths: {
      "github:": "../dependecies/jspm_packages/github/",
      "npm:": "../dependecies/jspm_packages/npm/"
    }
  });