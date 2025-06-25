SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `amelieSQL` DEFAULT CHARACTER SET utf8;
USE `amelieSQL`;

-- Tabla User
CREATE TABLE IF NOT EXISTS `User` (
  `ID_User` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Surname` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(60) NOT NULL,
  `Phone_number` VARCHAR(20) NOT NULL,
  `Address` VARCHAR(45) NOT NULL,
  `MemberShip` TINYINT NULL,
  `Profile_Image_Path` VARCHAR(255) NULL,
  PRIMARY KEY (`ID_User`)
) ENGINE = InnoDB;

-- Tabla Hotel
CREATE TABLE IF NOT EXISTS `Hotel` (
  `ID_Hotel` INT NOT NULL AUTO_INCREMENT,
  `Hotel_name` VARCHAR(45) NULL,
  `Location` VARCHAR(45) NULL,
  `Stars` INT NULL,
  `Image_Path` VARCHAR(255) NULL,
  PRIMARY KEY (`ID_Hotel`)
) ENGINE = InnoDB;

-- Tabla Flights
CREATE TABLE IF NOT EXISTS `Flights` (
  `ID_Flight` INT NOT NULL AUTO_INCREMENT,
  `ID_User` INT NULL,
  `Start_date` DATETIME NULL,
  `End_date` DATETIME NULL,
  `Total_cost` DECIMAL(10,2) NULL,
  `Destination` VARCHAR(45) NULL,
  PRIMARY KEY (`ID_Flight`)
) ENGINE = InnoDB;

-- Tabla Travel
CREATE TABLE IF NOT EXISTS `Travel` (
  `ID_Travel` INT NOT NULL AUTO_INCREMENT,
  `ID_User` INT NULL,
  `Start_date` DATETIME NULL,
  `End_time` DATETIME NULL,
  `Total_cost` DECIMAL(10,2) NULL,
  `Document_Path` VARCHAR(255) NULL,
  PRIMARY KEY (`ID_Travel`)
) ENGINE = InnoDB;

-- Tabla Activity
CREATE TABLE IF NOT EXISTS `Activity` (
  `ID_Activity` INT NOT NULL AUTO_INCREMENT,
  `Activity_Name` VARCHAR(45) NULL,
  `Location` VARCHAR(45) NULL,
  `Cost` DECIMAL(10,2) NULL,
  `Duration` VARCHAR(45) NULL,
  `Media_Path` VARCHAR(255) NULL,
  PRIMARY KEY (`ID_Activity`)
) ENGINE = InnoDB;

-- Tabla Payments
CREATE TABLE IF NOT EXISTS `Payments` (
  `ID_Payments` INT NOT NULL AUTO_INCREMENT,
  `Status` VARCHAR(45) NULL,
  `Payment_Date` DATETIME NULL,
  `Payment_method` VARCHAR(45) NULL,
  `Transaction_Code` VARCHAR(45) NULL,
  PRIMARY KEY (`ID_Payments`)
) ENGINE = InnoDB;

-- Relación Usuario - Pagos (N:M)
CREATE TABLE IF NOT EXISTS `User_has_Payments` (
  `User_ID_User` INT NOT NULL,
  `Payments_ID_Payments` INT NOT NULL,
  PRIMARY KEY (`User_ID_User`, `Payments_ID_Payments`),
  FOREIGN KEY (`User_ID_User`) REFERENCES `User` (`ID_User`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (`Payments_ID_Payments`) REFERENCES `Payments` (`ID_Payments`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Relación Travel - Activity (N:M)
CREATE TABLE IF NOT EXISTS `Travel_has_Activity` (
  `Travel_ID_Travel` INT NOT NULL,
  `Activity_ID_Activity` INT NOT NULL,
  PRIMARY KEY (`Travel_ID_Travel`, `Activity_ID_Activity`),
  FOREIGN KEY (`Travel_ID_Travel`) REFERENCES `Travel` (`ID_Travel`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (`Activity_ID_Activity`) REFERENCES `Activity` (`ID_Activity`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Tabla Chat
CREATE TABLE IF NOT EXISTS `Chat` (
  `ID_Chat` INT NOT NULL AUTO_INCREMENT,
  `ID_User` INT NULL,
  `Start_Time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_Chat`),
  FOREIGN KEY (`ID_User`) REFERENCES `User` (`ID_User`)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Tabla Message
CREATE TABLE IF NOT EXISTS `Message` (
  `ID_Message` INT NOT NULL AUTO_INCREMENT,
  `ID_Chat` INT NOT NULL,
  `Sender` ENUM('user', 'bot') NOT NULL,
  `Content` TEXT NOT NULL,
  `Timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_Message`),
  FOREIGN KEY (`ID_Chat`) REFERENCES `Chat` (`ID_Chat`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Tabla general de archivos
CREATE TABLE IF NOT EXISTS `File` (
  `ID_File` INT NOT NULL AUTO_INCREMENT,
  `Entity_Type` ENUM('User', 'Hotel', 'Travel', 'Activity') NOT NULL,
  `Entity_ID` INT NOT NULL,
  `File_Path` VARCHAR(255) NOT NULL,
  `Uploaded_At` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_File`)
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
