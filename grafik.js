
//Flächendiagramm für Migrationshintergrund Buitenveldert, Zuidas
var migration1 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für Buitenveldert, Zuidas",
        "width": 600, "height": 200,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"

                }
            }
        },
        "transform": [
            {"filter":"datum.Dimension ==='Mit Migrationshintergrund'"},
            {"filter": "datum.Stadtteil ==='Buitenveldert, Zuidas'"},
            {"calculate": "datum.Kennzahl *100", "as":"prozent"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}

        ],
        "mark": {"type":"area","line":true, "point" : true  },
        "encoding": {
            "x": {
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {

                "field": "prozent",
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

//Flächendiagramm für Migrationshintergrund  IJburg, Zeeburgereiland
var migration2 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für IJburg, Zeeburgereiland",
        "width": 600, "height": 200,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"

                }
            }
        },
        "transform": [
            {"filter":"datum.Dimension ==='Mit Migrationshintergrund'"},
            {"filter": "datum.Stadtteil ==='IJburg, Zeeburgereiland'"},
            {"calculate": "datum.Kennzahl *100", "as":"prozent"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}

        ],
        "mark": {"type":"area","line":true, "point" : true  },
        "encoding": {
            "x": {
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {

                "field": "prozent",
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

//Flächendiagramm für Migrationshintergrund  Bijlmer-Centrum, Amstel III
var migration3 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für Bijlmer-Centrum, Amstel III",
        "width": 600, "height": 200,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"

                }
            }
        },
        "transform": [
            {"filter":"datum.Dimension ==='Mit Migrationshintergrund'"},
            {"filter": "datum.Stadtteil ==='Bijlmer-Centrum, Amstel III'"},
            {"calculate": "datum.Kennzahl *100", "as":"prozent"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}

        ],
        "mark": {"type":"area","line":true, "point" : true  },
        "encoding": {
            "x": {
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {

                "field": "prozent",
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

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung1=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 200,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"
                }}
        },
        "transform": [
            {"filter":"datum.Dimension !== 'Mit'"},
            {
                "filter": "datum.Stadtteil ==='Buitenveldert, Zuidas'"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}
        ],
        "mark": {"type":"area","line":true  },
        "encoding": {
            "x": {
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "field": "Kennzahl",
                "type":"quantitative"
            },
            "color": {
                "field": "Dimension",
                "scale": {"range": [ "#A50909", "#F08383","#169608","#8AD382", "#000000"]}

            }
        }
    }

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung2=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 200,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"
                }}
        },
        "transform": [
            {"filter":"datum.Dimension !== 'Mit'"},
            {
                "filter": "datum.Stadtteil ==='IJburg, Zeeburgereiland'"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}
        ],
        "mark": {"type":"area","line":true  },
        "encoding": {
            "x": {
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "field": "Kennzahl",
                "type":"quantitative"
            },
            "color": {
                "field": "Dimension",
                "scale": {"range": [ "#A50909", "#F08383","#169608","#8AD382", "#000000"]}

            }
        }
    }

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung3=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 200,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"
                }}
        },
        "transform": [
            {"filter":"datum.Dimension !== 'Mit'"},
            {
                "filter": "datum.Stadtteil ==='Bijlmer-Centrum, Amstel III'"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}
        ],
        "mark": {"type":"area","line":true  },
        "encoding": {
            "x": {
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "field": "Kennzahl",
                "type":"quantitative"
            },
            "color": {
                "field": "Dimension",
                "scale": {"range": [ "#A50909", "#F08383","#169608","#8AD382", "#000000"]}

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