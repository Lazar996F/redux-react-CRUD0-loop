-- Revert dashboard:table_platforms from pg

BEGIN;

DROP TABLE looper.platforms CASCADE;

COMMIT;
