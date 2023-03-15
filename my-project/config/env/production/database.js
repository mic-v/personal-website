module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-77.railway.app'),
      port: env.int('PGPORT', 6424),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'PMKmxMt6haAV0LYNl93x'),
      ssl: env.bool(true),
    },
  },
});

