SET NAMES 'utf8';
USE seinfo;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE protagonista;
TRUNCATE TABLE organizacao;
TRUNCATE TABLE eventoimagem;
TRUNCATE TABLE agendamentoAtividade;
TRUNCATE TABLE carrossel;
TRUNCATE TABLE imagem;
TRUNCATE TABLE lote;
TRUNCATE TABLE receitaInscricaoEvento;
TRUNCATE TABLE receita;
TRUNCATE TABLE despesa;
TRUNCATE TABLE participaAtividade;
TRUNCATE TABLE receitaInscricaoAtividade;
TRUNCATE TABLE inscricaoAtividade;
TRUNCATE TABLE inscricaoEvento;
TRUNCATE TABLE atividade;
TRUNCATE TABLE categoria;
TRUNCATE TABLE evento;
TRUNCATE TABLE agenda;
TRUNCATE TABLE pessoa;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO agenda(idAgenda, dataHoraInicio, dataHoraFim, local) VALUES
(1, '2020-04-15 09:37:12', '2020-04-22 14:53:25.367923', '240 Hidden Front Way'),
(2, '2020-08-15 05:38:28', '2020-08-17 18:55:26.234103', '2948 Stonewood Pkwy'),
(3, '2020-07-18 20:04:59', '2020-07-25 22:10:56.398023', '44 West Church Ct'),
(4, '2020-09-19 03:40:49', '2020-09-21 08:30:39.786545', '3778 Edgewood Highway'),
(5, '2020-07-24 05:47:39', '2020-07-26 13:25:22.025586', '12 1st Circle');

INSERT INTO categoria(idCategoria, nome) VALUES
(1, 'Fund management activities'),
(2, 'Financial management '),
(3, 'Glazing '),
(4, 'Dental practice activities'),
(5, 'Sale of other motor vehicles');

INSERT INTO imagem(idImagem, url) VALUES
(1, 'https://orngthin.hu/te/oneaas/ingedted/toorasoul.htm'),
(2, 'http://www.ereouleratha.za/tiedwa/thehis/thiwasith/enshoarnd.php'),
(3, 'http://enndndit.fi/terereto/enforentan.php'),
(4, 'http://www.eave.es/it/stithhat.asp'),
(5, 'https://www.ereasand.it/asnewa/ithherrete.htm#732');

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

INSERT INTO organizacao(idEvento, CPF, horasParticipacao) VALUES 
(1,'60025354451',"09:25:46"), 
(2,'60025354451',"10:25:46"), 
(3,'60025354451',"00:22:24"),
(4,'60025354451',"12:23:21"), 
(5,'60025354451',"12:23:21");

INSERT INTO evento(idEvento, nome, descricao, status, idAgenda) VALUES
(1, 'Extraction and agglomeration of peat', 'extraction of oils from pets', 1, 1),
(2, 'Raising of poultry', 'bird breeding tips', 1, 2),
(3, 'Wholesale of waste and scrap', 'Wholesale of waste and scrap', 0, 3),
(4, 'Manufacture of explosives', 'how to blow up mountains to find gold', 1, 4),
(5, 'Fitness facilities', 'install machine muscles in your body', 0, 5);

INSERT INTO inscricaoEvento(CPF, idEvento, dataInscricao) VALUES
('60025354451', 1, '2020-07-13'),
('33640892777', 2, '2020-07-13'),
('34081245285', 3, '2020-07-30'),
('39260980014', 4, '2020-07-06'),
('34179556342', 5, '2020-05-19');

INSERT INTO atividade(idAtividade, titulo, valor, descricao, horasParticipacao, quantidadeVagas, idCategoria, idEvento) VALUES
(1, 'Cpl', 132, 'Vel accusantium perspiciatis.\r\n', '18:30:13', 38, 1, 1),
(2, 'Gov', 126, 'Sit deserunt perferendis.\r\n', '00:01:01', 16, 2, 2),
(3, 'Esq', 45, 'Sed quas et quidem cum sit sed.', '00:00:45', 36, 3, 3),
(4, 'Capt.', 8, 'Aspernatur quidem natus quia.', '02:28:20', 22, 4, 4),
(5, 'Adv', 136, 'Inventore at voluptatem. Rerum.', '00:00:01', 15, 5, 5);

