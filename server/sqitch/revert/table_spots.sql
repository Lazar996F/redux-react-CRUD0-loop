-- Revert dashboard:table_spots from pg

BEGIN;

DROP TABLE looper.spots;

COMMIT;
