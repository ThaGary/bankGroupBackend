module.exports = {
    development: {
      client: 'pg',
      connection: 'postgresql://localhost/bank-backend'
  },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
  }
}