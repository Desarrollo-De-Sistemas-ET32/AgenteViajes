DROP DATABASE IF EXISTS amelieSQL;
CREATE DATABASE amelieSQL;
USE amelieSQL;

CREATE TABLE User (
  ID_User INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(45) NOT NULL,
  Surname VARCHAR(45) NOT NULL,
  Email VARCHAR(60) NOT NULL UNIQUE,
  Phone_number VARCHAR(20) NOT NULL,
  Address VARCHAR(45) NOT NULL,
  MemberShip TINYINT NULL DEFAULT 0,
  Profile_Image_Path VARCHAR(255) NULL,
  Created_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Updated_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (ID_User)
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
  Location VARCHAR(100) NOT NULL,
  Stars INT NULL CHECK (Stars BETWEEN 1 AND 5),
  Image_Path VARCHAR(255) NULL,
  Description TEXT NULL,
  Amenities TEXT NULL,
  Rating DECIMAL(3,2) NULL CHECK (Rating BETWEEN 0.0 AND 5.0),
  PRIMARY KEY (ID_Hotel)
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
  Location VARCHAR(100) NOT NULL,
  Cost DECIMAL(10,2) NULL,
  Duration VARCHAR(45) NULL,
  Category ENUM('Música', 'Historia', 'Aventura', 'Gastronomía', 'Cultura', 'Naturaleza', 'Deportes') NULL,
  Media_Path VARCHAR(255) NULL,
  Description TEXT NULL,
  Rating DECIMAL(3,2) NULL CHECK (Rating BETWEEN 0.0 AND 5.0),
  PRIMARY KEY (ID_Activity)
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

-- Relación Travel - Hotel (N:M)
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
