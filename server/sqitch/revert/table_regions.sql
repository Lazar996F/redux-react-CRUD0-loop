-- Revert dashboard:table_regions from pg

BEGIN;

DROP TABLE looper.regions CASCADE;

COMMIT;
