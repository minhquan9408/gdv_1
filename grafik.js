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


//Flächendiagramm für E West, Bos en Lommer
var areastacked1 =
    {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      description: "Flächendiagramm für E West, Bos en Lommer",
      "width": 600, "height": 300,
      "data": {"url": "data/migration.json",
        "format": {
          "type": "json",
          "parse": {
            "Jahr": "number"
          }
        }
      },
      "transform": [
        {"filter": "datum.Stadtteil ==='DX04 Bos en Lommer'"},
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},

      ],
      "mark": {"type":"area","line":true, "point" : true  },
      "encoding": {
        "x": {
          "field": "Jahr",
          "type": "ordinal",
          "timeUnit" :"year",
          //"axis": {"format": "%Y"}
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

//Flächendiagramm für M Oost, Indische Buurt, Oostelijk Havengebied
var areastacked2 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        description: "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 300,
        "data": {"url": "data/migration.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"
                }
            }
        },
        "transform": [
            {"filter": "datum.Stadtteil ==='DX14 Indische Buurt, Oostelijk Havengebied'"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},

        ],
        "mark": {"type":"area","line":true, "point" : true  },
        "encoding": {
            "x": {
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year",
                //"axis": {"format": "%Y"}
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

//Flächendiagramm für K Zuid, DX11 Buitenveldert, Zuidas
var areastacked3 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        description: "Flächendiagramm für K Zuid, Buitenveldert, Zuidas",
        "width": 600, "height": 300,
        "data": {"url": "data/migration.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"
                }
            }
        },
        "transform": [
            {"filter": "datum.Stadtteil ==='DX11 Buitenveldert, Zuidas'"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},

        ],
        "mark": {"type":"area","line":true, "point" : true  },
        "encoding": {
            "x": {
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year",
                //"axis": {"format": "%Y"}
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