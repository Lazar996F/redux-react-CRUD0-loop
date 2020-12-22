-- Deploy dashboard:table_client to pg

BEGIN;

CREATE TABLE looper.client (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(45),
    logo_url TEXT
);

COMMIT;
