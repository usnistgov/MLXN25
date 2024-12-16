document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            Task: 'Central Europe',
            Start: '2025-04-15 12:00:00',
            Finish: '2025-04-15 17:00:00',
            Color: 'blue',
        },
        {
            Task: 'America/Eastern',
            Start: '2025-04-15 15:00:00',
            Finish: '2025-04-15 23:00:00',
            Color: 'orange',
        },
        {
            Task: 'America/Pacific',
            Start: '2025-04-15 18:00:00',
            Finish: '2025-04-16 03:00:00',
            Color: 'green',
        },
        {
            Task: 'Asia/Pacific',
            Start: '2025-04-16 1:00:00',
            Finish: '2025-04-16 9:00:00',
            Color: 'red',
        },
        {
            Task: 'Asia/Pacific',
            Start: '2025-04-16 8:00:00',
            Finish: '2025-04-16 9:00:00',
            Color: 'red',
        },
        {
            Task: 'Central Europe',
            Start: '2025-04-16 7:00:00',
            Finish: '2025-04-16 12:00:00',
            Color: 'blue',
        },
    ];

    const tasks = data.map(d => ({
        x: [d.Start, d.Finish],
        y: [d.Task, d.Task],
        type: 'scatter',
        line: { width: 20, color: d.Color},
        //mode: 'lines',
        marker: {},
        label: d.Task,
    }));

    const layout = {
        xaxis: {
            type: 'date',
            title: 'Time (UTC)'
        },
        margin: {
            l: 150, // Increase left margin to make room for y-axis labels
            r: 0,
            t: 35,
            b: 50
        },
        showlegend: false,
        height: 250,
        hovermode: 'closest'

    };
    const config = {
        displayModeBar: false,
        responsive: true
    };

    Plotly.newPlot('gantt-chart', tasks, layout, config);
});




