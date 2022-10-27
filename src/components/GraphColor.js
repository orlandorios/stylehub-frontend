import React from 'react'
import Highcharts from 'highcharts'


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
        legend: {
            labelFormat: '{name}: {percentage: .1f} %'
        },
        title: {
            text: 'Color Composition',
            style: {
                fontSize: "3vh"
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                    enabled: false
                    },
                    innerSize: '50%',
                    showInLegend: true
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
    <div style={{height: '100vw'}}>
        <div style={{height: '100%'}}  id="color-composition">
        </div>
     </div>
    );
}
}

export default GraphColor;