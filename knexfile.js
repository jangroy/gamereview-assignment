module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
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

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: 'db/test.sqlite3'
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
    useNullAsDefault: true,
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
    useNullAsDefault: true,
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
