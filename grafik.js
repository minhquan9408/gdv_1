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

  data: { url : "data/kreis.json"},
  mark: "arc",
  encoding: {
    color: { field: "stadtbezirke", type: "nominal" },
    theta: { field: "anzahl", type: "quantitative", aggregate: "sum"}
  },

view: {stroke: null}
};

var bar = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",

  data: { url : "data/kreis.json"},
  mark: "bar",
  encoding: {
    x: { field: "stadtbezirke", type: "nominal" },
    y: { field: "anzahl", type: "quantitative", aggragate: "sum" }
  },

};


var map = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  description: "the population per state, engineers per state, and hurricanes per state",
  repeat: {"row": ["population", "engineers", "hurricanes"]},
  resolve: {
    scale: {
      color: "independent"
    }
  },
  spec: {
    width: 500,
    height: 300,
    data: {
      url: "data/population_engineers_hurricanes.csv"
    },
    transform: [
      {
        lookup: "id",
        from: {
          data: {
          url: "data/us-10m.json",
            format: {
              type: "topojson",
              feature: "states"
            }
          },
          key: "id"
        },
        as: "geo"
      }
    ],
    projection: {type: "albersUSA"},
    mark: "geoshape",
    encoding: {
      shape: {
        field: "geo",
        type: "geojson"
      },
      color: {
        field: {"repeat": "row"},
        type: "quantitative"
      }
    }
  }
};


var map4=
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "data/mapgeojson.topojson",
    "format": {
      "type": "topojson",
      "feature": "mapgeojson"
    }
  },
  "transform": [{
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
}
