'use strict';

// Original figures are preserved. Conversion: 1 acre = 0.40468564224 ha;
// 1 quintal = 100 kg. These are published reference yields, not forecasts.
const CROP_PROFILES = [
  {
    id:'ragi-irrigated',name:['Ragi KMR-316 · irrigated','ರಾಗಿ KMR-316 · ನೀರಾವರಿ'],
    low:20,high:22,unit:'q/acre',duration:'100–105',
    region:['Karnataka zones 5 and 6; irrigated. Published variety yield potential.','ಕರ್ನಾಟಕ ವಲಯ 5 ಮತ್ತು 6; ನೀರಾವರಿ. ಪ್ರಕಟಿತ ತಳಿಯ ಇಳುವರಿ ಸಾಮರ್ಥ್ಯ.'],
    institution:'UAS Bengaluru',edition:'2020–21 release recommendations',
    url:'https://www.uasbangalore.edu.in/en/new-varieties-recommended-for-release-during-2020-21/'
  },
  {
    id:'ragi-rainfed',name:['Ragi KMR-316 · rainfed','ರಾಗಿ KMR-316 · ಮಳೆಯಾಶ್ರಿತ'],
    low:12,high:14,unit:'q/acre',duration:'100–105',
    region:['Karnataka zones 5 and 6; rainfed. Published variety yield potential.','ಕರ್ನಾಟಕ ವಲಯ 5 ಮತ್ತು 6; ಮಳೆಯಾಶ್ರಿತ. ಪ್ರಕಟಿತ ತಳಿಯ ಇಳುವರಿ ಸಾಮರ್ಥ್ಯ.'],
    institution:'UAS Bengaluru',edition:'2020–21 release recommendations',
    url:'https://www.uasbangalore.edu.in/en/new-varieties-recommended-for-release-during-2020-21/'
  },
  {
    id:'paddy-kmp220',name:['Paddy KMP-220 · Karnataka zone 6','ಭತ್ತ KMP-220 · ಕರ್ನಾಟಕ ವಲಯ 6'],
    low:24,high:26,unit:'q/acre',duration:'125–130',
    region:['Southern Dry Zone of Karnataka (zone 6). Published grain-yield potential; verify local water and season suitability.','ಕರ್ನಾಟಕದ ದಕ್ಷಿಣ ಒಣ ವಲಯ (ವಲಯ 6). ಪ್ರಕಟಿತ ಧಾನ್ಯ ಇಳುವರಿ ಸಾಮರ್ಥ್ಯ; ಸ್ಥಳೀಯ ನೀರು ಮತ್ತು ಋತುವಿನ ಹೊಂದಾಣಿಕೆ ಪರಿಶೀಲಿಸಿ.'],
    institution:'UAS Bengaluru',edition:'2020–21 release recommendations',
    url:'https://www.uasbangalore.edu.in/en/new-varieties-recommended-for-release-during-2020-21/'
  },
  {
    id:'sunflower-protective',name:['Sunflower KBSH-78 · protective irrigation','ಸೂರ್ಯಕಾಂತಿ KBSH-78 · ಪೂರಕ ನೀರಾವರಿ'],
    low:17,high:23,unit:'q/ha',duration:'85',
    region:['Karnataka zones 4, 5, 6 and 7; protective irrigation. Published average seed-yield range.','ಕರ್ನಾಟಕ ವಲಯ 4, 5, 6 ಮತ್ತು 7; ಪೂರಕ ನೀರಾವರಿ. ಪ್ರಕಟಿತ ಸರಾಸರಿ ಬೀಜ ಇಳುವರಿ ವ್ಯಾಪ್ತಿ.'],
    institution:'UAS Bengaluru',edition:'2018–19 release recommendations',
    url:'https://www.uasbangalore.edu.in/en/varieties-hybrids-recommended-for-release-during-2018-19/'
  },
  {
    id:'sunflower-rainfed',name:['Sunflower KBSH-78 · rainfed','ಸೂರ್ಯಕಾಂತಿ KBSH-78 · ಮಳೆಯಾಶ್ರಿತ'],
    low:10,high:12,unit:'q/ha',duration:'85',
    region:['Karnataka zones 4, 5, 6 and 7; rainfed. Published average seed-yield range.','ಕರ್ನಾಟಕ ವಲಯ 4, 5, 6 ಮತ್ತು 7; ಮಳೆಯಾಶ್ರಿತ. ಪ್ರಕಟಿತ ಸರಾಸರಿ ಬೀಜ ಇಳುವರಿ ವ್ಯಾಪ್ತಿ.'],
    institution:'UAS Bengaluru',edition:'2018–19 release recommendations',
    url:'https://www.uasbangalore.edu.in/en/varieties-hybrids-recommended-for-release-during-2018-19/'
  },
  {
    id:'maize-irrigated',name:['Maize COH(M) 6 · irrigated · Tamil Nadu reference','ಮೆಕ್ಕೆಜೋಳ COH(M) 6 · ನೀರಾವರಿ · ತಮಿಳುನಾಡು ಉಲ್ಲೇಖ'],
    low:7500,high:8000,unit:'kg/ha',duration:'105–110',
    region:['TNAU, Tamil Nadu; irrigated. Published average grain yield. Not a Karnataka recommendation.','TNAU, ತಮಿಳುನಾಡು; ನೀರಾವರಿ. ಪ್ರಕಟಿತ ಸರಾಸರಿ ಧಾನ್ಯ ಇಳುವರಿ. ಇದು ಕರ್ನಾಟಕದ ಶಿಫಾರಸು ಅಲ್ಲ.'],
    institution:'TNAU',edition:'Updated April 2023',
    url:'https://agritech.tnau.ac.in/agriculture/agri_maize_Characteristics_hybrids%20COhm6.html'
  },
  {
    id:'maize-rainfed',name:['Maize COH(M) 6 · rainfed · Tamil Nadu reference','ಮೆಕ್ಕೆಜೋಳ COH(M) 6 · ಮಳೆಯಾಶ್ರಿತ · ತಮಿಳುನಾಡು ಉಲ್ಲೇಖ'],
    low:5500,high:6000,unit:'kg/ha',duration:'105–110',
    region:['TNAU, Tamil Nadu; rainfed. Published average grain yield. Not a Karnataka recommendation.','TNAU, ತಮಿಳುನಾಡು; ಮಳೆಯಾಶ್ರಿತ. ಪ್ರಕಟಿತ ಸರಾಸರಿ ಧಾನ್ಯ ಇಳುವರಿ. ಇದು ಕರ್ನಾಟಕದ ಶಿಫಾರಸು ಅಲ್ಲ.'],
    institution:'TNAU',edition:'Updated April 2023',
    url:'https://agritech.tnau.ac.in/agriculture/agri_maize_Characteristics_hybrids%20COhm6.html'
  },
  {
    id:'tomato-co2',name:['Tomato CO2 · Tamil Nadu reference','ಟೊಮೇಟೊ CO2 · ತಮಿಳುನಾಡು ಉಲ್ಲೇಖ'],
    low:28,high:30,unit:'t/ha',duration:'145',
    region:['TNAU lists named Tamil Nadu districts. Published fruit-yield range; not a Karnataka recommendation. Harvested yield may exceed saleable yield.','TNAU ಪಟ್ಟಿಯಲ್ಲಿ ತಮಿಳುನಾಡಿನ ಜಿಲ್ಲೆಗಳಿವೆ. ಪ್ರಕಟಿತ ಹಣ್ಣಿನ ಇಳುವರಿ; ಕರ್ನಾಟಕದ ಶಿಫಾರಸು ಅಲ್ಲ. ಕೊಯ್ಲಿನ ಇಳುವರಿ ಮತ್ತು ಮಾರಾಟಯೋಗ್ಯ ಇಳುವರಿ ಬೇರೆ ಆಗಬಹುದು.'],
    institution:'TNAU',edition:'Updated June 2023',
    url:'https://agritech.tnau.ac.in/horticulture/tomato%20CO2.html'
  }
];

function quintalsPerAcre(value,unit) {
  const acreInHectares=0.40468564224;
  if(unit==='q/acre')return value;
  if(unit==='q/ha')return value*acreInHectares;
  if(unit==='kg/ha')return value*acreInHectares/100;
  if(unit==='t/ha')return value*acreInHectares*10;
  throw new Error('Unknown yield unit');
}

if(typeof module!=='undefined')module.exports={CROP_PROFILES,quintalsPerAcre};
