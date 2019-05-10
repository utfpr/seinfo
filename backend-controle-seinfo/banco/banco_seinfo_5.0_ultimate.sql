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
  `nome` VARCHAR(300) NOT NULL,
  `email` VARCHAR(300) NOT NULL,
  `CPF` CHAR(11) NOT NULL,
  `senha` CHAR(32) NOT NULL,
  `nivel` INT NOT NULL COMMENT 'O nível seleciona quem vai ter acesso, 0 como usuário, 1 adm básico e 2 como super adm.',
  `classificacao` INT NOT NULL COMMENT 'classificação define quem são as pessoas, 0 como aluno, 1 como professor e 2 como visitante.',
  PRIMARY KEY (`idPessoa`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`evento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`evento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`evento` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(300) NOT NULL,
  `descricao` VARCHAR(5000) NULL,
  `status` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idEvento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`categoria` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`atividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`atividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`atividade` (
  `idAtividade` INT NOT NULL AUTO_INCREMENT,
  `valor` FLOAT NOT NULL DEFAULT 0.00,
  `descricao` VARCHAR(5000) NULL,
  `idEvento` INT NOT NULL,
  `idCategoria` INT NOT NULL,
  PRIMARY KEY (`idAtividade`),
  INDEX `fk_minicurso_evento1_idx` (`idEvento` ASC),
  INDEX `fk_atividade_categoria1_idx` (`idCategoria` ASC),
  CONSTRAINT `fk_minicurso_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atividade_categoria1`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `seinfo`.`categoria` (`idCategoria`)
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
  `pagamentoInscricao` TINYINT NOT NULL DEFAULT 0,
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
  `confirmacaoPagamentoAtividade` TINYINT NOT NULL DEFAULT 0,
  `presenca` TINYINT NOT NULL DEFAULT 0,
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
  `descricao` VARCHAR(500) NOT NULL,
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
  `descricao` VARCHAR(500) NOT NULL,
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
-- Table `seinfo`.`protagonista`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`protagonista` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`protagonista` (
  `idPessoa` INT NOT NULL,
  `idAtividade` INT NOT NULL,
  `atuacao` INT NOT NULL COMMENT 'O atributo atuação é destinado para palestrante e ministrante.\nSendo 0 para palestrante e 1 para ministrante.',
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
  `horasParticipacao` TIME NOT NULL DEFAULT '00:00:00',
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


-- -----------------------------------------------------
-- Table `seinfo`.`imagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`imagem` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`imagem` (
  `idImagem` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idImagem`),
  UNIQUE INDEX `url_UNIQUE` (`url` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`carrossel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`carrossel` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`carrossel` (
  `idCarrossel` INT NOT NULL AUTO_INCREMENT,
  `status` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idCarrossel`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`agenda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`agenda` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`agenda` (
  `idAgenda` INT NOT NULL AUTO_INCREMENT,
  `dataHoraInicio` DATETIME NOT NULL,
  `dataHoraFim` DATETIME NOT NULL,
  `local` VARCHAR(300) NOT NULL,
  `horasParticipacao` TIME NOT NULL DEFAULT '00:00:00',
  `quantidadeVagas` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idAgenda`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`agendamentoEvento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`agendamentoEvento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`agendamentoEvento` (
  `idEvento` INT NOT NULL,
  `idAgenda` INT NOT NULL,
  PRIMARY KEY (`idEvento`, `idAgenda`),
  INDEX `fk_evento_has_agenda_agenda1_idx` (`idAgenda` ASC),
  INDEX `fk_evento_has_agenda_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_evento_has_agenda_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_evento_has_agenda_agenda1`
    FOREIGN KEY (`idAgenda`)
    REFERENCES `seinfo`.`agenda` (`idAgenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`agendamentoAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`agendamentoAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`agendamentoAtividade` (
  `idAtividade` INT NOT NULL,
  `idAgenda` INT NOT NULL,
  PRIMARY KEY (`idAtividade`, `idAgenda`),
  INDEX `fk_atividade_has_agenda_agenda1_idx` (`idAgenda` ASC),
  INDEX `fk_atividade_has_agenda_atividade1_idx` (`idAtividade` ASC),
  CONSTRAINT `fk_atividade_has_agenda_atividade1`
    FOREIGN KEY (`idAtividade`)
    REFERENCES `seinfo`.`atividade` (`idAtividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atividade_has_agenda_agenda1`
    FOREIGN KEY (`idAgenda`)
    REFERENCES `seinfo`.`agenda` (`idAgenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`eventoImagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`eventoImagem` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`eventoImagem` (
  `idEvento` INT NOT NULL,
  `idImagem` INT NOT NULL,
  PRIMARY KEY (`idEvento`, `idImagem`),
  INDEX `fk_evento_has_imagem_imagem1_idx` (`idImagem` ASC),
  INDEX `fk_evento_has_imagem_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_evento_has_imagem_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `seinfo`.`evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_evento_has_imagem_imagem1`
    FOREIGN KEY (`idImagem`)
    REFERENCES `seinfo`.`imagem` (`idImagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`carrosselImagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`carrosselImagem` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`carrosselImagem` (
  `idCarrossel` INT NOT NULL,
  `idImagem` INT NOT NULL,
  PRIMARY KEY (`idCarrossel`, `idImagem`),
  INDEX `fk_carrossel_has_imagem_imagem1_idx` (`idImagem` ASC),
  INDEX `fk_carrossel_has_imagem_carrossel1_idx` (`idCarrossel` ASC),
  CONSTRAINT `fk_carrossel_has_imagem_carrossel1`
    FOREIGN KEY (`idCarrossel`)
    REFERENCES `seinfo`.`carrossel` (`idCarrossel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrossel_has_imagem_imagem1`
    FOREIGN KEY (`idImagem`)
    REFERENCES `seinfo`.`imagem` (`idImagem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
