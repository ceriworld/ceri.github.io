// analytics

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W7P72343');

// zulu
function display_c(showDate = false){
    var refresh = 1000; // ms
    mytime = setTimeout(function () { display_ct(showDate); }, refresh);
}

function display_ct(showDate = false) {
    var x = new Date();

    var timePart = x.toISOString().slice(11, 19) + ' z';

    var output = timePart;

    if (showDate) {
        var day   = String(x.getUTCDate()).padStart(2, '0');
        var month = x.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' });
        var year  = x.getUTCFullYear();
        var datePart = day + ' '+ month + ' '+ year; // 10Jan2026
        output = timePart + ' ' + datePart;
    }

    document.getElementById('ct').innerHTML = output;
    display_c(showDate);
}

// Initialize on page load
window.onload = display_c;

// hamburger

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('header-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

  // Modal elements
  const citeModal = document.getElementById('citeModal');
  const citeBtn = document.getElementById('citeBtn');
  const citeClose = document.querySelector('.cite-close');

  const infoModal = document.getElementById('infoModal');
  const infoBtn = document.getElementById('infoBtn');
  const infoClose = document.querySelector('.info-close');

  // Cite Modal logic
  citeBtn.onclick = () => citeModal.style.display = 'block';
  citeClose.onclick = () => citeModal.style.display = 'none';

  // Info Modal logic
  infoBtn.onclick = () => infoModal.style.display = 'block';
  infoClose.onclick = () => infoModal.style.display = 'none';

  // Close any modal when clicking outside
  window.onclick = function(event) {
    if (event.target === citeModal) citeModal.style.display = 'none';
    if (event.target === infoModal) infoModal.style.display = 'none';
  };