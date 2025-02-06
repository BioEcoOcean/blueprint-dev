const data = {
  nodes: [
    { id: "Evaluation", info: "Text", url: "pages/evaluation.html"  },
    { id: "Review to Learn", info: "Text", url: "pages/review-to-learn.html"   },
    { id: "Planning", info: "Text", url: "pages/planning.html"  },
    { id: "Data Collection", info: "Text", url: "pages/data-collection.html"  },
    { id: "Data Management", info: "Text", url: "pages/data-management.html"  },
    { id: "Analysis & Modelling", info: "Text", url: "pages/analysis-modelling.html"  },
    { id: "Data Products", info: "Text", url: "pages/data-products.html"  },
    { id: "Application in Society", info: "Text", url: "pages/application-in-society.html" },
    { id: "Communication & Outreach", info: "Text", url: "pages/communication-outreach.html"  },
  ],
  links: [],
};

// Create links to connect all nodes to each other
data.nodes.forEach((node, i) => {
  for (let j = i + 1; j < data.nodes.length; j++) {
    data.links.push({ source: node.id, target: data.nodes[j].id });
  }
});

// Create the SVG canvas
const width = 800, height = 800;
const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

const tooltip = d3.select("#tooltip");

// Create a simulation for the force-directed graph with a radial force
const simulation = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink(data.links).id(d => d.id).distance(200))
  .force("charge", d3.forceManyBody().strength(-500))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("radial", d3.forceRadial(300, width / 2, height / 2));

  // Add labels
  const labels = svg.selectAll(".node-label")
  .data(data.nodes)
  .enter()
  .append("text")
  .attr("class", "node-label")
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("dy", "-1.5em") // Position the text above the nodes
  .text(d => d.id);
  
// Add links
const link = svg.selectAll(".link")
  .data(data.links)
  .enter().append("line")
  .attr("class", "link")
  .style("stroke", "#ccc")
  .style("stroke-width", 1.5)
  .on("mouseover", (event, d) => {
    tooltip.style("opacity", 1).html(`Connection: ${d.source.id} ↔ ${d.target.id}`)
      .style("left", `${event.pageX + 10}px`)
      .style("top", `${event.pageY}px`);
  })
  .on("mouseout", () => tooltip.style("opacity", 0));

// Add nodes
const node = svg.selectAll(".node")
  .data(data.nodes)
  .enter().append("circle")
  .attr("class", "node")
  .attr("r", 10)
  .style("fill", "steelblue")
  .style("cursor", "pointer")
  .on("mouseover", (event, d) => {
    tooltip.style("opacity", 1).html(d.id)
      .style("left", `${event.pageX + 10}px`)
      .style("top", `${event.pageY}px`);
  })
  .on("mouseout", () => tooltip.style("opacity", 0))
  .on("click", (event, d) => {
    window.location.href = d.url; // Redirect to the node's page
    // Optionally redirect or perform other actions
  });

// Update simulation on each tick
simulation.on("tick", () => {
  link.attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

  node.attr("cx", d => d.x)
      .attr("cy", d => d.y);
  
  labels.attr("x", d => d.x)
        .attr("y", d => d.y);
});
