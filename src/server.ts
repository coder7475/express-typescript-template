import dotenv from 'dotenv';
import app from './app';

// Load env variables from .env
dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';

const server = app.listen(PORT, () => {
  console.log(`🚀 Server (${NODE_ENV}) running at http://${HOST}:${PORT}`);
});

// Graceful shutdown handler
const onCloseSignal = () => {
  console.log('🛑 SIGINT/SIGTERM received, shutting down gracefully...');

  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });

  // Force shutdown if it takes too long
  setTimeout(() => {
    console.error('❌ Forcefully exiting after timeout');
    process.exit(1);
  }, 10000).unref();
};

// Listen to termination signals
process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
