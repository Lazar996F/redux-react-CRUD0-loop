-- Deploy dashboard:extension to pg

BEGIN;

create extension if not exists "uuid-ossp" schema public;

COMMIT;
