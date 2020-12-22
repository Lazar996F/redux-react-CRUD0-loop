-- Revert dashboard:spot_statistics from pg

BEGIN;
DROP TABLE looper.spot_statistics;
COMMIT;
