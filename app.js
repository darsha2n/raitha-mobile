'use strict';

const TEXT = {
  en: {
    brand:'Raitha', subtitle:'Farm & nursery calculator', heading:'Plan your next harvest.',
    intro:'Choose a calculator. Enter your own farm figures.', estimate:'YOUR ESTIMATE',
    install:'Add to phone', crop:'Crop / plant name', currency:'Currency', calculate:'Calculate',
    clear:'Clear', results:'Your results', save:'Keep a record on this phone',
    assumption:'Planning estimates only. Actual yield, losses and prices may differ.',
    history:'Records on this phone', export:'Download CSV', delete:'Delete records',
    localNote:'Records are stored only in this browser. Clearing browser data deletes them. Google Sheets is not connected yet.',
    installHelp:'On Android, open this app in Chrome. Tap the three-dot menu, then “Install app” or “Add to Home screen”. Open the app online once before using it offline.',
    close:'Close', online:'Online · calculations run on your phone', offline:'Offline · calculators still work',
    empty:'No saved records yet.', saved:'Saved on this phone. Not sent to Google Sheets.',
    duplicate:'This calculation is already saved.', needCrop:'Enter a crop or plant name before saving.',
    storageError:'Your browser could not save this record. Download your records and check browser storage.',
    deleteConfirm:'Delete all records stored on this phone? Download a CSV first if you need a copy.',
    invalid:'Enter a valid number for', noPlants:'No saleable plants remain. Reduce losses or increase the number of plants.',
    huge:'These values are too large. Enter smaller numbers.', noBreakEven:'Not achievable at a zero selling price',
    profit:'Crop profit', seed:'Seed requirements', nursery:'Nursery pricing', market:'Market comparison',
    profitNote:'Use harvest and costs for the same crop cycle. Assumes all saleable harvest sells at the entered price.',
    seedNote:'A spacing estimate for a rectangular plot. Exclude paths from area. Germination is an estimate, not a guarantee.',
    nurseryNote:'Markup is added to cost, not profit margin. Assumes every saleable plant sells.',
    marketNote:'Compares proceeds after commission and transport. Production costs are not deducted.',
    harvest:'Saleable harvest (kg)', price:'Selling price per kg', seeds:'Seed cost',
    fertiliser:'Fertiliser cost', labour:'Labour cost', water:'Irrigation cost', transport:'Transport cost', other:'Other costs',
    area:'Plantable area (m²)', row:'Row spacing (cm)', plant:'Plant spacing (cm)',
    per_position:'Target seedlings per position', germination:'Expected germination (%)',
    plants:'Plants started', loss:'Expected plant losses (%)', materials:'Pots, soil, seeds & materials cost', markup:'Markup on cost (%)',
    price_a:'Market A price per kg', fee_a:'Market A commission (%)', transport_a:'Market A transport cost',
    price_b:'Market B price per kg', fee_b:'Market B commission (%)', transport_b:'Market B transport cost',
    revenue:'Expected revenue', cost:'Total expenses', net:'Profit / loss', breakPrice:'Break-even price per kg', breakYield:'Break-even harvest (kg)',
    positions:'Approximate planting positions', seedCount:'Estimated seeds to buy',
    saleable:'Estimated saleable plants', unitCost:'Cost per saleable plant', sellPrice:'Selling price with markup', nurseryProfit:'Profit if all sell',
    netA:'Market A net proceeds', netB:'Market B net proceeds', difference:'Difference in proceeds', better:'Better market', equal:'Equal',
    savedAt:'Saved', count:'records', zeroHelp:'Enter 0 for costs that do not apply.'
  },
  kn: {
    brand:'ರೈತ', subtitle:'ಕೃಷಿ ಮತ್ತು ನರ್ಸರಿ ಲೆಕ್ಕಾಚಾರ', heading:'ಮುಂದಿನ ಬೆಳೆಗೆ ಯೋಜನೆ ಮಾಡಿ.',
    intro:'ಲೆಕ್ಕಾಚಾರ ಆಯ್ಕೆ ಮಾಡಿ. ನಿಮ್ಮ ಕೃಷಿಯ ಅಂಕಿಗಳನ್ನು ನಮೂದಿಸಿ.', estimate:'ನಿಮ್ಮ ಅಂದಾಜು',
    install:'ಫೋನ್‌ಗೆ ಸೇರಿಸಿ', crop:'ಬೆಳೆ / ಸಸ್ಯದ ಹೆಸರು', currency:'ಕರೆನ್ಸಿ', calculate:'ಲೆಕ್ಕ ಹಾಕಿ',
    clear:'ಅಳಿಸಿ', results:'ನಿಮ್ಮ ಫಲಿತಾಂಶಗಳು', save:'ಈ ಫೋನ್‌ನಲ್ಲಿ ದಾಖಲಿಸಿ',
    assumption:'ಇವು ಯೋಜನೆಗಾಗಿ ಅಂದಾಜುಗಳು ಮಾತ್ರ. ನಿಜವಾದ ಇಳುವರಿ, ನಷ್ಟ ಮತ್ತು ಬೆಲೆ ಬದಲಾಗಬಹುದು.',
    history:'ಈ ಫೋನ್‌ನಲ್ಲಿರುವ ದಾಖಲೆಗಳು', export:'CSV ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ', delete:'ದಾಖಲೆಗಳನ್ನು ಅಳಿಸಿ',
    localNote:'ದಾಖಲೆಗಳು ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಇರುತ್ತವೆ. ಬ್ರೌಸರ್ ಡೇಟಾ ಅಳಿಸಿದರೆ ದಾಖಲೆಗಳು ಕಳೆದುಹೋಗುತ್ತವೆ. Google Sheets ಇನ್ನೂ ಸಂಪರ್ಕಗೊಂಡಿಲ್ಲ.',
    installHelp:'Android ಫೋನ್‌ನಲ್ಲಿ Chrome ಮೂಲಕ ಈ ಆ್ಯಪ್ ತೆರೆಯಿರಿ. ಮೂರು ಚುಕ್ಕೆಗಳ ಮೆನುವಿನಲ್ಲಿ “Install app” ಅಥವಾ “Add to Home screen” ಆಯ್ಕೆ ಮಾಡಿ. ಆಫ್‌ಲೈನ್ ಬಳಕೆಗೆ ಮೊದಲು ಒಮ್ಮೆ ಇಂಟರ್ನೆಟ್‌ನೊಂದಿಗೆ ತೆರೆಯಿರಿ.',
    close:'ಮುಚ್ಚಿ', online:'ಆನ್‌ಲೈನ್ · ಲೆಕ್ಕಾಚಾರ ಫೋನ್‌ನಲ್ಲೇ ನಡೆಯುತ್ತದೆ', offline:'ಆಫ್‌ಲೈನ್ · ಲೆಕ್ಕಾಚಾರ ಬಳಸಬಹುದು',
    empty:'ಇನ್ನೂ ಯಾವುದೇ ದಾಖಲೆಗಳಿಲ್ಲ.', saved:'ಈ ಫೋನ್‌ನಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ. Google Sheets ಗೆ ಕಳುಹಿಸಿಲ್ಲ.',
    duplicate:'ಈ ಲೆಕ್ಕಾಚಾರ ಈಗಾಗಲೇ ಉಳಿಸಲಾಗಿದೆ.', needCrop:'ಉಳಿಸುವ ಮೊದಲು ಬೆಳೆ ಅಥವಾ ಸಸ್ಯದ ಹೆಸರು ನಮೂದಿಸಿ.',
    storageError:'ಬ್ರೌಸರ್ ಈ ದಾಖಲೆಯನ್ನು ಉಳಿಸಲಾಗಲಿಲ್ಲ. ದಾಖಲೆಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಬ್ರೌಸರ್ ಸಂಗ್ರಹಣೆ ಪರಿಶೀಲಿಸಿ.',
    deleteConfirm:'ಈ ಫೋನ್‌ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದಾಖಲೆಗಳನ್ನು ಅಳಿಸಬೇಕೇ? ಅಗತ್ಯವಿದ್ದರೆ ಮೊದಲು CSV ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.',
    invalid:'ಸರಿಯಾದ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ:', noPlants:'ಮಾರಾಟಕ್ಕೆ ಸಸ್ಯಗಳು ಉಳಿಯುವುದಿಲ್ಲ. ನಷ್ಟ ಕಡಿಮೆ ಮಾಡಿ ಅಥವಾ ಸಸ್ಯಗಳ ಸಂಖ್ಯೆ ಹೆಚ್ಚಿಸಿ.',
    huge:'ಅಂಕಿಗಳು ತುಂಬಾ ದೊಡ್ಡದಾಗಿವೆ. ಕಡಿಮೆ ಅಂಕಿಗಳನ್ನು ನಮೂದಿಸಿ.', noBreakEven:'ಮಾರಾಟ ಬೆಲೆ ಶೂನ್ಯವಾದಾಗ ಸಾಧ್ಯವಿಲ್ಲ',
    profit:'ಬೆಳೆಯ ಲಾಭ', seed:'ಬೀಜದ ಅಗತ್ಯ', nursery:'ನರ್ಸರಿ ಬೆಲೆ', market:'ಮಾರುಕಟ್ಟೆ ಹೋಲಿಕೆ',
    profitNote:'ಒಂದೇ ಬೆಳೆ ಅವಧಿಯ ಇಳುವರಿ ಮತ್ತು ವೆಚ್ಚ ಬಳಸಿ. ಮಾರಾಟಯೋಗ್ಯ ಇಳುವರಿಯೆಲ್ಲ ನಮೂದಿಸಿದ ಬೆಲೆಗೆ ಮಾರಾಟವಾಗುತ್ತದೆ ಎಂದು ಊಹಿಸಲಾಗಿದೆ.',
    seedNote:'ಆಯತಾಕಾರದ ಜಾಗಕ್ಕೆ ಅಂತರದ ಆಧಾರದ ಅಂದಾಜು. ದಾರಿಗಳ ವಿಸ್ತೀರ್ಣ ಸೇರಿಸಬೇಡಿ. ಮೊಳಕೆಯ ಪ್ರಮಾಣ ಖಚಿತವಲ್ಲ.',
    nurseryNote:'ವೆಚ್ಚದ ಮೇಲೆ ಹೆಚ್ಚುವರಿ ಶೇಕಡಾವಾರು ಸೇರಿಸಲಾಗುತ್ತದೆ. ಇದು ಲಾಭದ ಮಾರ್ಜಿನ್ ಅಲ್ಲ. ಎಲ್ಲಾ ಮಾರಾಟಯೋಗ್ಯ ಸಸ್ಯಗಳು ಮಾರಾಟವಾಗುತ್ತವೆ ಎಂದು ಊಹಿಸಲಾಗಿದೆ.',
    marketNote:'ಕಮಿಷನ್ ಮತ್ತು ಸಾಗಣೆ ವೆಚ್ಚದ ನಂತರದ ಆದಾಯದ ಹೋಲಿಕೆ. ಉತ್ಪಾದನಾ ವೆಚ್ಚ ಕಡಿತಗೊಳಿಸಿಲ್ಲ.',
    harvest:'ಮಾರಾಟಯೋಗ್ಯ ಇಳುವರಿ (ಕೆಜಿ)', price:'ಪ್ರತಿ ಕೆಜಿ ಮಾರಾಟ ಬೆಲೆ', seeds:'ಬೀಜದ ವೆಚ್ಚ',
    fertiliser:'ಗೊಬ್ಬರದ ವೆಚ್ಚ', labour:'ಕಾರ್ಮಿಕ ವೆಚ್ಚ', water:'ನೀರಾವರಿ ವೆಚ್ಚ', transport:'ಸಾಗಣೆ ವೆಚ್ಚ', other:'ಇತರೆ ವೆಚ್ಚ',
    area:'ನೆಡುವ ಜಾಗದ ವಿಸ್ತೀರ್ಣ (ಮೀ²)', row:'ಸಾಲುಗಳ ಅಂತರ (ಸೆಂಮೀ)', plant:'ಸಸ್ಯಗಳ ಅಂತರ (ಸೆಂಮೀ)',
    per_position:'ಪ್ರತಿ ಜಾಗಕ್ಕೆ ಬೇಕಾದ ಸಸಿಗಳು', germination:'ಅಂದಾಜು ಮೊಳಕೆಯ ಪ್ರಮಾಣ (%)',
    plants:'ಆರಂಭಿಸಿದ ಸಸ್ಯಗಳ ಸಂಖ್ಯೆ', loss:'ಅಂದಾಜು ಸಸ್ಯ ನಷ್ಟ (%)', materials:'ಕುಂಡ, ಮಣ್ಣು, ಬೀಜ ಮತ್ತು ಸಾಮಗ್ರಿ ವೆಚ್ಚ', markup:'ವೆಚ್ಚದ ಮೇಲೆ ಹೆಚ್ಚುವರಿ (%)',
    price_a:'ಮಾರುಕಟ್ಟೆ A: ಪ್ರತಿ ಕೆಜಿ ಬೆಲೆ', fee_a:'ಮಾರುಕಟ್ಟೆ A: ಕಮಿಷನ್ (%)', transport_a:'ಮಾರುಕಟ್ಟೆ A: ಸಾಗಣೆ ವೆಚ್ಚ',
    price_b:'ಮಾರುಕಟ್ಟೆ B: ಪ್ರತಿ ಕೆಜಿ ಬೆಲೆ', fee_b:'ಮಾರುಕಟ್ಟೆ B: ಕಮಿಷನ್ (%)', transport_b:'ಮಾರುಕಟ್ಟೆ B: ಸಾಗಣೆ ವೆಚ್ಚ',
    revenue:'ಅಂದಾಜು ಆದಾಯ', cost:'ಒಟ್ಟು ವೆಚ್ಚ', net:'ಲಾಭ / ನಷ್ಟ', breakPrice:'ವೆಚ್ಚ ಸರಿದೂಗಿಸಲು ಪ್ರತಿ ಕೆಜಿ ಬೆಲೆ', breakYield:'ವೆಚ್ಚ ಸರಿದೂಗಿಸಲು ಇಳುವರಿ (ಕೆಜಿ)',
    positions:'ಅಂದಾಜು ನೆಡುವ ಜಾಗಗಳ ಸಂಖ್ಯೆ', seedCount:'ಖರೀದಿಸಬೇಕಾದ ಅಂದಾಜು ಬೀಜಗಳು',
    saleable:'ಅಂದಾಜು ಮಾರಾಟಯೋಗ್ಯ ಸಸ್ಯಗಳು', unitCost:'ಪ್ರತಿ ಮಾರಾಟಯೋಗ್ಯ ಸಸ್ಯದ ವೆಚ್ಚ', sellPrice:'ಹೆಚ್ಚುವರಿ ಸೇರಿಸಿದ ಮಾರಾಟ ಬೆಲೆ', nurseryProfit:'ಎಲ್ಲಾ ಮಾರಾಟವಾದರೆ ಲಾಭ',
    netA:'ಮಾರುಕಟ್ಟೆ A: ನಿವ್ವಳ ಆದಾಯ', netB:'ಮಾರುಕಟ್ಟೆ B: ನಿವ್ವಳ ಆದಾಯ', difference:'ಆದಾಯದ ವ್ಯತ್ಯಾಸ', better:'ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ', equal:'ಸಮಾನ',
    savedAt:'ಉಳಿಸಿದ ದಿನಾಂಕ', count:'ದಾಖಲೆಗಳು', zeroHelp:'ಅನ್ವಯಿಸದ ವೆಚ್ಚಗಳಿಗೆ 0 ನಮೂದಿಸಿ.'
  }
};

