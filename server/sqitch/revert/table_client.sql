-- Revert dashboard:table_client from pg

BEGIN;

DROP TABLE looper.client CASCADE;

COMMIT;
