module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'db/dev.sqlite3'
    },
    seeds: {
      directory: 'db/seeds/'
    },
    migrations: {
      directory: 'db/migrations/'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: 'db/stag.sqlite3'
    },
    seeds: {
      directory: 'db/seeds/'
    },
    migrations: {
      directory: 'db/migrations/'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: 'db/prod.sqlite3'
    },
    seeds: {
      directory: 'db/seeds/'
    },
    migrations: {
      directory: 'db/migrations/'
    }
  }
};
