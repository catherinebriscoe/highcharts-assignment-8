Highcharts.chart('container', {

    title: {
        text: 'Number of Murders in California, Illinois, and New York, 2015-2019'
    },

    subtitle: {
        text: 'Source: FBI'
    },

    yAxis: {
        title: {
            text: 'Number of Murders'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2015 to 2019'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2015
        }
    },

    series: [{
        name: 'California',
        data: [ 1861, 1930, 1830 , 1739, 1690]
    }, {
        name: 'Illinois',
        data: [754, 1054, 997, 884, 832]
    }, {
        name: 'New York',
        data: [ 613, 630, 548, 562, 558]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});








Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Weapon Use Distribution in California, Illinois, and New York, 2019'
    },
    xAxis: {
        categories: ['Firearms', 'Knives', 'Other']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Cases Using Weapon'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'California',
        data: [1142, 252, 102,]
    }, {
        name: 'Illinois',
        data: [647, 70, 44,]
    }, {
        name: 'New York',
        data: [298, 119, 89,]
    }]
});
