// Event handlers for buttons
document.getElementById('saveDate').onclick = () => alert('This will share a .ics file with the selected date.');
document.getElementById('notifyMe').onclick = () => alert('This will link to a Google Form to sign up for notifications.');

document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            Task: 'Central Europe',
            Start: '2025-04-15 7:00:00',
            Finish: '2025-04-15 15:00:00'
        },
        {
            Task: 'America/Eastern',
            Start: '2025-04-15 13:00:00',
            Finish: '2025-04-15 21:00:00'
        },
        {
            Task: 'America/Pacific',
            Start: '2025-04-15 16:00:00',
            Finish: '2025-04-16 00:00:00'
        },
        {
            Task: 'Asia/Pacific',
            Start: '2025-04-15 23:00:00',
            Finish: '2025-04-16 8:00:00'
        },
    ];

    const tasks = data.map(d => ({
        x: [d.Start, d.Finish],
        y: [d.Task, d.Task],
        type: 'scatter',
        line: { width: 20},
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
        displayModeBar: true,
        responsive: true
    };

    Plotly.newPlot('gantt-chart', tasks, layout, config);
});




