

var map11 =
    {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

        "data": {
            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/final/data/prototyp.json",
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
                                        "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/final/data/geojson.json",
                                        "format": {"property": "features"}
                                    },
                                    "key": "properties.Gebied"
                                },
                                "as": "geo"
                            }
                        ],
                        "projection": {"type": "identity","reflectY": true
                        },
                        "mark": {"type": "geoshape", "stroke": "greenyellow", "strokeWidth": 0.2},
                        "selection": {
                            "pts": {
                                "type": "single",
                                "fields": ["Stadtteil"],
                                "empty": "none",
                                "clear": "dbclick"
                            }
                        },
                        "encoding": {
                            "stroke": {"condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": "blue"}, {"selection":"pts", "value": "blue"}] , "value":"black"
                            },
                            "strokeWidth": {
                                "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 2.0}, {"selection":"pts", "value": 2.0}] , "value":0.5
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
                                            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/final/data/geojson.json",
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

                                "stroke": {"condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": "blue"}, {"selection":"pts", "value": "blue"}] , "value":"black"
                                },
                                "strokeWidth": {
                                    "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 2.0}, {"selection":"pts", "value": 2.0}] , "value":0.5
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
                                            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/final/data/geojson.json",
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

                                "stroke": {"condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": "blue"}, {"selection":"pts", "value": "blue"}] , "value":"black"
                                },
                                "strokeWidth": {
                                    "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 2.0}, {"selection":"pts", "value": 2.0}] , "value":0.5
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
                                            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/final/data/geojson.json",
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

                                "stroke": {"condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": "blue"}, {"selection":"pts", "value": "blue"}] , "value":"black"
                                },
                                "strokeWidth": {
                                    "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 2.0}, {"selection":"pts", "value": 2.0}] , "value":0.5
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
                                            "url": "https://raw.githubusercontent.com/minhquan9408/gdv_1/final/data/geojson.json",
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

                                "stroke": {"condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": "blue"}, {"selection":"pts", "value": "blue"}] , "value":"black"
                                },
                                "strokeWidth": {
                                    "condition":[ {"test":"datum.Stadtteil==='Buitenveldert, Zuidas' ||datum.Stadtteil==='Bijlmer-Centrum, Amstel III'" , "value": 2.0}, {"selection":"pts", "value": 2.0}] , "value":0.5
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

                        "width": 230,
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
                        "width":230,
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
                        "width": 230,
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
                        "width": 230,
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
                        "width": 230,
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
                        "width": 230,
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


