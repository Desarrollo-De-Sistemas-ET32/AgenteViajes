DROP DATABASE IF EXISTS amelieSQL;
CREATE DATABASE amelieSQL;
USE amelieSQL;

CREATE TABLE City (
  ID_City INT NOT NULL AUTO_INCREMENT,
  City_Name VARCHAR(100) NOT NULL UNIQUE,
  Country VARCHAR(100) NOT NULL,
  Description TEXT NULL,
  Image_Path VARCHAR(255) NULL,
  Average_Rating DECIMAL(3,2) NULL CHECK (Average_Rating BETWEEN 0.0 AND 5.0),
  PRIMARY KEY (ID_City)
);

CREATE TABLE User (
  ID_User INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(45) NOT NULL,
  Surname VARCHAR(45) NOT NULL,
  Email VARCHAR(60) NOT NULL UNIQUE,
  Password VARCHAR(255) NULL,
  Phone_number VARCHAR(20) NOT NULL,
  Address VARCHAR(45) NOT NULL,
  MemberShip TINYINT NULL DEFAULT 0,
  Profile_Image_Path VARCHAR(255) NULL,
  Created_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Updated_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_User)
);


CREATE TABLE Review (
  ID_Review INT NOT NULL AUTO_INCREMENT,
  ID_User INT NOT NULL,
  Entity_Type ENUM('Hotel', 'Activity', 'City', 'Travel') NOT NULL,
  Entity_ID INT NOT NULL,
  Rating DECIMAL(3,2) NOT NULL CHECK (Rating BETWEEN 0.0 AND 5.0),
  Review_Text TEXT NULL,
  Created_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_Review),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE Two_Factor_Auth (
  ID_2FA INT NOT NULL AUTO_INCREMENT,
  ID_User INT NOT NULL,
  Secret_Key VARCHAR(255) NOT NULL,
  Is_Enabled TINYINT NOT NULL DEFAULT 0,
  Backup_Codes TEXT NULL,
  Created_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_2FA),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Hotel (
  ID_Hotel INT NOT NULL AUTO_INCREMENT,
  Hotel_name VARCHAR(100) NOT NULL,
  ID_City INT NOT NULL, 
  Stars INT NULL CHECK (Stars BETWEEN 1 AND 5),
  Image_Path VARCHAR(255) NULL,
  Description TEXT NULL,
  Amenities TEXT NULL,
  Rating DECIMAL(3,2) NULL CHECK (Rating BETWEEN 0.0 AND 5.0),
  PRIMARY KEY (ID_Hotel),
  FOREIGN KEY (ID_City) REFERENCES City (ID_City)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE Flights (
  ID_Flight INT NOT NULL AUTO_INCREMENT,
  ID_User INT NULL,
  Flight_Number VARCHAR(20) NULL,
  Airline VARCHAR(45) NULL,
  Origin VARCHAR(45) NULL,
  Destination VARCHAR(45) NULL,
  Departure_Date DATETIME NULL,
  Arrival_Date DATETIME NULL,
  Total_cost DECIMAL(10,2) NULL,
  Class ENUM('Economy', 'Premium', 'Business', 'First') DEFAULT 'Economy',
  Status ENUM('Booked', 'Confirmed', 'Cancelled', 'Completed') DEFAULT 'Booked',
  PRIMARY KEY (ID_Flight),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE Travel (
  ID_Travel INT NOT NULL AUTO_INCREMENT,
  ID_User INT NULL,
  Travel_Name VARCHAR(100) NOT NULL,
  Destination VARCHAR(100) NOT NULL,
  Start_date DATETIME NULL,
  End_date DATETIME NULL,
  Total_cost DECIMAL(10,2) NULL,
  Document_Path VARCHAR(255) NULL,
  Status ENUM('Planning', 'Confirmed', 'In Progress', 'Completed', 'Cancelled') DEFAULT 'Planning',
  Travel_Style ENUM('Preferred', 'Alternative') NULL,
  Accommodation_Type ENUM('Hotel de Lujo', 'Boutique Hotel', 'Apartamento', 'Casa Rural', 'Hostal') NULL,
  Created_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_Travel),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE Travel_Companion (
  ID_Companion INT NOT NULL AUTO_INCREMENT,
  ID_Travel INT NOT NULL,
  Name VARCHAR(45) NOT NULL,
  Surname VARCHAR(45) NOT NULL,
  Email VARCHAR(60) NULL,
  Phone_number VARCHAR(20) NULL,
  Relationship VARCHAR(30) NULL, -- 'Family', 'Friend', 'Partner', etc.
  PRIMARY KEY (ID_Companion),
  FOREIGN KEY (ID_Travel) REFERENCES Travel (ID_Travel)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Activity (
  ID_Activity INT NOT NULL AUTO_INCREMENT,
  Activity_Name VARCHAR(100) NOT NULL,
  ID_City INT NOT NULL,
  Cost DECIMAL(10,2) NULL,
  Duration VARCHAR(45) NULL,
  Category ENUM('Música', 'Historia', 'Aventura', 'Gastronomía', 'Cultura', 'Naturaleza', 'Deportes') NULL,
  Media_Path VARCHAR(255) NULL,
  Description TEXT NULL,
  Rating DECIMAL(3,2) NULL CHECK (Rating BETWEEN 0.0 AND 5.0),
  PRIMARY KEY (ID_Activity),
  FOREIGN KEY (ID_City) REFERENCES City (ID_City)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE Favorites (
  ID_Favorite INT NOT NULL AUTO_INCREMENT,
  ID_User INT NOT NULL,
  Entity_Type ENUM('Hotel', 'Activity', 'Destination', 'Travel') NOT NULL,
  Entity_ID INT NOT NULL,
  Added_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_Favorite),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  UNIQUE KEY unique_favorite (ID_User, Entity_Type, Entity_ID)
);

CREATE TABLE User_Travel_Interests (
  ID_Interest INT NOT NULL AUTO_INCREMENT,
  ID_User INT NOT NULL,
  Interest_Category ENUM('Gastronomía', 'Naturaleza', 'Historia', 'Aventura', 'Música', 'Cultura', 'Fotografía') NOT NULL,
  Priority TINYINT DEFAULT 1 CHECK (Priority BETWEEN 1 AND 5),
  PRIMARY KEY (ID_Interest),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Dietary_Restrictions (
  ID_Restriction INT NOT NULL AUTO_INCREMENT,
  ID_User INT NOT NULL,
  Restriction_Type ENUM('Vegetariano', 'Vegano', 'Sin gluten', 'Alérgico alimentarios') NOT NULL,
  Details TEXT NULL, -- Para especificar alergias específicas
  PRIMARY KEY (ID_Restriction),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Accessibility_Requirements (
  ID_Accessibility INT NOT NULL AUTO_INCREMENT,
  ID_User INT NOT NULL,
  Requirement_Type ENUM('Acceso para silla de ruedas', 'Asistencia visual', 'Asistencia auditiva') NOT NULL,
  Details TEXT NULL,
  PRIMARY KEY (ID_Accessibility),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Payments (
  ID_Payments INT NOT NULL AUTO_INCREMENT,
  Status ENUM('Pending', 'Completed', 'Failed', 'Refunded') DEFAULT 'Pending',
  Payment_Date DATETIME NULL,
  Payment_method ENUM('Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer', 'Cash') NULL,
  Transaction_Code VARCHAR(100) NULL UNIQUE,
  Amount DECIMAL(10,2) NOT NULL,
  Currency VARCHAR(3) DEFAULT 'USD',
  Entity_Type ENUM('Travel', 'Flight', 'Hotel', 'Activity') NOT NULL,
  Entity_ID INT NOT NULL,
  PRIMARY KEY (ID_Payments)
);

CREATE TABLE User_has_Payments (
  User_ID_User INT NOT NULL,
  Payments_ID_Payments INT NOT NULL,
  PRIMARY KEY (User_ID_User, Payments_ID_Payments),
  FOREIGN KEY (User_ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (Payments_ID_Payments) REFERENCES Payments (ID_Payments)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Travel_has_Hotel (
  Travel_ID_Travel INT NOT NULL,
  Hotel_ID_Hotel INT NOT NULL,
  Check_In_Date DATETIME NULL,
  Check_Out_Date DATETIME NULL,
  Room_Type VARCHAR(50) NULL,
  Number_of_Rooms INT DEFAULT 1,
  PRIMARY KEY (Travel_ID_Travel, Hotel_ID_Hotel),
  FOREIGN KEY (Travel_ID_Travel) REFERENCES Travel (ID_Travel)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (Hotel_ID_Hotel) REFERENCES Hotel (ID_Hotel)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- Relación Travel - Flight (N:M)
CREATE TABLE Travel_has_Flight (
  Travel_ID_Travel INT NOT NULL,
  Flight_ID_Flight INT NOT NULL,
  Flight_Type ENUM('Outbound', 'Return', 'Connecting') DEFAULT 'Outbound',
  PRIMARY KEY (Travel_ID_Travel, Flight_ID_Flight),
  FOREIGN KEY (Travel_ID_Travel) REFERENCES Travel (ID_Travel)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (Flight_ID_Flight) REFERENCES Flights (ID_Flight)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- Relación Travel - Activity (N:M)
CREATE TABLE Travel_has_Activity (
  Travel_ID_Travel INT NOT NULL,
  Activity_ID_Activity INT NOT NULL,
  Scheduled_Date DATETIME NULL,
  Number_of_Participants INT DEFAULT 1,
  Special_Requirements TEXT NULL,
  PRIMARY KEY (Travel_ID_Travel, Activity_ID_Activity),
  FOREIGN KEY (Travel_ID_Travel) REFERENCES Travel (ID_Travel)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (Activity_ID_Activity) REFERENCES Activity (ID_Activity)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Chat (
  ID_Chat INT NOT NULL AUTO_INCREMENT,
  ID_User INT NULL,
  Chat_Title VARCHAR(100) NULL,
  Start_Time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Last_Activity DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  Status ENUM('Active', 'Closed', 'Archived') DEFAULT 'Active',
  PRIMARY KEY (ID_Chat),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE Message (
  ID_Message INT NOT NULL AUTO_INCREMENT,
  ID_Chat INT NOT NULL,
  Sender ENUM('user', 'bot') NOT NULL,
  Content TEXT NOT NULL,
  Message_Type ENUM('text', 'image', 'file', 'location') DEFAULT 'text',
  Metadata JSON NULL, -- Para almacenar información adicional del mensaje
  Timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Is_Read TINYINT DEFAULT 0,
  PRIMARY KEY (ID_Message),
  FOREIGN KEY (ID_Chat) REFERENCES Chat (ID_Chat)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE File (
  ID_File INT NOT NULL AUTO_INCREMENT,
  Entity_Type ENUM('User', 'Hotel', 'Travel', 'Activity', 'Message') NOT NULL,
  Entity_ID INT NOT NULL,
  File_Name VARCHAR(255) NOT NULL,
  File_Path VARCHAR(500) NOT NULL,
  File_Type VARCHAR(50) NOT NULL,
  File_Size BIGINT NULL,
  Uploaded_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_File)
);

CREATE TABLE User_Settings (
  ID_Setting INT NOT NULL AUTO_INCREMENT,
  ID_User INT NOT NULL,
  Setting_Key VARCHAR(50) NOT NULL,
  Setting_Value TEXT NULL,
  Updated_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_Setting),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  UNIQUE KEY unique_user_setting (ID_User, Setting_Key)
);

CREATE TABLE Notifications (
  ID_Notification INT NOT NULL AUTO_INCREMENT,
  ID_User INT NOT NULL,
  Title VARCHAR(100) NOT NULL,
  Message TEXT NOT NULL,
  Type ENUM('Info', 'Warning', 'Success', 'Error') DEFAULT 'Info',
  Is_Read TINYINT DEFAULT 0,
  Related_Entity_Type ENUM('Travel', 'Flight', 'Hotel', 'Activity', 'Payment') NULL,
  Related_Entity_ID INT NULL,
  Created_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_Notification),
  FOREIGN KEY (ID_User) REFERENCES User (ID_User)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- 1. City (No depende de otras tablas)
INSERT INTO City (City_Name, Country, Description, Average_Rating) VALUES
('Tokio', 'Japón', 'La bulliciosa capital con templos antiguos y rascacielos futuristas.', 4.8),
('París', 'Francia', 'La Ciudad de la Luz, famosa por su arte, moda y gastronomía.', 4.6),
('Nueva York', 'EE. UU.', 'El centro del mundo, con una energía inigualable y diversidad cultural.', 4.5);

-- 2. User (No depende de otras tablas)
INSERT INTO User (Name, Surname, Email, Password, Phone_number, Address, MemberShip) VALUES
('Carlos', 'Gómez', 'carlos.gomez@example.com', 'hashed_pass_1', '555-1234', 'Calle Falsa 123', 1),
('Laura', 'Pérez', 'laura.perez@example.com', 'hashed_pass_2', '555-5678', 'Avenida Siempreviva 742', 0),
('Miguel', 'Rodríguez', 'miguel.rodriguez@example.com', 'hashed_pass_3', '555-9012', 'Plaza Mayor 5', 1);

-- 3. Hotel (Depende de City)
INSERT INTO Hotel (Hotel_name, ID_City, Stars, Description, Rating) VALUES
('Hotel Sakura', 1, 5, 'Lujoso hotel en el corazón de Tokio con vistas al monte Fuji.', 4.9),
('Le Petit Prince', 2, 4, 'Boutique hotel con encanto cerca de la Torre Eiffel.', 4.3),
('Times Square Inn', 3, 3, 'Hotel moderno y funcional en el centro de Manhattan.', 4.0);

-- 4. Activity (Depende de City)
INSERT INTO Activity (Activity_Name, ID_City, Cost, Duration, Category, Description, Rating) VALUES
('Tour Gastronómico Asakusa', 1, 75.00, '3 horas', 'Gastronomía', 'Explora los sabores tradicionales japoneses.', 4.7),
('Crucero por el Sena', 2, 35.50, '1.5 horas', 'Cultura', 'Vistas panorámicas de los monumentos de París.', 4.5),
('Visita al Museo Metropolitano de Arte', 3, 30.00, 'Todo el día', 'Historia', 'Una de las colecciones de arte más grandes del mundo.', 4.6);

-- 5. Flights (Depende de User, ID_User es NULLABLE, por lo que podemos insertar sin él, pero para pruebas es mejor usarlo)
INSERT INTO Flights (ID_User, Flight_Number, Airline, Origin, Destination, Departure_Date, Arrival_Date, Total_cost, Class, Status) VALUES
(1, 'JAL101', 'Japan Airlines', 'NYK', 'TYO', '2025-12-01 08:00:00', '2025-12-02 10:00:00', 850.50, 'Business', 'Confirmed'),
(2, 'AF202', 'Air France', 'MAD', 'PAR', '2025-11-10 14:30:00', '2025-11-10 16:30:00', 150.99, 'Economy', 'Completed'),
(3, 'UA303', 'United Airlines', 'CHI', 'NYK', '2025-11-20 06:00:00', '2025-11-20 09:00:00', 220.00, 'Premium', 'Booked');

-- 6. Travel (Depende de User, ID_User es NULLABLE)
INSERT INTO Travel (ID_User, Travel_Name, Destination, Start_date, End_date, Total_cost, Status, Travel_Style, Accommodation_Type) VALUES
(1, 'Aventura en Japón', 'Tokio, Kioto', '2025-12-01 00:00:00', '2025-12-15 00:00:00', 3500.00, 'Planning', 'Preferred', 'Hotel de Lujo'),
(2, 'Escapada Romántica a París', 'París', '2025-11-10 00:00:00', '2025-11-14 00:00:00', 1200.75, 'Confirmed', 'Preferred', 'Boutique Hotel'),
(3, 'Viaje de Negocios a NY', 'Nueva York', '2025-11-20 00:00:00', '2025-11-25 00:00:00', 550.00, 'In Progress', 'Alternative', 'Apartamento');

-- 7. Two_Factor_Auth (Depende de User)
INSERT INTO Two_Factor_Auth (ID_User, Secret_Key, Is_Enabled, Backup_Codes) VALUES
(1, 'SECRET_KEY_USER_1_XYZ', 1, 'CODE1,CODE2,CODE3'),
(2, 'SECRET_KEY_USER_2_ABC', 0, NULL),
(3, 'SECRET_KEY_USER_3_JKL', 1, 'CODE4,CODE5,CODE6');

-- 8. User_Travel_Interests (Depende de User)
INSERT INTO User_Travel_Interests (ID_User, Interest_Category, Priority) VALUES
(1, 'Gastronomía', 5),
(1, 'Cultura', 4),
(2, 'Naturaleza', 3);

-- 9. Dietary_Restrictions (Depende de User)
INSERT INTO Dietary_Restrictions (ID_User, Restriction_Type, Details) VALUES
(2, 'Vegetariano', NULL),
(3, 'Sin gluten', 'Intolerancia al trigo'),
(1, 'Alérgico alimentarios', 'Alérgico a los frutos secos');

-- 10. Accessibility_Requirements (Depende de User)
INSERT INTO Accessibility_Requirements (ID_User, Requirement_Type, Details) VALUES
(1, 'Acceso para silla de ruedas', 'Necesita rampas y ascensores'),
(3, 'Asistencia visual', 'Fuentes grandes y contraste alto'),
(2, 'Asistencia auditiva', NULL);

-- 11. Travel_Companion (Depende de Travel)
INSERT INTO Travel_Companion (ID_Travel, Name, Surname, Email, Relationship) VALUES
(1, 'Sofia', 'Martínez', 'sofia@example.com', 'Partner'),
(2, 'Javier', 'Sánchez', 'javier@example.com', 'Friend'),
(1, 'David', 'Gómez', 'david@example.com', 'Family');

-- 12. Review (Depende de User. Las Entity_ID se toman de las tablas ya pobladas: City (1), Hotel (2), Activity (3))
INSERT INTO Review (ID_User, Entity_Type, Entity_ID, Rating, Review_Text) VALUES
(1, 'City', 1, 5.0, 'Tokio es increíble, una ciudad que nunca duerme.'),
(2, 'Hotel', 2, 4.0, 'El hotel boutique en París era encantador, aunque las habitaciones un poco pequeñas.'),
(3, 'Activity', 3, 4.5, 'El Met es impresionante. Se necesita más de un día para verlo todo.');

-- 13. Favorites (Depende de User. Entity_ID se toman de City (1), Hotel (2), Travel (1))
INSERT INTO Favorites (ID_User, Entity_Type, Entity_ID) VALUES
(1, 'Destination', 2), -- París
(2, 'Hotel', 1), -- Hotel Sakura
(3, 'Travel', 1); -- Aventura en Japón

-- 14. Payments (No depende de otras tablas mediante FK, pero las Entity_ID se refieren a tablas ya pobladas)
INSERT INTO Payments (Status, Payment_Date, Payment_method, Transaction_Code, Amount, Currency, Entity_Type, Entity_ID) VALUES
('Completed', '2025-11-01 10:30:00', 'Credit Card', 'TRX1001', 850.50, 'USD', 'Flight', 1),
('Completed', '2025-11-05 15:00:00', 'PayPal', 'TRX1002', 1200.75, 'EUR', 'Travel', 2),
('Pending', NULL, 'Bank Transfer', 'TRX1003', 220.00, 'USD', 'Flight', 3);

-- 15. User_has_Payments (Depende de User y Payments)
INSERT INTO User_has_Payments (User_ID_User, Payments_ID_Payments) VALUES
(1, 1),
(2, 2),
(3, 3);

-- 16. Travel_has_Hotel (Depende de Travel y Hotel)
INSERT INTO Travel_has_Hotel (Travel_ID_Travel, Hotel_ID_Hotel, Check_In_Date, Check_Out_Date, Room_Type) VALUES
(1, 1, '2025-12-02 14:00:00', '2025-12-07 11:00:00', 'Doble Superior'),
(2, 2, '2025-11-10 15:00:00', '2025-11-14 10:00:00', 'Matrimonial'),
(1, 3, '2025-12-07 15:00:00', '2025-12-14 11:00:00', 'Suite');

-- 17. Travel_has_Flight (Depende de Travel y Flights)
INSERT INTO Travel_has_Flight (Travel_ID_Travel, Flight_ID_Flight, Flight_Type) VALUES
(1, 1, 'Outbound'),
(2, 2, 'Return'),
(3, 3, 'Outbound');

-- 18. Travel_has_Activity (Depende de Travel y Activity)
INSERT INTO Travel_has_Activity (Travel_ID_Travel, Activity_ID_Activity, Scheduled_Date, Number_of_Participants) VALUES
(1, 1, '2025-12-03 18:00:00', 2),
(2, 2, '2025-11-11 10:00:00', 2),
(3, 3, '2025-11-21 09:30:00', 1);

-- 19. Chat (Depende de User, ID_User es NULLABLE)
INSERT INTO Chat (ID_User, Chat_Title, Status) VALUES
(1, 'Ayuda con Viaje a Japón', 'Active'),
(2, 'Consulta de Hotel', 'Closed'),
(3, 'Soporte Técnico', 'Archived');

-- 20. Message (Depende de Chat)
INSERT INTO Message (ID_Chat, Sender, Content, Message_Type) VALUES
(1, 'user', 'Quiero cambiar la fecha de mi vuelo.', 'text'),
(1, 'bot', 'Entendido. ¿Cuál sería la nueva fecha de salida?', 'text'),
(2, 'user', '¿Tiene el Hotel Petit Prince desayuno incluido?', 'text');

-- 21. File (No tiene FK, pero las Entity_ID se refieren a tablas ya pobladas)
INSERT INTO File (Entity_Type, Entity_ID, File_Name, File_Path, File_Type, File_Size) VALUES
('Travel', 1, 'Itinerario_Japon.pdf', '/files/travels/itinerario_1.pdf', 'application/pdf', 512000),
('User', 2, 'laura_perfil.jpg', '/files/users/profile_2.jpg', 'image/jpeg', 150000),
('Message', 1, 'factura_vuelo.png', '/files/messages/factura_1.png', 'image/png', 300000);

-- 22. User_Settings (Depende de User)
INSERT INTO User_Settings (ID_User, Setting_Key, Setting_Value) VALUES
(1, 'theme', 'dark'),
(2, 'notifications_email', '1'),
(3, 'language', 'es-MX');

-- 23. Notifications (Depende de User. Related_Entity_ID se refieren a tablas ya pobladas)
INSERT INTO Notifications (ID_User, Title, Message, Type, Is_Read, Related_Entity_Type, Related_Entity_ID) VALUES
(1, 'Vuelo Confirmado', 'Tu vuelo JAL101 a Tokio ha sido confirmado.', 'Success', 0, 'Flight', 1),
(2, 'Pago Pendiente', 'El pago de tu viaje a París aún está pendiente.', 'Warning', 0, 'Payment', 2),
(3, 'Bienvenida', '¡Bienvenido a nuestra plataforma de viajes!', 'Info', 1, NULL, NULL);
