
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

let subMenu2 = document.getElementById("subMenu2");

function toggleMenu2(){
    subMenu2.classList.toggle("open-menu2");
}




anychart.onDocumentReady(function () {
  var data = anychart.data.set([
      ["France 4260 sales", 26],
      ["Italy 4260 sales", 19],
      ["Japan 3970 sales", 20],
      ["Canada 3970 sales", 28],
    ]);

    // create a pie chart with the data
    var chart = anychart.pie(data);

    // set the chart radius making a donut chart
    chart.innerRadius("55%");

    // create a color palette
    var palette = anychart.palettes.distinctColors();

    // set the colors according to the brands
    palette.items([
      { color: "#80E2FF" },
      { color: "#F49FA8" },
      { color: "#FFDF94" },
      { color: "#B5B3FB" },
    ]);

    chart.palette(palette);

    chart.innerRadius("60%");

  var label = anychart.standalones.label();
  label.text("230,900");
  label.width("100%");
  label.height("100%");
  label.adjustFontSize(true);
  label.fontColor("#60727b");
  label.hAlign("center");
  label.vAlign("middle");

  // set the label as the center content
  chart.center().content(label);


  
 chart.legend().maxHeight("60%");
 chart.legend().maxWidth("100%");

  // set the layout of the legend
chart.legend().itemsLayout("horizontal-expandable")


chart.title("");
chart.container("second_container");
chart.draw();
});








var xValues = ['Jan','Feb','Mar','Apr','May','Jun'];
var yValues = ['5k','10k','15k','20k','25k'];

new Chart("myChart", {
type: "line",
data: {
labels: xValues,
datasets: [{ 
  label: "Products sold",
  data: [10,5,10,13,10,19],
  borderColor: "#B5B3FB",
  backgroundColor:"#B5B3FB",
  fill: false,
}, { 
  label: "Total views",
  data: [14.5,2,12,8,13,5],
  borderColor: "#80E2FF",
  backgroundColor:"#80E2FF",
  fill: false,
}]
},
options: {
legend: {
    display: true,
    position: "bottom",
},
scales: {
    yAxes: [{
        ticks: {
            max:21,
            steps:5,
            beginAtZero:true,
            callback: function(value,index,ticks) {
                if(value>20){
                    return null;
                }
                else return '$' + (value+5);
            },
        },
    }]  
}, 
},
});







var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
});