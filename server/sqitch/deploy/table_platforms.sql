-- Deploy dashboard:table_platforms to pg

-- Deploy dashboard:scans to pg
-- requires: appschema

BEGIN;
CREATE TABLE looper.platforms (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    territory_id uuid,
    name VARCHAR(45) UNIQUE,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    logo_file_name VARCHAR(45),
    logo_content_type VARCHAR(45),
    logo_file_size INT,
    logo_updated_at timestamp without time zone,
    favicon_file_name VARCHAR(45),
    favicon_content_type VARCHAR(45),
    favicon_file_size VARCHAR(45),
    favicon_updated_at VARCHAR(45),
    code VARCHAR(45),
    currency VARCHAR(20),
    has_uber_artwork Boolean DEFAULT false,
    has_boxsets Boolean DEFAULT true,
    generate_actions Boolean DEFAULT true,
    variants jsonb DEFAULT '{"buy":{"4k":true, "hd":true,"sd":true},"rent": {"4k":true,"hd":true,"sd":true}}'::jsonb,
    CONSTRAINT fk_territory FOREIGN KEY (territory_id) REFERENCES looper.regions(id) ON DELETE CASCADE
);
COMMIT;
