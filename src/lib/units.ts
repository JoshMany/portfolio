/**
 * Datos del conversor de unidades "a través de las épocas".
 * Base de conocimiento: public/Documento.pdf
 *
 * Cada unidad guarda su equivalencia con la unidad base de su categoría
 * (metro, kilogramo, litro, segundo), de modo que convertir es:
 *
 *   resultado = valor * factorOrigen / factorDestino
 *
 * `doc`    → la unidad aparece (o se deduce) en Documento.pdf
 * `approx` → valor histórico aproximado → se muestra con "≈"
 */

export type CategoryId = "longitud" | "masa" | "volumen" | "tiempo";

export type EraId = "antiguedad" | "roma" | "medieval" | "moderno";

export interface UnitDef {
  id: string;
  /** Cuántas unidades base contiene 1 unidad de este tipo */
  factor: number;
  era: EraId;
  approx?: boolean;
  doc?: boolean;
}

export interface CategoryDef {
  id: CategoryId;
  /** Símbolo de la unidad base */
  base: string;
  defaultFrom: string;
  defaultTo: string;
  units: UnitDef[];
}

export interface RelationDef {
  category: CategoryId;
  from: string;
  to: string;
}

export interface ExampleDef {
  id: string;
  category: CategoryId;
  from: string;
  to: string;
  value: number;
}

/** Épocas usadas como filtro (unidades del documento) */
export const ERAS: EraId[] = ["antiguedad", "roma", "medieval", "moderno"];

export const CATEGORIES: CategoryDef[] = [
  {
    id: "longitud",
    base: "m",
    defaultFrom: "metro",
    defaultTo: "centimetro",
    units: [
      // Antigüedad — medidas corporales (Documento.pdf §1)
      {
        id: "dedo",
        factor: 0.0186,
        era: "antiguedad",
        approx: true,
        doc: true,
      },
      {
        id: "palma",
        factor: 0.0743,
        era: "antiguedad",
        approx: true,
        doc: true,
      },
      { id: "palmo", factor: 0.22, era: "antiguedad", approx: true, doc: true },
      {
        id: "pieAntiguo",
        factor: 0.28,
        era: "antiguedad",
        approx: true,
        doc: true,
      },
      { id: "codo", factor: 0.52, era: "antiguedad", approx: true, doc: true },
      // Grecia y Roma (Documento.pdf §2)
      { id: "pieRomano", factor: 0.296, era: "roma", approx: true, doc: true },
      { id: "millaRomana", factor: 1480, era: "roma", approx: true, doc: true },
      // Edad Media (Documento.pdf §3)
      { id: "pulgada", factor: 0.0254, era: "medieval", doc: true },
      { id: "pie", factor: 0.3048, era: "medieval", doc: true },
      { id: "yarda", factor: 0.9144, era: "medieval", doc: true },
      { id: "milla", factor: 1609.344, era: "medieval", doc: true },
      // Sistema métrico / SI (Documento.pdf §5-6)
      { id: "milimetro", factor: 0.001, era: "moderno" },
      { id: "centimetro", factor: 0.01, era: "moderno", doc: true },
      { id: "metro", factor: 1, era: "moderno", doc: true },
      { id: "kilometro", factor: 1000, era: "moderno", doc: true },
    ],
  },
  {
    id: "masa",
    base: "kg",
    defaultFrom: "kilogramo",
    defaultTo: "gramo",
    units: [
      // Roma — libra y onza romanas (Documento.pdf §2-3)
      {
        id: "libraRomana",
        factor: 0.32745,
        era: "roma",
        approx: true,
        doc: true,
      },
      {
        id: "onzaRomana",
        factor: 0.0272875,
        era: "roma",
        approx: true,
        doc: true,
      },
      // Edad Media (Documento.pdf §3)
      { id: "grano", factor: 0.00006479891, era: "medieval" },
      { id: "onza", factor: 0.028349523125, era: "medieval", doc: true },
      { id: "libra", factor: 0.45359237, era: "medieval", doc: true },
      // Sistema métrico / SI (Documento.pdf §5-6)
      { id: "miligramo", factor: 1e-6, era: "moderno" },
      { id: "gramo", factor: 0.001, era: "moderno", doc: true },
      { id: "kilogramo", factor: 1, era: "moderno", doc: true },
      { id: "tonelada", factor: 1000, era: "moderno" },
    ],
  },
  {
    id: "volumen",
    base: "L",
    defaultFrom: "litro",
    defaultTo: "mililitro",
    units: [
      { id: "mililitro", factor: 0.001, era: "moderno", doc: true },
      { id: "centilitro", factor: 0.01, era: "moderno" },
      { id: "decilitro", factor: 0.1, era: "moderno" },
      { id: "litro", factor: 1, era: "moderno", doc: true },
      { id: "onzaLiquida", factor: 0.0295735295625, era: "medieval" },
      { id: "pinta", factor: 0.473176473, era: "medieval" },
      { id: "galon", factor: 3.785411784, era: "medieval" },
    ],
  },
  {
    id: "tiempo",
    base: "s",
    defaultFrom: "hora",
    defaultTo: "minuto",
    units: [
      { id: "milisegundo", factor: 0.001, era: "moderno" },
      { id: "segundo", factor: 1, era: "moderno", doc: true },
      { id: "minuto", factor: 60, era: "moderno" },
      { id: "hora", factor: 3600, era: "moderno" },
      { id: "dia", factor: 86400, era: "moderno" },
      { id: "anio", factor: 31557600, era: "moderno" },
    ],
  },
];

