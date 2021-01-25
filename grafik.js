
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
                        "sort": {"field": "Dimension", "order":"descending"},
                        "field": "Dimension",
                        "scale": {"range": [ "#81D177","#17850A","#E17C75","#C12015"]},
                        "legend":{
                            "labelFontSize": 11,
                            "titleFontSize": 20
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