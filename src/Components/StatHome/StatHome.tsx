import React from 'react';
import ChartComponent from '../UI-Kit/ChartComponent/ChartComponent';

const StatHome = () => {
    const data = [12, 19, 3, 5 ];
    const labels = ['client très satisfait', 'client satisfait', 'client pas satisfait', 'client vraiment pas satisfait'];
    const colors = ['#483CE8', '#392cf3', '#857df8 ', '#645beb'];


    return (
        <div className='StatHome'>
            <div className="upChartHome">
                <div className="statistiqueComponentup">
                    <ChartComponent
                        data={data}
                        labels={labels}
                        graphique="pie"
                        colors={colors}
                        borderColor="white"
                    />
                </div>
                <div className="statistiqueComponentup">
                    <ChartComponent
                        data={data}
                        labels={labels}
                        graphique="pie"
                        colors={colors}
                        borderColor="white"
                    />
                </div>
                <div className="statistiqueComponentup">
                    <ChartComponent
                        data={data}
                        labels={labels}
                        graphique="pie"
                        colors={colors}
                        borderColor="white"
                    />
                </div>
            </div>
            <div className="downChartHome">
                <div className="statistiqueComponentDown">
                    <ChartComponent
                        data={data}
                        labels={labels}
                        graphique="bar"
                        colors={colors}
                        borderColor="white"
                    />
                </div>
                <div className="statistiqueComponentDown">
                    <ChartComponent
                        data={data}
                        labels={labels}
                        graphique="bar"
                        colors={colors}
                        borderColor="white"
                    />
                </div>
            </div>
        </div>
    );
};

export default StatHome;