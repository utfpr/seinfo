module.exports = {
  apps : [{
    name: "seInfo-back-end",
    script: "./app.js",
    watch:true,
    max_memory_restart:"200M",
    instance:1,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
