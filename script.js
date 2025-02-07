//const http = require('http');

//const hostname = '127.0.0.1'
//const port = 3000
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server .listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const data = {
  nodes: [
    { id: "Evaluation"}, //info: "Text", url: "pages/evaluation.html"  },
    { id: "Review to Learn"}, //info: "Text", url: "pages/review-to-learn.html"   },
    { id: "Planning"}, //info: "Text", url: "pages/planning.html"  },
    { id: "Data Collection"},// info: "Text", url: "pages/data-collection.html"  },
    { id: "Data Management"}, //info: "Text", url: "pages/data-management.html"  },
    { id: "Analysis & Modelling"}, //info: "Text", url: "pages/analysis-modelling.html"  },
    { id: "Data Products"}, //info: "Text", url: "pages/data-products.html"  },
    { id: "Application in Society"}, //info: "Text", url: "pages/application-in-society.html" },
    { id: "Communication & Outreach"}, //info: "Text", url: "pages/communication-outreach.html"  },
  ],
  links: [
    { source: "Evaluation", target: "Review to Learn" },
    { source: "Evaluation", target: "Planning" },
    { source: "Evaluation", target: "Data Collection" },
    { source: "Evaluation", target: "Data Management" },
    { source: "Evaluation", target: "Analysis & Modelling" },
    { source: "Evaluation", target: "Data Products" },
    { source: "Evaluation", target: "Application in Society" },
    { source: "Evaluation", target: "Communication & Outreach" },
    { source: "Review to Learn", target: "Planning" },
    { source: "Review to Learn", target: "Data Collection" },
    { source: "Review to Learn", target: "Data Management" },
    { source: "Review to Learn", target: "Analysis & Modelling" },
    { source: "Review to Learn", target: "Data Products" },
    { source: "Review to Learn", target: "Application in Society" },
    { source: "Review to Learn", target: "Communication & Outreach" },
    { source: "Planning", target: "Data Collection" },
    { source: "Planning", target: "Data Management" },
    { source: "Planning", target: "Analysis & Modelling" },
    { source: "Planning", target: "Data Products" },
    { source: "Planning", target: "Application in Society" },
    { source: "Planning", target: "Communication & Outreach" },
    { source: "Data Collection", target: "Data Management" },
    { source: "Data Collection", target: "Analysis & Modelling" },
    { source: "Data Collection", target: "Data Products" },
    { source: "Data Collection", target: "Application in Society" },
    { source: "Data Collection", target: "Communication & Outreach" },
    { source: "Data Management", target: "Analysis & Modelling" },
    { source: "Data Management", target: "Data Products" },
    { source: "Data Management", target: "Application in Society" },
    { source: "Data Management", target: "Communication & Outreach" },
    { source: "Analysis & Modelling", target: "Data Products" },
    { source: "Analysis & Modelling", target: "Application in Society" },
    { source: "Analysis & Modelling", target: "Communication & Outreach" },
    { source: "Data Products", target: "Application in Society" },
    { source: "Data Products", target: "Communication & Outreach" },
    { source: "Application in Society", target: "Communication & Outreach" },
  ],
};

const radius = 200; // Circle radius
const centerX = 400, centerY = 300; // Center position of the circle

// Assign fixed positions for nodes
data.nodes.forEach((node, i) => {
  const angle = (i / data.nodes.length) * 2 * Math.PI;
  node.x = centerX + radius * Math.cos(angle);
  node.y = centerY + radius * Math.sin(angle);
});

// Create the SVG canvas
const svg = d3.select("#spiderweb").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

  // Tooltip
const tooltip = d3.select("#tooltip");

const link = svg.selectAll(".link")
  .data(data.links)
  .enter()
  .append("line")
  .attr("class", "link")
  .attr("x1", d => {
    const sourceNode = data.nodes.find(node => node.id === d.source);
    return sourceNode.x;
  })
  .attr("y1", d => {
    const sourceNode = data.nodes.find(node => node.id === d.source);
    return sourceNode.y;
  })
  .attr("x2", d => {
    const targetNode = data.nodes.find(node => node.id === d.target);
    return targetNode.x;
  })
  .attr("y2", d => {
    const targetNode = data.nodes.find(node => node.id === d.target);
    return targetNode.y;
  })
  .on("mouseover", (event, d) => {
    tooltip.style("left", `${event.pageX + 10}px`)
      .style("top", `${event.pageY + 10}px`)
      .style("display", "inline-block")
      .html(d.info);
  })
  .on("mouseout", () => {
    tooltip.style("display", "none");
  });

// Add nodes
const node = svg.selectAll(".node")
  .data(data.nodes)
  .enter()
  .append("circle")
  .attr("class", "node")
  .attr("r", 8)
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("fill", "#1f78b4")
  .on("click", (event, d) => {
    // Shrink spiderweb and show info
    svg.transition().duration(1000)
      .attr("transform", "scale(0.5) translate(-200, 0)");
      showInfoPanel(`<h2>${d.id}</h2><p>Details about ${d.id}...</p>`);

    const associatedQuestions = questions.filter(q => q.tags.includes(d.id))
      .map(q => `<p>${q.text}</p>`).join("");
    d3.select("#info-panel").html(`<h1>${d.id}</h1>${associatedQuestions}`);
  });

// Handle showing the info panel
function showInfoPanel(content) {
  const infoPanel = document.getElementById("info-panel");
  const infoContent = document.getElementById("info-content");
  infoContent.innerHTML = content; // Update the content of the info panel
  infoPanel.style.display = "block"; // Show the info panel

  // Shrink the spiderweb container
  document.getElementById("spiderweb").style.flex = "1";
}

// Handle hiding the info panel
function hideInfoPanel() {
  const infoPanel = document.getElementById("info-panel");
  infoPanel.style.display = "none"; // Hide the info panel

  // Expand the spiderweb container
  document.getElementById("spiderweb").style.flex = "2";
}

// Add event listener to close button
document.getElementById("close-info-panel").addEventListener("click", hideInfoPanel);

  // Add labels
svg.selectAll(".node-label")
  .data(data.nodes)
  .enter()
  .append("text")
  .attr("class", "node-label")
  .attr("x", d => d.x)
  .attr("y", d => d.y - 10)
  .attr("text-anchor", "middle")
  .text(d => d.id);

// Dummy questions with tags
const questions = [
  { text: "Have you thought about a data management plan?", tags: ["Planning", "Data Management"] },
  { text: "Do you have a strategy for outreach?", tags: ["Communication & Outreach"] },
  { text: "Have you evaluated your data collection methods?", tags: ["Evaluation", "Data Collection"] },
  // Add more questions...
];

console.log(data.nodes);
console.log(data.links);
