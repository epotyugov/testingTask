CREATE TABLE `tablename` (
	`id` INT(20) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(100) NOT NULL,
	`id_collection` INT(20),
	PRIMARY KEY (`id`)
);

INSERT INTO 
	tablename(title, id_collection)
VALUES
	('thing 1', 1),
	('thing 2', 2),
	('thing 3', 3),
	('thing 4', 4),
	('thing 5', 2),
	('thing 6', 3),
	('thing 7', 1),
	('thing 8', 4),
	('thing 9', 3),
	('thing 10', 4),
	('thing 11', 1);

SELECT t1.id_collection, LatestId, MAX(t2.id) as SecondLatestId
FROM
(
	SELECT id_collection,Max(id) as LatestId
	FROM tablename AS t11
	GROUP BY id_collection
) AS t1
INNER JOIN tablename AS t2
ON t2.id_collection = t1.id_collection
	AND t2.id <> t1.LatestId
GROUP BY t1.id_collection, t1.LatestId;