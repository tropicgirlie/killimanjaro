# Brief: Monte Roraima section for mounjarotokillimanjaro.com

Target repo: https://github.com/tropicgirlie/killimanjaro (empty as of 2026-11-19, site code not pushed yet)
Asset: `roraima-elevation-profile.png` (trail elevation profile, labels in Spanish)

## 1. Content (original Portuguese, as supplied)

### O coração do planeta
De acordo com a mitologia dos povos ameríndios, Roraima é o coração do planeta. Suas águas são o sangue e seus rios, suas veias, alimentando as bacias dos rios Orinoco, Amazonas e Esequibo.

De origens pré-históricas, o Monte Roraima ergueu-se da terra há mais de 2 bilhões de anos, no período em que América do Sul e África eram unidos em um único continente. ⚠️ see fact check

### Makunaima, o guardião
Para os Pemons, da Venezuela, e Macuxis, do Brasil, o Monte é sagrado. É Makunaima, o guardião do Monte, que comanda a natureza, e altera as condições locais conforme sua vontade.

Para os aventureiros que ousam percorrer os caminhos da trilha e subir até seu topo, a força divina de Makunaima se revela numa verdadeira prova de persistência, testando constantemente o poder de vontade dos viajantes.

### De Makunaima a Macunaíma (new, draft)
Order matters here: Indigenous tradition first, then the famous version, then the reclaiming.

1. **A tradição.** Para os Pemon e Macuxi, Makunaima é herói criador e trapaceiro, ligado ao Monte e aos tepuis. Essas histórias são conhecimento vivo desses povos, não lenda do passado.
2. **O registro.** Entre 1911 e 1913, o etnógrafo alemão Theodor Koch-Grünberg ouviu essas histórias de dois narradores, Mayuluaípu e Akuli, e publicou em *Vom Roraima zum Orinoco* ("Do Roraima ao Orinoco").
3. **O romance.** Mário de Andrade leu Koch-Grünberg sem nunca ter ido a Roraima e escreveu *Macunaíma: o herói sem nenhum caráter* (1928), marco do Modernismo brasileiro. O herói nasce às margens do Uraricoera, perde o muiraquitã, vai a São Paulo e termina virando a Ursa Maior. Em 1969 virou filme de Joaquim Pedro de Andrade, com Grande Otelo.
4. **A crítica.** O livro transformou uma figura sagrada Pemon em símbolo da "brasilidade", e os narradores indígenas quase desapareceram da história.
5. **A retomada.** O artista macuxi Jaider Esbell (1979–2021), de Roraima, devolveu Makunaima ao lugar de ancestral, de avô, e não de personagem. Sua obra teve destaque na 34ª Bienal de São Paulo (2021).

Optional personal bridge (Luana's voice): link it to growing up in Brazil reading/hearing about *Macunaíma* at school, and only later learning where he really came from. That would make it hers, not encyclopaedic.

Verify before publishing: Koch-Grünberg's expedition dates and the narrators' name spellings, plus the Esbell details (dates, Bienal), against a primary source. Use an image from Esbell's work only with permission from his estate or gallery.

### A trilha
Na viagem você pode desfrutar de uma imensa savana até chegar à parede vertical do tepuy, que tem quase 1000 metros de altura. A partir daí começa a subida por uma rampa natural de rochas soltas da muralha, até chegar ao cume, que alguns descrevem como chegar a outro planeta.

A região do Monte Roraima é administrada e protegida na Venezuela pelo Parque Nacional Canaima e no Brasil pelo Parque Nacional do Monte Roraima.

### Nível de dificuldade: Difícil
Acessível à maioria das pessoas, mas é preciso ter consciência de que a realidade da trilha é difícil e cansativa. Caminhamos muito em terrenos acidentados, com subidas e descidas frequentes e o desgaste físico é extenuante. Este roteiro exige disposição e bom condicionamento físico. Recomendamos para pessoas com experiência em caminhadas.

## 2. Trail data (transcribed from the image)

| # | Point | Altitude | Distance from previous | Mode |
|---|---|---|---|---|
| 0 | Santa Elena de Uairén | – | – | start |
| 1 | Paraitepui | 1200 m | 78 km | 4x4 |
| 2 | Campamento Tëk (Río Tëk) | 1050 m | 13 km (to Tëk/Kukenan) | trek |
| 3 | Campamento Kukenan (Río Kukenan) | 1050 m | ↑ | trek |
| 4 | Campamento Base Tepuy | 1870 m | 9 km | trek |
| 5 | Camp. Cima "Hoteles" | 2700 m | 2.5 km | climb the ramp |
| 6 | Summit: Punto Triple 2723 m · Camp. Coati "Hotel Brasil" 2720 m · Lago Gladys · La Proa 2750 m | 2700–2750 m | ~10 km on top | trek |

Trekking total ≈ 34.5 km one way (13 + 9 + 2.5 + 10), plus 78 km by road.
Note: Punto Triple = where Venezuela, Brazil and Guyana meet.

## 3. Fact check before publishing

- **"2 bilhões de anos / América do Sul e África unidas"** mixes two different eras. The Roraima sandstone is roughly 1.7–2 billion years old, but South America and Africa were joined in Gondwana/Pangaea until about 130–100 million years ago. And the mountain didn't "rise" back then, tepuis were carved out by erosion over a very long time. Suggested fix: "As rochas do Monte Roraima têm cerca de 2 bilhões de anos, entre as mais antigas do planeta, e foram esculpidas pela erosão ao longo de eras, muito antes de América do Sul e África se separarem."
- **Walls "quase 1000 m"**: commonly cited as 400–1000 m depending on the side. "Até cerca de 1000 m" is safer.
- **Difficulty text** says "acessível à maioria" and "recomendamos para pessoas com experiência" together. Pick one.
- **First person "Caminhamos / Recomendamos"** reads like a tour operator. If this text came from an operator's site, rewrite it or credit them (copyright + voice).
- **Makunaima**: Pemon/Macuxi sacred knowledge. Write it as "segundo a tradição Pemon e Macuxi", not as fact, and ideally credit an Indigenous source.

## 4. Open questions

1. Language: the luana.systems card is in English, this text is Portuguese and the image is Spanish. Is the site bilingual, or should this be translated ?
2. Elevation profile: use the image as-is, or rebuild it as a native SVG/HTML in the site's style (accessible, translatable, no third-party watermark) ? Recommended: rebuild, and keep the data table above as the source.
3. Image rights: where does the PNG come from ?

## 5. Implementation notes (for when the code is in the repo)

- New section, probably after the story intro: "O coração do planeta" → "Makunaima" → "De Makunaima a Macunaíma" (could be a 5-step timeline) → "A trilha" (profile + stage list) → "Dificuldade" badge.
- Profile chart: SVG, x = cumulative distance, y = altitude, camp markers with labels; data from section 2; alt text summarising the climb 1050 m → 2750 m.
