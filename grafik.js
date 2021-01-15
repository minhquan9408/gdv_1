
//Flächendiagramm für E West, Bos en Lommer
var areastacked1 =
    {
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "description": "Flächendiagramm für E West, Bos en Lommer",
      "width": 600, "height": 200,
      "data": {"url": "data/migration.json",
        "format": {
          "type": "json",
          "parse": {
            "Jahr": "number"
          }
        }
      },
      "transform": [
          {"filter" :"datum.Jahr>2005"},
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
          "scale": {"scheme": "paired"},
            "legend":{
                "disable":"true"
            }
        }
      }
    }

//Flächendiagramm für M Oost, Indische Buurt, Oostelijk Havengebied
var areastacked2 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        description: "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 200,
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
                "scale": {"scheme": "paired"},
                "legend":{
                    "disable":"true"
                }
            }
        }
    }

//Flächendiagramm für K Zuid, DX11 Buitenveldert, Zuidas
var areastacked3 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        description: "Flächendiagramm für K Zuid, Buitenveldert, Zuidas",
        "width": 600, "height": 200,
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
                "scale": {"scheme": "paired"},
                "legend":{
                    "disable":"true"
                }
            }
        }
    }

//Kreis Diagramm Stolervaart 2019
var kreis =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "A simple pie chart with labels.",
        "data": { url : "data/bewegung1.json"
        },

        "encoding": {
            "theta": {"field": "Anzahl", "aggregate":"sum", "type": "quantitative", "stack": true},
            "color": {"field": "Gruppe", "type": "nominal", "legend": null}
        },
        "layer": [{
            "mark": {"type": "arc", "outerRadius": 80}
        }, {
            "mark": {"type": "text", "radius": 93},
            "encoding": {
                "text": {"field": "Anzahl",aggregate:"sum", "type": "nominal"}
            }
        }],
        "view": {"stroke": null}
    }
    /*
 var kreis1 =
     {
         "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
         "description": "A simple pie chart with labels.",
         "data": { url : "data/bewegung.json"
         },
         transform :[
             {filter: datum.Jahr == 2019},
             {filter: datum.Stadtteil ==="DX09 Slotervaart" }
         ],
         "encoding": {
             "theta": {"field": "Anzahl", "aggregate":"sum", "type": "quantitative", "stack": true},
             "color": {"field": "Gruppe", "type": "nominal"}
         },
         "layer": [{
             "mark": {"type": "arc", "outerRadius": 80}
         }, {
             "mark": {"type": "text", "radius": 90},
             "encoding": {
                 "text": {"field": "Gruppe", "type": "nominal"}
             }
         }],
         "view": {"stroke": null}
     }
     */

var map3=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "width": 200,
        "height": 200,
        "data": {
            "url": "geojson.json",
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

var map4 =
    {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": 300,
    "height": 200,
    "config": {"view": {"stroke": "transparent"}},
    "data": {
    "url": "geojson.json",
        "format": {
        "type": "topojson",
            "feature": "features"}
},
    "mark": {"type": "geoshape", "stroke": "white", "strokeWidth": 2},
    "encoding": {"color": {"value": "#eee"}}
}