// [key, minimum, maximum (null = none), whole number only]
const FORMS = {
  profit:[['harvest',0.01,null,false],['price',0,null,false],['seeds',0,null,false],['fertiliser',0,null,false],['labour',0,null,false],['water',0,null,false],['transport',0,null,false],['other',0,null,false]],
  seed:[['area',0.01,null,false],['row',0.01,null,false],['plant',0.01,null,false],['per_position',1,null,true],['germination',0.01,100,false]],
  nursery:[['plants',1,null,true],['loss',0,100,false],['materials',0,null,false],['labour',0,null,false],['other',0,null,false],['markup',0,null,false]],
  market:[['harvest',0.01,null,false],['price_a',0,null,false],['fee_a',0,100,false],['transport_a',0,null,false],['price_b',0,null,false],['fee_b',0,100,false],['transport_b',0,null,false]]
};
const MONEY = new Set(['revenue','cost','net','breakPrice','unitCost','sellPrice','nurseryProfit','netA','netB','difference']);
const COUNTS = new Set(['positions','seedCount','saleable']);

function validate(kind, input) {
  if (!Object.hasOwn(FORMS, kind)) throw new Error('unknown');
  const values = {};
  for (const [key,min,max,integer] of FORMS[kind]) {
    const raw = input[key];
    const number = Number(raw);
    if (raw === undefined || raw === null || String(raw).trim() === '' ||
        !Number.isFinite(number) || number < min || (max !== null && number > max) ||
        (integer && !Number.isInteger(number))) throw new Error(key);
    values[key] = number;
  }
  return values;
}

