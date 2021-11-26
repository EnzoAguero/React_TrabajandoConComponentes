import React from 'react';
import ContenRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovie from './LastMovieInDb';


function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				<ContenRowMovies/>


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
						<LastMovie/>

					{/*<!-- Genres in DB -->*/}
					<GenresInDb
					
					/>
				</div>
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;