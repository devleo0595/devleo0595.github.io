/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 8;

var nodeTemplate = networkSeries.nodes.template;
nodeTemplate.tooltipText = "{name}";
nodeTemplate.fillOpacity = 1;
nodeTemplate.label.hideOversized = true;
nodeTemplate.label.truncate = true;

var linkTemplate = networkSeries.links.template;
linkTemplate.strokeWidth = 1;
var linkHoverState = linkTemplate.states.create("hover");
linkHoverState.properties.strokeOpacity = 1;
linkHoverState.properties.strokeWidth = 2;

nodeTemplate.events.on("over", function (event) {
    var dataItem = event.target.dataItem;
    dataItem.childLinks.each(function (link) {
        link.isHover = true;
    })
})

nodeTemplate.events.on("out", function (event) {
    var dataItem = event.target.dataItem;
    dataItem.childLinks.each(function (link) {
        link.isHover = false;
    })
})

networkSeries.data = [  
   {  
      "name":"Plantas",
      "value":90,
      "linkWith":[  
         "Con flores",
		 "Sin flores",
		 "Tamaño",
		 "Partes",
		 "Importancia",
		 "Nutrición",
      ],
      "children":[  
		 {  
            "name":"Reproducción",
            "value":20
         },
		 {  
            "name":"Función",
            "value":20
         },
         
      ]
   },
   {  
      "name":"Con flores",
      "value":40,
      "linkWith":[  
         "Rachel"
      ],
      "children":[  
         {  
            "name":"Gimnospermas",
            "value":10
         },
         {  
            "name":"Angiospermas",
            "value":10
         },
         
      ]
   },
   {  
      "name":"Sin flores",
      "value":40,
      "linkWith":[  
	  "Phoebe"
      ],
      "children":[  
         {  
            "name":"Musgos",
            "value":10
         },
         {  
            "name":"Helechos",
            "value":10
         },
         
      ]
   },
   {  
      "name":"Tamaño",
      "value":45,
      "linkWith":[  
         "Joey",
         "Phoebe"
      ],
      "children":[  
         {  
            "name":"Arboles",
            "value":10
         },
         {  
            "name":"Arbustos",
            "value":10
         },
         {  
            "name":"Hierba",
            "value":10
         },
         
      ]
   },
   {  
      "name":"Partes",
      "value":40,
      "linkWith":[  
			"Flor"
      ],
      "children":[  
         {  
            "name":"Raíz",
            "value":10
         },
         {  
            "name":"Tallo",
            "value":10
         },
         {  
            "name":"Hoja",
            "value":10
         },
		 {  
            "name":"Fruto",
            "value":10
         },
         
      ]
   },
   
   {  
      "name":"Flor",
      "value":20,
      "linkWith":[  

      ],
      "children":[  
         {  
            "name":"Caliz",
            "value":10
         },
         {  
            "name":"Corona",
            "value":10
         },
         {  
            "name":"Estambres",
            "value":10
         },
		 {  
            "name":"Pistilos",
            "value":10
         },
         
      ]
   },
   {  
      "name":"Importancia",
      "value":60,
      "linkWith":[  

      ],
      "children":[  
         {  
            "name":"Alimentos",
            "value":10
         },
         {  
            "name":"Medicina",
            "value":10
         },
         {  
            "name":"Energia",
            "value":10
         },
		  {  
            "name":"Agua",
            "value":10
         },
		  {  
            "name":"Oxigeno",
            "value":10
         },
         
      ]
   },
   {  
      "name":"Nutrición",
      "value":60,
      "linkWith":[  

      ],
      "children":[  
         {  
            "name":"Sustancias",
            "value":10
         },
         {  
            "name":"Fotosintesis",
            "value":10
         },
         {  
            "name":"Respiracion",
            "value":10
         },
         
      ]
   },
   
];