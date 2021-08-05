-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

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
-- Table `seinfo`.`agenda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`agenda` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`agenda` (
  `idAgenda` INT(11) NOT NULL AUTO_INCREMENT,
  `dataHoraInicio` DATETIME NOT NULL,
  `dataHoraFim` DATETIME NOT NULL,
  `local` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idAgenda`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`categoria` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`categoria` (
  `idCategoria` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`evento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`evento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`evento` (
  `idEvento` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(5000) NULL DEFAULT NULL,
  `status` TINYINT(4) NOT NULL DEFAULT '0',
  `idAgenda` INT(11) NOT NULL,
  PRIMARY KEY (`idEvento`),
  INDEX `fk_evento_agenda1_idx` (`idAgenda` ASC) ,
  CONSTRAINT `evento_ibfk_1`
    FOREIGN KEY (`idAgenda`)
    REFERENCES `seinfo`.`agenda` (`idAgenda`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`atividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`atividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`atividade` (
  `idAtividade` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NOT NULL,
  `valor` FLOAT NOT NULL DEFAULT '0',
  `descricao` VARCHAR(5000) NULL DEFAULT NULL,
  `horasParticipacao` TIME NOT NULL DEFAULT '00:00:00',
  `quantidadeVagas` INT(11) NOT NULL DEFAULT '0',
  `idCategoria` INT(11) NOT NULL,
  `idEvento` INT(11) NOT NULL,
  `dataInicio` DATETIME NOT NULL,
  PRIMARY KEY (`idAtividade`),
  INDEX `fk_categoria1_idx` (`idCategoria` ASC) ,
  INDEX `fk_atividade_evento1_idx` (`idEvento` ASC) ,
  CONSTRAINT `atividade_ibfk_1`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `seinfo`.`categoria` (`idCategoria`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `atividade_ibfk_2`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`agendamentoAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`agendamentoAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`agendamentoAtividade` (
  `idAtividade` INT(11) NOT NULL,
  `idAgenda` INT(11) NOT NULL,
  PRIMARY KEY (`idAtividade`, `idAgenda`),
  INDEX `fk_atividade_has_agenda_agenda1_idx` (`idAgenda` ASC) ,
  INDEX `fk_atividade_has_agenda_atividade1_idx` (`idAtividade` ASC) ,
  CONSTRAINT `agendamentoatividade_ibfk_1`
    FOREIGN KEY (`idAtividade`)
    REFERENCES `seinfo`.`atividade` (`idAtividade`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `agendamentoatividade_ibfk_2`
    FOREIGN KEY (`idAgenda`)
    REFERENCES `seinfo`.`agenda` (`idAgenda`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`imagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`imagem` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`imagem` (
  `idImagem` INT(11) NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idImagem`),
  UNIQUE INDEX `url_UNIQUE` (`url` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`carrossel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`carrossel` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`carrossel` (
  `idCarrossel` INT(11) NOT NULL AUTO_INCREMENT,
  `status` TINYINT(4) NOT NULL DEFAULT '0',
  `idImagem` INT(11) NOT NULL,
  PRIMARY KEY (`idCarrossel`),
  INDEX `fk_carrossel_imagem1_idx` (`idImagem` ASC) ,
  CONSTRAINT `carrossel_ibfk_1`
    FOREIGN KEY (`idImagem`)
    REFERENCES `seinfo`.`imagem` (`idImagem`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`despesa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`despesa` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`despesa` (
  `idDespesa` INT(11) NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(500) NOT NULL,
  `valor` FLOAT NOT NULL DEFAULT '0',
  `dataDespesa` DATE NOT NULL,
  `idEvento` INT(11) NOT NULL,
  PRIMARY KEY (`idDespesa`),
  INDEX `fk_despesa_evento1_idx` (`idEvento` ASC) ,
  CONSTRAINT `despesa_ibfk_1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`eventoImagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`eventoImagem` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`eventoImagem` (
  `idEvento` INT(11) NOT NULL,
  `idImagem` INT(11) NOT NULL,
  PRIMARY KEY (`idEvento`, `idImagem`),
  INDEX `fk_evento_has_imagem_imagem1_idx` (`idImagem` ASC) ,
  INDEX `fk_evento_has_imagem_evento1_idx` (`idEvento` ASC) ,
  CONSTRAINT `eventoimagem_ibfk_1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `eventoimagem_ibfk_2`
    FOREIGN KEY (`idImagem`)
    REFERENCES `seinfo`.`imagem` (`idImagem`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`pessoa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`pessoa` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`pessoa` (
  `CPF` VARCHAR(64) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` CHAR(32) NOT NULL,
  `nivel` INT(11) NOT NULL,
  `classificacao` INT(11) NOT NULL,
  `idPessoa` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`CPF`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`inscricaoEvento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`inscricaoEvento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`inscricaoEvento` (
  `CPF` VARCHAR(64) NOT NULL,
  `idEvento` INT(11) NOT NULL,
  `dataInscricao` DATE NOT NULL,
  PRIMARY KEY (`CPF`, `idEvento`),
  INDEX `fk_pessoa_has_evento_evento2_idx` (`idEvento` ASC) ,
  INDEX `fk_pessoa_has_evento_pessoa1_idx` (`CPF` ASC) ,
  CONSTRAINT `fk_inscricaoEvento_pessoa1`
    FOREIGN KEY (`CPF`)
    REFERENCES `seinfo`.`pessoa` (`CPF`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inscricaoEvento_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`inscricaoAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`inscricaoAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`inscricaoAtividade` (
  `CPF` VARCHAR(64) NOT NULL,
  `idEvento` INT(11) NOT NULL,
  `idAtividade` INT(11) NOT NULL,
  `dataInscricao` DATE NOT NULL,
  PRIMARY KEY (`CPF`, `idEvento`, `idAtividade`),
  INDEX `fk_inscricaoAtividade_atividade1_idx` (`idAtividade` ASC) ,
  INDEX `fk_inscricaoAtividade_inscricaoEvento1_idx` (`CPF` ASC, `idEvento` ASC) ,
  CONSTRAINT `inscricaoatividade_ibfk_1`
    FOREIGN KEY (`idAtividade`)
    REFERENCES `seinfo`.`atividade` (`idAtividade`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `inscricaoatividade_ibfk_2`
    FOREIGN KEY (`CPF` , `idEvento`)
    REFERENCES `seinfo`.`inscricaoEvento` (`CPF` , `idEvento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`lote`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`lote` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`lote` (
  `idLote` INT(11) NOT NULL AUTO_INCREMENT,
  `valor` FLOAT NOT NULL DEFAULT '0',
  `dataAbertura` DATE NOT NULL,
  `dataFechamento` DATE NOT NULL,
  `idEvento` INT(11) NOT NULL,
  PRIMARY KEY (`idLote`),
  INDEX `fk_lote_evento1_idx` (`idEvento` ASC) ,
  CONSTRAINT `lote_ibfk_1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`organizacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`organizacao` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`organizacao` (
  `CPF` VARCHAR(64) NOT NULL,
  `idEvento` INT(11) NOT NULL,
  `horasParticipacao` TIME NOT NULL,
  PRIMARY KEY (`CPF`, `idEvento`),
  INDEX `fk_pessoa_has_evento_evento3_idx` (`idEvento` ASC) ,
  INDEX `fk_pessoa_has_evento_pessoa2_idx` (`CPF` ASC) 
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`protagonista`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`protagonista` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`protagonista` (
  `CPF` VARCHAR(64) NOT NULL,
  `idAtividade` INT(11) NOT NULL,
  `atuacao` INT(11) NOT NULL,
  PRIMARY KEY (`CPF`, `idAtividade`),
  INDEX `fk_pessoa_has_atividade_atividade1_idx` (`idAtividade` ASC) ,
  INDEX `fk_pessoa_has_atividade_pessoa1_idx` (`CPF` ASC) ,
  CONSTRAINT `fk_protagonista_pessoa1`
    FOREIGN KEY (`CPF`)
    REFERENCES `seinfo`.`pessoa` (`CPF`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_protagonista_atividade1`
    FOREIGN KEY (`idAtividade`)
    REFERENCES `seinfo`.`atividade` (`idAtividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`receita`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receita` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receita` (
  `idReceita` INT(11) NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(500) NOT NULL,
  `valor` FLOAT NOT NULL DEFAULT '0',
  `dataReceita` DATE NOT NULL,
  `idEvento` INT(11) NOT NULL,
  PRIMARY KEY (`idReceita`),
  INDEX `fk_receita_evento1_idx` (`idEvento` ASC) ,
  CONSTRAINT `receita_ibfk_1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`receitaInscricaoAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receitaInscricaoAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receitaInscricaoAtividade` (
  `CPF` VARCHAR(64) NOT NULL,
  `idEvento` INT(11) NOT NULL,
  `idAtividade` INT(11) NOT NULL,
  `dataPagamento` DATE NOT NULL,
  PRIMARY KEY (`CPF`, `idEvento`, `idAtividade`),
  CONSTRAINT `receitainscricaoatividade_ibfk_1`
    FOREIGN KEY (`CPF` , `idEvento` , `idAtividade`)
    REFERENCES `seinfo`.`inscricaoAtividade` (`CPF` , `idEvento` , `idAtividade`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`receitaInscricaoEvento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receitaInscricaoEvento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receitaInscricaoEvento` (
  `CPF` VARCHAR(64) NOT NULL,
  `idEvento` INT(11) NOT NULL,
  `dataPagamento` DATE NOT NULL,
  PRIMARY KEY (`CPF`, `idEvento`),
  CONSTRAINT `receitainscricaoevento_ibfk_1`
    FOREIGN KEY (`CPF` , `idEvento`)
    REFERENCES `seinfo`.`inscricaoEvento` (`CPF` , `idEvento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `seinfo`.`presenca`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`presenca` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`presenca` (
  `idAgenda` INT(11) NOT NULL,
  `CPF` VARCHAR(64) NOT NULL,
  `idEvento` INT(11) NOT NULL,
  `idAtividade` INT(11) NOT NULL,
  `presenca` TINYINT NULL,
  PRIMARY KEY (`idAgenda`, `CPF`, `idEvento`, `idAtividade`),
  INDEX `fk_presenca_inscricaoAtividade1_idx` (`CPF` ASC, `idEvento` ASC, `idAtividade` ASC),
  INDEX `fk_presenca_agendamentoAtividade1_idx` (`idAgenda` ASC, `idAtividade` ASC) ,
  CONSTRAINT `fk_presenca_agendamentoAtividade1`
    FOREIGN KEY (`idAgenda` , `idAtividade`)
    REFERENCES `seinfo`.`agendamentoAtividade` (`idAgenda` , `idAtividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_presenca_inscricaoAtividade1`
    FOREIGN KEY (`CPF` , `idEvento` , `idAtividade`)
    REFERENCES `seinfo`.`inscricaoAtividade` (`CPF` , `idEvento` , `idAtividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


