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




var map3=
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "data/mapgeojson.json",
    "format": {
      "property":"properties"
    }
  },
  "transform": [
  //  {"filter": "isValid(datum.Gebied_code)"}
    {
    "lookup": "id",
    "from": {
      "data": {
        "url": "data/bevolkerung-2019.csv"
      },
      "key": "Gebied_code",
      "fields": ["anzahl"]
    }
  }],
  "projection": {
    "type": "albersUsa"
  },
  "mark": "geoshape",
  "encoding": {
    "color": {
      "field": "anzahl",
      "type": "quantitative"
    }
  }
};
var areastacked =
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": 300, "height": 200,
    "data": {"url": "data/unemployment-across-industries.json"},
  "mark": "area",
    "encoding": {
  "x": {
    "timeUnit": "yearmonth", "field": "date",
        "axis": {"format": "%Y"}
  },
  "y": {
    "aggregate": "sum", "field": "count"
  },
  "color": {
    "field": "series",
        "scale": {"scheme": "category20b"}
  }
}
}

