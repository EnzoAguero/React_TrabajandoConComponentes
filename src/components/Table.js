import TableRow from './TableRow'

let data = [
    {
        title : 'Billy Elliot',
        duration : 123,
        rating : 5,
        generos :['Drama','Comedia'],
        premios : 2,
    },
    {
        title : 'Alicia en el pais de las maravillas',
        duration : 142,
        rating : 4.8,
        generos :['Terror','Comedia'],
        premios : 3,
    },
    {
        title : 'Cars',
        duration : 156,
        rating : 10,
        generos :['Drama','Comedia'],
        premios : 20,
    }
]


const Table = (props) => {
    return ( 
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Titulo</th>
      <th scope="col">Duracion</th>
      <th scope="col">Rating</th>
      <th scope="col">Generos</th>
      <th scope="col">Premios</th>
    </tr>
  </thead>
  <tbody>
      {data.map((item,i) => {
          return  <TableRow key={i} title={item.title} duration={item.duration} rating={item.rating} generos={item.generos} premios={item.premios}/>
      })}




  </tbody>
</table>


     );
}
 
export default Table;