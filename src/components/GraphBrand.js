import React from 'react'
import Highcharts from 'highcharts'
import { render } from '@testing-library/react'


class GraphBrand extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        series: [{
            name: 'item count',
            data: [
                {
                    name: this.props.comp.brand_percentages[0].brand,
                    y: this.props.comp.brand_percentages[0].item_count,
                    color: '#f6acfc'
                },
                {
                    name: this.props.comp.brand_percentages[1].brand,
                    y: this.props.comp.brand_percentages[1].item_count,
                    color: '#a5f2b6'
                },
                {
                    name: this.props.comp.brand_percentages[2].brand,
                    y: this.props.comp.brand_percentages[2].item_count,
                    color: '#bba5f2'
                },
                {
                    name: this.props.comp.brand_percentages[3].brand,
                    y: this.props.comp.brand_percentages[3].item_count,
                    color: '#faf378'
                },
                {
                    name: this.props.comp.brand_percentages[4].brand,
                    y: this.props.comp.brand_percentages[4].item_count,
                    color: '#89d3fa'
                },
                {
                    name: this.props.comp.brand_percentages[5].brand,
                    y: this.props.comp.brand_percentages[5].item_count,
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
            renderTo: 'brand-composition'
        },
        title: {
            verticalAlign: 'middle',
            floating: true,
            text: 'Brand Composition',
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
     <div id="brand-composition">
     </div>
    );
}
}

export default GraphBrand;