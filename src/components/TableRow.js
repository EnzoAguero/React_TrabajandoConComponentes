const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.title}</th>
            <td>{props.duration}</td>
            <td>{props.rating}</td>
            <td>

                <ul>
                    {/* aca para que no se vea feo todo junto podes mapear  {props.generos} y eso meterlo en una <li> */}

                </ul>


               


            </td>
            <td>{props.premios}</td>

        </tr>

    );
}

export default TableRow;