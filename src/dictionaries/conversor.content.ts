import { t, type Dictionary } from "intlayer";

const conversorContent = {
  key: "conversor",
  content: {
    meta: {
      title: t({
        en: "Unit converter across the ages · Manuel Muñoz",
        es: "Conversor de unidades a través de las épocas · Manuel Muñoz",
      }),
    },
    hero: {
      kicker: t({
        en: "Internal tool · temporary",
        es: "Herramienta interna · temporal",
      }),
      heading: t({
        en: "Unit conversion across the ages",
        es: "Conversión de unidades a través de las épocas",
      }),
      intro: t({
        en: "A converter of ancient and modern units built from the document “Conversión de unidades a través de las épocas”: from the Egyptian cubit and the Roman foot to the International System of Units. Values marked with ≈ are historical approximations, so the results are approximate too.",
        es: "Un conversor de unidades antiguas y modernas construido a partir del documento «Conversión de unidades a través de las épocas»: del codo egipcio y el pie romano al Sistema Internacional de Unidades. Los valores marcados con ≈ son aproximaciones históricas, por lo que los resultados también son aproximados.",
      }),
      back: t({
        en: "Back to portfolio",
        es: "Volver al portafolio",
      }),
      status: "STATUS:TEMP",
      source: "SRC:Documento.pdf",
      nav: "NAV:OFF",
      index: "INDEX:NO",
      base: t({ en: "BASE", es: "BASE" }),
    },
    tool: {
      sectionLabel: t({ en: "Converter", es: "Conversor" }),
      heading: t({
        en: "Ancient ↔ modern units",
        es: "Unidades antiguas ↔ modernas",
      }),
      valueLabel: t({ en: "Value", es: "Valor" }),
      fromLabel: t({ en: "From", es: "De" }),
      toLabel: t({ en: "To", es: "A" }),
      swap: t({ en: "Swap", es: "Invertir" }),
      eraLabel: t({ en: "Era", es: "Época" }),
      allEras: t({ en: "All eras", es: "Todas las épocas" }),
      resultLabel: t({ en: "Result", es: "Resultado" }),
      allUnitsLabel: t({
        en: "Same value in every unit",
        es: "Mismo valor en todas las unidades",
      }),
      multiply: t({ en: "Multiply", es: "Multiplicar" }),
      divide: t({ en: "Divide", es: "Dividir" }),
      relationLabel: t({ en: "Relation", es: "Relación" }),
      noUnits: t({
        en: "There are no units from this era in this category.",
        es: "No hay unidades de esta época en esta categoría.",
      }),
      legendApprox: t({
        en: "≈ approximate historical value",
        es: "≈ valor histórico aproximado",
      }),
      legendDoc: t({
        en: "DOC = unit named in the source document",
        es: "DOC = unidad citada en el documento fuente",
      }),
      empty: t({ en: "Enter a value", es: "Escribe un valor" }),
      inlineNote: t({
        en: "Ancient units were not universal: the same name could have different values depending on the region, so every conversion is approximate.",
        es: "Las unidades antiguas no eran universales: una misma unidad podía tener valores diferentes según la región, por lo que toda conversión es aproximada.",
      }),
    },
    categories: {
      longitud: t({ en: "Length", es: "Longitud" }),
      masa: t({ en: "Mass", es: "Masa" }),
      volumen: t({ en: "Volume", es: "Volumen" }),
      tiempo: t({ en: "Time", es: "Tiempo" }),
    },
    eras: {
      antiguedad: t({ en: "Antiquity", es: "Antigüedad" }),
      roma: t({ en: "Greece & Rome", es: "Grecia y Roma" }),
      medieval: t({ en: "Middle Ages", es: "Edad Media" }),
      moderno: t({ en: "Metric / SI", es: "Métrico / SI" }),
    },
    units: {
      dedo: t({ en: "Finger", es: "Dedo" }),
      palma: t({ en: "Palm (Egypt)", es: "Palma (Egipto)" }),
      palmo: t({ en: "Span", es: "Palmo" }),
      pieAntiguo: t({ en: "Ancient foot", es: "Pie antiguo" }),
      codo: t({ en: "Cubit", es: "Codo" }),
      pieRomano: t({ en: "Roman foot", es: "Pie romano" }),
      millaRomana: t({ en: "Roman mile", es: "Milla romana" }),
      pulgada: t({ en: "Inch", es: "Pulgada" }),
      pie: t({ en: "Foot", es: "Pie" }),
      yarda: t({ en: "Yard", es: "Yarda" }),
      milla: t({ en: "Mile", es: "Milla" }),
      milimetro: t({ en: "Millimeter", es: "Milímetro" }),
      centimetro: t({ en: "Centimeter", es: "Centímetro" }),
      metro: t({ en: "Meter", es: "Metro" }),
      kilometro: t({ en: "Kilometer", es: "Kilómetro" }),
      libraRomana: t({ en: "Roman pound", es: "Libra romana" }),
      onzaRomana: t({ en: "Roman ounce", es: "Onza romana" }),
      grano: t({ en: "Grain", es: "Grano" }),
      onza: t({ en: "Ounce", es: "Onza" }),
      libra: t({ en: "Pound", es: "Libra" }),
      miligramo: t({ en: "Milligram", es: "Miligramo" }),
      gramo: t({ en: "Gram", es: "Gramo" }),
      kilogramo: t({ en: "Kilogram", es: "Kilogramo" }),
      tonelada: t({ en: "Tonne", es: "Tonelada" }),
      mililitro: t({ en: "Milliliter", es: "Mililitro" }),
      centilitro: t({ en: "Centiliter", es: "Centilitro" }),
      decilitro: t({ en: "Deciliter", es: "Decilitro" }),
      litro: t({ en: "Liter", es: "Litro" }),
      onzaLiquida: t({ en: "Fluid ounce (US)", es: "Onza líquida (US)" }),
      pinta: t({ en: "Pint (US)", es: "Pinta (US)" }),
      galon: t({ en: "Gallon (US)", es: "Galón (US)" }),
      milisegundo: t({ en: "Millisecond", es: "Milisegundo" }),
      segundo: t({ en: "Second", es: "Segundo" }),
      minuto: t({ en: "Minute", es: "Minuto" }),
      hora: t({ en: "Hour", es: "Hora" }),
      dia: t({ en: "Day", es: "Día" }),
      anio: t({ en: "Year", es: "Año" }),
    },
    timeline: {
      sectionLabel: t({ en: "Timeline", es: "Cronología" }),
      heading: t({
        en: "How measurement evolved",
        es: "Cómo evolucionó la medición",
      }),
      intro: t({
        en: "From body parts and everyday objects to a universal system: the six stages described in the document.",
        es: "De las partes del cuerpo y los objetos cotidianos a un sistema universal: las seis etapas descritas en el documento.",
      }),
      eras: [
        {
          id: "antiguedad",
          title: t({ en: "1. Antiquity", es: "1. Antigüedad" }),
          text: t({
            en: "There was no universal system of measures: every people used its own. Egyptians used the cubit — the distance from the elbow to the fingertips — plus smaller units like the palm and the finger. Other cultures measured with the finger, the span, the foot and the cubit.",
            es: "No existía un sistema universal de medidas: cada pueblo usaba las suyas. Los egipcios utilizaban el codo —la distancia del codo a la punta de los dedos— y unidades menores como la palma y el dedo. Otras culturas medían con el dedo, el palmo, el pie y el codo.",
          }),
        },
        {
          id: "roma",
          title: t({ en: "2. Greece and Rome", es: "2. Grecia y Roma" }),
          text: t({
            en: "Greeks and later Romans developed more organised systems. Romans used the Roman foot and the Roman mile — about 5,000 Roman feet — to build roads, buildings and cities.",
            es: "Los griegos y después los romanos desarrollaron sistemas más organizados. Los romanos usaban el pie romano y la milla romana —unos 5,000 pies romanos— para construir caminos, edificios y ciudades.",
          }),
        },
        {
          id: "medieval",
          title: t({ en: "3. Middle Ages", es: "3. Edad Media" }),
          text: t({
            en: "Many ancient units survived, but with regional variations: inch, foot, yard, mile, pound and ounce. The problem was that the same unit could have different values depending on the place.",
            es: "Muchas unidades antiguas continuaron usándose, pero con variaciones por región: pulgada, pie, yarda, milla, libra y onza. El problema era que una misma unidad podía tener valores diferentes según el lugar.",
          }),
        },
        {
          id: "moderna",
          title: t({ en: "4. Early modern age", es: "4. Edad Moderna" }),
          text: t({
            en: "Between the 16th and 18th centuries, trade, navigation, construction and science demanded more precise measures. The huge number of different units caused real problems, which made a uniform system necessary.",
            es: "Entre los siglos XVI y XVIII, el comercio, la navegación, la construcción y la ciencia exigieron medidas más precisas. La gran cantidad de unidades diferentes provocaba problemas reales, lo que hizo necesario un sistema uniforme.",
          }),
        },
        {
          id: "metrico",
          title: t({
            en: "5. Birth of the metric system",
            es: "5. Nacimiento del sistema métrico",
          }),
          text: t({
            en: "During the French Revolution, at the end of the 18th century, the decimal metric system was developed. Its main feature: units convert using multiples of 10, so 1 m = 100 cm and 1 km = 1,000 m.",
            es: "Durante la Revolución francesa, a finales del siglo XVIII, se desarrolló el sistema métrico decimal. Su característica principal: las unidades se convierten con múltiplos de 10, así 1 m = 100 cm y 1 km = 1,000 m.",
          }),
        },
        {
          id: "contemporanea",
          title: t({ en: "6. Contemporary era", es: "6. Época contemporánea" }),
          text: t({
            en: "Science and technology required even more precision, so the metric system evolved into the International System of Units (SI), used today in most of the world.",
            es: "La ciencia y la tecnología exigieron todavía mayor precisión, así que el sistema métrico evolucionó hasta el Sistema Internacional de Unidades (SI), usado hoy en gran parte del mundo.",
          }),
        },
      ],
    },
    relations: {
      sectionLabel: t({ en: "Key relations", es: "Relaciones clave" }),
      heading: t({
        en: "The equivalences behind every conversion",
        es: "Las equivalencias detrás de cada conversión",
      }),
      intro: t({
        en: "To convert you first need to know the relation between two units. These are the relations given in the document; the decimal ones are exact and the historical ones are approximate.",
        es: "Para convertir primero debemos saber qué relación existe entre las unidades. Estas son las relaciones dadas en el documento; las decimales son exactas y las históricas, aproximadas.",
      }),
      one: t({ en: "1", es: "1" }),
    },
    examples: {
      sectionLabel: t({ en: "Solved examples", es: "Ejemplos resueltos" }),
      heading: t({
        en: "Load an example into the converter",
        es: "Carga un ejemplo en el conversor",
      }),
      intro: t({
        en: "The worked examples from the document, with the result already computed. Click one to load it in the tool above.",
        es: "Los ejemplos resueltos del documento, con el resultado ya calculado. Haz clic en uno para cargarlo en la herramienta de arriba.",
      }),
      load: t({ en: "Load", es: "Cargar" }),
      step: t({ en: "Step", es: "Paso" }),
    },
    rule: {
      sectionLabel: t({ en: "Rule", es: "Regla" }),
      heading: t({
        en: "Multiply or divide?",
        es: "¿Multiplicar o dividir?",
      }),
      intro: t({
        en: "A simple way to remember it: moving from a bigger unit to a smaller one multiplies, and moving from a smaller unit to a bigger one divides. The converter shows which operation it used.",
        es: "Una forma sencilla de recordarlo: de una unidad grande a una más pequeña se multiplica, y de una unidad pequeña a una más grande se divide. El conversor te indica qué operación usó.",
      }),
      bigToSmall: t({
        en: "Bigger → smaller: multiply",
        es: "Grande → pequeña: multiplicar",
      }),
      bigToSmallText: t({
        en: "meters → centimeters · 3 m × 100 = 300 cm",
        es: "metros → centímetros · 3 m × 100 = 300 cm",
      }),
      smallToBig: t({
        en: "Smaller → bigger: divide",
        es: "Pequeña → grande: dividir",
      }),
      smallToBigText: t({
        en: "centimeters → meters · 300 cm ÷ 100 = 3 m",
        es: "centímetros → metros · 300 cm ÷ 100 = 3 m",
      }),
    },
    si: {
      sectionLabel: t({ en: "SI base units", es: "Unidades base del SI" }),
      heading: t({
        en: "The International System of Units",
        es: "El Sistema Internacional de Unidades",
      }),
      intro: t({
        en: "With the development of science and technology the metric system evolved into the SI, used today in most of the world. Its seven base units are:",
        es: "Con el desarrollo de la ciencia y la tecnología el sistema métrico evolucionó hasta el SI, usado hoy en gran parte del mundo. Sus siete unidades base son:",
      }),
      symbolHeader: t({ en: "Symbol", es: "Símbolo" }),
      nameHeader: t({ en: "Unit", es: "Unidad" }),
      quantityHeader: t({ en: "Quantity", es: "Magnitud" }),
      conclusionTitle: t({ en: "Conclusion", es: "Conclusión" }),
      conclusion: t({
        en: "Units of measure have changed a lot throughout history. Antiquity relied on body parts and everyday objects; then came more organised systems, like those of the Greeks and Romans. During the modern age the need for a universal system became clear, leading to the metric system and later to the SI. Today we convert units using established relations, mainly by multiplying and dividing, which lets us express the same quantity in different ways.",
        es: "Las unidades de medida han cambiado mucho a lo largo de la historia. En la antigüedad se usaban principalmente partes del cuerpo y objetos como referencia; después aparecieron sistemas más organizados, como los de griegos y romanos. Durante la Edad Moderna se hizo evidente la necesidad de un sistema universal, lo que llevó al sistema métrico y posteriormente al SI. Actualmente convertimos unidades usando relaciones establecidas, principalmente mediante multiplicaciones y divisiones, lo que permite expresar una misma cantidad de diferentes maneras.",
      }),
      units: [
        {
          symbol: "m",
          name: t({ en: "Meter", es: "Metro" }),
          quantity: t({ en: "Length", es: "Longitud" }),
        },
        {
          symbol: "kg",
          name: t({ en: "Kilogram", es: "Kilogramo" }),
          quantity: t({ en: "Mass", es: "Masa" }),
        },
        {
          symbol: "s",
          name: t({ en: "Second", es: "Segundo" }),
          quantity: t({ en: "Time", es: "Tiempo" }),
        },
        {
          symbol: "A",
          name: t({ en: "Ampere", es: "Amperio" }),
          quantity: t({ en: "Electric current", es: "Corriente eléctrica" }),
        },
        {
          symbol: "K",
          name: t({ en: "Kelvin", es: "Kelvin" }),
          quantity: t({ en: "Temperature", es: "Temperatura" }),
        },
        {
          symbol: "mol",
          name: t({ en: "Mole", es: "Mol" }),
          quantity: t({
            en: "Amount of substance",
            es: "Cantidad de sustancia",
          }),
        },
        {
          symbol: "cd",
          name: t({ en: "Candela", es: "Candela" }),
          quantity: t({
            en: "Luminous intensity",
            es: "Intensidad luminosa",
          }),
        },
      ],
    },
  },
} satisfies Dictionary;

export default conversorContent;
