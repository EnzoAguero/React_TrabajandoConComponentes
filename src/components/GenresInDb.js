import React from 'react';
import Genre from '../components/Genre'

const genres = ['Accion', 'Aventura', 'Animacion', 'Drama', 'Terror', 'Comedia', 'Ciencia Ficcion', 'Documental', 'Fantasia', 'Infantiles', 'Musica']

function GenresInDb(props){
    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="row">
                {genres.map((item,i) => {
                        return <Genre genre = {item} key={item + i}/>
                    })}
                </div>
            </div>
        </div>
    </div>

    )
}
export default GenresInDb;