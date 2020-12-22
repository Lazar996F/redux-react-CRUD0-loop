-- Deploy dashboard:table_section to pg

BEGIN;
CREATE TABLE looper.section (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
    name VARCHAR(45),
    row INT,
    page_id uuid,
    CONSTRAINT fk_page FOREIGN KEY (page_id) REFERENCES looper.page(id) ON DELETE CASCADE
);
COMMIT;
