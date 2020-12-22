-- Deploy dashboard:table_regions to pg

-- Deploy dashboard:scans to pg
-- requires: appschema

BEGIN;
CREATE TABLE looper.regions (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(45) UNIQUE,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    iso_code VARCHAR(20),
    currency VARCHAR(20),
    flag_file_name VARCHAR(20),
    flag_content_type VARCHAR(20),
    flag_file_size INT,
    flag_updated_at timestamp without time zone,
    locale VARCHAR(45),
    sort_key INT
);
COMMIT;
