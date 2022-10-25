import React from 'react'
import Highcharts from 'highcharts'
import { render } from '@testing-library/react'


class GraphColor extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        series: [{
            name: 'item count',
            data: [
                {
                    name: this.props.comp.color_percentages[0].color,
                    y: this.props.comp.color_percentages[0].item_count,
                    color: '#f6acfc'
                },
                {
                    name: this.props.comp.color_percentages[1].color,
                    y: this.props.comp.color_percentages[1].item_count,
                    color: '#a5f2b6'
                },
                {
                    name: this.props.comp.color_percentages[2].color,
                    y: this.props.comp.color_percentages[2].item_count,
                    color: '#bba5f2'
                },
                {
                    name: this.props.comp.color_percentages[3].color,
                    y: this.props.comp.color_percentages[3].item_count,
                    color: '#faf378'
                },
                {
                    name: this.props.comp.color_percentages[4].color,
                    y: this.props.comp.color_percentages[4].item_count,
                    color: '#89d3fa'
                },
                {
                    name: this.props.comp.color_percentages[5].color,
                    y: this.props.comp.color_percentages[5].item_count,
                    color: '#787e82'
                }
            ]
        }]
    }
}

highChartsRender() {
    Highcharts.chart({
        chart: {
            type: 'pie',
            renderTo: 'color-composition'
        },
        title: {
            verticalAlign: 'middle',
            floating: true,
            text: 'Color Composition',
            style: {
                forntSize: "10px"
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        format: '{point.name}: {point.percentage: .1f} %'
                    },
                    innerSize: '70%'
                }
            },
            series: this.state.series
    })
}

componentDidMount() {
    this.highChartsRender();
}

render() {
    return (
     <div id="color-composition">
     </div>
    );
}
}

export default GraphColor;