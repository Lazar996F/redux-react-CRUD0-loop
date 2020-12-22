-- Revert dashboard:table_section from pg

BEGIN;

DROP TABLE looper.section;

COMMIT;
