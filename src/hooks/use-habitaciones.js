import {graphql, useStaticQuery} from 'gatsby';

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
    {
        allDatoCmsHabitacion {
          nodes {
            titulo
            contenido
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
            slog
          }
        }
      }
    
    `);
    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slog: habitacion.slog,
    }));
}


 
export default useHabitaciones;