-- Deploy dashboard:users_table to pg

BEGIN;
CREATE TABLE looper.user(
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    client_id uuid REFERENCES looper.client(id),
    name VARCHAR(45),
    last_name VARCHAR(45),
    password TEXT,
    email VARCHAR(45)
);
COMMIT;
