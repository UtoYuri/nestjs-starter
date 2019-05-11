const DATABASE_URL = process.env.DATABASE_URL || 'sqlite://database.sqlite';
const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';
const DB_CONFIG = {
  url: DATABASE_URL,
  logging: false,
};

export { JWT_SECRET, DB_CONFIG };
