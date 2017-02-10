INSERT INTO users (first_name, last_name)
VALUES ("Jonathan", "Lee");
INSERT INTO users (first_name, last_name)
VALUES ("Christine", "Ibia");
INSERT INTO users (first_name, last_name)
VALUES ("Joey", "Zoland");
INSERT INTO users (first_name, last_name)
VALUES ("Patrick", "Leung");
INSERT INTO users (first_name, last_name)
VALUES ("Sam", "Bragge");

INSERT INTO friendships (users_id, users_id1)
VALUES (6, 7);
INSERT INTO friendships (users_id, users_id1)
VALUES (7, 6);
INSERT INTO friendships (users_id, users_id1)
VALUES (8, 10);
INSERT INTO friendships (users_id, users_id1)
VALUES (9, 7);
INSERT INTO friendships (users_id, users_id1)
VALUES (8, 6);
INSERT INTO friendships (users_id, users_id1)
VALUES (10, 9);
INSERT INTO friendships (users_id, users_id1)
VALUES (9, 10);

USE friendships;
SELECT users.first_name, users.last_name, users2.first_name as friend_first_name, users2.last_name as friend_last_name
FROM users
LEFT JOIN friendships
ON users.id = friendships.users_id
LEFT JOIN users as users2
ON users2.id = friendships.users_id1
WHERE users.id = 1;
