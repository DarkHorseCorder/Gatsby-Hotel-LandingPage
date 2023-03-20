exports.createPages = async ({actions, graphql, reporter}) => {

    const resultado = await graphql(`
    query{
        allDatoCmsHabitacion{
            nodes{
                slog
            }
        }
    }
    `);

    //console.log(resultado.data.allDatoCmsHabitacion.nodes);
    if(resultado.errors){
        reporter.panic('No hubo resultados', errors);
    }

    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slog,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slog: habitacion.slog
            }
        })
    })
}