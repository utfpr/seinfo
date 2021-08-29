-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: seinfo
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `agenda`
--

LOCK TABLES `agenda` WRITE;
/*!40000 ALTER TABLE `agenda` DISABLE KEYS */;
INSERT INTO `agenda` 
VALUES (23,'2021-08-29 20:00:00','2022-08-29 20:00:00','Campo Mourão'),
(24,'2021-08-29 20:00:00','2022-08-29 20:00:00','Campo Mourão'),
(25,'2021-08-29 20:00:00','2021-08-30 20:00:00','Lote E'),
(26,'2021-08-29 20:00:00','2021-08-30 20:00:00','Lote G');
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `agendamentoAtividade`
--

LOCK TABLES `agendamentoAtividade` WRITE;
/*!40000 ALTER TABLE `agendamentoAtividade` DISABLE KEYS */;
INSERT INTO `agendamentoAtividade` VALUES (15,25),(16,26);
/*!40000 ALTER TABLE `agendamentoAtividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `atividade`
--

LOCK TABLES `atividade` WRITE;
/*!40000 ALTER TABLE `atividade` DISABLE KEYS */;
INSERT INTO `atividade` 
VALUES (15,'Atividade Evento 1',300,'Atividade Evento 1','04:00:00',20,10,14,'2021-08-29 20:00:00'),
(16,'Atividade Evento 2',30,'Atividade Evento 2','20:05:00',5,9,15,'2021-08-29 20:00:00');
/*!40000 ALTER TABLE `atividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carrossel`
--

LOCK TABLES `carrossel` WRITE;
/*!40000 ALTER TABLE `carrossel` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrossel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` 
VALUES (9,'Palestra'),
(10,'MiniCurso');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `despesa`
--

LOCK TABLES `despesa` WRITE;
/*!40000 ALTER TABLE `despesa` DISABLE KEYS */;
/*!40000 ALTER TABLE `despesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` 
VALUES (14,'Evento 1','Campo Mourão',1,23),
(15,'Evento 2','Campo Mourão',1,24);
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `eventoImagem`
--

LOCK TABLES `eventoImagem` WRITE;
/*!40000 ALTER TABLE `eventoImagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventoImagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `imagem`
--

LOCK TABLES `imagem` WRITE;
/*!40000 ALTER TABLE `imagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `inscricaoAtividade`
--

LOCK TABLES `inscricaoAtividade` WRITE;
/*!40000 ALTER TABLE `inscricaoAtividade` DISABLE KEYS */;
INSERT INTO `inscricaoAtividade` 
VALUES ('usuario1',14,15,'2021-08-29');
/*!40000 ALTER TABLE `inscricaoAtividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `inscricaoEvento`
--

LOCK TABLES `inscricaoEvento` WRITE;
/*!40000 ALTER TABLE `inscricaoEvento` DISABLE KEYS */;
INSERT INTO `inscricaoEvento` 
VALUES ('usuario1',14,'2021-08-29');
/*!40000 ALTER TABLE `inscricaoEvento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lote`
--

LOCK TABLES `lote` WRITE;
/*!40000 ALTER TABLE `lote` DISABLE KEYS */;
INSERT INTO `lote` 
VALUES (16,20,'2021-08-20','2021-08-29',14),
(17,300,'2021-08-30','2021-09-22',14),
(18,20,'2021-08-01','2021-08-15',15),
(19,300,'2021-08-16','2021-08-29',15),
(20,500,'2021-08-30','2022-08-29',15);
/*!40000 ALTER TABLE `lote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `organizacao`
--

LOCK TABLES `organizacao` WRITE;
/*!40000 ALTER TABLE `organizacao` DISABLE KEYS */;
INSERT INTO `organizacao` 
ALUES ('supervisor',14,'00:00:00'),
('supervisor',15,'00:00:00');
/*!40000 ALTER TABLE `organizacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` 
VALUES ('admin','Admin','admin@gmail.com','�iv�A���M�߱g��s�K��o*�H�',2,1,'admin'),
('supervisor','Supervisor','supervisor@gmail.com','4��%�Y%{;x�\Z�m����|�J�[��B',1,1,'supervisor'),
('usuario1','Usuario 1','usuario1@gmail.com','�������a~��QZ)���n��+��IU\nك���',0,1,'usuario1'),
('usuario2','Usuario 2','usuario2@gmail.com','S@c�D�9ٮy&Ps�_!�:� )7��\'�',0,1,'usuario2'),
('usuario3','Usuario 3','usuario3@gmail.com','gf���zHv�*`�~G��G(bY.�\\��:t',0,1,'usuario3');
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `presenca`
--

LOCK TABLES `presenca` WRITE;
/*!40000 ALTER TABLE `presenca` DISABLE KEYS */;
/*!40000 ALTER TABLE `presenca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `protagonista`
--

LOCK TABLES `protagonista` WRITE;
/*!40000 ALTER TABLE `protagonista` DISABLE KEYS */;
INSERT INTO `protagonista` VALUES ('admin',15,0),('admin',16,0);
/*!40000 ALTER TABLE `protagonista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `receita`
--

LOCK TABLES `receita` WRITE;
/*!40000 ALTER TABLE `receita` DISABLE KEYS */;
/*!40000 ALTER TABLE `receita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `receitaInscricaoAtividade`
--

LOCK TABLES `receitaInscricaoAtividade` WRITE;
/*!40000 ALTER TABLE `receitaInscricaoAtividade` DISABLE KEYS */;
/*!40000 ALTER TABLE `receitaInscricaoAtividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `receitaInscricaoEvento`
--

LOCK TABLES `receitaInscricaoEvento` WRITE;
/*!40000 ALTER TABLE `receitaInscricaoEvento` DISABLE KEYS */;
/*!40000 ALTER TABLE `receitaInscricaoEvento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-29 17:38:34
