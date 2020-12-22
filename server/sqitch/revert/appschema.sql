-- Revert dashboard:appschema from pg

BEGIN;

DROP SCHEMA looper CASCADE;

COMMIT;
