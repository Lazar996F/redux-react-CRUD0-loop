-- Deploy dashboard:insertDataToSpotStatistics to pg
create or replace function looper.insertDataToSpotStatistics(__scan_id__ uuid)
   returns setof looper.spot_statistics
   language plpgsql 
  as
$$
declare
current_scan looper.scans;
last_scan looper.scans;
begin
DELETE FROM looper.spot_statistics WHERE scan_id = __scan_id__;
SELECT * INTO current_scan FROM looper.scans WHERE id = __scan_id__;
SELECT * INTO last_scan FROM looper.scans WHERE created_at < current_scan.created_at  AND platform_id = current_scan.platform_id
ORDER BY created_at DESC LIMIT 1;
IF NOT FOUND THEN 
last_scan=current_scan;
END IF;
INSERT INTO looper.spot_statistics(scan_id,page_id, section_name, spot_id,platform_name,spot_position, section_position,title_name,spot_type) 
SELECT scans1.id as scan_id,sec1.page_id, sec1.name AS section_name, spots1.id AS spot_id, (SELECT name FROM looper.platforms WHERE id = scans1.platform_id),
(spots1.column_position-spots2.column_position) AS spot_position,(sec1.row-sec2.row) AS section_position,spots1.name AS title_name,spots1.type AS spot_type
FROM looper.spots spots1
INNER JOIN looper.spots spots2 ON spots2.name = spots1.name
INNER JOIN looper.section sec1 ON spots1.section_id = sec1.id
INNER JOIN looper.page page1 ON sec1.page_id = page1.id
INNER JOIN looper.scans scans1 ON page1.scan_id = scans1.id
INNER JOIN looper.section sec2 ON spots2.section_id = sec2.id
INNER JOIN looper.page page2 ON sec2.page_id = page2.id
INNER JOIN looper.scans scans2 ON page2.scan_id = scans2.id
WHERE scans1.id = __scan_id__
AND scans2.id = last_scan.id;
return query SELECT * FROM looper.spot_statistics WHERE scan_id = __scan_id__;
end
$$
