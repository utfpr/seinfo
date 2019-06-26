-- MySQL Workbench Forward Engineering

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
  `idPessoa` VARCHAR(64) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `CPF` CHAR(11) NOT NULL,
  `senha` CHAR(32) NOT NULL,
  `nivel` INT NOT NULL,
  `classificacao` INT NOT NULL,
  PRIMARY KEY (`idPessoa`)
)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `email_UNIQUE` ON `seinfo`.`pessoa` (`email` ASC);

CREATE UNIQUE INDEX `CPF_UNIQUE` ON `seinfo`.`pessoa` (`CPF` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`agenda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`agenda` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`agenda` (
  `idAgenda` INT NOT NULL AUTO_INCREMENT,
  `dataHoraInicio` DATETIME NOT NULL,
  `dataHoraFim` DATETIME NOT NULL,
  `local` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idAgenda`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`evento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`evento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`evento` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(5000) NULL,
  `status` TINYINT NOT NULL DEFAULT 0,
  `idAgenda` INT NOT NULL,
  PRIMARY KEY (`idEvento`),
  FOREIGN KEY (`idAgenda`) REFERENCES `seinfo`.`agenda` (`idAgenda`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_evento_agenda1_idx` ON `seinfo`.`evento` (`idAgenda` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`categoria` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`atividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`atividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`atividade` (
  `idAtividade` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NOT NULL,
  `valor` FLOAT NOT NULL DEFAULT 0.00,
  `descricao` VARCHAR(5000) NULL,
  `horasParticipacao` TIME NOT NULL DEFAULT '00:00:00',
  `quantidadeVagas` INT NOT NULL DEFAULT 0,
  `idCategoria` INT NOT NULL,
  `idEvento` INT NOT NULL,
  PRIMARY KEY (`idAtividade`),
  FOREIGN KEY (`idCategoria`) REFERENCES `seinfo`.`categoria` (`idCategoria`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
  FOREIGN KEY (`idEvento`) REFERENCES `seinfo`.`evento` (`idEvento`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_categoria1_idx` ON `seinfo`.`atividade` (`idCategoria` ASC);

CREATE INDEX `fk_atividade_evento1_idx` ON `seinfo`.`atividade` (`idEvento` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`inscricaoEvento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`inscricaoEvento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`inscricaoEvento` (
  `idPessoa` VARCHAR(64) NOT NULL,
  `idEvento` INT NOT NULL,
  `dataInscricao` DATE NOT NULL,
  PRIMARY KEY (`idPessoa`, `idEvento`))
ENGINE = InnoDB;

CREATE INDEX `fk_pessoa_has_evento_evento2_idx` ON `seinfo`.`inscricaoEvento` (`idEvento` ASC);

CREATE INDEX `fk_pessoa_has_evento_pessoa1_idx` ON `seinfo`.`inscricaoEvento` (`idPessoa` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`inscricaoAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`inscricaoAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`inscricaoAtividade` (
  `idPessoa` VARCHAR(64) NOT NULL,
  `idEvento` INT NOT NULL,
  `idAtividade` INT NOT NULL,
  `dataInscricao` DATE NOT NULL,
  PRIMARY KEY (`idPessoa`, `idEvento`, `idAtividade`),
  FOREIGN KEY (`idAtividade`) REFERENCES `seinfo`.`atividade` (`idAtividade`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
  FOREIGN KEY (`idPessoa` , `idEvento`) REFERENCES `seinfo`.`inscricaoEvento` (`idPessoa` , `idEvento`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_inscricaoAtividade_atividade1_idx` ON `seinfo`.`inscricaoAtividade` (`idAtividade` ASC);

CREATE INDEX `fk_inscricaoAtividade_inscricaoEvento1_idx` ON `seinfo`.`inscricaoAtividade` (`idPessoa` ASC, `idEvento` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`receitaInscricaoAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receitaInscricaoAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receitaInscricaoAtividade` (
  `idPessoa` VARCHAR(64) NOT NULL,
  `idEvento` INT NOT NULL,
  `idAtividade` INT NOT NULL,
  `dataPagamento` DATE NOT NULL,
  PRIMARY KEY (`idPessoa`, `idEvento`, `idAtividade`),
  FOREIGN KEY (`idPessoa` , `idEvento` , `idAtividade`) REFERENCES `seinfo`.`inscricaoAtividade` (`idPessoa` , `idEvento` , `idAtividade`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`participaAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`participaAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`participaAtividade` (
  `idPessoa` VARCHAR(64) NOT NULL,
  `idEvento` INT NOT NULL,
  `idAtividade` INT NOT NULL,
  `presenca` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idPessoa`, `idEvento`, `idAtividade`),
  FOREIGN KEY (`idPessoa` , `idEvento` , `idAtividade`) REFERENCES `seinfo`.`receitaInscricaoAtividade` (`idPessoa` , `idEvento` , `idAtividade`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `seinfo`.`despesa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`despesa` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`despesa` (
  `idDespesa` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(500) NOT NULL,
  `valor` FLOAT NOT NULL DEFAULT 0.00,
  `dataDespesa` DATE NOT NULL,
  `idEvento` INT NOT NULL,
  PRIMARY KEY (`idDespesa`),
  FOREIGN KEY (`idEvento`) REFERENCES `seinfo`.`evento` (`idEvento`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_despesa_evento1_idx` ON `seinfo`.`despesa` (`idEvento` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`receita`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receita` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receita` (
  `idReceita` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(500) NOT NULL,
  `valor` FLOAT NOT NULL DEFAULT 0.00,
  `dataReceita` DATE NOT NULL,
  `idEvento` INT NOT NULL,
  PRIMARY KEY (`idReceita`),
  FOREIGN KEY (`idEvento`) REFERENCES `seinfo`.`evento` (`idEvento`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_receita_evento1_idx` ON `seinfo`.`receita` (`idEvento` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`receitaInscricaoEvento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`receitaInscricaoEvento` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`receitaInscricaoEvento` (
  `idPessoa` VARCHAR(64) NOT NULL,
  `idEvento` INT NOT NULL,
  `dataPagamento` DATE NOT NULL,
  PRIMARY KEY (`idPessoa`, `idEvento`),
  FOREIGN KEY (`idPessoa` , `idEvento`) REFERENCES `seinfo`.`inscricaoEvento` (`idPessoa` , `idEvento`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
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
  FOREIGN KEY (`idEvento`) REFERENCES `seinfo`.`evento` (`idEvento`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_lote_evento1_idx` ON `seinfo`.`lote` (`idEvento` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`imagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`imagem` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`imagem` (
  `idImagem` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idImagem`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `url_UNIQUE` ON `seinfo`.`imagem` (`url` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`carrossel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`carrossel` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`carrossel` (
  `idCarrossel` INT NOT NULL AUTO_INCREMENT,
  `status` TINYINT NOT NULL DEFAULT 0,
  `idImagem` INT NOT NULL,
  PRIMARY KEY (`idCarrossel`),
  FOREIGN KEY (`idImagem`) REFERENCES `seinfo`.`imagem` (`idImagem`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_carrossel_imagem1_idx` ON `seinfo`.`carrossel` (`idImagem` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`agendamentoAtividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`agendamentoAtividade` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`agendamentoAtividade` (
  `idAtividade` INT NOT NULL,
  `idAgenda` INT NOT NULL,
  PRIMARY KEY (`idAtividade`, `idAgenda`),
  FOREIGN KEY (`idAtividade`) REFERENCES `seinfo`.`atividade` (`idAtividade`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
  FOREIGN KEY (`idAgenda`) REFERENCES `seinfo`.`agenda` (`idAgenda`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_atividade_has_agenda_agenda1_idx` ON `seinfo`.`agendamentoAtividade` (`idAgenda` ASC);

CREATE INDEX `fk_atividade_has_agenda_atividade1_idx` ON `seinfo`.`agendamentoAtividade` (`idAtividade` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`eventoImagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`eventoImagem` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`eventoImagem` (
  `idEvento` INT NOT NULL,
  `idImagem` INT NOT NULL,
  PRIMARY KEY (`idEvento`, `idImagem`),
  FOREIGN KEY (`idEvento`) REFERENCES `seinfo`.`evento` (`idEvento`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
  FOREIGN KEY (`idImagem`) REFERENCES `seinfo`.`imagem` (`idImagem`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE INDEX `fk_evento_has_imagem_imagem1_idx` ON `seinfo`.`eventoImagem` (`idImagem` ASC);

CREATE INDEX `fk_evento_has_imagem_evento1_idx` ON `seinfo`.`eventoImagem` (`idEvento` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`organizacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`organizacao` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`organizacao` (
  `idPessoa` VARCHAR(64) NOT NULL,
  `idEvento` INT NOT NULL,
  `horasParticipacao` TIME NOT NULL,
  PRIMARY KEY (`idPessoa`, `idEvento`))
ENGINE = InnoDB;

CREATE INDEX `fk_pessoa_has_evento_evento3_idx` ON `seinfo`.`organizacao` (`idEvento` ASC);

CREATE INDEX `fk_pessoa_has_evento_pessoa2_idx` ON `seinfo`.`organizacao` (`idPessoa` ASC);


-- -----------------------------------------------------
-- Table `seinfo`.`protagonista`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `seinfo`.`protagonista` ;

CREATE TABLE IF NOT EXISTS `seinfo`.`protagonista` (
  `idPessoa` VARCHAR(64) NOT NULL,
  `idAtividade` INT NOT NULL,
  `atuacao` INT NOT NULL,
  PRIMARY KEY (`idPessoa`, `idAtividade`))
ENGINE = InnoDB;

CREATE INDEX `fk_pessoa_has_atividade_atividade1_idx` ON `seinfo`.`protagonista` (`idAtividade` ASC);

CREATE INDEX `fk_pessoa_has_atividade_pessoa1_idx` ON `seinfo`.`protagonista` (`idPessoa` ASC);


