CREATE SCHEMA IF NOT EXISTS `jose_flores_db`;
USE `jose_flores_db`;

CREATE TABLE `jose_flores_db`.`carrera` (
  `idCarrera` INT NOT NULL AUTO_INCREMENT,
  `nombreCarrera` VARCHAR(100) NOT NULL,
  `mensualidad` INT NOT NULL,
  `numeroClases` INT NOT NULL,
  PRIMARY KEY (`idCarrera`))
  ENGINE = InnoDB;
  
  CREATE TABLE `jose_flores_db`.`alumno` (
  `idAlumno` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(60) NOT NULL,
  `apellidos` VARCHAR(60) NOT NULL,
  `telefono` INT NOT NULL,
  `carreraFK` INT NOT NULL,
  `numeroIdentidad` varchar(13) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  FOREIGN KEY (CarreraFK) REFERENCES jose_flores_db.carrera(idCarrera),
  PRIMARY KEY (`idAlumno`))
  ENGINE = InnoDB;
  