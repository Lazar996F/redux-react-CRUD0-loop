-- Deploy dashboard:scans to pg
-- requires: appschema

BEGIN;
CREATE TABLE looper.scans (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    territory_id uuid,
    platform_id uuid,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone,
    use_browser Boolean,
    sheduled_at timestamp without time zone,
    client_id uuid REFERENCES looper.client(id),
     CONSTRAINT fk_territory FOREIGN KEY (territory_id) REFERENCES looper.regions(id) ON DELETE CASCADE,
     CONSTRAINT fk_platform FOREIGN KEY (platform_id) REFERENCES looper.platforms(id) ON DELETE CASCADE
);
COMMIT;
