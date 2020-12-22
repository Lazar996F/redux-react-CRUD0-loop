-- Revert dashboard:insertDataToSpotStatistics from pg

BEGIN;

DROP function if exists looper.insertDataToSpotStatistics(__scan_id__ uuid);

COMMIT;
