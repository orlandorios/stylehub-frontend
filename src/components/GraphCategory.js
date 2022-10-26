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
                    color: '#f6acfc'
                },
                {
                    name: this.props.comp.category_percentages[1].category,
                    y: this.props.comp.category_percentages[1].item_count,
                    color: '#a5f2b6'
                },
                {
                    name: this.props.comp.category_percentages[2].category,
                    y: this.props.comp.category_percentages[2].item_count,
                    color: '#bba5f2'
                },
                {
                    name: this.props.comp.category_percentages[3].category,
                    y: this.props.comp.category_percentages[3].item_count,
                    c: '#faf378'
                }
            ]
        }]
    }
}

highChartsRender() {
    Highcharts.chart({
        chart: {
            type: 'pie',
            renderTo: 'category-composition',
        },
        legend: {
            labelFormat: '{name}: {percentage: .1f} %'
        },
        title: {
            text: 'Category Composition',
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
        <div style={{height: '100%'}}  id="category-composition">
        </div>
     </div>
    );
}
}

export default GraphCategory;