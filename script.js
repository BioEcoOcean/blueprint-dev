const data = {
  nodes: [
    { id: "A", info: "Node A Info", url: "https://example.com/nodeA" },
    { id: "B", info: "Node B Info", url: "https://example.com/nodeB" },
  ],
  links: [
    { source: "A", target: "B", info: "Connection Info" },
  ],
};

// Create the SVG canvas
const width = 800, height = 600;
const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

const tooltip = d3.select("#tooltip");

// Create a simulation for the force-directed graph
const simulation = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink(data.links).id(d => d.id))
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height / 2));

// Add links
const link = svg.selectAll(".link")
  .data(data.links)
  .enter().append("line")
  .attr("class", "link")
  .on("mouseover", (event, d) => {
    tooltip.style("opacity", 1).html(d.info).style("left", `${event.pageX + 10}px`).style("top", `${event.pageY}px`);
  })
  .on("mouseout", () => tooltip.style("opacity", 0));

// Add nodes
const node = svg.selectAll(".node")
  .data(data.nodes)
  .enter().append("circle")
  .attr("class", "node")
  .attr("r", 10)
  .on("mouseover", (event, d) => {
    tooltip.style("opacity", 1).html(d.info).style("left", `${event.pageX + 10}px`).style("top", `${event.pageY}px`);
  })
  .on("mouseout", () => tooltip.style("opacity", 0))
  .on("click", (event, d) => {
    window.open(d.url, "_blank");
  });

// Update simulation on each tick
simulation.on("tick", () => {
  link.attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

  node.attr("cx", d => d.x)
      .attr("cy", d => d.y);
});
