CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	bookid int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(50) NOT NULL,
    author varchar(50) NOT NULL,
    year int NOT NULL,
    publisher varchar(50),
    page INT NOT NULL,
    msrp INT NOT NULL
);

INSERT INTO book (bookid, title, author, year, publisher, page, msrp) VALUES
(1, 'The Goblet of Fire', 'J. K. Rowling', 2000, 'Bloomsbury Publishing', 636, 24.26),
(2, 'The Fault In Our Stars', 'John Green', 2012, 'Dutton Brooks', 313, 9.98),
(3, 'To Kill A Mockingbird', 'Harper Lee', 1960, 'Lippincott & Co', 281, 26.07),
(4, 'The Great Gatsby', 'F Scott Fitzgerald', 1925, 'Charles Scribner', 240, 5.97),
(5, 'The Book Thief', 'Markus Zuzak', 2005, 'Picador', 584, 14.99);


-- SELECT * FROM students;

-- DROP TABLE IF EXISTS offer;
--CREATE TABLE offer (
	--id int PRIMARY KEY AUTO_INCREMENT,
    --studentId int NOT NULL REFERENCES student(id)
      --  ON DELETE CASCADE ON UPDATE CASCADE,
	--companyName VARCHAR(24) NOT NULL DEFAULT '',
    --salary int NOT NULL DEFAULT 0,
    --bonus int NOT NULL DEFAULT 0,
	--offerDate date NOT NULL DEFAULT(CURRENT_DATE)
--);

-- Student 1 has no offers, Student 2 has 3 offers, Student 3 has one offer
--INSERT INTO offer(id, studentId, companyName, salary, bonus, offerDate) VALUES
  --(1, 2, 'KPMG', 95000, 7000, '2021-09-30'),
  --(2, 2, 'Deloitte Digital', 94000, 12000, '2021-10-03'),
  --(3, 2, 'IU, ISGP', 54000, 0, '2021-10-05'),
  --(4, 3, 'Amazon', 122000, 11000, '2021-10-15')
--;

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';
