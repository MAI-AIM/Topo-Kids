// Wateren van Nederland (17 items)
const WATERS_DATA = [
      { id: 1,  code: "I",    roman: "I",    category: "water", categoryLabel: "Water", name: "Schelde-Rijnkanaal",   spellTarget: "Schelde-Rijnkanaal",   type: "kanaal", lng: 4.24, lat: 51.48, article: "het", desc: "Verbindt de haven van Antwerpen met de Rijn via Noord-Brabant en Zeeland." },
      { id: 2,  code: "II",   roman: "II",   category: "water", categoryLabel: "Water", name: "Maas",                 spellTarget: "Maas",                 type: "rivier", lng: 5.92, lat: 51.18, article: "de",  desc: "Stroomt vanuit Frankrijk en België door heel Limburg en langs Noord-Brabant." },
      { id: 3,  code: "III",  roman: "III",  category: "water", categoryLabel: "Water", name: "Amsterdam-Rijnkanaal", spellTarget: "Amsterdam-Rijnkanaal", type: "kanaal", lng: 5.05, lat: 52.18, article: "het", desc: "Druk bevaren kanaal tussen Amsterdam en de grote rivieren bij Tiel." },
      { id: 4,  code: "IV",   roman: "IV",   category: "water", categoryLabel: "Water", name: "Waddenzee",            spellTarget: "Waddenzee",            type: "zee",    lng: 5.45, lat: 53.35, article: "de",  desc: "Uniek getijdengebied tussen het vasteland en de Waddeneilanden." },
      { id: 5,  code: "V",    roman: "V",    category: "water", categoryLabel: "Water", name: "Westerschelde",        spellTarget: "Westerschelde",        type: "zee",    lng: 3.70, lat: 51.38, article: "de",  desc: "Brede zeearm in Zeeland die toegang geeft tot de haven van Antwerpen." },
      { id: 6,  code: "VI",   roman: "VI",   category: "water", categoryLabel: "Water", name: "Lek",                  spellTarget: "Lek",                  type: "rivier", lng: 4.88, lat: 51.93, article: "de",  desc: "Voortzetting van de Nederrijn vanaf Wijk bij Duurstede naar het westen." },
      { id: 7,  code: "VII",  roman: "VII",  category: "water", categoryLabel: "Water", name: "Oosterschelde",        spellTarget: "Oosterschelde",        type: "zee",    lng: 3.90, lat: 51.60, article: "de",  desc: "Grootste nationaal park van Nederland, afgesloten door de stormvloedkering." },
      { id: 8,  code: "VIII", roman: "VIII", category: "water", categoryLabel: "Water", name: "IJssel",               spellTarget: "IJssel",               type: "rivier", lng: 6.12, lat: 52.24, article: "de",  desc: "Rivier die bij Arnhem aftakt van de Rijn en noordwaarts naar het IJsselmeer stroomt." },
      { id: 9,  code: "IX",   roman: "IX",   category: "water", categoryLabel: "Water", name: "Noordzeekanaal",       spellTarget: "Noordzeekanaal",       type: "kanaal", lng: 4.68, lat: 52.44, article: "het", desc: "Verbindt de haven van Amsterdam rechtstreeks met de Noordzee bij IJmuiden." },
      { id: 10, code: "X",    roman: "X",    category: "water", categoryLabel: "Water", name: "Waal",                 spellTarget: "Waal",                 type: "rivier", lng: 5.40, lat: 51.87, article: "de",  desc: "De breedste en drukst bevaren arm van de Rijn in Nederland." },
      { id: 11, code: "XI",   roman: "XI",   category: "water", categoryLabel: "Water", name: "Noordzee",             spellTarget: "Noordzee",             type: "zee",    lng: 3.72, lat: 52.40, article: "de",  desc: "De open zee ten noorden en westen van Nederland met brede zandstranden." },
      { id: 12, code: "XII",  roman: "XII",  category: "water", categoryLabel: "Water", name: "Nieuwe Waterweg",      spellTarget: "Nieuwe Waterweg",      type: "kanaal", lng: 4.20, lat: 51.92, article: "de",  desc: "Belangrijke waterweg die Rotterdam en Europoort verbindt met de Noordzee." },
      { id: 13, code: "XIII", roman: "XIII", category: "water", categoryLabel: "Water", name: "Veluwemeer",           spellTarget: "Veluwemeer",           type: "meer",   lng: 5.68, lat: 52.42, article: "het", desc: "Ondiep randmeer tussen Gelderland en Flevoland, populair bij watersporters." },
      { id: 14, code: "XIV",  roman: "XIV",  category: "water", categoryLabel: "Water", name: "Twentekanaal",         spellTarget: "Twentekanaal",         type: "kanaal", lng: 6.45, lat: 52.20, article: "het", desc: "Kanaal in Overijssel en Gelderland dat Enschede en Hengelo verbindt met de IJssel." },
      { id: 15, code: "XV",   roman: "XV",   category: "water", categoryLabel: "Water", name: "IJsselmeer",           spellTarget: "IJsselmeer",           type: "meer",   lng: 5.30, lat: 52.75, article: "het", desc: "Het grootste zoetwatermeer van Nederland, ontstaan na de bouw van de Afsluitdijk." },
      { id: 16, code: "XVI",  roman: "XVI",  category: "water", categoryLabel: "Water", name: "Nederrijn",            spellTarget: "Nederrijn",            type: "rivier", lng: 5.75, lat: 51.96, article: "de",  desc: "Riviertak van de Rijn die langs Arnhem stroomt richting Wijk bij Duurstede." },
      { id: 17, code: "XVII", roman: "XVII", category: "water", categoryLabel: "Water", name: "Rijn",                 spellTarget: "Rijn",                 type: "rivier", lng: 6.08, lat: 51.85, article: "de",  desc: "Komt bij Spijk/Lobith Nederland binnen en splitst zich in Waal en Nederrijn." }
    ];

