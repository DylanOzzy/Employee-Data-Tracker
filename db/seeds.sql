INSERT INTO departments (name) VALUES
('HR'),
('Engineering'),
('Sales');

INSERT INTO roles (title, salary, department_id) VALUES
('HR Manager', 70000.00, 1),
('Software Engineer', 80000.00, 2),
('Sales Representative', 60000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, 1),
('Jane', 'Smith', 2, 1),
('Bob', 'Johnson', 3, 1);