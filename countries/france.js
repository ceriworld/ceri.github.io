/* ── Chart.js global defaults matching CERI aesthetic ── */
Chart.defaults.font.family = 'Montserrat, sans-serif';
Chart.defaults.font.size   = 11;
Chart.defaults.color       = '#888';
Chart.defaults.plugins.legend.display = false;

const ACCENT  = 'rgb(0, 183, 255)';
const ACCENT_A = 'rgba(0, 183, 255, 0.12)';
const ACCENT_A2 = 'rgba(0, 183, 255, 0.55)';
const DARK    = '#111';
const NEG     = 'rgba(220, 60, 60, 0.75)';

const gridOpts = {
  color: 'rgba(0,0,0,0.05)',
  drawBorder: false,
};

const tickOpts = { color: '#aaa' };

function lineDataset(data, color, fill, label) {
  return {
    label: label || '',
    data,
    borderColor: color,
    backgroundColor: fill || 'transparent',
    borderWidth: 2,
    pointRadius: 3,
    pointHoverRadius: 5,
    pointBackgroundColor: color,
    tension: 0.35,
    fill: !!fill,
  };
}

function barDataset(data, color, label) {
  return {
    label: label || '',
    data,
    backgroundColor: color,
    borderRadius: 2,
    borderSkipped: false,
  };
}

/* ── 1. GDP Annual % Growth ── */
new Chart(document.getElementById('gdpGrowthChart'), {
  type: 'line',
  data: {
    labels: ['2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    datasets: [lineDataset(
      [1.0,1.1,1.1,2.4,1.8,1.8,-7.4,6.4,2.6,0.9,1.1],
      ACCENT, ACCENT_A
    )]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { mode: 'index', intersect: false } },
    scales: {
      x: { grid: gridOpts, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => v + '%' },
        border: { display: false },
      }
    }
  }
});

/* ── 2. Unemployment Rate ── */
new Chart(document.getElementById('unemploymentChart'), {
  type: 'bar',
  data: {
    labels: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    datasets: [barDataset(
      [10.4,10.1,9.4,9.0,8.4,8.0,7.9,7.3,7.4,7.4],
      ACCENT_A2
    )]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { callbacks: { label: ctx => ctx.parsed.y + '%' } } },
    scales: {
      x: { grid: { display: false }, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => v + '%' },
        border: { display: false },
      }
    }
  }
});

/* ── 3. Life Expectancy ── */
new Chart(document.getElementById('lifeExpChart'), {
  type: 'line',
  data: {
    labels: ['2014','2016','2018','2019','2020','2021','2022','2023'],
    datasets: [lineDataset(
      [82.4,82.7,82.9,82.9,82.3,82.0,82.5,82.9],
      '#3a7bd5', 'rgba(58,123,213,0.08)'
    )]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { callbacks: { label: ctx => ctx.parsed.y + ' yrs' } } },
    scales: {
      x: { grid: gridOpts, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => v + ' yrs' },
        border: { display: false },
        min: 79, max: 85,
      }
    }
  }
});

/* ── 4. Internet Users ── */
new Chart(document.getElementById('internetChart'), {
  type: 'line',
  data: {
    labels: ['2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],
    datasets: [lineDataset(
      [83.7,84.7,85.6,87.0,88.6,90.5,91.9,93.4,92.0,92.6],
      ACCENT, ACCENT_A
    )]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { callbacks: { label: ctx => ctx.parsed.y + '%' } } },
    scales: {
      x: { grid: gridOpts, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => v + '%' },
        border: { display: false },
        min: 70, max: 100,
      }
    }
  }
});

/* ── 5. Gini Index ── */
new Chart(document.getElementById('giniChart'), {
  type: 'bar',
  data: {
    labels: ['2014','2016','2018','2019','2021','2022'],
    datasets: [barDataset([29.2,29.3,32.4,29.2,28.5,29.0], ACCENT_A2)]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { callbacks: { label: ctx => 'Gini: ' + ctx.parsed.y } } },
    scales: {
      x: { grid: { display: false }, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: tickOpts,
        border: { display: false },
        min: 22, max: 38,
      }
    }
  }
});

