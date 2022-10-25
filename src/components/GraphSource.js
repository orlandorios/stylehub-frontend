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
                    source: '#f6acfc'
                },
                {
                    name: this.props.comp.source_percentages[1].source,
                    y: this.props.comp.source_percentages[1].item_count,
                    source: '#a5f2b6'
                },
                {
                    name: this.props.comp.source_percentages[2].source,
                    y: this.props.comp.source_percentages[2].item_count,
                    source: '#bba5f2'
                },
                {
                    name: this.props.comp.source_percentages[3].source,
                    y: this.props.comp.source_percentages[3].item_count,
                    source: '#faf378'
                },
                {
                    name: this.props.comp.source_percentages[4].source,
                    y: this.props.comp.source_percentages[4].item_count,
                    source: '#89d3fa'
                },
                {
                    name: this.props.comp.source_percentages[5].source,
                    y: this.props.comp.source_percentages[5].item_count,
                    source: '#787e82'
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
        title: {
            verticalAlign: 'middle',
            floating: true,
            text: 'Source Composition',
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
     <div id="source-composition">
     </div>
    );
}
}

export default GraphSource;