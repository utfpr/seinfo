-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema seinfo
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `seinfo` ;

-- -----------------------------------------------------
-- Schema seinfo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `seinfo` DEFAULT CHARACTER SET utf8 ;
USE `seinfo` ;

-- -----------------------------------------------------
-- Table `seinfo`.`pessoa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`pessoa` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`pessoa` (
  `idPessoa` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `email` VARCHAR(60) NULL,
  `CPF` CHAR(11) NOT NULL,
  PRIMARY KEY (`idPessoa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`convidado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`convidado` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`convidado` (
  `senha` VARCHAR(20) NOT NULL,
  `idPessoa` INT NOT NULL,
  PRIMARY KEY (`idPessoa`),
  CONSTRAINT `fk_convidado_pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '(VER COM O PROF. ANDRE DE BANCO).\n\nCOMO CONVIDADO NÃO TEM NADA A MAIS QUE UM ALUNO, PODEMOS CADASTRAR DIRETO NA TABELA ALUNOS,\n\nPORTANTO, QUEM TIVER NA TABELA PESSOA E NA TABELA ALUNO É ALUNO.\nQUEM TIVER NA TABELA PESSOA E NÃO NA TABELA ALUNO É CONVIDADO...';


-- -----------------------------------------------------
-- Table `seinfo`.`aluno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`aluno` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`aluno` (
  `RA` INT(7) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  `idPessoa` INT NOT NULL,
  PRIMARY KEY (`RA`),
  INDEX `fk_aluno_pessoa1_idx` (`idPessoa` ASC),
  CONSTRAINT `fk_aluno_pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`admin` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`admin` (
  `usuario` VARCHAR(20) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`evento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`evento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`evento` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `valor` FLOAT NOT NULL,
  `descricao` VARCHAR(500) NULL,
  `data_horario_inicio` DATETIME NOT NULL,
  `data_hora_fim` DATETIME NULL,
  `urlImagem` VARCHAR(45) NULL DEFAULT '../imagens/default.png',
  PRIMARY KEY (`idEvento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`minicurso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`minicurso` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`minicurso` (
  `idMinicurso` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `valor` FLOAT NOT NULL,
  `descricao` VARCHAR(500) NULL,
  `data_horario_inicio` DATETIME NOT NULL,
  `local` VARCHAR(45) NOT NULL,
  `data_hora_fim` DATETIME NULL,
  `idEvento` INT NOT NULL,
  PRIMARY KEY (`idMinicurso`),
  INDEX `fk_minicurso_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_minicurso_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`palestra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`palestra` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`palestra` (
  `idpalestra` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `descricao` VARCHAR(500) NULL,
  `data_horario_inicio` DATETIME NOT NULL,
  `local` VARCHAR(100) NOT NULL,
  `idEvento` INT NOT NULL,
  `hora_fim` TIME NOT NULL,
  PRIMARY KEY (`idpalestra`),
  INDEX `fk_palestra_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_palestra_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`inscricao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`inscricao` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`inscricao` (
  `idEvento` INT NOT NULL,
  `idPessoa` INT NOT NULL,
  `pagamentoInscricao` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`idEvento`, `idPessoa`),
  INDEX `fk_evento_has_Pessoa_Pessoa1_idx` (`idPessoa` ASC),
  INDEX `fk_evento_has_Pessoa_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_evento_has_Pessoa_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_evento_has_Pessoa_Pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`participaMinicurso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`participaMinicurso` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`participaMinicurso` (
  `idMinicurso` INT NOT NULL,
  `confirmacao_pagamento_minicurso` TINYINT NULL DEFAULT 0,
  `participacao_minicurso` TINYINT NULL DEFAULT 0,
  `idEvento` INT NOT NULL,
  `idPessoa` INT NOT NULL,
  INDEX `fk_evento_has_Pessoa_has_minicurso_minicurso1_idx` (`idMinicurso` ASC),
  PRIMARY KEY (`idMinicurso`, `idEvento`, `idPessoa`),
  INDEX `fk_participaMinicurso_inscricao1_idx` (`idEvento` ASC, `idPessoa` ASC),
  CONSTRAINT `fk_evento_has_Pessoa_has_minicurso_minicurso1`
    FOREIGN KEY (`idMinicurso`)
    REFERENCES `seinfo`.`minicurso` (`idMinicurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_participaMinicurso_inscricao1`
    FOREIGN KEY (`idEvento` , `idPessoa`)
    REFERENCES `seinfo`.`inscricao` (`idEvento` , `idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`Caixa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`Caixa` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`Caixa` (
  `idCaixa` INT NOT NULL AUTO_INCREMENT,
  `idEvento` INT NOT NULL,
  PRIMARY KEY (`idCaixa`),
  INDEX `fk_Caixa_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_Caixa_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`despesa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`despesa` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`despesa` (
  `idDespesa` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(60) NOT NULL,
  `valor_unitario` FLOAT NULL,
  `quantidade` INT NULL,
  `idCaixa` INT NOT NULL,
  PRIMARY KEY (`idDespesa`),
  INDEX `fk_despesa_Caixa1_idx` (`idCaixa` ASC),
  CONSTRAINT `fk_despesa_Caixa1`
    FOREIGN KEY (`idCaixa`)
    REFERENCES `seinfo`.`Caixa` (`idCaixa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`receita`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receita` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receita` (
  `idReceita` INT NOT NULL AUTO_INCREMENT,
  `valor` FLOAT NOT NULL,
  `descricao` VARCHAR(60) NOT NULL,
  `idCaixa` INT NOT NULL,
  PRIMARY KEY (`idReceita`),
  INDEX `fk_receita_Caixa1_idx` (`idCaixa` ASC),
  CONSTRAINT `fk_receita_Caixa1`
    FOREIGN KEY (`idCaixa`)
    REFERENCES `seinfo`.`Caixa` (`idCaixa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`receitaInterna`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receitaInterna` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receitaInterna` (
  `idReceita` INT NOT NULL,
  `idMinicurso` INT NOT NULL,
  `idEvento` INT NOT NULL,
  `idPessoa` INT NOT NULL,
  INDEX `fk_receita_interna_receita1_idx` (`idReceita` ASC),
  PRIMARY KEY (`idReceita`),
  INDEX `fk_receitaInterna_participaMinicurso1_idx` (`idMinicurso` ASC, `idEvento` ASC, `idPessoa` ASC),
  CONSTRAINT `fk_receita_interna_receita1`
    FOREIGN KEY (`idReceita`)
    REFERENCES `seinfo`.`receita` (`idReceita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_receitaInterna_participaMinicurso1`
    FOREIGN KEY (`idMinicurso` , `idEvento` , `idPessoa`)
    REFERENCES `seinfo`.`participaMinicurso` (`idMinicurso` , `idEvento` , `idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`participacaoDaPalestra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`participacaoDaPalestra` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`participacaoDaPalestra` (
  `idPalestra` INT NOT NULL,
  `presenca` TINYINT NULL DEFAULT 0,
  `idEvento` INT NOT NULL,
  `idPessoa` INT NOT NULL,
  PRIMARY KEY (`idPalestra`, `idEvento`, `idPessoa`),
  INDEX `fk_evento_has_Pessoa_has_palestra_palestra1_idx` (`idPalestra` ASC),
  INDEX `fk_participaPalestra_inscricao1_idx` (`idEvento` ASC, `idPessoa` ASC),
  CONSTRAINT `fk_evento_has_Pessoa_has_palestra_palestra1`
    FOREIGN KEY (`idPalestra`)
    REFERENCES `seinfo`.`palestra` (`idpalestra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_participaPalestra_inscricao1`
    FOREIGN KEY (`idEvento` , `idPessoa`)
    REFERENCES `seinfo`.`inscricao` (`idEvento` , `idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`receitaEvento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receitaEvento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receitaEvento` (
  `idReceita` INT NOT NULL,
  `idEvento` INT NOT NULL,
  `idPessoa` INT NOT NULL,
  INDEX `fk_receita_evento_receita1_idx` (`idReceita` ASC),
  PRIMARY KEY (`idReceita`),
  INDEX `fk_receitaEvento_inscricao1_idx` (`idEvento` ASC, `idPessoa` ASC),
  CONSTRAINT `fk_receita_evento_receita1`
    FOREIGN KEY (`idReceita`)
    REFERENCES `seinfo`.`receita` (`idReceita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_receitaEvento_inscricao1`
    FOREIGN KEY (`idEvento` , `idPessoa`)
    REFERENCES `seinfo`.`inscricao` (`idEvento` , `idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`palestrante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`palestrante` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`palestrante` (
  `idPalestra` INT NOT NULL,
  `idPessoa` INT NOT NULL,
  PRIMARY KEY (`idPalestra`, `idPessoa`),
  INDEX `fk_pessoa_has_palestra_palestra1_idx` (`idPalestra` ASC),
  INDEX `fk_palestrante_pessoa1_idx` (`idPessoa` ASC),
  CONSTRAINT `fk_pessoa_has_palestra_palestra1`
    FOREIGN KEY (`idPalestra`)
    REFERENCES `seinfo`.`palestra` (`idpalestra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_palestrante_pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`ministrante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`ministrante` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`ministrante` (
  `idPessoa` INT NOT NULL,
  `idMinicurso` INT NOT NULL,
  PRIMARY KEY (`idPessoa`, `idMinicurso`),
  INDEX `fk_pessoa_has_minicurso_minicurso1_idx` (`idMinicurso` ASC),
  INDEX `fk_pessoa_has_minicurso_pessoa1_idx` (`idPessoa` ASC),
  CONSTRAINT `fk_pessoa_has_minicurso_pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pessoa_has_minicurso_minicurso1`
    FOREIGN KEY (`idMinicurso`)
    REFERENCES `seinfo`.`minicurso` (`idMinicurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
