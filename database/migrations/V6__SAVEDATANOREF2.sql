DROP TABLE scan_save;

CREATE TABLE scan_save ( 
    scan_id INTEGER, /* NO REFERENCE FOR TESTING BECAUSE OTHER TABLE ISN'T READY*/
    date_save date,
    lowerX real,
    lowerY real,
    lowerZ real,
    lowerRX real, 
    lowerRY real, 
    lowerRZ real, 
    upperX real, 
    upperY real, 
    upperZ real, 
    upperRX real, 
    upperRY real, 
    upperRZ real,
    PRIMARY KEY (scan_id, date_save)
);