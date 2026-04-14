/* ── Chart.js global ── */
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
      [4.4,3.1,2.1,1.4,2.6,3.3,-7.2,10.8,7.3,0.6,1.7],
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
      [8.9,9.2,9.3,9.7,10.5,15.9,13.8,11.3,10.2,9.6],
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
    labels: ['2014','2016','2018','2019','2020','2021','2022','2023','2024'],
    datasets: [lineDataset(
      [74.0,75.0,75.5,75.8,72.8,72.0,73.5,74.5,77.5],
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
        min: 68, max: 78,
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
      [52.6,55.9,58.1,62.3,64.0,65.0,72.0,73.5,74.9,76.5],
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
        min: 40, max: 100,
      }
    }
  }
});

/* ── 5. Gini Index ── */
new Chart(document.getElementById('giniChart'), {
  type: 'bar',
  data: {
    labels: ['2014','2016','2018','2019','2021','2022'],
    datasets: [barDataset([53.5,51.7,50.4,51.3,52.0,54.8], ACCENT_A2)]
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
        min: 40, max: 65,
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
      [291,281,309,334,323,272,314,344,363,419],
      ACCENT, ACCENT_A
    )]
  },
  options: {
    responsive: true,
    plugins: { tooltip: { callbacks: { label: ctx => '$' + ctx.parsed.y + 'B' } } },
    scales: {
      x: { grid: gridOpts, ticks: tickOpts, border: { display: false } },
      y: {
        grid: gridOpts,
        ticks: { ...tickOpts, callback: v => '$' + v + 'B' },
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
      data: [-6.4,-4.3,-3.3,-3.9,-4.3,-3.4,-5.7,-6.2,-2.7,-2.5],
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
        [2.6,3.3,-7.2,10.8,7.3,0.6,1.7,null,null,null],
        ACCENT, ACCENT_A, 'Historical'
      ),
      lineDataset(
        [null,null,null,null,null,null,1.7,2.2,2.6,2.8],
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
      lineDataset([50.9,52.2,53.4,54.3,54.9,55.0,54.8], ACCENT, ACCENT_A, 'Medium variant'),
      lineDataset([50.9,51.5,52.0,52.0,51.5,50.8,49.8], '#aaa', null, 'Low variant'),
      lineDataset([50.9,53.0,55.0,57.0,59.0,61.0,63.0], '#3a7bd5', null, 'High variant'),
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
      [49,50,50,49,51,65,65,59,57,56],
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