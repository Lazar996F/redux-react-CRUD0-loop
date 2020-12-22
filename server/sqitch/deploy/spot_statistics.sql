-- Deploy dashboard:spot_statistics to pg
BEGIN;
CREATE TABLE looper.spot_statistics(
   id uuid DEFAULT public.uuid_generate_v4() NOT NULL PRIMARY KEY,
   platform_name VARCHAR(45),
   iso_code VARCHAR(20),
   spot_type VARCHAR(45),
   spot_position INT,
   page_name TEXT,
   page_depth INT,
   total_spots_on_page INT,
   page_share_percentage VARCHAR(45),
   section_name VARCHAR(45),
   section_position INT,
   total_spots_on_section INT,
   section_share_percentage VARCHAR(45),
   spot_id uuid REFERENCES looper.spots(id),
   platform_title_id TEXT,
   page_id uuid REFERENCES looper.page(id),
   title_name TEXT,
   title_type VARCHAR(45),
   scan_date VARCHAR(45),
   studio_id VARCHAR(45),
   scan_id uuid,
   client_id uuid REFERENCES looper.client(id),
   CONSTRAINT fk_scan FOREIGN KEY (scan_id) REFERENCES looper.scans(id) ON DELETE CASCADE
);
COMMIT;
