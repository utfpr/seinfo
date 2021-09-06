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

DROP DATABASE IF EXISTS seinfo;
CREATE DATABASE seinfo;
USE seinfo;

--
-- Table structure for table `agenda`
--

DROP TABLE IF EXISTS `agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agenda` (
  `idAgenda` int NOT NULL AUTO_INCREMENT,
  `dataHoraInicio` datetime NOT NULL,
  `dataHoraFim` datetime NOT NULL,
  `local` varchar(255) NOT NULL,
  PRIMARY KEY (`idAgenda`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `agendamentoAtividade`
--

DROP TABLE IF EXISTS `agendamentoAtividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamentoAtividade` (
  `idAtividade` int NOT NULL,
  `idAgenda` int NOT NULL,
  PRIMARY KEY (`idAtividade`,`idAgenda`),
  KEY `fk_atividade_has_agenda_agenda1_idx` (`idAgenda`),
  KEY `fk_atividade_has_agenda_atividade1_idx` (`idAtividade`),
  CONSTRAINT `agendamentoatividade_ibfk_1` FOREIGN KEY (`idAtividade`) REFERENCES `atividade` (`idAtividade`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `agendamentoatividade_ibfk_2` FOREIGN KEY (`idAgenda`) REFERENCES `agenda` (`idAgenda`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `atividade`
--

DROP TABLE IF EXISTS `atividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atividade` (
  `idAtividade` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `valor` float NOT NULL DEFAULT '0',
  `descricao` varchar(5000) DEFAULT NULL,
  `horasParticipacao` time NOT NULL DEFAULT '00:00:00',
  `quantidadeVagas` int NOT NULL DEFAULT '0',
  `idCategoria` int NOT NULL,
  `idEvento` int NOT NULL,
  `dataInicio` datetime NOT NULL,
  PRIMARY KEY (`idAtividade`),
  KEY `fk_categoria1_idx` (`idCategoria`),
  KEY `fk_atividade_evento1_idx` (`idEvento`),
  CONSTRAINT `atividade_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `atividade_ibfk_2` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `carrossel`
--

DROP TABLE IF EXISTS `carrossel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrossel` (
  `idCarrossel` int NOT NULL AUTO_INCREMENT,
  `status` tinyint NOT NULL DEFAULT '0',
  `idImagem` int NOT NULL,
  PRIMARY KEY (`idCarrossel`),
  KEY `fk_carrossel_imagem1_idx` (`idImagem`),
  CONSTRAINT `carrossel_ibfk_1` FOREIGN KEY (`idImagem`) REFERENCES `imagem` (`idImagem`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `despesa`
--

DROP TABLE IF EXISTS `despesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `despesa` (
  `idDespesa` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(500) NOT NULL,
  `valor` float NOT NULL DEFAULT '0',
  `dataDespesa` date NOT NULL,
  `idEvento` int NOT NULL,
  PRIMARY KEY (`idDespesa`),
  KEY `fk_despesa_evento1_idx` (`idEvento`),
  CONSTRAINT `despesa_ibfk_1` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `idEvento` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(5000) DEFAULT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `idAgenda` int NOT NULL,
  PRIMARY KEY (`idEvento`),
  KEY `fk_evento_agenda1_idx` (`idAgenda`),
  CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`idAgenda`) REFERENCES `agenda` (`idAgenda`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `eventoImagem`
--

DROP TABLE IF EXISTS `eventoImagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventoImagem` (
  `idEvento` int NOT NULL,
  `idImagem` int NOT NULL,
  PRIMARY KEY (`idEvento`,`idImagem`),
  KEY `fk_evento_has_imagem_imagem1_idx` (`idImagem`),
  KEY `fk_evento_has_imagem_evento1_idx` (`idEvento`),
  CONSTRAINT `eventoimagem_ibfk_1` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `eventoimagem_ibfk_2` FOREIGN KEY (`idImagem`) REFERENCES `imagem` (`idImagem`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `imagem`
--

DROP TABLE IF EXISTS `imagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagem` (
  `idImagem` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`idImagem`),
  UNIQUE KEY `url_UNIQUE` (`url`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inscricaoAtividade`
--

DROP TABLE IF EXISTS `inscricaoAtividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscricaoAtividade` (
  `CPF` varchar(64) NOT NULL,
  `idEvento` int NOT NULL,
  `idAtividade` int NOT NULL,
  `dataInscricao` date NOT NULL,
  PRIMARY KEY (`CPF`,`idEvento`,`idAtividade`),
  KEY `fk_inscricaoAtividade_atividade1_idx` (`idAtividade`),
  KEY `fk_inscricaoAtividade_inscricaoEvento1_idx` (`CPF`,`idEvento`),
  CONSTRAINT `inscricaoatividade_ibfk_1` FOREIGN KEY (`idAtividade`) REFERENCES `atividade` (`idAtividade`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `inscricaoatividade_ibfk_2` FOREIGN KEY (`CPF`, `idEvento`) REFERENCES `inscricaoEvento` (`CPF`, `idEvento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inscricaoEvento`
--

DROP TABLE IF EXISTS `inscricaoEvento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscricaoEvento` (
  `CPF` varchar(64) NOT NULL,
  `idEvento` int NOT NULL,
  `dataInscricao` date NOT NULL,
  `idLote` int NOT NULL,
  PRIMARY KEY (`CPF`,`idEvento`),
  KEY `fk_pessoa_has_evento_evento2_idx` (`idEvento`),
  KEY `fk_pessoa_has_evento_pessoa1_idx` (`CPF`),
  KEY `fk_inscricaoEvento_lote1` (`idLote`),
  CONSTRAINT `fk_inscricaoEvento_evento1` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`),
  CONSTRAINT `fk_inscricaoEvento_lote1` FOREIGN KEY (`idLote`) REFERENCES `lote` (`idLote`),
  CONSTRAINT `fk_inscricaoEvento_pessoa1` FOREIGN KEY (`CPF`) REFERENCES `pessoa` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lote`
--

DROP TABLE IF EXISTS `lote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lote` (
  `idLote` int NOT NULL AUTO_INCREMENT,
  `valor` float NOT NULL DEFAULT '0',
  `dataAbertura` date NOT NULL,
  `dataFechamento` date NOT NULL,
  `idEvento` int NOT NULL,
  PRIMARY KEY (`idLote`),
  KEY `fk_lote_evento1_idx` (`idEvento`),
  CONSTRAINT `lote_ibfk_1` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `organizacao`
--

DROP TABLE IF EXISTS `organizacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organizacao` (
  `CPF` varchar(64) NOT NULL,
  `idEvento` int NOT NULL,
  `horasParticipacao` time NOT NULL,
  PRIMARY KEY (`CPF`,`idEvento`),
  KEY `fk_pessoa_has_evento_evento3_idx` (`idEvento`),
  KEY `fk_pessoa_has_evento_pessoa2_idx` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa` (
  `CPF` varchar(64) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` char(32) NOT NULL,
  `nivel` int NOT NULL,
  `classificacao` int NOT NULL,
  `idPessoa` varchar(64) NOT NULL,
  PRIMARY KEY (`CPF`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `CPF_UNIQUE` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `presenca`
--

DROP TABLE IF EXISTS `presenca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `presenca` (
  `idAgenda` int NOT NULL,
  `CPF` varchar(64) NOT NULL,
  `idEvento` int NOT NULL,
  `idAtividade` int NOT NULL,
  `presenca` tinyint DEFAULT NULL,
  PRIMARY KEY (`idAgenda`,`CPF`,`idEvento`,`idAtividade`),
  KEY `fk_presenca_inscricaoAtividade1_idx` (`CPF`,`idEvento`,`idAtividade`),
  KEY `fk_presenca_agendamentoAtividade1_idx` (`idAgenda`,`idAtividade`),
  CONSTRAINT `fk_presenca_agendamentoAtividade1` FOREIGN KEY (`idAgenda`, `idAtividade`) REFERENCES `agendamentoAtividade` (`idAgenda`, `idAtividade`),
  CONSTRAINT `fk_presenca_inscricaoAtividade1` FOREIGN KEY (`CPF`, `idEvento`, `idAtividade`) REFERENCES `inscricaoAtividade` (`CPF`, `idEvento`, `idAtividade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `protagonista`
--

DROP TABLE IF EXISTS `protagonista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `protagonista` (
  `CPF` varchar(64) NOT NULL,
  `idAtividade` int NOT NULL,
  `atuacao` int NOT NULL,
  PRIMARY KEY (`CPF`,`idAtividade`),
  KEY `fk_pessoa_has_atividade_atividade1_idx` (`idAtividade`),
  KEY `fk_pessoa_has_atividade_pessoa1_idx` (`CPF`),
  CONSTRAINT `fk_protagonista_atividade1` FOREIGN KEY (`idAtividade`) REFERENCES `atividade` (`idAtividade`),
  CONSTRAINT `fk_protagonista_pessoa1` FOREIGN KEY (`CPF`) REFERENCES `pessoa` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `receita`
--

DROP TABLE IF EXISTS `receita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receita` (
  `idReceita` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(500) NOT NULL,
  `valor` float NOT NULL DEFAULT '0',
  `dataReceita` date NOT NULL,
  `idEvento` int NOT NULL,
  PRIMARY KEY (`idReceita`),
  KEY `fk_receita_evento1_idx` (`idEvento`),
  CONSTRAINT `receita_ibfk_1` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `receitaInscricaoAtividade`
--

DROP TABLE IF EXISTS `receitaInscricaoAtividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receitaInscricaoAtividade` (
  `CPF` varchar(64) NOT NULL,
  `idEvento` int NOT NULL,
  `idAtividade` int NOT NULL,
  `dataPagamento` date NOT NULL,
  PRIMARY KEY (`CPF`,`idEvento`,`idAtividade`),
  CONSTRAINT `receitainscricaoatividade_ibfk_1` FOREIGN KEY (`CPF`, `idEvento`, `idAtividade`) REFERENCES `inscricaoAtividade` (`CPF`, `idEvento`, `idAtividade`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `receitaInscricaoEvento`
--

DROP TABLE IF EXISTS `receitaInscricaoEvento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receitaInscricaoEvento` (
  `CPF` varchar(64) NOT NULL,
  `idEvento` int NOT NULL,
  `dataPagamento` date NOT NULL,
  PRIMARY KEY (`CPF`,`idEvento`),
  CONSTRAINT `receitainscricaoevento_ibfk_1` FOREIGN KEY (`CPF`, `idEvento`) REFERENCES `inscricaoEvento` (`CPF`, `idEvento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-06 11:09:30
