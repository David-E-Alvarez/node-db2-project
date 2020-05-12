
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.bigInteger('vin').unique().notNullable()
        tbl.string('make').unique();
        tbl.string('model').unique();
        tbl.bigInteger('mileage');
        tbl.string('transmission');
        tbl.string('title');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cars')
};
