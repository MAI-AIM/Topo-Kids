// Provincie Friesland (22 items)
const FRIESLAND_DATA = [
      // 1 Hoofdstad (met dubbele rode cirkel op de leskaart)
      {
        id: 'fri-1',
        code: '1',
        category: 'hoofdstad',
        categoryLabel: 'Hoofdstad',
        name: 'Leeuwarden',
        spellTarget: 'Leeuwarden',
        type: 'hoofdstad',
        lng: 5.7999,
        lat: 53.2012,
        article: 'de',
        desc: 'De trotse provinciehoofdstad van Friesland, bekend om de scheve toren De Oldehove en start- en finishplaats van de Elfstedentocht.',
        pronounce: 'Leeuwarden, hoofdstad van Friesland.'
      },

      // 2-13 Steden (rode stippen op de leskaart)
      {
        id: 'fri-2',
        code: '2',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Joure',
        spellTarget: 'Joure',
        type: 'stad',
        lng: 5.7958,
        lat: 52.9667,
        article: 'het',
        desc: 'Gezellige Friese plaats bij het Sneekermeer, beroemd om Douwe Egberts koffie en de Friese klokkenmakerij.',
        pronounce: 'Joure, bekend van koffie en klokken.'
      },
      {
        id: 'fri-3',
        code: '3',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Drachten',
        spellTarget: 'Drachten',
        type: 'stad',
        lng: 6.0989,
        lat: 53.1125,
        article: 'het',
        desc: 'De op één na grootste plaats van Friesland, gelegen in de groene streek De Friese Wouden.',
        pronounce: 'Drachten, grote plaats in De Friese Wouden.'
      },
      {
        id: 'fri-4',
        code: '4',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Lemmer',
        spellTarget: 'Lemmer',
        type: 'stad',
        lng: 5.7133,
        lat: 52.8458,
        article: 'het',
        desc: 'Prachtige watersportplaats aan het IJsselmeer met het wereldberoemde Woudagemaal, UNESCO Werelderfgoed.',
        pronounce: 'Lemmer, watersportplaats aan het IJsselmeer met het Woudagemaal.'
      },
      {
        id: 'fri-5',
        code: '5',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Franeker',
        spellTarget: 'Franeker',
        type: 'stad',
        lng: 5.5414,
        lat: 53.1878,
        article: 'het',
        desc: 'Historische Elfstedenstad met het oudste werkende planetarium ter wereld van Eise Eisinga en de PC kaatswedstrijd.',
        pronounce: 'Franeker, Elfstedenstad met het wereldberoemde planetarium.'
      },
      {
        id: 'fri-6',
        code: '6',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Dokkum',
        spellTarget: 'Dokkum',
        type: 'stad',
        lng: 5.9989,
        lat: 53.3253,
        article: 'het',
        desc: 'Noordelijkste Elfstedenstad met schitterende historische bolwerken en de bekende Bonifatiusbron.',
        pronounce: 'Dokkum, noordelijke Elfstedenstad met historische bolwerken.'
      },
      {
        id: 'fri-7',
        code: '7',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Wolvega',
        spellTarget: 'Wolvega',
        type: 'stad',
        lng: 6.0008,
        lat: 52.8767,
        article: 'het',
        desc: 'Hoofdplaats van de gemeente Weststellingwerf in het zuidoosten van Friesland, bekend om de drafsport.',
        pronounce: 'Wolvega, plaats in het zuidoosten van Friesland.'
      },
      {
        id: 'fri-8',
        code: '8',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Harlingen',
        spellTarget: 'Harlingen',
        type: 'stad',
        lng: 5.4264,
        lat: 53.1744,
        article: 'het',
        desc: 'De enige zeehavenstad van Friesland aan de Waddenzee, vertrekhaven van de veerboten naar Terschelling en Vlieland.',
        pronounce: 'Harlingen, zeehavenstad aan de Waddenzee.'
      },
      {
        id: 'fri-9',
        code: '9',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Stavoren',
        spellTarget: 'Stavoren',
        type: 'stad',
        lng: 5.3589,
        lat: 52.8867,
        article: 'het',
        desc: 'De oudste stad van Friesland aan het IJsselmeer, beroemd om de legende van het Vrouwtje van Stavoren.',
        pronounce: 'Stavoren, oudste stad van Friesland aan het IJsselmeer.'
      },
      {
        id: 'fri-10',
        code: '10',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Bolsward',
        spellTarget: 'Bolsward',
        type: 'stad',
        lng: 5.5267,
        lat: 53.0617,
        article: 'het',
        desc: 'Mooie Elfstedenstad en Hanzestad met een prachtig stadhuis en het startpunt van de Fietselfstedentocht.',
        pronounce: 'Bolsward, historische Hanzestad en Elfstedenstad.'
      },
      {
        id: 'fri-11',
        code: '11',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Sneek',
        spellTarget: 'Sneek',
        type: 'stad',
        lng: 5.6608,
        lat: 53.0328,
        article: 'het',
        desc: 'Het bruisende watersporthart van Friesland, beroemd om de monumentale Waterpoort en de Sneekweek zeilwedstrijden.',
        pronounce: 'Sneek, watersportstad met de beroemde Waterpoort.'
      },
      {
        id: 'fri-12',
        code: '12',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Heerenveen',
        spellTarget: 'Heerenveen',
        type: 'stad',
        lng: 5.9228,
        lat: 52.9567,
        article: 'het',
        desc: 'Hét schaatshart van Nederland met het wereldberoemde ijsstadion Thialf en voetbalclub SC Heerenveen.',
        pronounce: 'Heerenveen, sportstad met schaatstempel Thialf.'
      },
      {
        id: 'fri-13',
        code: '13',
        category: 'stad',
        categoryLabel: 'Stad',
        name: 'Nes',
        spellTarget: 'Nes',
        type: 'stad',
        lng: 5.7733,
        lat: 53.4472,
        article: 'het',
        desc: 'Gezellig dorp op het waddeneiland Ameland waar de veerboot aankomt, met mooie commandeurshuizen.',
        pronounce: 'Nes, dorp op het waddeneiland Ameland.'
      },

      // a-d Gebieden (Waddeneilanden - groene vierkanten op de leskaart)
      {
        id: 'fri-a',
        code: 'a',
        category: 'gebied',
        categoryLabel: 'Gebied',
        name: 'Schiermonnikoog',
        spellTarget: 'Schiermonnikoog',
        type: 'gebied',
        lng: 6.1600,
        lat: 53.4800,
        article: 'het',
        desc: 'Het meest oostelijke bewoonde Friese waddeneiland en Nationaal Park met de breedste zandstranden van Europa.',
        pronounce: 'Schiermonnikoog, waddeneiland en Nationaal Park.'
      },
      {
        id: 'fri-b',
        code: 'b',
        category: 'gebied',
        categoryLabel: 'Gebied',
        name: 'Ameland',
        spellTarget: 'Ameland',
        type: 'gebied',
        lng: 5.7000,
        lat: 53.4500,
        article: 'het',
        desc: 'Prachtig waddeneiland met vier dorpen (waaronder Nes), duinen, bossen en de rood-witte vuurtoren Bornrif.',
        pronounce: 'Ameland, waddeneiland met vuurtoren Bornrif.'
      },
      {
        id: 'fri-c',
        code: 'c',
        category: 'gebied',
        categoryLabel: 'Gebied',
        name: 'Terschelling',
        spellTarget: 'Terschelling',
        type: 'gebied',
        lng: 5.3200,
        lat: 53.3900,
        article: 'het',
        desc: 'Groot waddeneiland met de markante vuurtoren Brandaris, natuurgebied De Boschplaat en het Oerol festival.',
        pronounce: 'Terschelling, waddeneiland met vuurtoren de Brandaris.'
      },
      {
        id: 'fri-d',
        code: 'd',
        category: 'gebied',
        categoryLabel: 'Gebied',
        name: 'Vlieland',
        spellTarget: 'Vlieland',
        type: 'gebied',
        lng: 5.0600,
        lat: 53.2700,
        article: 'het',
        desc: 'Rustig, autoluw waddeneiland met het dorp Oost-Vlieland, hoge duinen en de uitgestrekte zandvlakte Vliehors.',
        pronounce: 'Vlieland, rustig en autoluw waddeneiland.'
      },

      // I-V Wateren (blauwe waterbadges op de leskaart)
      {
        id: 'fri-I',
        code: 'I',
        category: 'water',
        categoryLabel: 'Water',
        name: 'Sneekermeer',
        spellTarget: 'Sneekermeer',
        type: 'water',
        lng: 5.7600,
        lat: 53.0300,
        article: 'het',
        desc: 'Beroemd meer tussen Sneek en Joure, het bruisende middelpunt van de Friese watersport en zeilwedstrijden.',
        pronounce: 'Het Sneekermeer, geliefd meer bij watersporters.'
      },
      {
        id: 'fri-II',
        code: 'II',
        category: 'water',
        categoryLabel: 'Water',
        name: 'Waddenzee',
        spellTarget: 'Waddenzee',
        type: 'water',
        lng: 5.3300,
        lat: 53.2000,
        article: 'de',
        desc: 'Unieke binnenzee tussen de Waddeneilanden en het vasteland, UNESCO Werelderfgoed met eb en vloed en droogvallende wadplaten.',
        pronounce: 'De Waddenzee, unieke getijdenzee en Werelderfgoed.'
      },
      {
        id: 'fri-III',
        code: 'III',
        category: 'water',
        categoryLabel: 'Water',
        name: 'Van Harinxmakanaal',
        spellTarget: 'Van Harinxmakanaal',
        type: 'water',
        lng: 5.6000,
        lat: 53.1750,
        article: 'het',
        desc: 'Belangrijk scheepvaartkanaal dat de zeehaven Harlingen via Franeker verbindt met Leeuwarden.',
        pronounce: 'Het Van Harinxmakanaal, van Harlingen via Franeker naar Leeuwarden.'
      },
      {
        id: 'fri-IV',
        code: 'IV',
        category: 'water',
        categoryLabel: 'Water',
        name: 'Prinses Margrietkanaal',
        spellTarget: 'Prinses Margrietkanaal',
        type: 'water',
        lng: 5.8300,
        lat: 53.1100,
        article: 'het',
        desc: 'De belangrijkste vaarweg door Friesland voor grote binnenvaartschepen, van Lemmer naar Groningen.',
        pronounce: 'Het Prinses Margrietkanaal, belangrijke scheepvaartroute door Friesland.'
      },
      {
        id: 'fri-V',
        code: 'V',
        category: 'water',
        categoryLabel: 'Water',
        name: 'Lauwersmeer',
        spellTarget: 'Lauwersmeer',
        type: 'water',
        lng: 6.1500,
        lat: 53.3700,
        article: 'het',
        desc: 'Groot meer en Nationaal Park op de grens van Friesland en Groningen, ontstaan na de afsluiting van de Lauwerszee in 1969.',
        pronounce: 'Het Lauwersmeer, prachtig natuurgebied en meer op de grens met Groningen.'
      }
    ];

