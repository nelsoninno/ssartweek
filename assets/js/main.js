/* main.js · nav toggle, scroll reveals, and the interactive venue map */

/* mobile nav */
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }
})();

/* scroll reveals */
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(function (e) { e.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (e) { io.observe(e); });
})();

/* ---------- venue map (Leaflet) ---------- */
/* Approximate coordinates for each sede. Fine-tune against Google Maps before launch. */
var SS_VENUES = [
  // group: San Salvador metropolitana (teal)
  { n: 'Palacio Nacional', area: 'San Salvador', g: 'metro', lat: 13.69889, lng: -89.19139 },
  { n: 'Teatro Nacional', area: 'San Salvador', g: 'metro', lat: 13.69861, lng: -89.19083 },
  { n: 'Centro Histórico', area: 'San Salvador', g: 'metro', lat: 13.69861, lng: -89.19167 },
  { n: 'Plaza Futura', area: 'Colonia Escalón', g: 'metro', lat: 13.70160, lng: -89.24470 },
  { n: 'Presidente Plaza', area: 'San Benito', g: 'metro', lat: 13.69350, lng: -89.22400 },
  { n: 'Museo MUNA', area: 'Av. La Revolución', g: 'metro', lat: 13.69944, lng: -89.22417 },
  { n: 'Pinacoteca · Universidad de El Salvador', area: 'Ciudad Universitaria', g: 'metro', lat: 13.71861, lng: -89.20278 },
  { n: 'Salamanca Convention Center', area: 'Santa Elena, Antiguo Cuscatlán', g: 'metro', lat: 13.67260, lng: -89.25360 },
  // group: Costa · Surf City (coral)
  { n: 'Puerto de La Libertad', area: 'La Libertad', g: 'costa', lat: 13.48830, lng: -89.32220 },
  { n: 'El Tunco', area: 'Surf City', g: 'costa', lat: 13.49360, lng: -89.38170 },
  { n: 'El Sunzal', area: 'Surf City', g: 'costa', lat: 13.49720, lng: -89.39580 },
  { n: 'El Zonte', area: 'Surf City', g: 'costa', lat: 13.50330, lng: -89.43940 },
  { n: 'Sunset Park', area: 'La Libertad', g: 'costa', lat: 13.49050, lng: -89.35500 },
  // group: Regiones (amber)
  { n: 'Suchitoto', area: 'Cuscatlán', g: 'region', lat: 13.93890, lng: -89.02810 },
  { n: 'Panchimalco', area: 'San Salvador', g: 'region', lat: 13.61220, lng: -89.17920 },
  { n: 'La Palma', area: 'Chalatenango', g: 'region', lat: 14.31530, lng: -89.17060 }
];
var SS_COLORS = { metro: '#14B8C4', costa: '#F0625B', region: '#F4A93E' };

function ssInitMap() {
  var node = document.getElementById('map');
  if (!node || typeof L === 'undefined') return;

  var map = L.map('map', { scrollWheelZoom: false, zoomControl: true });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);

  var bounds = [];
  SS_VENUES.forEach(function (v) {
    var color = SS_COLORS[v.g];
    var marker = L.circleMarker([v.lat, v.lng], {
      radius: 8, color: '#0E0E0E', weight: 1.5, fillColor: color, fillOpacity: 0.95
    }).addTo(map);
    marker.bindPopup('<b>' + v.n + '</b><br>' + v.area);
    marker.on('mouseover', function () { this.openPopup(); });
    bounds.push([v.lat, v.lng]);
  });
  map.fitBounds(bounds, { padding: [40, 40] });
}
if (document.readyState !== 'loading') ssInitMap();
else document.addEventListener('DOMContentLoaded', ssInitMap);
