/* Let's say you're administering a SQL database system for a school. The 
 * existing database is already in place when you arrive, and has a large
 * amount of existing data. The schema is provided below.
 */

drop table if exists Students;
drop table if exists Teachers;
drop table if exists Assignments;
drop table if exists Grades;

/* Begin schema */

create table Students (
  id int not null,
  name varchar(16),
  primary_teacher_id int
);

create table Teachers (
  id int primary key,
  name varchar(16) not null,
  classroom int not null
);

create table Assignments (
  id int primary key,
  teacher_id int not null
);

create table Grades (
  student_id int,
  assignment_id int,
  grade decimal (4,1),
  PRIMARY KEY (student_id, assignment_id)
);

/* End schema */

/* Begin test data */

insert into Students values
  (1, 'Bobby', 4), (2, 'Susie', 8), (3, 'Deborah', 8),
  (4, 'Anand', 4), (5, 'Robert', 4), (6, 'Claire', 4),
  (8, 'Petra', 4), (9, 'Bruce', 12), (10, 'Andrew', 4),
  (11, 'Kim', 4);

insert into Teachers values
  (4, 'Mr. Feeny', 301), (8, 'Mr. Cooper', 260);

insert into Assignments values(1, 4), (2, 8);

insert into Grades values
  (1, 1, 100), (1, 2, 50),
  (2, 1, 100), (2, 2, 100),
  (3, 1, 40), (3, 2, 8),
  (4, 1, 80), (4, 2, 81),
  (5, 1, 30), (5, 2, 60),
  (6, 2, 90),
  (9, 1, 65), (9, 2, 65),
  (10, 1, 85);

/* End test data */


SELECT Students.id, Students.name,Teachers.name FROM Students LEFT JOIN Teachers ON Students.primary_teacher_id = Teachers.id


/*
We want to identify the school’s top-performing students. Design a query, prepared statement, or stored procedure that will select only those students whose average score (across all assignments) are in the top 50% of all students, and rank them by their score. Exclude those students who have never completed an assignment.

Expected output:

+------------+-----------+
| student_id | avggrade  |
+------------+-----------+
|          2 | 100.00000 |
|          6 |  90.00000 |
|         10 |  85.00000 |
|          4 |  80.50000 |
+------------+-----------+
 */
 
 SELECT * from Grades