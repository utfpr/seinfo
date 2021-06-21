    SET NAMES 'utf8';
    USE seinfo;

    SET FOREIGN_KEY_CHECKS = 0;
    SET SQL_SAFE_UPDATES=0;
    -- Delete data from the table 'receitainscricaoevento'
    TRUNCATE TABLE receitainscricaoevento;
    -- Delete data from the table 'receita'
    TRUNCATE TABLE receita;
/*     -- Delete data from the table 'participaatividade'
    TRUNCATE TABLE participaatividade; */
    -- Delete data from the table 'lote'
    TRUNCATE TABLE lote;
    -- Delete data from the table 'eventoimagem'
    TRUNCATE TABLE eventoimagem;
    -- Delete data from the table 'despesa'
    TRUNCATE TABLE despesa;
    -- Delete data from the table 'carrossel'
    TRUNCATE TABLE carrossel;
    -- Delete data from the table 'agendamentoatividade'
    TRUNCATE TABLE agendamentoatividade;
    -- Delete data from the table 'receitainscricaoatividade'
    DELETE FROM receitainscricaoatividade;
    -- Delete data from the table 'inscricaoatividade'
    DELETE FROM inscricaoatividade;
    -- Delete data from the table 'atividade'
    DELETE FROM atividade;
    -- Delete data from the table 'evento'
    DELETE FROM evento;
    -- Delete data from the table 'protagonista'
    TRUNCATE TABLE protagonista;
    -- Delete data from the table 'pessoa'
    TRUNCATE TABLE pessoa;
    -- Delete data from the table 'organizacao'
    TRUNCATE TABLE organizacao;
    -- Delete data from the table 'inscricaoevento'
    DELETE FROM inscricaoevento;
    -- Delete data from the table 'imagem'
    DELETE FROM imagem;
    -- Delete data from the table 'categoria'
    DELETE FROM categoria;
    -- Delete data from the table 'agenda'
    DELETE FROM agenda;
    SET FOREIGN_KEY_CHECKS = 1;
    SET SQL_SAFE_UPDATES=1;


    -- Inserting data into table agenda
    INSERT INTO agenda(idAgenda, dataHoraInicio, dataHoraFim, local) VALUES
    (1, '2020-04-15 09:37:12', '2020-04-22 14:53:25.367923', 'Agenda 1'),
    (2, '2020-08-15 05:38:28', '2020-08-17 18:55:26.234103', 'Agenda 2'),
    (3, '2020-07-18 20:04:59', '2020-07-25 22:10:56.398023', 'Agenda 3'),
    (4, '2020-09-19 03:40:49', '2020-09-21 08:30:39.786545', 'Agenda 4'),
    (5, '2020-07-24 05:47:39', '2020-07-26 13:25:22.025586', 'Agenda 5');


    -- Inserting data into table categoria
    INSERT INTO categoria(idCategoria, nome) VALUES
    (1, 'Categoria 1'),
    (2, 'Categoria 2'),
    (3, 'Categoria 3'),
    (4, 'Categoria 4'),
    (5, 'Categoria 5');


    -- Inserting data into table imagem
    INSERT INTO imagem(idImagem, url) VALUES
    (1, 'https://orngthin.hu/te/oneaas/ingedted/toorasoul.htm'),
    (2, 'http://www.ereouleratha.za/tiedwa/thehis/thiwasith/enshoarnd.php'),
    (3, 'http://enndndit.fi/terereto/enforentan.php'),
    (4, 'http://www.eave.es/it/stithhat.asp'),
    (5, 'https://www.ereasand.it/asnewa/ithherrete.htm#732');


    -- Inserting data into table pessoa
    INSERT INTO pessoa(CPF, idPessoa, nome, email, senha, nivel, classificacao) VALUES
    ('60025354451', 'a2217681', 'Sadie Reilly','alexa85@utfpr.edu.br','202672978',0,1),
    ('33640892777', 'a1958346', 'Charmaine Stock', 'GabrielS.Handy@gmail.com', '6CKGOA', 1, 2),
    ('34081245285', 'a1958940', 'Matthew Hoffman', 'Bowie@gmail.com', 'SG8RLS', 0, 0),
    ('39260980014', 'a1993372', 'Jacinta Yanez', 'Adelaida_Massie768@hotmail.com', '6IX46I', 1, 0),
    ('34179556342', 'a1992609', 'Drew Perry', 'Gagne@gmail.com', 'R074EX', 2, 2),
    ('38562911824', 'a1986148', 'Kyoko Adams', 'AntwanAyres@gmail.com', 'F3VL79', 1, 1),
    ('33878745143', 'a6213938', 'Kiel Jacobs','thora.stracke@utfpr.edu.br','89694942',1,0),
    ('39852265853', 'a1968410', 'Renea Russo', 'jopbhg1309@hotmail.com', '3GK6PH', 1, 0),
    ('35885415628', 'a2432229', 'Nolan Crona','verona.von@utfpr.edu.br','777880939',1,2),
    ('34871516568', 'a1958267', 'Donita Huff', 'Armstead75@gmail.com', '69IU9B', 0, 1);


    -- Inserting data into table organizacao
    INSERT INTO organizacao(idEvento, CPF, horasParticipacao) VALUES 
    (1,'60025354451',"09:25:46"), 
    (2,'60025354451',"10:25:46"), 
    (3,'60025354451',"00:22:24"),
    (4,'60025354451',"12:23:21"), 
    (5,'60025354451',"12:23:21");


    -- Inserting data into table evento
    INSERT INTO evento(idEvento, nome, descricao, status, idAgenda) VALUES
    (1, 'Evento 1', 'Descricao Evento 1', 1, 1),
    (2, 'Evento 2', 'Descricao Evento 2', 1, 2),
    (3, 'Evento 3', 'Descricao Evento 3', 0, 3),
    (4, 'Evento 4', 'Descricao Evento 4', 1, 4),
    (5, 'Evento 5', 'Descricao Evento 5', 0, 5);


    -- Inserting data into table inscricaoevento
    INSERT INTO inscricaoEvento(CPF, idEvento, dataInscricao) VALUES
    ('60025354451', 1, '2020-07-13'),
    ('33640892777', 2, '2020-07-13'),
    ('34081245285', 3, '2020-07-30'),
    ('39260980014', 4, '2020-07-06'),
    ('34179556342', 5, '2020-05-19');


    -- Inserting data into table atividade
    INSERT INTO atividade(idAtividade, titulo, valor, descricao, horasParticipacao, quantidadeVagas, idCategoria, idEvento) VALUES
    (1, 'Atividade 1', 132, 'Descricao Atividade 1 / Evento 1', '18:30:13', 38, 1, 1),
    (2, 'Atividade 2', 126, 'Descricao Atividade 2 / Evento 2', '00:01:01', 16, 2, 2),
    (3, 'Atividade 3', 45, 'Descricao Atividade 3 / Evento 3', '00:00:45', 36, 3, 3),
    (4, 'Atividade 4', 8, 'Descricao Atividade 4 / Evento 4', '02:28:20', 22, 4, 4),
    (5, 'Atividade 5', 136, 'Descricao Atividade 5 / Evento 5', '00:00:01', 15, 5, 5);


    -- Inserting data into table inscricaoatividade
    INSERT INTO inscricaoAtividade(CPF, idEvento, idAtividade, dataInscricao) VALUES
    ('60025354451', 1, 1, '2020-09-20'),
    ('33640892777', 2, 2, '2020-10-11'),
    ('34081245285', 3, 3, '2020-04-23'),
    ('39260980014', 4, 4, '2020-07-11'),
    ('34179556342', 5, 5, '2020-07-11');

    -- Inserting data into table presenca
