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
INSERT INTO `agenda` VALUES 
(27,'2021-09-01 20:00:00','2022-09-01 20:00:00','Campo Mourão'),
(28,'2021-09-01 20:00:00','2021-09-02 01:00:00','Bloco E'),
(29,'2021-09-06 20:00:00','2022-09-06 20:00:00','Campo Mourão'),
(30,'2021-08-06 15:00:00','2022-07-06 15:40:00','Campo Mourão'),
(31,'2021-09-06 10:00:00','2021-09-06 15:00:00','Seinfo'),
(32,'2021-09-07 10:00:00','2021-09-07 15:00:00','Seinfo'),
(33,'2021-08-06 10:00:00','2021-08-06 15:00:00','Seinfo 2'),
(34,'2021-08-07 10:00:00','2021-08-07 15:00:00','Seinfo 2');
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `agendamentoAtividade`
--

LOCK TABLES `agendamentoAtividade` WRITE;
/*!40000 ALTER TABLE `agendamentoAtividade` DISABLE KEYS */;
INSERT INTO `agendamentoAtividade` VALUES 
(17,28),
(18,31),
(18,32),
(19,33),
(19,34);
/*!40000 ALTER TABLE `agendamentoAtividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `atividade`
--

LOCK TABLES `atividade` WRITE;
/*!40000 ALTER TABLE `atividade` DISABLE KEYS */;
INSERT INTO `atividade` VALUES 
(17,'Curso Python',30,'Curso Python','04:00:00',20,12,16,'2021-09-01 20:00:00'),
(18,'Atividade 2.1',300,'Atividade 2.1','10:00:00',20,12,17,'2021-09-06 20:00:00'),
(19,'Atividade 3.1',300,'Atividade 3.1','10:00:00',20,11,18,'2021-08-06 20:00:00');
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
INSERT INTO `categoria` VALUES 
(11,'Paletra'),
(12,'Minicurso');
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
INSERT INTO `evento` VALUES 
(16,'Evento 1 ','Evento 1',1,27),
(17,'Evento 2','Campo Mourão',1,29),
(18,'Evento 3','Campo Mourão',1,30);
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
INSERT INTO `inscricaoAtividade` VALUES 
('usuario1',16,17,'2021-09-01');
/*!40000 ALTER TABLE `inscricaoAtividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `inscricaoEvento`
--

LOCK TABLES `inscricaoEvento` WRITE;
/*!40000 ALTER TABLE `inscricaoEvento` DISABLE KEYS */;
INSERT INTO `inscricaoEvento` VALUES 
('usuario1',16,'2021-09-01',22);
/*!40000 ALTER TABLE `inscricaoEvento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lote`
--

LOCK TABLES `lote` WRITE;
/*!40000 ALTER TABLE `lote` DISABLE KEYS */;
INSERT INTO `lote` VALUES 
(21,30,'2021-08-01','2021-08-05',16),
(22,100,'2021-08-06','2022-09-01',16),
(23,100,'2021-08-01','2021-09-01',17),
(24,300,'2021-09-02','2022-09-06',17),
(25,200,'2021-08-01','2022-02-04',18),
(26,300,'2022-02-05','2022-07-06',18);
/*!40000 ALTER TABLE `lote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `organizacao`
--

LOCK TABLES `organizacao` WRITE;
/*!40000 ALTER TABLE `organizacao` DISABLE KEYS */;
INSERT INTO `organizacao` VALUES 
('supervisor',16,'00:00:00'),
('supervisor',17,'00:00:00'),
('supervisor',18,'00:00:00');
/*!40000 ALTER TABLE `organizacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES 
('admin','Admin','admin@gmail.com','�iv�A���M�߱g��s�K��o*�H�',2,1,'admin'),
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
INSERT INTO `presenca` VALUES 
(28,'usuario1',16,17,0);
/*!40000 ALTER TABLE `presenca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `protagonista`
--

LOCK TABLES `protagonista` WRITE;
/*!40000 ALTER TABLE `protagonista` DISABLE KEYS */;
INSERT INTO `protagonista` VALUES 
('admin',17,0),
('admin',18,0),
('admin',19,0);
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

-- Dump completed on 2021-09-06 11:09:20