/* ── 6. GDP Current Prices ── */
new Chart(document.getElementById('gdpCurrentChart'), {
  type: 'line',
  data: {
    labels: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    datasets: [lineDataset(
      [2.44,2.47,2.59,2.79,2.72,2.63,2.96,2.78,3.03,3.13],
      ACCENT, ACCENT_A
    )]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { callbacks: { label: ctx => '$' + ctx.parsed.y + 'T' } } },
    scales: {
      x: { grid: gridOpts, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => '$' + v + 'T' },
        border: { display: false },
      }
    }
  }
});

/* ── 7. Current Account Balance ── */
new Chart(document.getElementById('currentAccountChart'), {
  type: 'bar',
  data: {
    labels: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    datasets: [{
      label: '',
      data: [-0.4,-0.6,-0.9,-0.8,-0.5,-1.9,0.4,-2.1,-0.7,-0.5],
      backgroundColor: data => data.raw < 0 ? NEG : ACCENT_A2,
      borderRadius: 2,
      borderSkipped: false,
    }]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { callbacks: { label: ctx => ctx.parsed.y + '% of GDP' } } },
    scales: {
      x: { grid: { display: false }, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => v + '%' },
        border: { display: false },
      }
    }
  }
});

/* ── 8. Real GDP Forecast ── */
new Chart(document.getElementById('realGdpForecastChart'), {
  type: 'line',
  data: {
    labels: ['2018','2019','2020','2021','2022','2023','2024','2025f','2026f','2027f'],
    datasets: [
      lineDataset(
        [1.8,1.8,-7.4,6.4,2.6,0.9,1.1,null,null,null],
        ACCENT, ACCENT_A, 'Historical'
      ),
      lineDataset(
        [null,null,null,null,null,null,1.1,0.7,1.0,1.2],
        '#3a7bd5', 'rgba(58,123,213,0.08)', 'Forecast'
      )
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: { color: '#888', font: { size: 11 }, boxWidth: 12 }
      },
      tooltip: { mode: 'index', intersect: false, callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y + '%' } },
      annotation: {}
    },
    scales: {
      x: { grid: gridOpts, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => v + '%' },
        border: { display: false },
      }
    }
  }
});

/* ── 9. Population Projections ── */
new Chart(document.getElementById('populationChart'), {
  type: 'line',
  data: {
    labels: ['2020','2025','2030','2035','2040','2045','2050'],
    datasets: [
      lineDataset([67.5,68.0,68.5,68.9,69.4,69.8,70.2], ACCENT, ACCENT_A, 'Medium variant'),
      lineDataset([67.5,67.5,67.3,66.8,66.0,65.0,63.8], '#aaa', null, 'Low variant'),
      lineDataset([67.5,68.6,69.8,71.2,72.5,73.8,75.0], '#3a7bd5', null, 'High variant'),
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: { color: '#888', font: { size: 11 }, boxWidth: 12 }
      },
      tooltip: { mode: 'index', intersect: false, callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y + 'M' } }
    },
    scales: {
      x: { grid: gridOpts, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => v + 'M' },
        border: { display: false },
      }
    }
  }
});

/* ── 10. General Government Debt ── */
new Chart(document.getElementById('govDebtChart'), {
  type: 'line',
  data: {
    labels: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    datasets: [lineDataset(
      [95.6,98.0,98.4,98.1,97.4,115.0,112.9,111.6,109.9,112.0],
      '#d35a3a', 'rgba(211,90,58,0.08)'
    )]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { callbacks: { label: ctx => ctx.parsed.y + '% of GDP' } } },
    scales: {
      x: { grid: gridOpts, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => v + '%' },
        border: { display: false },
      }
    }
  }
});