function calculate(kind, input) {
  const v = validate(kind, input);
  let r;
  if (kind === 'profit') {
    const cost = v.seeds + v.fertiliser + v.labour + v.water + v.transport + v.other;
    const revenue = v.harvest * v.price;
    r = {revenue, cost, net:revenue-cost, breakPrice:cost/v.harvest,
      breakYield:v.price ? cost/v.price : cost === 0 ? 0 : 'noBreakEven'};
  } else if (kind === 'seed') {
    const positions = v.area / ((v.row / 100) * (v.plant / 100));
    r = {positions:Math.floor(positions), seedCount:Math.ceil(positions*v.per_position*100/v.germination)};
  } else if (kind === 'nursery') {
    const cost = v.materials + v.labour + v.other;
    const saleable = Math.floor(v.plants * (100-v.loss)/100);
    if (saleable < 1) throw new Error('noPlants');
    const unitCost = cost / saleable;
    const sellPrice = unitCost * (1+v.markup/100);
    r = {saleable, unitCost, sellPrice, nurseryProfit:sellPrice*saleable-cost};
  } else {
    const netA = v.harvest*v.price_a*(100-v.fee_a)/100-v.transport_a;
    const netB = v.harvest*v.price_b*(100-v.fee_b)/100-v.transport_b;
    r = {netA,netB,difference:Math.abs(netA-netB),better:netA>netB?'A':netB>netA?'B':'equal'};
  }
  if (Object.values(r).some(n => typeof n === 'number' && (!Number.isFinite(n) || Math.abs(n)>Number.MAX_SAFE_INTEGER))) throw new Error('huge');
  return {values:v, results:r};
}

