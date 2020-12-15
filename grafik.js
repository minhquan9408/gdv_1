var beispiel1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  description: "A simple bar chart with embedded data.",
  data: {
    values: [
      { a: "A", b: 28 },
      { a: "B", b: 55 },
      { a: "C", b: 43 },
      { a: "D", b: 91 },
      { a: "E", b: 81 },
      { a: "F", b: 53 },
      { a: "G", b: 19 },
      { a: "H", b: 87 },
      { a: "I", b: 52 }
    ]
  },
  mark: "bar",
  encoding: {
    x: { field: "a", type: "ordinal" },
    y: { field: "b", type: "quantitative" }
  }
};

var beispiel2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",

  data: {
    values: [
      { a: "C", b: 2 },
      { a: "C", b: 7 },
      { a: "C", b: 4 },
      { a: "D", b: 1 },
      { a: "D", b: 2 },
      { a: "D", b: 6 },
      { a: "E", b: 8 },
      { a: "E", b: 4 },
      { a: "E", b: 7 }
    ]
  },
  mark: "point",
  encoding: {
    x: { field: "a", type: "nominal" },
    y: { field: "b", type: "quantitative" }
  }
};
