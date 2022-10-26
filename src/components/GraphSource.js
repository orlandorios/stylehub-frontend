import React from 'react'
import Highcharts from 'highcharts'
import { render } from '@testing-library/react'


class GraphSource extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        series: [{
            name: 'item count',
            data: [
                {
                    name: this.props.comp.source_percentages[0].source,
                    y: this.props.comp.source_percentages[0].item_count,
                    color: '#f6acfc'
                },
                {
                    name: this.props.comp.source_percentages[1].source,
                    y: this.props.comp.source_percentages[1].item_count,
                    color: '#a5f2b6'
                },
                {
                    name: this.props.comp.source_percentages[2].source,
                    y: this.props.comp.source_percentages[2].item_count,
                    color: '#bba5f2'
                },
                {
                    name: this.props.comp.source_percentages[3].source,
                    y: this.props.comp.source_percentages[3].item_count,
                    color: '#faf378'
                },
                {
                    name: this.props.comp.source_percentages[4].source,
                    y: this.props.comp.source_percentages[4].item_count,
                    color: '#89d3fa'
                },
                {
                    name: this.props.comp.source_percentages[5].source,
                    y: this.props.comp.source_percentages[5].item_count,
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
            renderTo: 'source-composition'
        },
        legend: {
            labelFormat: '{name}: {percentage: .1f} %'
        },
        title: {
            text: 'Source Composition',
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
        <div style={{height: '100%'}}  id="source-composition">
        </div>
    </div>
    );
}
}

export default GraphSource;