const WATER_GEOMETRIES = {
      afsluitdijk: [[5.03, 52.93], [5.39, 53.11]],
      houtribdijk: [[5.29, 52.70], [5.44, 52.53]],

      // Rivieren (WGS84 coördinaten)
      rijn: [[6.18, 51.82], [6.12, 51.85], [6.05, 51.87]],
      waal: [[6.05, 51.87], [5.86, 51.84], [5.61, 51.89], [5.40, 51.87], [5.09, 51.85], [4.77, 51.82]],
      nederrijn: [[6.05, 51.87], [5.91, 51.99], [5.75, 51.96], [5.57, 51.96], [5.34, 51.97]],
      lek: [[5.34, 51.97], [5.20, 51.95], [4.88, 51.93], [4.65, 51.90]],
      nieuweWaterweg: [[4.65, 51.90], [4.45, 51.91], [4.20, 51.92], [4.03, 51.96]],
      ijssel: [[5.91, 51.99], [6.12, 52.14], [6.12, 52.24], [6.12, 52.34], [6.09, 52.51], [5.91, 52.56]],
      maas: [[5.70, 50.78], [5.69, 50.85], [5.80, 50.94], [5.87, 51.10], [5.92, 51.18], [5.99, 51.19], [6.17, 51.37], [6.04, 51.60], [5.95, 51.65], [5.74, 51.76], [5.30, 51.70], [4.86, 51.70]],

      // Kanalen
      amsterdamRijnkanaal: [[4.95, 52.38], [5.08, 52.09], [5.34, 51.97], [5.43, 51.88]],
      noordzeekanaal: [[4.56, 52.46], [4.68, 52.44], [4.95, 52.38]],
      twentekanaal: [[6.16, 52.20], [6.45, 52.20], [6.89, 52.22]],
      scheldeRijnkanaal: [[4.22, 51.35], [4.24, 51.48], [4.24, 51.65]],

      // Meren & Zeearmen contouren
      ijsselmeer: [[5.03, 52.93], [5.39, 53.11], [5.44, 52.98], [5.71, 52.84], [5.60, 52.66], [5.44, 52.53], [5.29, 52.70], [5.11, 52.77], [5.03, 52.93]],
      veluwemeer: [[5.48, 52.30], [5.62, 52.36], [5.68, 52.42], [5.83, 52.45], [5.85, 52.57]],
      waddenzee: [[4.73, 53.01], [4.82, 53.17], [5.03, 52.93], [5.39, 53.11], [5.90, 53.37], [6.23, 53.41], [6.45, 53.40], [6.35, 53.51], [5.92, 53.47], [5.55, 53.44], [5.11, 53.32], [4.73, 53.01]],
      oosterschelde: [[3.69, 51.72], [3.97, 51.64], [4.13, 51.66], [4.19, 51.64], [3.90, 51.60], [3.66, 51.58], [3.69, 51.72]],
      westerschelde: [[3.48, 51.49], [3.70, 51.38], [4.02, 51.50], [4.21, 51.30], [3.98, 51.35], [3.71, 51.37], [3.37, 51.37], [3.48, 51.49]]
    };
