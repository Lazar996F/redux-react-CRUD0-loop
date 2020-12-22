-- Deploy dashboard:table_page to pg

BEGIN;
CREATE TABLE looper.page (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(45),
    path TEXT,
    scan_id uuid,
    CONSTRAINT fk_scan FOREIGN KEY (scan_id) REFERENCES looper.scans(id) ON DELETE CASCADE
);
COMMIT;