INSERT INTO inscricaoAtividade(CPF, idEvento, idAtividade, dataInscricao) VALUES
('60025354451', 1, 1, '2020-09-20'),
('33640892777', 2, 2, '2020-10-11'),
('34081245285', 3, 3, '2020-04-23'),
('39260980014', 4, 4, '2020-07-11'),
('34179556342', 5, 5, '2020-07-11');

INSERT INTO protagonista(CPF, idAtividade, atuacao) VALUES
('60025354451', 1, 0),
('33640892777', 2, 1),
('34081245285', 3, 1),
('39260980014', 4, 0),
('34179556342', 5, 0);

INSERT INTO receitainscricaoatividade(CPF, idEvento, idAtividade, dataPagamento) VALUES
('60025354451', 1, 1, '2020-10-11'),
('33640892777', 2, 2, '2020-10-16'),
('34081245285', 3, 3, '2020-05-23'),
('39260980014', 4, 4, '2020-09-18'),
('34179556342', 5, 5, '2020-08-01');

INSERT INTO agendamentoAtividade(idAtividade, idAgenda) VALUES
(1, 1), 
(2, 2), 
(3, 3), 
(4, 4), 
(5, 5);

INSERT INTO carrossel(idCarrossel, status, idImagem) VALUES
(1, 1, 1), 
(2, 0, 2), 
(3, 0, 3), 
(4, 0, 4), 
(5, 1, 5);

INSERT INTO despesa(idDespesa, descricao, valor, dataDespesa, idEvento) VALUES
(1, 'Antaridge', 33, '2020-09-21', 1),
(2, 'Monwoofridge', 76, '2020-07-05', 2),
(3, 'Chartoplet', 52, '2020-08-19', 3),
(4, 'Prolifiar', 58, '2020-07-10', 4),
(5, 'Recordicphone', 78, '2020-07-07', 5);

INSERT INTO eventoimagem(idEvento, idImagem) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(4, 5);

INSERT INTO lote(idLote, valor, dataAbertura, dataFechamento, idEvento) VALUES
(1, 25, '2020-04-23', '2020-04-25', 1),
(2, 15, '2020-07-05', '2020-07-09', 2),
(3, 25, '2020-04-21', '2020-04-24', 3),
(4, 18, '2020-06-28', '2020-06-30', 4),
(5, 19, '2020-05-19', '2020-05-23', 5);

INSERT INTO participaAtividade(CPF, idEvento, idAtividade, presenca) VALUES
('60025354451', 1, 1, 0),
('33640892777', 2, 2, 1),
('34081245285', 3, 3, 2),
('39260980014', 4, 4, 3),
('34179556342', 5, 5, 4);

INSERT INTO receita(idReceita, descricao, valor, dataReceita, idEvento) VALUES
(1, 'Manufacture of other products of wood', 90, '2020-06-30', 1),
(2, 'Manufacture of rubber tyres and tubes', 108, '2020-07-18', 2),
(3, 'Wholesale of solid, liquid and gaseous fuels and related products', 256, '2020-07-19', 3),
(4, 'Growing of tobacco', 130, '2020-04-06', 4),
(5, 'Manufacture of ovens, furnaces and furnace burners', 126, '2020-09-10', 5);

INSERT INTO receitainscricaoevento(CPF, idEvento, dataPagamento) VALUES
('60025354451', 1, '2020-06-09'),
('33640892777', 2, '2020-11-12'),
('34081245285', 3, '2020-09-23'),
('39260980014', 4, '2020-09-13'),
('34179556342', 5, '2020-04-16');