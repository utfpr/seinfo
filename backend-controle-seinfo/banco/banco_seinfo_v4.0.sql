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
  `nome` VARCHAR(256) NOT NULL,
  `email` VARCHAR(256) NULL,
  `CPF` CHAR(11) NOT NULL,
  PRIMARY KEY (`idPessoa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`convidado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`convidado` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`convidado` (
  `senha` CHAR(32) NOT NULL,
  `idPessoa` INT NOT NULL,
  PRIMARY KEY (`idPessoa`),
  CONSTRAINT `fk_convidado_pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`aluno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`aluno` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`aluno` (
  `ra` CHAR(8) NOT NULL,
  `senha` CHAR(32) NOT NULL,
  `idPessoa` INT NOT NULL,
  PRIMARY KEY (`ra`),
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
  `senha` CHAR(32) NOT NULL,
  `nome` VARCHAR(256) NOT NULL,
  `nivel` INT NOT NULL DEFAULT 2,
  PRIMARY KEY (`usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`evento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`evento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`evento` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(256) NOT NULL,
  `descricao` VARCHAR(5000) NULL,
  `data_horario_inicio` DATETIME NOT NULL,
  `data_hora_fim` DATETIME NULL,
  `urlImagem` VARCHAR(256) NULL DEFAULT '../imagens/default.png',
  PRIMARY KEY (`idEvento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`categoria` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`atividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`atividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`atividade` (
  `idAtividade` INT NOT NULL AUTO_INCREMENT,
  `valor` FLOAT NOT NULL DEFAULT 0.00,
  `descricao` VARCHAR(5000) NULL,
  `dataHorarioInicio` DATETIME NOT NULL,
  `local` VARCHAR(256) NOT NULL,
  `dataHoraFim` DATETIME NOT NULL,
  `horasParticipacao` TIME NOT NULL,
  `idEvento` INT NOT NULL,
  `idcategoria` INT NOT NULL,
  PRIMARY KEY (`idAtividade`),
  INDEX `fk_minicurso_evento1_idx` (`idEvento` ASC),
  INDEX `fk_atividade_categoria1_idx` (`idcategoria` ASC),
  CONSTRAINT `fk_minicurso_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atividade_categoria1`
    FOREIGN KEY (`idcategoria`)
    REFERENCES `seinfo`.`categoria` (`idcategoria`)
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
-- Table `seinfo`.`participaAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`participaAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`participaAtividade` (
  `idAtividade` INT NOT NULL,
  `confirmacaoPagamentoAtividade` TINYINT NULL DEFAULT 0,
  `presenca` TINYINT NULL DEFAULT 0,
  `idEvento` INT NOT NULL,
  `idPessoa` INT NOT NULL,
  INDEX `fk_evento_has_Pessoa_has_minicurso_minicurso1_idx` (`idAtividade` ASC),
  PRIMARY KEY (`idAtividade`, `idEvento`, `idPessoa`),
  INDEX `fk_participaMinicurso_inscricao1_idx` (`idEvento` ASC, `idPessoa` ASC),
  CONSTRAINT `fk_evento_has_Pessoa_has_minicurso_minicurso1`
    FOREIGN KEY (`idAtividade`)
    REFERENCES `seinfo`.`atividade` (`idAtividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_participaMinicurso_inscricao1`
    FOREIGN KEY (`idEvento` , `idPessoa`)
    REFERENCES `seinfo`.`inscricao` (`idEvento` , `idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`caixa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`caixa` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`caixa` (
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
  `descricao` VARCHAR(256) NOT NULL,
  `valorUnitario` FLOAT NOT NULL DEFAULT 0.00,
  `quantidade` INT NOT NULL DEFAULT 1,
  `idCaixa` INT NOT NULL,
  PRIMARY KEY (`idDespesa`),
  INDEX `fk_despesa_Caixa1_idx` (`idCaixa` ASC),
  CONSTRAINT `fk_despesa_Caixa1`
    FOREIGN KEY (`idCaixa`)
    REFERENCES `seinfo`.`caixa` (`idCaixa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`receita`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receita` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receita` (
  `idReceita` INT NOT NULL AUTO_INCREMENT,
  `valor` FLOAT NOT NULL DEFAULT 0.00,
  `descricao` VARCHAR(256) NOT NULL,
  `idCaixa` INT NOT NULL,
  PRIMARY KEY (`idReceita`),
  INDEX `fk_receita_Caixa1_idx` (`idCaixa` ASC),
  CONSTRAINT `fk_receita_Caixa1`
    FOREIGN KEY (`idCaixa`)
    REFERENCES `seinfo`.`caixa` (`idCaixa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`receitaInterna`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receitaInterna` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receitaInterna` (
  `idReceita` INT NOT NULL,
  `idAtividade` INT NOT NULL,
  `idEvento` INT NOT NULL,
  `idPessoa` INT NOT NULL,
  INDEX `fk_receita_interna_receita1_idx` (`idReceita` ASC),
  PRIMARY KEY (`idReceita`),
  INDEX `fk_receitaInterna_participaMinicurso1_idx` (`idAtividade` ASC, `idEvento` ASC, `idPessoa` ASC),
  CONSTRAINT `fk_receita_interna_receita1`
    FOREIGN KEY (`idReceita`)
    REFERENCES `seinfo`.`receita` (`idReceita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_receitaInterna_participaMinicurso1`
    FOREIGN KEY (`idAtividade` , `idEvento` , `idPessoa`)
    REFERENCES `seinfo`.`participaAtividade` (`idAtividade` , `idEvento` , `idPessoa`)
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
-- Table `seinfo`.`Orador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`Orador` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`Orador` (
  `idPessoa` INT NOT NULL,
  `idAtividade` INT NOT NULL,
  PRIMARY KEY (`idPessoa`, `idAtividade`),
  INDEX `fk_pessoa_has_minicurso_minicurso1_idx` (`idAtividade` ASC),
  INDEX `fk_pessoa_has_minicurso_pessoa1_idx` (`idPessoa` ASC),
  CONSTRAINT `fk_pessoa_has_minicurso_pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pessoa_has_minicurso_minicurso1`
    FOREIGN KEY (`idAtividade`)
    REFERENCES `seinfo`.`atividade` (`idAtividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`organizacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`organizacao` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`organizacao` (
  `idPessoa` INT NOT NULL,
  `idEvento` INT NOT NULL,
  `horasOrganizacao` TIME NOT NULL,
  PRIMARY KEY (`idPessoa`, `idEvento`),
  INDEX `fk_pessoa_has_evento_evento1_idx` (`idEvento` ASC),
  INDEX `fk_pessoa_has_evento_pessoa1_idx` (`idPessoa` ASC),
  CONSTRAINT `fk_pessoa_has_evento_pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pessoa_has_evento_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`professor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`professor` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`professor` (
  `nick` VARCHAR(256) NOT NULL,
  `idPessoa` INT NOT NULL,
  `senha` CHAR(32) NOT NULL,
  PRIMARY KEY (`nick`),
  INDEX `fk_professor_pessoa1_idx` (`idPessoa` ASC),
  CONSTRAINT `fk_professor_pessoa1`
    FOREIGN KEY (`idPessoa`)
    REFERENCES `seinfo`.`pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`lote`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`lote` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`lote` (
  `idLote` INT NOT NULL AUTO_INCREMENT,
  `valor` FLOAT NOT NULL DEFAULT 0.00,
  `dataAbertura` DATE NOT NULL,
  `dataFechamento` DATE NOT NULL,
  `idEvento` INT NOT NULL,
  PRIMARY KEY (`idLote`),
  INDEX `fk_lote_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_lote_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
