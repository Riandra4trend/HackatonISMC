CREATE TABLE IF NOT EXISTS "user" (
    user_id      SERIAL PRIMARY KEY,
    username     VARCHAR(256) UNIQUE NOT NULL,
    password     VARCHAR(256) NOT NULL,
    is_manager   BOOLEAN NOT NULL DEFAULT false
);