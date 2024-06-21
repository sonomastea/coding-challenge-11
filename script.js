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

//bar rendering

svg.selectAll("g")
.data(data)
.enter()
.append("g")
.attr("transform", (d,i) => 'translate(0, ${li *barHeight+ barMargin)})')
.each(function(d,i){
    d3.select(this)
    .append("rect")
    .attr("class","bar")
    .attr("width", xScale(d))
    .attr("height", barHeight);

    //text labels

    d3.select(this)
    .append("text")
    .attr("class", "bar-label")
    .attr("x", xScale(d)-5)
    .attr("y", barHeight /2)
    .attr("dy",".35em")
    .attr("text-anchor", "end")
    .text(d);
})

//tranistion and hover effects
svg.selectAll("rect")
.transition
.duration(1000)
.attr("width",d => xScale (d));
svg.SelectAll(".bar")
.on("mouseover", function (){
    d3.select(this).style("fill", "pink");
})

.on("mouseout", function (){
    d3.select(this).style("fill", "lightblue");
})

