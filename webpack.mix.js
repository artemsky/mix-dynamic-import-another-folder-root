if (!process.env.APP_TYPE) {
  throw new Error('Please set APP_TYPE to "admin" or "client".');
} else {
  if (process.env.APP_TYPE === 'admin') {
    require('./webpack/admin');
  } else {
    require('./webpack/client');
  }
}