/*     INSERT INTO `seinfo`.`presenca` (`idAgenda`, `CPF`, `idEvento`, `idAtividade`, `presenca`) VALUES 
    (NULL, NULL, NULL, NULL, NULL); */

    -- Inserting data into table protagonista
    INSERT INTO protagonista(CPF, idAtividade, atuacao) VALUES
    ('60025354451', 1, 0),
    ('33640892777', 2, 1),
    ('34081245285', 3, 1),
    ('39260980014', 4, 0),
    ('34179556342', 5, 0);


    -- Inserting data into table receitainscricaoatividade
    INSERT INTO receitaInscricaoAtividade(CPF, idEvento, idAtividade, dataPagamento) VALUES
    ('60025354451', 1, 1, '2020-10-11'),
    ('33640892777', 2, 2, '2020-10-16'),
    ('34081245285', 3, 3, '2020-05-23'),
    ('39260980014', 4, 4, '2020-09-18'),
    ('34179556342', 5, 5, '2020-08-01');


    -- Inserting data into table agendamentoatividade
    INSERT INTO agendamentoAtividade(idAtividade, idAgenda) VALUES
    (1, 1), 
    (2, 2), 
    (3, 3), 
    (4, 4), 
    (5, 5);


    -- Inserting data into table carrossel
    INSERT INTO carrossel(idCarrossel, status, idImagem) VALUES
    (1, 1, 1), 
    (2, 0, 2), 
    (3, 0, 3), 
    (4, 0, 4), 
    (5, 1, 5);


    -- Inserting data into table despesa
    INSERT INTO despesa(idDespesa, descricao, valor, dataDespesa, idEvento) VALUES
    (1, 'Descricao Despesa 1', 33, '2020-09-21', 1),
    (2, 'Descricao Despesa 2', 76, '2020-07-05', 2),
    (3, 'Descricao Despesa 3', 52, '2020-08-19', 3),
    (4, 'Descricao Despesa 4', 58, '2020-07-10', 4),
    (5, 'Descricao Despesa 5', 78, '2020-07-07', 5);


    -- Inserting data into table eventoimagem
    INSERT INTO eventoimagem(idEvento, idImagem) VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (4, 5);


    -- Inserting data into table lote
    INSERT INTO lote(idLote, valor, dataAbertura, dataFechamento, idEvento) VALUES
    (1, 25, '2020-04-23', '2020-04-25', 1),
    (2, 15, '2020-07-05', '2020-07-09', 2),
    (3, 25, '2020-04-21', '2020-04-24', 3),
    (4, 18, '2020-06-28', '2020-06-30', 4),
    (5, 19, '2020-05-19', '2020-05-23', 5);


    -- Inserting data into table receita
    INSERT INTO receita(idReceita, descricao, valor, dataReceita, idEvento) VALUES
    (1, 'Receita Descricao 1 / Evento 1', 90, '2020-06-30', 1),
    (2, 'Receita Descricao 2 / Evento 2', 108, '2020-07-18', 2),
    (3, 'Receita Descricao 3 / Evento 3', 256, '2020-07-19', 3),
    (4, 'Receita Descricao 4 / Evento 4', 130, '2020-04-06', 4),
    (5, 'Receita Descricao 5 / Evento 5', 126, '2020-09-10', 5);

    -- Inserting data into table receitainscricaoevento
    INSERT INTO receitaInscricaoEvento(CPF, idEvento, dataPagamento) VALUES
    ('60025354451', 1, '2020-06-09'),
    ('33640892777', 2, '2020-11-12'),
    ('34081245285', 3, '2020-09-23'),
    ('39260980014', 4, '2020-09-13'),
    ('34179556342', 5, '2020-04-16');