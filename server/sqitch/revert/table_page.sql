-- Revert dashboard:table_page from pg

BEGIN;

DROP TABLE looper.page;

COMMIT;