function csvCell(value) {
  let text = String(value ?? '');
  // Prevent crop names from being interpreted as spreadsheet formulas.
  if (/^\s*[=+@-]/.test(text) && typeof value !== 'number') text = "'" + text;
  return '"' + text.replaceAll('"','""') + '"';
}

if (typeof module !== 'undefined') module.exports = {TEXT,FORMS,calculate,validate,csvCell};
if (typeof document !== 'undefined') startApp();

function startApp() {
  const $ = id => document.getElementById(id);
  const STORAGE = 'raitha-records-v1';
  let language = 'en', kind = 'profit', current = null, recordId = null;
  let records = [], installPrompt = null;
  const drafts = {};
  try {
    language = localStorage.getItem('raitha-language') === 'kn' ? 'kn' : 'en';
    const saved = JSON.parse(localStorage.getItem(STORAGE) || '[]');
    if (Array.isArray(saved)) records = saved.filter(r => r && Object.hasOwn(FORMS,r.kind) && r.values && r.results);
  } catch { /* Calculators still work when storage is unavailable. */ }
  const t = key => TEXT[language][key] || key;
  function format(key,value,currency) {
    if (typeof value !== 'number') return value === 'A' || value === 'B' ? value : t(value);
    const locale = language === 'kn' ? 'kn-IN' : 'en-IN';
    if (MONEY.has(key)) return new Intl.NumberFormat(locale,{style:'currency',currency,minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
    return new Intl.NumberFormat(locale,{maximumFractionDigits:COUNTS.has(key)?0:2}).format(value);
  }
  function capture() {
    const draft = {};
    document.querySelectorAll('#fields input').forEach(input => draft[input.name] = input.value);
    drafts[kind] = draft;
  }
  function connection() { $('connection').textContent = t(navigator.onLine?'online':'offline'); }
  function render() {
    document.documentElement.lang = language;
    document.title = language === 'kn' ? 'ರೈತ · ಕೃಷಿ ಲೆಕ್ಕಾಚಾರ' : 'Raitha · Farm Calculator';
    document.querySelectorAll('[data-i]').forEach(el => el.textContent = t(el.dataset.i));
    $('language').textContent = language === 'en' ? 'ಕನ್ನಡ' : 'English';
    $('language').setAttribute('aria-label',language === 'en'?'Switch to Kannada':'Switch to English');
    $('calculators').setAttribute('aria-label',language === 'en'?'Calculators':'ಲೆಕ್ಕಾಚಾರಗಳು');
    $('calculators').replaceChildren();
    Object.keys(FORMS).forEach((key,i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-pressed',String(key===kind));
      const number = document.createElement('span'); number.className = 'num'; number.textContent = '0'+(i+1);
      const name = document.createElement('span'); name.textContent = t(key);
      button.append(number,name);
      button.onclick = () => { capture(); kind=key; invalidate(); render(); };
      $('calculators').append(button);
    });
    $('form-title').textContent = t(kind);
    $('form-note').textContent = t(kind+'Note') + ' ' + t('zeroHelp');
    $('fields').replaceChildren();
    FORMS[kind].forEach(([key,min,max,integer]) => {
      const label = document.createElement('label');
      const span = document.createElement('span'); span.textContent = t(key);
      const input = document.createElement('input');
      input.type = 'number'; input.inputMode = integer?'numeric':'decimal'; input.name = key;
      input.min = String(min); if (max !== null) input.max=String(max);
      input.step=integer?'1':'any'; input.required=true;
      input.value = drafts[kind]?.[key] ?? '';
      label.append(span,input); $('fields').append(label);
    });
    connection(); renderResults(); renderRecords();
  }
  function invalidate() {
    current=null; recordId=null; $('result').hidden=true; $('error').textContent=''; $('save-status').textContent='';
  }
  function renderResults() {
    $('result').hidden = !current;
    if (!current) return;
    $('numbers').replaceChildren();
    for (const [key,value] of Object.entries(current.results)) {
      const div = document.createElement('div'), dt=document.createElement('dt'), dd=document.createElement('dd');
      dt.textContent=t(key); dd.textContent=format(key,value,$('currency').value);
      div.append(dt,dd); $('numbers').append(div);
    }
  }
  function renderRecords() {
    $('records').replaceChildren();
    if (!records.length) $('records').textContent=t('empty');
    // Show the latest ten; CSV includes every record.
    records.slice(-10).reverse().forEach(record => {
      const div=document.createElement('div'); div.className='record';
      const title=document.createElement('strong'); title.textContent=record.crop+' · '+t(record.kind);
      const date=document.createElement('small'); date.textContent=new Date(record.date).toLocaleString(language==='kn'?'kn-IN':'en-IN');
      div.append(title,date);
      for (const [key,value] of Object.entries(record.results)) {
        const p=document.createElement('p'); p.textContent=t(key)+': '+format(key,value,record.currency); div.append(p);
      }
      $('records').append(div);
    });
    $('export').disabled=!records.length; $('delete').disabled=!records.length;
  }
  $('form').addEventListener('submit', event => {
    event.preventDefault(); capture();
    try {
      current=calculate(kind,drafts[kind]);
      recordId=crypto.randomUUID ? crypto.randomUUID() : String(Date.now())+'-'+Math.random().toString(16).slice(2);
      $('error').textContent=''; $('save-status').textContent=''; renderResults();
    } catch(error) {
      current=null; renderResults();
      $('error').textContent=Object.hasOwn(TEXT.en,error.message) ? t(error.message) : t('invalid')+' '+t(error.message);
    }
  });
  $('form').addEventListener('input',invalidate);
  $('form').addEventListener('change',invalidate);
  $('clear').onclick=()=>{ drafts[kind]={}; invalidate(); render(); };
  $('language').onclick=()=>{
    capture(); language=language==='en'?'kn':'en';
    try { localStorage.setItem('raitha-language',language); } catch {}
    $('save-status').textContent=''; $('error').textContent=''; render();
  };
  $('save').onclick=()=>{
    if (!current) return;
    const crop=$('crop').value.trim();
    if (!crop) { $('save-status').textContent=t('needCrop'); return; }
    const fingerprint=JSON.stringify([kind,crop,$('currency').value,current.values]);
    if (records.some(record=>record.fingerprint===fingerprint)) { $('save-status').textContent=t('duplicate'); return; }
    const record={id:recordId,date:new Date().toISOString(),kind,crop,currency:$('currency').value,...current,fingerprint};
    const updated=[...records,record];
    try {
      localStorage.setItem(STORAGE,JSON.stringify(updated)); records=updated;
      $('save-status').textContent=t('saved'); renderRecords();
    } catch { $('save-status').textContent=t('storageError'); }
  };
  $('export').onclick=()=>{
    const inputKeys=[...new Set(records.flatMap(r=>Object.keys(r.values)))];
    const resultKeys=[...new Set(records.flatMap(r=>Object.keys(r.results)))];
    const headers=['Record ID','Saved at (UTC)','Calculator','Crop / plant','Currency',...inputKeys.map(key=>'Input: '+TEXT.en[key]),...resultKeys.map(key=>'Result: '+TEXT.en[key])];
    const rows=records.map(r=>[r.id,r.date,TEXT.en[r.kind],r.crop,r.currency,...inputKeys.map(key=>r.values[key]),...resultKeys.map(key=>{
      const value=r.results[key]; return typeof value==='string' ? TEXT.en[value]||value : value;
    })]);
    const csv='\uFEFF'+[headers,...rows].map(row=>row.map(csvCell).join(',')).join('\r\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const link=document.createElement('a'); link.href=url; link.download='raitha-records.csv'; link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  $('delete').onclick=()=>{
    if (!confirm(t('deleteConfirm'))) return;
    try { localStorage.removeItem(STORAGE); records=[]; renderRecords(); }
    catch { $('save-status').textContent=t('storageError'); }
  };
  window.addEventListener('online',connection); window.addEventListener('offline',connection);
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;});
  $('install').onclick=async()=>{
    if(installPrompt) { await installPrompt.prompt(); installPrompt=null; }
    else $('install-guide').showModal();
  };
  $('close-guide').onclick=()=> $('install-guide').close();
  render();
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('./sw.js').catch(()=>{ /* Installation guide remains available. */ });
  }
  if (document.modelContext?.registerTool) {
    const lifecycle = new AbortController();
    try {
      Promise.resolve(document.modelContext.registerTool({
        name:'calculate_farm_estimate', description:'Calculate a farm estimate and show its inputs and results. Does not save a record.',
        inputSchema:{type:'object',properties:{kind:{type:'string',enum:Object.keys(FORMS)},values:{type:'object',additionalProperties:{type:'number'}}},required:['kind','values'],additionalProperties:false},
        annotations:{readOnlyHint:false,untrustedContentHint:false},
        execute(input) {
          const calculated=calculate(input.kind,input.values);
          capture(); kind=input.kind; drafts[kind]={...calculated.values}; current=calculated;
          recordId=crypto.randomUUID(); render(); return calculated.results;
        }
      },{signal:lifecycle.signal})).catch(()=>{});
      window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
    } catch {}
  }
}
