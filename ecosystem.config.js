module.exports = {
  apps: [
    {
      name: 'mirofish-backend',
      cwd: '/home/bima/source_code/MiroFish/backend',
      script: '/home/bima/.local/bin/uv',
      args: 'run python run.py',
      interpreter: 'none',
      env: {
        FLASK_DEBUG: 'false',
        FLASK_HOST: '0.0.0.0',
        FLASK_PORT: '5001',
      },
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
    {
      name: 'mirofish-frontend',
      cwd: '/home/bima/source_code/MiroFish/frontend',
      script: 'npm',
      args: 'run dev -- --host 0.0.0.0',
      interpreter: 'none',
      autorestart: true,
      watch: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
