-- Revert dashboard:scans from pg

BEGIN;

DROP TABLE looper.scans CASCADE;

COMMIT;
