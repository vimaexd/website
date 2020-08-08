module.exports = {
  apps : [
      {
        name: "site",
        script: "index.js",
        watch: true,
        env: {
          "NODE_ENV": "production",
        }
      }
  ]
}
