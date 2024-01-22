// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options1 = {
  series: [
    {
      name: "Positive",
      data: [36],
      
      
    },
    {
      name: "Negative",
      data: [43],
    },
    {
      name: "Neutral",
      data: [32],
    },
   
  ],
  chart: {
    type: "bar",
    
    height: 150, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
   
  },
  xaxis: {
    categories: ["Positive","Negative","Neutral"],
    
    show: true,
  },
  colors: ["#386641",'#D9534F',"#6a4c93"],
  yaxis: {
    title:  {
      text: "No of reviews ",
      enabled:true,
      
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",

    show:true,
  },
 
  tooltip: {
    y: {
      formatter: function (val) {
        return  val ;
      },
    },
  },
};


var chart1 = new ApexCharts(document.querySelector("#apex1"), options1);
chart1.render();
  
 // Bar chart 2
  var options1 = {
    series: [
      {
        name: "Positive",
        data: [54],
      },
      {
        name: "Negative",
        data: [40],
      },
      {
        name: "Neutral",
        data: [32],
      },
    ],
    chart: {
      type: "bar",
      height: 150, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Positive","Negative","Neutral"],
    },
    colors: ["#386641",'#D9534F',"#6a4c93"],
    yaxis: {
      title: {
        text: "No of reviews ",
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
  
      show:true,
    },
 

    tooltip: {
      y: {
        formatter: function (val) {
          return  val ;
        },
      },
    },
  };
  
  var chart1 = new ApexCharts(document.querySelector("#apex2"), options1);
  chart1.render();

  // Pie chart 1

  var options = {
    series: [44, 55, 13],
    labels: ["Positive","Negative","Neutral"]
  }
  
  
  var chart4 = Plotly.newPlot('#myDiv1', options);
  chart4.render();

  // Pie chart 2

  var data2 = [{
    values: [58, 26, 5],
    labels: ["Positive","Negative","Neutral"],
    type: 'pie'
  }];
  
  var layout2 = {
    height: 200,
    width: 300
  };
  
  var chart4 = Plotly.newPlot('#myDiv2', data2, layout2);
  chart4.render();



  // Sidebar Toggle Codes;
  
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }