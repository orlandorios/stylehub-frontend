import React from 'react'
import Highcharts from 'highcharts'
import { render } from '@testing-library/react'


class GraphCategory extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        series: [{
            name: 'item count',
            data: [
                {
                    name: this.props.comp.category_percentages[0].category,
                    y: this.props.comp.category_percentages[0].item_count,
                    color: '#51dbed'
                },
                {
                    name: this.props.comp.category_percentages[1].category,
                    y: this.props.comp.category_percentages[1].item_count,
                    color: '#ed51ed'
                },
                {
                    name: this.props.comp.category_percentages[2].category,
                    y: this.props.comp.category_percentages[2].item_count,
                    color: '#f3f584'
                },
                {
                    name: this.props.comp.category_percentages[3].category,
                    y: this.props.comp.category_percentages[3].item_count,
                    color: '#f58495'
                }
            ]
        }]
    }
}

highChartsRender() {
    Highcharts.chart({
        chart: {
            type: 'pie',
            renderTo: 'category-composition'
        },
        title: {
            verticalAlign: 'middle',
            floating: true,
            text: 'Category Composition',
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
     <div id="category-composition">
     </div>
    );
}
}

export default GraphCategory;