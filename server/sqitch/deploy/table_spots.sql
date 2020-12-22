-- Deploy dashboard:table_spots to pg

BEGIN;
CREATE TABLE looper.spots(
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(45),
    column_position INT,
    type VARCHAR(45),
    app_title VARCHAR(45),
    image_url TEXT,
    section_id uuid,
    CONSTRAINT fk_section FOREIGN KEY (section_id) REFERENCES looper.section(id) ON DELETE CASCADE
);
COMMIT;