/** Unidades base del Sistema Internacional (Documento.pdf §6) */
export const SI_UNITS = ["m", "kg", "s", "A", "K", "mol", "cd"] as const;

/** Relaciones entre unidades mencionadas en el documento */
export const RELATIONS: RelationDef[] = [
  { category: "longitud", from: "metro", to: "centimetro" },
  { category: "longitud", from: "kilometro", to: "metro" },
  { category: "longitud", from: "pie", to: "pulgada" },
  { category: "longitud", from: "codo", to: "metro" },
  { category: "longitud", from: "pieRomano", to: "metro" },
  { category: "longitud", from: "millaRomana", to: "kilometro" },
  { category: "masa", from: "kilogramo", to: "gramo" },
  { category: "volumen", from: "litro", to: "mililitro" },
];

/** Ejemplos resueltos en el documento */
export const EXAMPLES: ExampleDef[] = [
  { id: "ex1", category: "longitud", from: "kilometro", to: "metro", value: 7 },
  {
    id: "ex2",
    category: "longitud",
    from: "centimetro",
    to: "metro",
    value: 350,
  },
  { id: "ex3", category: "masa", from: "kilogramo", to: "gramo", value: 4 },
  {
    id: "ex4",
    category: "volumen",
    from: "litro",
    to: "mililitro",
    value: 2.5,
  },
  {
    id: "ex5",
    category: "longitud",
    from: "metro",
    to: "centimetro",
    value: 3,
  },
  {
    id: "ex6",
    category: "longitud",
    from: "centimetro",
    to: "metro",
    value: 400,
  },
  { id: "ex7", category: "longitud", from: "codo", to: "metro", value: 10 },
  { id: "ex8", category: "longitud", from: "pie", to: "pulgada", value: 5 },
];

export const findCategory = (id: string): CategoryDef | undefined =>
  CATEGORIES.find((category) => category.id === id);

export const findUnit = (
  category: CategoryDef,
  id: string,
): UnitDef | undefined => category.units.find((unit) => unit.id === id);

/** Conversión directa entre dos unidades de la misma categoría */
export const convert = (value: number, from: UnitDef, to: UnitDef): number =>
  (value * from.factor) / to.factor;

/** Unidad mínima necesaria para calcular relaciones entre unidades */
export type Factorized = Pick<UnitDef, "factor">;

/** Relación entre dos unidades: cuántas `to` hay en 1 `from` */
export const ratio = (from: Factorized, to: Factorized): number =>
  from.factor / to.factor;

export interface Operation {
  /** true → valor × operando · false → valor ÷ operando */
  multiply: boolean;
  operand: number;
}

/**
 * Operación con la que se expresa la conversión, siguiendo el criterio del
 * documento: se multiplica cuando la relación es mayor o igual a 1 o cuando es
 * una correspondencia propia de la unidad (1 codo = 0.52 m → × 0.52) y se
 * divide cuando la inversa es exacta (1 cm = 0.01 m → ÷ 100).
 */
export const operation = (from: Factorized, to: Factorized): Operation => {
  const r = ratio(from, to);
  if (r >= 1) return { multiply: true, operand: r };

  const inverse = Math.round(1 / r);
  if (inverse >= 2 && Math.abs(1 / r - inverse) < 1e-9) {
    return { multiply: false, operand: inverse };
  }

  return { multiply: true, operand: r };
};

/** Formatea sin notación científica salvo valores extremos */
export const formatNumber = (value: number, locale: string): string => {
  if (!Number.isFinite(value)) return "—";

  const abs = Math.abs(value);

  if (abs !== 0 && abs < 1e-9) {
    return new Intl.NumberFormat(locale, {
      notation: "scientific",
      maximumFractionDigits: 4,
    }).format(value);
  }

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: abs >= 1e-4 ? 6 : 12,
  }).format(value);
};
