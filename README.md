## Projeto Sistema de Controle de estacionamento

### Grupo B

### Nome dos integrantes:
- [@JeanNesi](https://github.com/JeanNesi)
- [@lucasrguidi](https://github.com/lucasrguidi)
- [@brsavii](https://github.com/brsavii)
- [@guirms](https://github.com/guirms)
- [@KauaLibrelato](https://github.com/KauaLibrelato)
- [@ozielsilveira](https://github.com/ozielsilveira)
- [@HenriqueSilva29](https://github.com/HenriqueSilva29)
- [@kauanlc1](https://github.com/kauanlc1)

### Modelo Físico:
Utilizado https://dbdiagram.io/<br>
<br>[https://dbdiagram.io/d/64890510722eb77494e9af66](https://dbdiagram.io/d/649b00a302bd1c4a5e25878b)</br>
<code>![image](https://github.com/JeanNesi/controleDeEstacionamento/assets/98506943/a14fcaff-b95d-4542-b55a-c618680f558b)
</code>


### Dicionário de Dados:
Link PDF: https://docs.google.com/spreadsheets/d/e/2PACX-1vSVwwoesxQ3KJ2fPSw9dzwcFo78VBMPH67JbzX3r_njpgDXnTr5BGfKWPLA_PjakYipvN7zS6PNFpGL/pub?output=pdf
Link Google Shetts: https://docs.google.com/spreadsheets/d/1WUYTASfX49KInMTQkbXf5RoHuNEFaaON1TP2quygtZE/edit?usp=sharing

### Scripts DDL Criação do Database:
<code>Pasta CreateTables</code>

### Scripts Popula tabelas:
<code>
INSERT INTO addresses (id, street, city, uf, zipCode, createdAt, updatedAt)
VALUES
('3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'Rua Alegria', 'São Paulo', 'SP', '01234567', '2023-06-26 10:00:00', NULL),
('fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'Rua Barra de São João', 'São Paulo', 'SP', '02040070', '2023-06-26 11:30:00', NULL),
('8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 'Rua São Boaventura', 'São Paulo', 'SP', '80000456', '2023-06-26 12:45:00', NULL),
('2aa869c4-4d6a-4030-b2c7-50e6be8d8579', 'Avenida Paulista', 'São Paulo', 'SP', '01333999', '2023-06-26 14:15:00', NULL),
('95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 'Viela São Paulo', 'São Paulo', 'SP', '88000001', '2023-06-26 15:30:00', NULL),
('6fdbe654-95fb-4d06-bb0b-207721d7f2f2', 'Rua da Paz', 'Rio de Janeiro', 'RJ', '20000000', '2023-06-26 16:45:00', NULL),
('78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', 'Avenida Central', 'Rio de Janeiro', 'RJ', '22000000', '2023-06-26 18:00:00', NULL),
('96fb09a1-8c1f-4f39-b315-4420de23e9a0', 'Rua das Flores', 'Porto Alegre', 'RS', '90000001', '2023-06-26 19:15:00', NULL),
('4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', 'Avenida da Liberdade', 'São Paulo', 'SP', '04567890', '2023-06-26 20:30:00', NULL),
('a6e95c8e-0c2d-432f-b41b-9574e8d6d159', 'Rua Principal', 'Belo Horizonte', 'MG', '30000000', '2023-06-26 21:45:00', NULL);

INSERT INTO users (id, name, email, password, lastAccess, createdAt, updatedAt, addressId)
VALUES
('3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'John Doe', 'johndoe@example.com', 'password123', '2023-06-26 10:00:00', '2023-06-26 10:00:00', NULL, '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'Jane Smith', 'janesmith@example.com', 'pass456', '2023-06-26 11:30:00', '2023-06-26 11:30:00', NULL, 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456'),
('8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 'Mike Johnson', 'mikejohnson@example.com', 'mysecretpass', '2023-06-26 12:45:00', '2023-06-26 12:45:00', NULL, '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9'),
('2aa869c4-4d6a-4030-b2c7-50e6be8d8579', 'Sarah Davis', 'sarahdavis@example.com', 'password789', '2023-06-26 14:15:00', '2023-06-26 14:15:00', NULL, '2aa869c4-4d6a-4030-b2c7-50e6be8d8579'),
('95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 'David Brown', 'davidbrown@example.com', 'securepass123', '2023-06-26 15:30:00', '2023-06-26 15:30:00', NULL, '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3'),
('6fdbe654-95fb-4d06-bb0b-207721d7f2f2', 'Emily Wilson', 'emilywilson@example.com', 'password123', '2023-06-26 16:45:00', '2023-06-26 16:45:00', NULL, '6fdbe654-95fb-4d06-bb0b-207721d7f2f2'),
('78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', 'Michael Thompson', 'michaelthompson@example.com', 'pass456', '2023-06-26 18:00:00', '2023-06-26 18:00:00', NULL, '78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9'),
('96fb09a1-8c1f-4f39-b315-4420de23e9a0', 'Olivia Martinez', 'oliviamartinez@example.com', 'mysecretpass', '2023-06-26 19:15:00', '2023-06-26 19:15:00', NULL, '96fb09a1-8c1f-4f39-b315-4420de23e9a0'),
('4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', 'Daniel Clark', 'danielclark@example.com', 'password789', '2023-06-26 20:30:00', '2023-06-26 20:30:00', NULL, '4fa65f58-daf7-4f6f-8d24-59a1e430f6f5'),
('a6e95c8e-0c2d-432f-b41b-9574e8d6d159', 'Sophia Johnson', 'sophiajohnson@example.com', 'securepass123', '2023-06-26 21:45:00', '2023-06-26 21:45:00', NULL, 'a6e95c8e-0c2d-432f-b41b-9574e8d6d159');

INSERT INTO [plan] (id, amount, finalDate, createdAt, updatedAt)
VALUES
('3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 50.00, '2023-07-26', '2023-06-26 10:00:00', NULL),
('fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 30.00, '2023-08-26', '2023-06-26 11:30:00', NULL),
('8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 40.00, '2023-09-26', '2023-06-26 12:45:00', NULL),
('2aa869c4-4d6a-4030-b2c7-50e6be8d8579', 60.00, '2023-10-26', '2023-06-26 14:15:00', NULL),
('95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 35.00, '2023-11-26', '2023-06-26 15:30:00', NULL),
('6fdbe654-95fb-4d06-bb0b-207721d7f2f2', 55.00, '2023-12-26', '2023-06-26 16:45:00', NULL),
('78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', 25.00, '2024-01-26', '2023-06-26 18:00:00', NULL),
('96fb09a1-8c1f-4f39-b315-4420de23e9a0', 45.00, '2024-02-26', '2023-06-26 19:15:00', NULL),
('4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', 32.00, '2024-03-26', '2023-06-26 20:30:00', NULL),
('a6e95c8e-0c2d-432f-b41b-9574e8d6d159', 48.00, '2024-04-26', '2023-06-26 21:45:00', NULL);

INSERT INTO clients (id, name, email, phoneNumber, cpf, gender, birthDate, createdAt, updatedAt, planId, userId)
VALUES
('zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'John Doe', 'johndoe@example.com', '1234567890', '34345678901', 'Male', '1990-01-01', '2023-06-26 10:00:00', NULL, '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'Jane Smith', 'janesmith@example.com', '9876543210', '98765432109', 'Female', '1992-03-15', '2023-06-26 11:30:00', NULL, 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456'),
('zb4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 'Robert Johnson', 'robertjohnson@example.com', '4567891230', '45678912345', 'Male', '1985-06-10', '2023-06-26 12:45:00', NULL, '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9'),
('zaa869c4-4d6a-4030-b2c7-50e6be8d8579', 'Emily Davis', 'emilydavis@example.com', '6543219870', '65432198765', 'Female', '1998-09-20', '2023-06-26 14:15:00', NULL, '2aa869c4-4d6a-4030-b2c7-50e6be8d8579', '2aa869c4-4d6a-4030-b2c7-50e6be8d8579'),
('z5e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 'Michael Wilson', 'michaelwilson@example.com', '7894561230', '78945612345', 'Male', '1995-12-05', '2023-06-26 15:30:00', NULL, '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3'),
('zfdbe654-95fb-4d06-bb0b-207721d7f2f2', 'Olivia Anderson', 'oliviaanderson@example.com', '3216549870', '32165498765', 'Female', '1991-07-25', '2023-06-26 16:45:00', NULL, '6fdbe654-95fb-4d06-bb0b-207721d7f2f2', '6fdbe654-95fb-4d06-bb0b-207721d7f2f2'),
('z8c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', 'William Thompson', 'williamthompson@example.com', '9876543210', '98665432109', 'Male', '1987-04-12', '2023-06-26 18:00:00', NULL, '78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', '78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9'),
('z6fb09a1-8c1f-4f39-b315-4420de23e9a0', 'Sophia Martin', 'sophiamartin@example.com', '1234567890', '12145678901', 'Female', '1994-02-18', '2023-06-26 19:15:00', NULL, '96fb09a1-8c1f-4f39-b315-4420de23e9a0', '96fb09a1-8c1f-4f39-b315-4420de23e9a0'),
('zfa65f58-daf7-4f6f-8d24-59a1e430f6f5', 'Daniel Wilson', 'danielwilson@example.com', '9176543210', '98165432109', 'Male', '1983-11-30', '2023-06-26 20:30:00', NULL, '4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', '4fa65f58-daf7-4f6f-8d24-59a1e430f6f5'),
('z6e95c8e-0c2d-432f-b41b-9574e8d6d159', 'Mia Taylor', 'miataylor@example.com', '1234567890', '12245678901', 'Female', '1997-08-22', '2023-06-26 21:45:00', NULL, 'a6e95c8e-0c2d-432f-b41b-9574e8d6d159', 'a6e95c8e-0c2d-432f-b41b-9574e8d6d159');

INSERT INTO parkingLot (id, name, amountPerHour, capacity, createdAt, updatedAt)
VALUES
('3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'Parking Lot A', 10.50, 100, '2023-06-26 10:00:00', NULL),
('fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'Parking Lot B', 8.75, 80, '2023-06-26 11:30:00', NULL),
('8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 'Parking Lot C', 12.25, 120, '2023-06-26 12:45:00', NULL),
('2aa869c4-4d6a-4030-b2c7-50e6be8d8579', 'Parking Lot D', 9.99, 150, '2023-06-26 14:15:00', NULL),
('95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 'Parking Lot E', 7.50, 90, '2023-06-26 15:30:00', NULL),
('6fdbe654-95fb-4d06-bb0b-207721d7f2f2', 'Parking Lot F', 11.00, 110, '2023-06-26 16:45:00', NULL),
('78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', 'Parking Lot G', 6.25, 70, '2023-06-26 18:00:00', NULL),
('96fb09a1-8c1f-4f39-b315-4420de23e9a0', 'Parking Lot H', 13.75, 130, '2023-06-26 19:15:00', NULL),
('4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', 'Parking Lot I', 8.99, 95, '2023-06-26 20:30:00', NULL),
('a6e95c8e-0c2d-432f-b41b-9574e8d6d159', 'Parking Lot J', 10.00, 100, '2023-06-26 21:45:00', NULL);

INSERT INTO vehicles (id, clientId, name, plate, createdAt, updatedAt, planId)
VALUES
('3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'Toyota Corolla', 'ABC1234', '2023-06-26 10:00:00', NULL, '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'Honda Civic', 'DEF5678', '2023-06-26 11:30:00', NULL, 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456'),
('8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 'zb4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 'Ford Mustang', 'GHI9012', '2023-06-26 12:45:00', NULL, '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9'),
('2aa869c4-4d6a-4030-b2c7-50e6be8d8579', 'zaa869c4-4d6a-4030-b2c7-50e6be8d8579', 'Chevrolet Camaro', 'JKL3456', '2023-06-26 14:15:00', NULL, '2aa869c4-4d6a-4030-b2c7-50e6be8d8579'),
('95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 'z5e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 'Nissan Altima', 'MNO7890', '2023-06-26 15:30:00', NULL, '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3'),
('6fdbe654-95fb-4d06-bb0b-207721d7f2f2', 'zfdbe654-95fb-4d06-bb0b-207721d7f2f2', 'Volkswagen Golf', 'PQR1234', '2023-06-26 16:45:00', NULL, '6fdbe654-95fb-4d06-bb0b-207721d7f2f2'),
('78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', 'z8c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', 'BMW 3 Series', 'STU5678', '2023-06-26 18:00:00', NULL, '78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9'),
('96fb09a1-8c1f-4f39-b315-4420de23e9a0', 'z6fb09a1-8c1f-4f39-b315-4420de23e9a0', 'Mercedes-Benz C-Class', 'VWX9012', '2023-06-26 19:15:00', NULL, '96fb09a1-8c1f-4f39-b315-4420de23e9a0'),
('4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', 'zfa65f58-daf7-4f6f-8d24-59a1e430f6f5', 'Audi A4', 'YZA3456', '2023-06-26 20:30:00', NULL, '4fa65f58-daf7-4f6f-8d24-59a1e430f6f5'),
('a6e95c8e-0c2d-432f-b41b-9574e8d6d159', 'z6e95c8e-0c2d-432f-b41b-9574e8d6d159', 'Lexus RX', 'BCD7890', '2023-06-26 21:45:00', NULL, 'a6e95c8e-0c2d-432f-b41b-9574e8d6d159');

INSERT INTO reservations (id, startTime, endTime, createdAt, updatedAt, vehicleId, parkingId, clientId)
VALUES
('3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '2023-06-26 10:00:00', NULL, '2023-06-26 10:00:00', NULL, '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', '2023-06-26 11:30:00', NULL, '2023-06-26 11:30:00', NULL, 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456'),
('8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', '2023-06-26 12:45:00', NULL, '2023-06-26 12:45:00', NULL, '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 'zb4c1c27-73fb-4a67-a8cd-ff77e96fc0e9'),
('zaa869c4-4d6a-4030-b2c7-50e6be8d8579', '2023-06-26 14:15:00', NULL, '2023-06-26 14:15:00', NULL, '2aa869c4-4d6a-4030-b2c7-50e6be8d8579', '2aa869c4-4d6a-4030-b2c7-50e6be8d8579', 'zaa869c4-4d6a-4030-b2c7-50e6be8d8579'),
('95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', '2023-06-26 15:30:00', NULL, '2023-06-26 15:30:00', NULL, '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 'z5e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3'),
('3zcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '2023-06-26 16:45:00', NULL, '2023-06-26 16:45:00', NULL, '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('zz5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', '2023-06-26 18:00:00', NULL, '2023-06-26 18:00:00', NULL, 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456'),
('zb4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', '2023-06-26 19:15:00', NULL, '2023-06-26 19:15:00', NULL, '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 'zb4c1c27-73fb-4a67-a8cd-ff77e96fc0e9'),
('2aa869c4-4d6a-4030-b2c7-50e6be8d8579', '2023-06-26 20:30:00', NULL, '2023-06-26 20:30:00', NULL, '2aa869c4-4d6a-4030-b2c7-50e6be8d8579', '2aa869c4-4d6a-4030-b2c7-50e6be8d8579', 'zaa869c4-4d6a-4030-b2c7-50e6be8d8579'),
('z5e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', '2023-06-26 21:45:00', NULL, '2023-06-26 21:45:00', NULL, '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 'z5e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3'),
('zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '2023-06-26 23:00:00', NULL, '2023-06-26 23:00:00', NULL, '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 'zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', '2023-06-27 10:30:00', NULL, '2023-06-27 10:30:00', NULL, 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456');

INSERT INTO payments (id, amount, paymentDate, reservationId, createdAt, updatedAt, clientId)
VALUES
('3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', 50.00, '2023-06-26 10:00:00', '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '2023-06-26 10:00:00', NULL, 'zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 30.00, '2023-06-26 11:30:00', 'zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', '2023-06-26 11:30:00', NULL, 'zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456'),
('8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', 20.00, '2023-06-26 12:45:00', '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', '2023-06-26 12:45:00', NULL, 'zb4c1c27-73fb-4a67-a8cd-ff77e96fc0e9'),
('2aa869c4-4d6a-4030-b2c7-50e6be8d8579', 40.00, '2023-06-26 14:15:00', 'zaa869c4-4d6a-4030-b2c7-50e6be8d8579', '2023-06-26 14:15:00', NULL, 'zaa869c4-4d6a-4030-b2c7-50e6be8d8579'),
('95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', 60.00, '2023-06-26 15:30:00', '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', '2023-06-26 15:30:00', NULL, 'z5e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3'),
('6fdbe654-95fb-4d06-bb0b-207721d7f2f2', 70.00, '2023-06-26 16:45:00', '3zcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '2023-06-26 16:45:00', NULL, 'zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('ba55c13f-32d2-4b63-b6b4-6c3c8779fe28', 55.00, '2023-06-26 18:00:00', 'zz5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', '2023-06-26 18:00:00', NULL, 'zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456'),
('96fb09a1-8c1f-4f39-b315-4420de23e9a0', 25.00, '2023-06-26 19:15:00', '2aa869c4-4d6a-4030-b2c7-50e6be8d8579', '2023-06-26 19:15:00', NULL, 'zb4c1c27-73fb-4a67-a8cd-ff77e96fc0e9'),
('4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', 35.00, '2023-06-26 20:30:00', 'zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '2023-06-26 20:30:00', NULL, 'zaa869c4-4d6a-4030-b2c7-50e6be8d8579'),
('a6e95c8e-0c2d-432f-b41b-9574e8d6d159', 45.00, '2023-06-26 21:45:00', 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', '2023-06-26 21:45:00', NULL, 'z5e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3');

INSERT INTO clientsVehicles (id, vehicleId, createdAt, updatedAt, clientId)
VALUES
('3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '3dcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c', '2023-06-26 10:00:00', NULL, 'zdcee5c3-16e3-4be4-a8e4-0fb0c2a4e13c'),
('fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', 'fd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456', '2023-06-26 11:30:00', NULL, 'zd5b7c1f-12c9-4fd7-9c5c-4eb228a8c456'),
('8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', '8b4c1c27-73fb-4a67-a8cd-ff77e96fc0e9', '2023-06-26 12:45:00', NULL, 'zb4c1c27-73fb-4a67-a8cd-ff77e96fc0e9'),
('2aa869c4-4d6a-4030-b2c7-50e6be8d8579', '2aa869c4-4d6a-4030-b2c7-50e6be8d8579', '2023-06-26 14:15:00', NULL, 'zaa869c4-4d6a-4030-b2c7-50e6be8d8579'),
('95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', '95e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3', '2023-06-26 15:30:00', NULL, 'z5e6b1ce-0495-4b6d-9f62-9c5e9cc6a7a3'),
('6fdbe654-95fb-4d06-bb0b-207721d7f2f2', '6fdbe654-95fb-4d06-bb0b-207721d7f2f2', '2023-06-26 16:45:00', NULL, 'zfdbe654-95fb-4d06-bb0b-207721d7f2f2'),
('78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', '78c6d8a3-fc4d-4125-8a4a-aa09f4323ed9', '2023-06-26 18:00:00', NULL, 'z8c6d8a3-fc4d-4125-8a4a-aa09f4323ed9'),
('96fb09a1-8c1f-4f39-b315-4420de23e9a0', '96fb09a1-8c1f-4f39-b315-4420de23e9a0', '2023-06-26 19:15:00', NULL, 'z6fb09a1-8c1f-4f39-b315-4420de23e9a0'),
('4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', '4fa65f58-daf7-4f6f-8d24-59a1e430f6f5', '2023-06-26 20:30:00', NULL, 'zfa65f58-daf7-4f6f-8d24-59a1e430f6f5'),
('a6e95c8e-0c2d-432f-b41b-9574e8d6d159', 'a6e95c8e-0c2d-432f-b41b-9574e8d6d159', '2023-06-26 21:45:00', NULL, 'z6e95c8e-0c2d-432f-b41b-9574e8d6d159');

</code>

### Objetos de BD (stored procedure, triggers e functions):
<code>database programming</code>
  
### Código do sistema:
Linguagem de Programação React/NodeJS<br>
<code>Pastas client e server</code>
