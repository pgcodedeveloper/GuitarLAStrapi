module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce8atgun6mpksehb5e9g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_c8fa'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'et65hFeXolISV0TWMsMOKLiuh4S5GE4m'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
