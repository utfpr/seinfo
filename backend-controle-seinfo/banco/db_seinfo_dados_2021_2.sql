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
(11,'2021-08-09 20:00:00','2021-09-09 20:00:00','Campo Mourão'),
(12,'2021-08-09 20:00:00','2021-09-09 20:00:00','CAMPO MOURAO'),
(13,'2021-08-09 20:00:00','2021-09-09 20:00:00','Cianorte'),
(14,'2021-08-10 20:00:00','2021-08-10 20:00:00','UTFPR'),
(15,'2021-08-11 20:00:00','2021-08-11 22:00:00','UTFPR'),
(16,'2021-08-12 20:00:00','2021-08-12 22:00:00','UTFPR'),
(17,'2021-08-09 12:00:00','2021-08-09 12:20:00','UTFPR'),
(18,'2021-08-10 12:00:00','2021-08-10 12:20:00','UTFPR'),
(19,'2021-08-11 12:00:00','2021-08-11 12:20:00','UTFPR'),
(20,'2021-08-09 15:00:00','2021-08-09 15:20:00','UTFPR'),
(21,'2021-08-11 15:00:00','2021-08-11 15:20:00','UTFPR'),
(22,'2021-08-10 15:00:00','2021-08-10 15:20:00','UTFPR');
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `agendamentoAtividade`
--

LOCK TABLES `agendamentoAtividade` WRITE;
/*!40000 ALTER TABLE `agendamentoAtividade` DISABLE KEYS */;
INSERT INTO `agendamentoAtividade` VALUES 
(12,14),
(12,15),
(12,16),
(13,17),
(13,18),
(13,19),
(14,20),
(14,21),
(14,22);
/*!40000 ALTER TABLE `agendamentoAtividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `atividade`
--

LOCK TABLES `atividade` WRITE;
/*!40000 ALTER TABLE `atividade` DISABLE KEYS */;
INSERT INTO `atividade` VALUES 
(12,'Atividade 1',300,'Descrição atividade 1 aqui','04:00:00',20,4,11,'2021-08-10 20:00:00'),
(13,'Atividade 2',300,'Descrição atividade 2 aqui','01:00:00',20,4,12,'2021-08-09 12:00:00'),
(14,'Atividade 3',30,'Descrição atividade 3 aqui','10:00:00',20,6,13,'2021-08-09 15:00:00');
/*!40000 ALTER TABLE `atividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carrossel`
--

LOCK TABLES `carrossel` WRITE;
/*!40000 ALTER TABLE `carrossel` DISABLE KEYS */;
INSERT INTO `carrossel` VALUES (1,1,1);
/*!40000 ALTER TABLE `carrossel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES 
(4,'Minicurso'),
(5,'Palestra'),
(6,'Jogos'),
(7,'Diversos');
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
(11,'Evento 1 ','Descrição do evento 1',1,11),
(12,'Evento 2','Descrição evento 2 aqui',1,12),
(13,'Evento 3','Descrição Evento 3 aqui',1,13);
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
/*!40000 ALTER TABLE `inscricaoAtividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `inscricaoEvento`
--

LOCK TABLES `inscricaoEvento` WRITE;
/*!40000 ALTER TABLE `inscricaoEvento` DISABLE KEYS */;
/*!40000 ALTER TABLE `inscricaoEvento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lote`
--

LOCK TABLES `lote` WRITE;
/*!40000 ALTER TABLE `lote` DISABLE KEYS */;
INSERT INTO `lote` VALUES 
(7,30,'2021-08-01','2021-08-03',11),
(8,50,'2021-08-04','2021-08-10',11),
(9,100,'2021-08-11','2021-08-15',11),
(10,30,'2021-07-01','2021-08-03',12),
(11,300,'2021-08-07','2021-08-11',12),
(12,50,'2021-08-04','2021-08-06',12),
(13,50,'2021-08-01','2021-08-02',13),
(14,500,'2021-08-05','2021-08-11',13),
(15,100,'2021-08-03','2021-08-04',13);
/*!40000 ALTER TABLE `lote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `organizacao`
--

LOCK TABLES `organizacao` WRITE;
/*!40000 ALTER TABLE `organizacao` DISABLE KEYS */;
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
/*!40000 ALTER TABLE `presenca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `protagonista`
--

LOCK TABLES `protagonista` WRITE;
/*!40000 ALTER TABLE `protagonista` DISABLE KEYS */;
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

-- Dump completed on 2021-08-09 19:23:59
