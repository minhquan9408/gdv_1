
//Flächendiagramm für Migrationshintergrund Buitenveldert, Zuidas
var migration1 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für Buitenveldert, Zuidas",
        "title":{
            "text":"Anteil Migrationshintergrund von Stadtteile in Prozent",
            "fontSize": 20
        },
        "width": 600, "height": 280,
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
                "timeUnit" :"year",
                "axis": {
                    "labelFontSize":13
                }

            },
            "y": {
                "title": "Buitenveldert, Zuidas",
                "field": "prozent",
                "type":"quantitative",
                "axis": {
                    "labelFontSize":13,
                    "titleFontSize":16
                }
            },
            "color": {
                "field": "Gruppe",
                "scale": {"scheme": "paired"},
                "legend":{
                    "disable":"true"
                }
            },
            "tooltip":[
                {"field": "prozent","type":"quantitative","title":"Mit Migrationshintergrund","format":".1f"},
                {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
            ]
        }
    }

//Flächendiagramm für Migrationshintergrund  IJburg, Zeeburgereiland
var migration2 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für IJburg, Zeeburgereiland",
        "width": 600, "height": 280,
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
                "timeUnit" :"year",
                "axis": {
                    "labelFontSize":13
                }

            },
            "y": {
                "title": "IJburg, Zeeburgereiland",
                "field": "prozent",
                "type":"quantitative",
                "axis": {
                    "labelFontSize":13,
                    "titleFontSize":16
                }
            },
            "color": {
                "field": "Gruppe",
                "scale": {"scheme": "paired"},
                "legend":{
                    "disable":"true"
                }
            },
            "tooltip":[
                {"field": "prozent","type":"quantitative","title":"Mit Migrationshintergrund","format":".1f"},
                {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
            ]
        }
    }

