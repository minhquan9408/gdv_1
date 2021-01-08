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

  data: { url : "data/kreis.csv"},
  mark: "arc",
  encoding: {
    color: { field: "stadtbezirke", type: "nominal" },
    theta: { field: "anzahl", type: "quantitative", aggregate: "sum"}
  },

view: {stroke: null}
};

var bar = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",

  data: { url : "data/kreis.csv"},
  mark: "bar",
  encoding: {
    x: { field: "stadtbezirke", type: "nominal" },
    y: { field: "anzahl", type: "quantitative", aggragate: "sum" }
  },

};





var areastacked =
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": 300, "height": 200,
    "data": {"url": "data/migration_e_west.json"},
  "mark": "area",
    "encoding": {
  "x": {
    "field": "Jahr",
    "type": "temporal",
     "axis": {"format": "%Y"}
  },
  "y": {
    "aggregate": "sum",
    "field": "Anzahl",
    "type":"quantitative"
  },
  "color": {
    "field": "Gruppe",
        "scale": {"scheme": "paired"}
  }
}
}

