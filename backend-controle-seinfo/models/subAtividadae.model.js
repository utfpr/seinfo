module.exports = (sequelize, Sequelize) => {
    const SubAtividade = sequelize.define('agendamentoAtividade', {
        idAtividade: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'atividade',
                key: 'idAtividade'
            },
            field: 'idAtividade'
        },
        idAgenda: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'agenda',
                key: 'idAgenda'
            },
            field: 'idAgenda'
        },
        idParticipante: {
            type: Sequelize.STRING(64),
            allowNull: false,
            field: 'idParticipante'
        },
        presente:{
            type: Boolean,
            default: false,
            allowNull: false,
            field: 'presenca'
        }
    },
        { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
            tableName: 'agendamentoAtividade',
            timestamps: false,
            createdAt: false,
        });
    AgAtividade.associate = models => {

        models.atividade.belongsToMany(models.agenda, {
            as: 'atvAgenda',
            through: models.subAtividade,
            foreignKey: 'idAtividade',
            onUpdate: 'cascade',
            onDelete: 'cascade',
        }),

        models.agenda.belongsToMany(models.atividade, {
            as: 'agendaAtv',
            through: models.subAtividade,
            foreignKey: 'idAgenda',
            onUpdate: 'cascade',
            onDelete: 'cascade',
        })
        models.agenda.belongsToMany(models.pessoa, {
            as: 'idParticipante',
            through: models.subAtividade,
            foreignKey: 'idPessoa:',
            onUpdate: 'cascade',
            onDelete: 'cascade',
        })
    };
    return SubAtividade;
}