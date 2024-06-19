const data= [100, 420 , 230, 850, 560, 925];

///dimensions
const width= 500;
const barHeight= 20;
const barMargin= 1;
const height= data.length * (barHeight + barMargin);

//SVG Container
const svg= d3.select("body")
.append("svg")
.attr("width", width)
.attr("height",height);


//linear scale for bar width

const xScale= d3.scaleLinear ()
.domain([0, d3.max(data)])
.range([50,width]);