//Flächendiagramm für Migrationshintergrund  Bijlmer-Centrum, Amstel III
var migration3 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für Bijlmer-Centrum, Amstel III",
        "width": 600, "height": 280,
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
                "timeUnit" :"year",
                "axis": {
                    "labelFontSize":13
                }

            },
            "y": {
                "title": "Bijlmer-Centrum, Amstel III",
                "field": "prozent",
                "type":"quantitative",
                "axis": {
                    "labelFontSize":13,
                    "titleFontSize":16
                }
            },
            "color": {
                "field": "Gruppe",
                "scale": {"scheme": "paired"},
                "legend":{
                    "disable":"true"
                }
            },
            "tooltip":[
                {"field": "prozent","type":"quantitative","title":"Mit Migrationshintergrund","format":".1f"},
                {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
            ]
        }
    }

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung1=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "title":{
            "text":"Bewegungsdiagramm von Stadtteile",
            "fontSize": 20
        },
        "width": 600, "height": 280,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/Prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"
                }}
        },
        "transform": [
            {"filter":"datum.Dimension !== 'Mit'"},
            {"filter":"datum.Dimension !== 'Saldo'"},
            {"filter": "datum.Stadtteil ==='Buitenveldert, Zuidas'"},

            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}
        ],
        "layer": [{ "mark": {"type":"line","line":true  },
            "encoding": {
                "x": {
                    "title":"",
                    "field": "Jahr",
                    "type": "ordinal",
                    "timeUnit" :"year",
                    "axis": {
                        "labelFontSize":13
                    }

                },
                "y": {
                    "aggregate":"sum",
                    "title": "Buitenveldert, Zuidas",
                    "field": "Kennzahl",
                    "type":"quantitative",
                    "axis": {
                        "labelFontSize":13,
                        "titleFontSize":16
                    }

                }
            }},
            {
                "mark": {"type":"area","line":true  },
                "encoding": {
                    "x": {
                        "title":"",
                        "field": "Jahr",
                        "type": "ordinal",
                        "timeUnit" :"year",
                        "axis": {
                            "labelFontSize":13
                        }

                    },
                    "y": {
                        "title": "Buitenveldert, Zuidas",
                        "field": "Kennzahl",
                        "type":"quantitative",
                        "axis": {
                            "labelFontSize":13,
                            "titleFontSize":16
                        }
                    },
                    "color": {
                        "field": "Dimension",
                        "scale": {"range": [ "#199013","#6DC568","#E17C75","#A42016"]},
                        "legend":{
                            "labelFontSize": 13,
                            "titleFontSize": 20

                        },   "sort": {"op": "sum", "field": "Kennzahl", "order":"descending"}
                    },
                    "tooltip":[
                        {"field": "Kennzahl","type":"quantitative","title":"Anzahl"},
                        {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
                    ]
                }
            }

        ]
    }

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung2=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 280,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/Prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"
                }}
        },
        "transform": [
            {"filter":"datum.Dimension !== 'Mit'"},
            {"filter":"datum.Dimension !== 'Saldo'"},
            {
                "filter": "datum.Stadtteil ==='IJburg, Zeeburgereiland'"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}
        ],
        "layer": [{ "mark": {"type":"line","line":true  },
            "encoding": {
                "x": {
                    "title":"",
                    "field": "Jahr",
                    "type": "ordinal",
                    "timeUnit" :"year",
                    "axis": {
                        "labelFontSize":13
                    }

                },
                "y": {
                    "aggregate":"sum",
                    "title": "IJburg, Zeeburgereiland",
                    "field": "Kennzahl",
                    "type":"quantitative",
                    "axis": {
                        "labelFontSize":13,
                        "titleFontSize":16
                    }

                }
            }},
            {
                "mark": {"type":"area","line":true  },
                "encoding": {
                    "x": {
                        "title":"",
                        "field": "Jahr",
                        "type": "ordinal",
                        "timeUnit" :"year",
                        "axis": {
                            "labelFontSize":13
                        }

                    },
                    "y": {
                        "title": "IJburg, Zeeburgereiland",
                        "field": "Kennzahl",
                        "type":"quantitative",
                        "axis": {
                            "labelFontSize":13,
                            "titleFontSize":16
                        }
                    },
                    "color": {
                        "sort": {"field": "Dimension", "order":"descending"},
                        "field": "Dimension",
                        "scale": {"range": [ "#81D177","#17850A","#E17C75","#C12015"]},
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

        ]
    }

//Flächendiagramm für Bewegung  Bijlmer-Centrum, Amstel III
var bewegung3=
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Flächendiagramm für E West, Bos en Lommer",
        "width": 600, "height": 280,
        "data": {"url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/Prototyp.json",
            "format": {
                "type": "json",
                "parse": {
                    "Jahr": "number"
                }}
        },
        "transform": [
            {"filter":"datum.Dimension !== 'Mit'"},
            {"filter":"datum.Dimension !== 'Saldo'"},
            {
                "filter": "datum.Stadtteil ==='Bijlmer-Centrum, Amstel III'"},
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}
        ],
        "layer": [
            { "mark": {"type":"line","line":true  },
            "encoding": {
                "x": {
                    "title":"",
                    "field": "Jahr",
                    "type": "ordinal",
                    "timeUnit" :"year",
                    "axis": {
                        "labelFontSize":13
                    }

                },
                "y": {
                    "aggregate":"sum",
                    "title": "Bijlmer-Centrum, Amstel III",
                    "field": "Kennzahl",
                    "type":"quantitative",
                    "axis": {
                        "labelFontSize":13,
                        "titleFontSize":16
                    }

                }
            }},
            {
                "mark": {"type":"area","line":true  },
                "encoding": {
                    "x": {
                        "title":"",
                        "field": "Jahr",
                        "type": "ordinal",
                        "timeUnit" :"year",
                        "axis": {
                            "labelFontSize":13
                        }

                    },
                    "y": {
                        "title": "Bijlmer-Centrum, Amstel III",
                        "field": "Kennzahl",
                        "type":"quantitative",
                        "axis": {
                            "labelFontSize":13,
                            "titleFontSize":16
                        }
                    },
                    "color": {
                        "sort": {"field": "Dimension", "order":"descending"},
                        "field": "Dimension",
                        "scale": {"range": [ "#81D177","#17850A","#E17C75","#C12015"]},
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

        ]
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

    var map19 ={
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "title":{
            "text":"Anteil mit Migrationshintergrund von Jahr 2019 in Prozent",
            "fontSize": 20
        },
        "width": 600,
        "height": 900,
        "data": {
            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
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
            {"calculate": "datum.Kennzahl *100", "as":"prozent"},
            {
                "lookup": "Stadtteil",
                "from": {
                    "data": {
                        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
        "mark": {
            "type":"geoshape",
            "stroke":"black",
            "strokeWidth": 0.2
        },
        "encoding": {
            "strokeWidth": {
                "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
                ]
            },
            "shape": {"field": "geo", "type": "geojson"},
            "color": {"field": "prozent",
                "title":"%",
                "type": "quantitative",
                "legend":{
                    "labelFontSize": 13,
                    "titleFontSize": 20

                }},
            "tooltip": [
                {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
                {"field":"prozent",
                    "format":".1f",
                    "type": "quantitative",
                    "title":"Anteil in %"}
            ]
        }
    }
var map18 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2018 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2018"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}

var map17 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2017 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2017"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}
var map16 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2016 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2016"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}
var map15 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2015 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2015"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}
var map14 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2014 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2014"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}
var map13 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2013 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2013"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}
var map12 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2012 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2012"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}
var map11 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2011 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2011"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}
var map10 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":{
        "text":"Anteil mit Migrationshintergrund von Jahr 2010 in Prozent",
        "fontSize": 20
    },
    "width": 600,
    "height": 900,
    "data": {
        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
        "format":{
            "type":"json",
            "parse":{
                "Jahr":"number"
            }
        }
    },
    "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter":"datum.Jahr ===2010"},
        {"calculate": "datum.Kennzahl *100", "as":"prozent"},
        {
            "lookup": "Stadtteil",
            "from": {
                "data": {
                    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
    "mark": {
        "type":"geoshape",
        "stroke":"black",
        "strokeWidth": 0.2
    },
    "encoding": {
        "strokeWidth": {
            "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='IJburg, Zeeburgereiland' ||datum.Stadtteil==='Bijlmer-Centrum' ||datum.Stadtteil==='Amstel III'" , "value": 2.9}
            ]
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "prozent",
            "title":"%",
            "type": "quantitative",
            "legend":{
                "labelFontSize": 13,
                "titleFontSize": 20

            }},
        "tooltip": [
            {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
            {"field":"prozent",
                "format":".1f",
                "type": "quantitative",
                "title":"Anteil in %"}
        ]
    }
}

var test =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "title":{
            "text":"Anteil mit Migrationshintergrund von Jahr 2019 in Prozent",
            "fontSize": 20
        },

        "data": {
            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/data/prototyp2.json",
            "format":{
                "type":"json",
                "parse":{
                    "Jahr":"number"
                }
            }
        },
        "hconcat":[
            {
                "transform": [
                    {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},

                    {"calculate": "datum.Kennzahl *100", "as":"prozent"},
                    {
                        "lookup": "Stadtteil",
                        "from": {
                            "data": {
                                "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/Fadi/geojson.json",
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
                "mark": {
                    "type":"geoshape",
                    "stroke":"black",
                    "strokeWidth": 0.2
                },
                "selection": {
                    "pts": {"type": "single" , "fields": ["Stadtteil"], "empty": "none", "clear":"dbclick"

                    }
                },
                "encoding": {

                    "strokeWidth": {
                        "condition":[ {"test":"datum.Stadtteil" , "value": 0.2}
                        ]
                    },

                    "shape": {"field": "geo", "type": "geojson"},

                    "color": {
                        "condition":{
                            "selection":"pts"


                        },
                        "field": "prozent",
                        "title":"%",
                        "type": "quantitative",
                        "legend":{
                            "labelFontSize": 13,
                            "titleFontSize": 20
                        }



                    },
                    "tooltip": [
                        {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
                        {"field":"prozent",
                            "format":".1f",
                            "type": "quantitative",
                            "title":"Anteil in %"}
                    ]
                }
            },
            {
                "transform": [
                    {"filter":"datum.Dimension ==='Mit Migrationshintergrund'"},
                    {"filter":{"selection":"pts"}},
                    {"calculate": "datum.Kennzahl *100", "as":"prozent"},
                    {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"}

                ],
                "mark": {"type":"area","line":true, "point" : true },

                "encoding": {
                    "x": {
                        "title":"",
                        "field": "Jahr",
                        "type": "ordinal",
                        "timeUnit" :"year",
                        "axis": {
                            "labelFontSize":13
                        }

                    },
                    "y": {

                        "field": "prozent",
                        "title":"",
                        "type":"quantitative",
                        "axis": {
                            "labelFontSize":13,
                            "titleFontSize":16
                        }
                    },
                    "color": {
                        "field": "Stadtteil",
                        "scale": {"scheme": "paired"},
                        "legend":{
                            "disable":"true"
                        }
                    },
                    "tooltip":[
                        {"field": "prozent","type":"quantitative","title":"Mit Migrationshintergrund","format":".1f"},
                        {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
                    ]
                }
            }

        ]

    }
// Funktionierte Code mit Flächendiagramm
var all =
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
 
  "data": {
    "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/quan-new/data/prototyp2.json",
    "format": {"type": "json", "parse": {"Jahr": "number"}}
  },
  "hconcat": [
    {
      "vconcat":[
        { "title":{
          "text":  "Migrationsanteil nach Stadttei in %",
          "subtitle":"2019"},
 "width": 500,
      "height": 215,
      "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter": "datum.Jahr ===2019"},
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
        {"calculate": "datum.Kennzahl *100", "as": "prozent"},
        {
          "lookup": "Stadtteil",
          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/quan-new/geojson.json",
              "format": {"property": "features"}
            },
            "key": "properties.Gebied"
          },
          "as": "geo"
        }
      ],
      "projection": {"type": "identity","reflectY": true
      },
      "mark": {"type": "geoshape"},
      "selection": {
        "pts": {
          "type": "single",
          "fields": ["Stadtteil"],
          "empty": "none",
          "clear": "dbclick"
        }
      },
      "encoding": {

        "strokeWidth": {
          "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 2.0}
            , {"selection":"pts", "value": 2.0}] , "value":0.5
        },

        "shape": {"field": "geo", "type": "geojson"},
        "color": {
          "field": "prozent",
          "title": "%",
          "type": "quantitative",
          "legend": {"labelFontSize": 13, "titleFontSize": 20}
        },
        "tooltip": [
          {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
          {
            "field": "prozent",
            "format": ".1f",
            "type": "quantitative",
            "title": "Anteil in %"
          }
        ]
      }
        },{
          "hconcat": [{ 
           "title":{
          "text":"2017",
          "fontWeight":{"bold": "normal"}, "fontSize":12.5}, 

"width": 250,
      "height": 100,
      "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter": "datum.Jahr ===2017"},
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
        {"calculate": "datum.Kennzahl *100", "as": "prozent"},
        {
          "lookup": "Stadtteil",
          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/quan-new/geojson.json",
              "format": {"property": "features"}
            },
            "key": "properties.Gebied"
          },
          "as": "geo"
        }
      ],
      "projection": {"type": "identity","reflectY": true
      },
      "mark": {"type": "geoshape", "stroke": "black", "strokeWidth": 0.2},
      "selection": {
        "pts": {
          "type": "single",
          "fields": ["Stadtteil"],
          "empty": "none",
          "clear": "dbclick"
        }
      },
      "encoding": {
       "strokeWidth": {
          "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 1.5}
            , {"selection":"pts", "value": 1.5}] , "value":0.5
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {
          "field": "prozent",
          "title": "%",
          "type": "quantitative",
          "legend": {"labelFontSize": 13, "titleFontSize": 20}
        },
        "tooltip": [
          {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
          {
            "field": "prozent",
            "format": ".1f",
            "type": "quantitative",
            "title": "Anteil in %"
          }
        ]
      }
          },{
             "title":{
          "text":"2015",
          "fontWeight":{"bold": "normal"}, "fontSize":12.5}, 

"width": 250,
      "height": 100,
      "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter": "datum.Jahr ===2015"},
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
        {"calculate": "datum.Kennzahl *100", "as": "prozent"},
        {
          "lookup": "Stadtteil",
          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/quan-new/geojson.json",
              "format": {"property": "features"}
            },
            "key": "properties.Gebied"
          },
          "as": "geo"
        }
      ],
      "projection": {"type": "identity","reflectY": true
      },
      "mark": {"type": "geoshape", "stroke": "black", "strokeWidth": 0.2},
      "selection": {
        "pts": {
          "type": "single",
          "fields": ["Stadtteil"],
          "empty": "none",
          "clear": "dbclick"
        }
      },
      "encoding": {
       "strokeWidth": {
          "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 1.5}
            , {"selection":"pts", "value": 1.5}] , "value":0.5
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {
          "field": "prozent",
          "title": "%",
          "type": "quantitative",
          "legend": {"labelFontSize": 13, "titleFontSize": 20}
        },
        "tooltip": [
          {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
          {
            "field": "prozent",
            "format": ".1f",
            "type": "quantitative",
            "title": "Anteil in %"
          }
        ]
      }
          }
          
          ]
        },{
          "hconcat":[{
 "title":{
          "text":"2013",
          "fontWeight":{"bold": "normal"}, "fontSize":12.5}, 

"width": 250,
      "height": 100,
      "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter": "datum.Jahr ===2013"},
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
        {"calculate": "datum.Kennzahl *100", "as": "prozent"},
        {
          "lookup": "Stadtteil",
          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/quan-new/geojson.json",
              "format": {"property": "features"}
            },
            "key": "properties.Gebied"
          },
          "as": "geo"
        }
      ],
      "projection": {"type": "identity","reflectY": true
      },
      "mark": {"type": "geoshape", "stroke": "black", "strokeWidth": 0.2},
      "selection": {
        "pts": {
          "type": "single",
          "fields": ["Stadtteil"],
          "empty": "none",
          "clear": "dbclick"
        }
      },
      "encoding": {
         "strokeWidth": {
          "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 1.5}
            , {"selection":"pts", "value": 1.5}] , "value":0.5
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {
          "field": "prozent",
          "title": "%",
          "type": "quantitative",
          "legend": {"labelFontSize": 13, "titleFontSize": 20}
        },
        "tooltip": [
          {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
          {
            "field": "prozent",
            "format": ".1f",
            "type": "quantitative",
            "title": "Anteil in %"
          }
        ]
      }
          },{
             "title":{
          "text":"2011",
          "fontWeight":{"bold": "normal"}, "fontSize":12.5}, 

            "width": 250,
      "height": 200,
      "transform": [
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter": "datum.Jahr ===2011"},
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
        {"calculate": "datum.Kennzahl *100", "as": "prozent"},
        {
          "lookup": "Stadtteil",
          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/quan-new/geojson.json",
              "format": {"property": "features"}
            },
            "key": "properties.Gebied"
          },
          "as": "geo"
        }
      ],
      "projection": {"type": "identity","reflectY": true
      },
      "mark": {"type": "geoshape", "stroke": "black", "strokeWidth": 0.2},
      "selection": {
        "pts": {
          "type": "single",
          "fields": ["Stadtteil"],
          "empty": "none",
          "clear": "dbclick"
        }
      },
      "encoding": {
         "strokeWidth": {
          "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 1.5}
            , {"selection":"pts", "value": 1.5}] , "value":0.5
        },
        "shape": {"field": "geo", "type": "geojson"},
        "color": {
          "field": "prozent",
          "title": "%",
          "type": "quantitative",
          "legend": {"labelFontSize": 13, "titleFontSize": 20}
        },
        "tooltip": [
          {"field": "Stadtteil", "type": "nominal", "title": "Stadtteil"},
          {
            "field": "prozent",
            "format": ".1f",
            "type": "quantitative",
            "title": "Anteil in %"
          }
        ]
      }
          }]
          
          
        }
      ]
      
   }, { 
      "vconcat":[
        {
          "title":{
          "text":  "Migrationsanteil in %",
          "subtitle":"Buitenveldert, Zuidas"},
         
       "width": 220,
      "height": 200,
      "transform": [
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
        {"calculate": "datum.Kennzahl *100", "as": "prozent"},
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
         {"filter": "datum.Stadtteil ==='Buitenveldert, Zuidas'"}
      ],
      "mark": {"type": "area", "line": true, "point": true},
      "encoding": {
        "x": {
          "title": "",
          "field": "Jahr",
          "type": "ordinal",
          "timeUnit": "year",
          "axis": {"labelFontSize": 13}
        },
        "y": {
            "scale":{"domain":[0,85]},
          "field": "prozent",
          "title": "",
          "type": "quantitative",
          "axis": {"labelFontSize": 13}
        }
      }
    },{
"title":{
          "text":"Aus der Karte einen Stadtteil auswählen",
          "fontWeight":{"bold": "normal"},
          "fontSize":12.5},
"width":220, 
      "height": 190,
      "transform": [
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
        {"calculate": "datum.Kennzahl *100", "as": "prozent"},
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
        {"filter": {"selection": "pts"}}
      ],
      "mark": {"type": "area", "line": true, "point": true},
      "encoding": {
        "x": {
          "title": "",
          "field": "Jahr",
          "type": "ordinal",
          "timeUnit": "year",
          "axis": {"labelFontSize": 13}
        },
        "y": {
            "scale":{"domain":[0,85]},
          "field": "prozent",
          "title": "",
          "type": "quantitative",
          "axis": {"labelFontSize": 13}
        }
      }
    
    },{
"title":{
          "text":"Bijlmer-Centrum, Amstel III",
          "fontWeight":{"bold": "normal"},
          "fontSize":12.5},
       "width": 220,
      "height": 200,
      "transform": [
        {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
        {"calculate": "datum.Kennzahl *100", "as": "prozent"},
        {"filter": "datum.Dimension ==='Mit Migrationshintergrund'"},
          {"filter": "datum.Stadtteil ==='Bijlmer-Centrum, Amstel III'"}
      ],
      "mark": {"type": "area", "line": true, "point": true},
      "encoding": {
        "x": {
          "title": "",
          "field": "Jahr",
          "type": "ordinal",
          "timeUnit": "year",
          "axis": {"labelFontSize": 13}
        },
        "y": {
            "scale":{"domain":[0,85]},
          "field": "prozent",
          "title": "",
          "type": "quantitative",
          "axis": {"labelFontSize": 13}
        }
      }
    }
    ]},
    {
      "vconcat":[
        
        {
          "title":{
          "text":  "Umzüge",
          "subtitle":"Buitenveldert, Zuidas"},
        "width": 220,
      "height": 190,
        "transform": [
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
            {"filter":"datum.Dimension !== 'Mit Migrationshintergrund'"},
            {"filter":"datum.Dimension !== 'Saldo'"},
             {"filter": "datum.Stadtteil ==='Buitenveldert, Zuidas'"}
        ],
        "layer": [
            { "mark": {"type":"line","line":true  },
            "encoding": {
                "x": {
                    "title":"",
                    "field": "Jahr",
                    "type": "ordinal",
                    "timeUnit" :"year",
                    "axis": {
                        "labelFontSize":13
                    }
                },
                "y": {
                  "scale": {"domain":[-16000,15700]},
                    "aggregate":"sum",
                    "title": "",
                    "field": "Kennzahl",
                    "type":"quantitative",
                    "axis": {
                        "labelFontSize":13
                    }
                }
            }},
            {
                "mark": {"type":"area","line":true  },
                "encoding": {
                    "x": {
                        "title":"",
                        "field": "Jahr",
                        "type": "ordinal",
                        "timeUnit" :"year",
                        "axis": {
                            "labelFontSize":13
                        }
                    },
                    "y": {
                        "title": "",
                        "field": "Kennzahl",
                        "type":"quantitative",
                        "axis": {
                            "labelFontSize":13
                        }
                    },
                   "color": {
                        "field": "Dimension",
                        "legend":null,
                        "scale": {
                          "range": [ "#6DC568","#199013","#E17C75","#A42016"], "reverse":true}
                          
                    }
                       ,   
                    "tooltip":[
                        {"field": "Kennzahl","type":"quantitative","title":"Anzahl"},
                        {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
                    ]
                }
            }
        ]
    },{
      "title":{
          "text":"Aus der Karte einen Stadtteil auswählen",
          "fontWeight":{"bold": "normal"},
          "fontSize":12.5},
 "width": 220,
      "height": 190,
        "transform": [
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
            {"filter":"datum.Dimension !== 'Mit Migrationshintergrund'"},
            {"filter":"datum.Dimension !== 'Saldo'"},
            {"filter": {"selection":"pts"}}
        ],
        "layer": [
            { "mark": {"type":"line","line":true  },
            "encoding": {
                "x": {
                    "title":"",
                    "field": "Jahr",
                    "type": "ordinal",
                    "timeUnit" :"year",
                    "axis": {
                        "labelFontSize":13
                    }
                },
                "y": {
                    "aggregate":"sum",
                    "title": "",
                    "field": "Kennzahl",
                    "type":"quantitative",
                    "axis": {
                        "labelFontSize":13,
                        "titleFontSize":16
                    }
                }
            }},
            {
                "mark": {"type":"area","line":true  },
                "encoding": {
                    "x": {
                        "title":"",
                        "field": "Jahr",
                        "type": "ordinal",
                        "timeUnit" :"year",
                        "axis": {
                            "labelFontSize":13
                        }
                    },
                    "y": {
                       "scale": {"domain":[-16000,15700]},
                        "title": "",
                        "field": "Kennzahl",
                        "type":"quantitative",
                        "axis": {
                            "labelFontSize":13,
                            "titleFontSize":16
                        }
                    
                    
                    }
                       , 
                       "color": {
                        "field": "Dimension"
                    }
                       ,     
                    "tooltip":[
                        {"field": "Kennzahl","type":"quantitative","title":"Anzahl"},
                        {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
                    ]
                }
            }
        ]
    },{
      "title":{
          "text":"Bijlmer-Centrum, Amstel III",
          "fontWeight":{"bold": "normal"},
          "fontSize":12.5},
       "width": 220,
      "height": 200,
         "transform": [
            {"calculate": "datetime(datum.Jahr, 1)", "as": "Jahr"},
            {"filter":"datum.Dimension !== 'Mit Migrationshintergrund'"},
            {"filter":"datum.Dimension !== 'Saldo'"},
             {"filter": "datum.Stadtteil ==='Bijlmer-Centrum, Amstel III'"}
        ],
        "layer": [
            { "mark": {"type":"line","line":true  },
            "encoding": {
                "x": {
                    "title":"",
                    "field": "Jahr",
                    "type": "ordinal",
                    "timeUnit" :"year",
                    "axis": {
                        "labelFontSize":13
                    }
                },
                "y": {
                    "aggregate":"sum",
                    "title": "",
                    "field": "Kennzahl",
                    "type":"quantitative",
                    "axis": {
                        "labelFontSize":13
                    }
                }
            }},
            {
                "mark": {"type":"area","line":true  },
                "encoding": {
                    "x": {
                        "title":"",
                        "field": "Jahr",
                        "type": "ordinal",
                        "timeUnit" :"year",
                        "axis": {
                            "labelFontSize":13
                        }
                    },
                    "y": {
                      "scale": {"domain":[-16000,15700]},
                        "title": "",
                        "field": "Kennzahl",
                        "type":"quantitative",
                        "axis": {
                            "labelFontSize":13,
                            "titleFontSize":16
                        }
                    },
                         "color": {
                        "field": "Dimension"
                    }
                       ,   
                    "tooltip":[
                        {"field": "Kennzahl","type":"quantitative","title":"Anzahl"},
                        {"field": "Jahr", "type": "ordinal","title":"Jahr","timeUnit":"year"}
                    ]
                }
            }
        ]
    
    }]
}   
  ]
}

