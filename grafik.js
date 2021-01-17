
//Flächendiagramm für Migrationshintergrund Buitenveldert, Zuidas
var migration1 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für Buitenveldert, Zuidas",
        "title":"Migrationshintergrund von Stadtteile",
        "width": 600, "height": 250,
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
        "mark": {"type":"area","line":true, "point" : true },
        "encoding": {
            "x": {
                "title":"",
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "title": "Buitenveldert, Zuidas",
                "field": "prozent",
                "type":"quantitative"
            },
            "color": {
                "field": "Gruppe",
                "scale": {"scheme": "paired"},
                "legend":{
                    "disable":"true"
                }
            },
            "tooltip":[
                {"field": "prozent","type":"quantitative","title":"Mit Migrationshintergrund"},
                {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
            ]
        }
    }

//Flächendiagramm für Migrationshintergrund  IJburg, Zeeburgereiland
var migration2 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für IJburg, Zeeburgereiland",
        "width": 600, "height": 250,
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
                "title":"",
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "title": "IJburg, Zeeburgereiland",
                "field": "prozent",
                "type":"quantitative"
            },
            "color": {
                "field": "Gruppe",
                "scale": {"scheme": "paired"},
                "legend":{
                    "disable":"true"
                }
            },
            "tooltip":[
                {"field": "prozent","type":"quantitative","title":"Mit Migrationshintergrund"},
                {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
            ]
        }
    }

//Flächendiagramm für Migrationshintergrund  Bijlmer-Centrum, Amstel III
var migration3 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für Bijlmer-Centrum, Amstel III",
        "width": 600, "height": 250,
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
                "title":"",
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "title": "Bijlmer-Centrum, Amstel III",
                "field": "prozent",
                "type":"quantitative"
            },
            "color": {
                "field": "Gruppe",
                "scale": {"scheme": "paired"},
                "legend":{
                    "disable":"true"
                }
            },
            "tooltip":[
                {"field": "prozent","type":"quantitative","title":"Mit Migrationshintergrund"},
                {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
            ]
        }
    }

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung1=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "title":"Bewegungsdiagramm von Stadtteile",
        "width": 600, "height": 250,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/Prototyp.json",
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
                "title":"",
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "title": "Buitenveldert, Zuidas",
                "field": "Kennzahl",
                "type":"quantitative"
            },
            "color": {
                "field": "Dimension",
                "scale": {"range": [ "#A50909", "#F08383","#169608","#8AD382", "#000000"]}

            },
            "tooltip":[
                {"field": "Kennzahl","type":"quantitative","title":"Anzahl"},
                {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
            ]
        }
    }

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung2=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 250,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/Prototyp.json",
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
                "title":"",
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "title": "IJburg, Zeeburgereiland",
                "field": "Kennzahl",
                "type":"quantitative"
            },
            "color": {
                "field": "Dimension",
                "scale": {"range": [ "#A50909", "#F08383","#169608","#8AD382", "#000000"]},
                "legend":{
                    "disable":"true"
                }
            },
            "tooltip":[
                {"field": "Kennzahl","type":"quantitative","title":"Anzahl"},
                {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
            ]
        }
    }

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung3=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 250,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/Prototyp.json",
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
                "title":"",
                "field": "Jahr",
                "type": "ordinal",
                "timeUnit" :"year"

            },
            "y": {
                "title": "Bijlmer-Centrum, Amstel III",
                "field": "Kennzahl",
                "type":"quantitative"
            },
            "color": {
                "field": "Dimension",
                "scale": {"range": [ "#A50909", "#F08383","#169608","#8AD382", "#000000"]},
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

//Filter für Karte nach Jahren
function changeSelect() {
    if (document.getElementById("dropBox").value == "2018") {
        document.getElementsByClassName("map").id = "mapp18";
    }
    /*
    else if (document.getElementById("dropBox").value == "2") {
        document.getElementById("divText").innerHTML = "[HEADER] [DATE] [COUNT] ...";
    } else if (document.getElementById("dropBox").value == "3") {
        document.getElementById("divText").innerHTML = "[HEADER] ...";
    } else if (document.getElementById("dropBox").value == "4") {
        document.getElementById("divText").innerHTML = "NOTE [DATE] ...";
    }
    */

}



var map19=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "width": 400,
        "height": 600,
        "title":"Migrationshintergrund Ration von Jahr 2019",
        "data": {
            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/geojson.json",
            "format": {
                "property": "features"}
        },
        "transform": [
            {
                "lookup": "properties.Gebied_naam",
                "from": {
                    "data": {
                        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
                        "format":{
                            "type":"json",
                            "parse":{
                                "Jahr":"number"
                            }
                        },
                        "transform": [
                            {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
                            {"filter":"datum.Jahr ===2019"}]
                    },

                    "key": "Stadtteil",
                    "fields": ["Kennzahl"]
                }
            }
        ],
        "projection": {"type": "mercator"},
        "mark": {
            "type": "geoshape",
            "stroke": "#757575",
            "strokeWidth": 0.5
        },
        "encoding": {
            "color": {
                "field": "Kennzahl",
                "type": "quantitative",
                "scale":{"scheme":"Blues"}
            },
            "tooltip": [
                {"field": "properties.Gebied_naam", "type": "nominal", "title": "Name"},
                {"field":"Kennzahl",
                    "type": "quantitative",
                    "title":"Migrationshintergrund Ratio"}
            ]
        }
    }

var map18=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "width": 500,
        "height": 800,
        "title":"Migrationshintergrund Ration von Jahr 2018",
        "data": {
            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/geojson.json",
            "format": {
                "property": "features"}
        },
        "transform": [
            {
                "lookup": "properties.Gebied_naam",
                "from": {
                    "data": {
                        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
                        "format":{
                            "type":"json",
                            "parse":{
                                "Jahr":"number"
                            }
                        },
                        "transform": [
                            {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
                            {"filter":"datum.Jahr ===2018"}]
                    },

                    "key": "Stadtteil",
                    "fields": ["Kennzahl"]
                }
            }
        ],
        "projection": {"type": "mercator"},
        "mark": {
            "type": "geoshape",
            "stroke": "#757575",
            "strokeWidth": 0.5
        },
        "encoding": {
            "color": {
                "field": "Kennzahl",
                "type": "quantitative",
                "scale":{"scheme":"Blues"}
            },
            "tooltip": [
                {"field": "properties.Gebied_naam", "type": "nominal", "title": "Name"},
                {"field":"Kennzahl",
                    "type": "quantitative",
                    "title":"Migrationshintergrund Ratio"}
            ]
        }
    }
    /*
    var mapp18 ={
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/data/prototyp.json",
    "format":{
      "type":"json",
      "parse":{
        "Jahr":"number"
      }
    }
  },
  "transform": [
    {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
    {"filter":"datum.Jahr ===2019"},
    {
      "lookup": "Stadtteil",
      "from": {
        "data": {
          "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/main/geojson.json",
          "format": {
            "property": "features"
          }
        },
        "key": "properties.Gebied_naam"
      },
      "as": "geo"
    }
  ],
  "projection": {"type": "mercator"},
  "mark": "geoshape",
  "encoding": {
    "shape": {"field": "geo", "type": "geojson"},
    "color": {"field": "Kennzahl", "type": "quantitative"}
  }
}
*/
