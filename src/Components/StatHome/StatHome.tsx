import React from 'react';
import ChartComponent from '../UI-Kit/ChartComponent/ChartComponent';

const StatHome = () => {
    const data = [12, 19, 3, 5 ];
    const labels = ['client très satisfait', 'client satisfait', 'client pas satisfait', 'client vraiment pas satisfait'];
    const colors = ['rgba(75, 192, 192)', 'rgba(255, 99, 132)', 'rgba(255, 159, 64)', 'rgba(255, 205, 86)', 'rgba(54, 162, 235)', 'rgba(153, 102, 255)'];

    return (
        <div className='StatHome'>
            <div className="statistiqueComponent">
                <ChartComponent data={data} labels={labels} graphique='pie' colors={colors}/>
            </div>
        </div>
    );
};

export default StatHome;