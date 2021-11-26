import React from 'react';
import Metric from '../components/Metric'

let data = [
    {
        color: 'primary',
        value: 21,
        title: 'Movies in Data Base',
        icon: "fa-film"
    },
    {
        color: 'success',
        value: 79,
        title: 'Total awards',
        icon: "fa-award"
    },
    {
        color: 'warning',
        value: 49,
        title: 'Actor quantity',
        icon: "fa-user"
    }
]



const ContenRowMovies = () => {
    return (

        <div className="row">
            {data.map((item,i) => {
            return  <Metric  color={item.color} title={item.title} icon={item.icon} value={item.value} key={i + item.title}/>
            })}
       
        </div>

    );
}

export default ContenRowMovies;
