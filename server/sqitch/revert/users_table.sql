-- Revert dashboard:users_table from pg

BEGIN;

DROP TABLE looper.user;

COMMIT;
