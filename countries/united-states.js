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
      [2.5, 3.1, 1.7, 2.3, 2.9, 2.3, -2.8, 5.9, 2.1, 2.5, 2.8],
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
      [5.3, 4.9, 4.4, 3.9, 3.7, 8.1, 5.4, 3.6, 3.6, 4.0],
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
      [78.9, 78.7, 78.7, 78.9, 77.0, 76.1, 77.5, 78.4],
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
        min: 74, max: 81,
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
      [73.0, 74.6, 76.2, 78.0, 80.1, 81.3, 85.5, 87.3, 89.4, 91.8],
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
        min: 60, max: 100,
      }
    }
  }
});

/* ── 5. Gini Index ── */
new Chart(document.getElementById('giniChart'), {
  type: 'bar',
  data: {
    labels: ['2014','2016','2018','2019','2021','2022'],
    datasets: [barDataset([41.1, 41.5, 41.4, 41.4, 39.7, 39.8], ACCENT_A2)]
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
        min: 35, max: 46,
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
      [18.2, 18.7, 19.5, 20.6, 21.4, 21.0, 23.3, 25.5, 27.4, 28.9],
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
      data: [-2.4, -2.3, -2.3, -2.3, -2.2, -3.3, -3.6, -3.8, -3.0, -3.3],
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
        [2.9, 2.3, -2.8, 5.9, 2.1, 2.5, 2.8, null, null, null],
        ACCENT, ACCENT_A, 'Historical'
      ),
      lineDataset(
        [null, null, null, null, null, null, 2.8, 2.7, 2.4, 2.2],
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
      lineDataset([331, 342, 353, 363, 372, 381, 388], ACCENT, ACCENT_A, 'Medium variant'),
      lineDataset([331, 340, 347, 350, 350, 345, 338], '#aaa', null, 'Low variant'),
      lineDataset([331, 344, 360, 376, 394, 412, 430], '#3a7bd5', null, 'High variant'),
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
      [104, 107, 106, 107, 108, 133, 126, 121, 122, 124],
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