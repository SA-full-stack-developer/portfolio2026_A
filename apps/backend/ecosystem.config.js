module.exports = {
  apps: [
    {
      name: 'portfolio-backend',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