const FRIESLAND_GEOMETRIES = {
      // 1. Van Harinxmakanaal (III)
      vanHarinxmakanaal: [
        [5.4264, 53.1744], // Harlingen
        [5.4800, 53.1800],
        [5.5414, 53.1878], // Franeker
        [5.6450, 53.1930], // Dronryp
        [5.7400, 53.1960],
        [5.7999, 53.2012]  // Leeuwarden
      ],

      // 2. Prinses Margrietkanaal (IV)
      prinsesMargrietkanaal: [
        [5.7100, 52.8450], // Lemmer
        [5.7050, 52.9150], // Spannenburg
        [5.6900, 52.9550], // Koevordermeer
        [5.7600, 53.0300], // Sneekermeer
        [5.8350, 53.1000], // Grou
        [5.9000, 53.1500], // Wartena
        [6.0300, 53.1900], // Bergumermeer
        [6.2200, 53.2380]  // Stroobos (richting Groningen)
      ],

      // 3. Sneekermeer (I)
      sneekermeer: [
        [5.7350, 53.0200],
        [5.7500, 53.0450],
        [5.7850, 53.0500],
        [5.8050, 53.0350],
        [5.7800, 53.0150],
        [5.7350, 53.0200]
      ],

      // 4. Waddenzee Friese zone (II)
      waddenzeeZone: [
        [4.9500, 53.2000],
        [5.1000, 53.3000],
        [5.4000, 53.3800],
        [5.7500, 53.4300],
        [6.1000, 53.4500],
        [6.2500, 53.4200],
        [6.1500, 53.3800],
        [5.7000, 53.3400],
        [5.4500, 53.2600],
        [5.3850, 53.1100],
        [5.2000, 53.0800],
        [4.9500, 53.2000]
      ],

      // 5. Lauwersmeer (V)
      lauwersmeer: [
        [6.1200, 53.3400],
        [6.1700, 53.4000],
        [6.2400, 53.4100],
        [6.2500, 53.3600],
        [6.1800, 53.3300],
        [6.1200, 53.3400]
      ],

      // 6. Afsluitdijk
      afsluitdijk: [
        [5.0350, 52.9300],
        [5.2400, 53.0400],
        [5.3850, 53.1100]
      ],

      // 7. Wadden eilanden contouren (a-d)
      schiermonnikoog: [
        [6.15, 53.47], [6.26, 53.50], [6.35, 53.51], [6.28, 53.48], [6.17, 53.46], [6.15, 53.47]
      ],
      ameland: [
        [5.62, 53.43], [5.75, 53.46], [5.92, 53.47], [5.85, 53.44], [5.69, 53.42], [5.62, 53.43]
      ],
      terschelling: [
        [5.19, 53.36], [5.28, 53.39], [5.45, 53.44], [5.55, 53.44], [5.42, 53.39], [5.24, 53.35], [5.19, 53.36]
      ],
      vlieland: [
        [4.93, 53.24], [5.02, 53.28], [5.11, 53.32], [5.08, 53.29], [4.97, 53.25], [4.93, 53.24]
      ],

      // 8. Belangrijke wegen voor oriëntatie conform de leskaart
      roads: [
        // A7: Afsluitdijk -> Bolsward -> Sneek -> Joure -> Heerenveen -> Drachten -> Groningen
        [[5.3850, 53.1100], [5.5267, 53.0617], [5.6608, 53.0328], [5.7958, 52.9667], [5.9228, 52.9567], [6.0989, 53.1125], [6.2400, 53.1700]],
        // A31: Harlingen -> Franeker -> Leeuwarden
        [[5.4264, 53.1744], [5.5414, 53.1878], [5.7999, 53.2012]],
        // A32: Leeuwarden -> Grou -> Heerenveen -> Wolvega -> Overijssel
        [[5.7999, 53.2012], [5.8350, 53.1000], [5.9228, 52.9567], [6.0008, 52.8767], [6.0700, 52.8100]],
        // N31 / N356: Leeuwarden -> Dokkum
        [[5.7999, 53.2012], [5.9000, 53.2700], [5.9989, 53.3253]]
      ],

      // 9. Extra Friese meren als achtergrond watergeografie
      extraLakes: [
        // Heegermeer & Fluessen
        [[5.4600, 52.9300], [5.5300, 52.9500], [5.5800, 52.9650], [5.5500, 52.9500], [5.4500, 52.9200], [5.4600, 52.9300]],
        // Tjeukemeer
        [[5.7500, 52.8800], [5.7900, 52.9100], [5.8300, 52.9000], [5.8100, 52.8700], [5.7500, 52.8800]],
        // Slotermeer
        [[5.6300, 52.8900], [5.6600, 52.9100], [5.6800, 52.8950], [5.6500, 52.8800], [5.6300, 52.8900]]
      ]
    };
