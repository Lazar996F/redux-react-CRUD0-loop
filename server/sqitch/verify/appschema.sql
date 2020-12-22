-- Verify dashboard:appschema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('looper','postgres');

ROLLBACK;
