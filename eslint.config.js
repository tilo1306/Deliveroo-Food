// eslint.config.js
const expoConfig = require("eslint-config-expo/flat")
const { defineConfig } = require("eslint/config")

module.exports = defineConfig([
  expoConfig,
  // your other config
])
