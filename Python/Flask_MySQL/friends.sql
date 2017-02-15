use friendsdb;

INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) 
VALUES ("Jay", "Patel", "Instructor", NOW(), NOW());
INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) 
VALUES ("Jimmy", "Jun", "Instructor", NOW(), NOW());

SELECT * FROM friends; # Should display two friends

INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) 
VALUES ("Jonathan", "Lee", "Student", NOW(), NOW());