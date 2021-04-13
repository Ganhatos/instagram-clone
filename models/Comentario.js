module.exports = (sequelize, DataTypes) => {
    
    // define(nomeModel, colunas, config)
    const Comentario = sequelize.define(
        'Comentario',
        {
            texto: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER
        },
        {
            tableName: "comentarios",
            timestamps: false
        }
    );

    return Comentario;

}