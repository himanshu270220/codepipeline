module.exports = {
  apps: [{
    name: "rekognition",
    script: "app.js",
    instances: "max",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};
