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
    { source: "Evaluation", target: "Review to Learn", info: "Evaluation informs learning." },
    { source: "Evaluation", target: "Planning", info: "Evaluation aids planning." },
    // Add remaining links for full connectivity
    { source: "Evaluation", target: "Data Collection", info: "Evaluation supports data collection." },
    { source: "Review to Learn", target: "Planning", info: "Learning improves planning." },
    { source: "Planning", target: "Data Collection", info: "Planning guides data collection." },
    // Add links between all remaining nodes...
    {source: "Planning", target: "Data Collection", info: "Do you have a plan for how data will be managed?"},
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
  .attr("x1", d => d.source.x)
  .attr("y1", d => d.source.y)
  .attr("x2", d => d.target.x)
  .attr("y2", d => d.target.y)
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

    const associatedQuestions = questions.filter(q => q.tags.includes(d.id))
      .map(q => `<p>${q.text}</p>`).join("");
    d3.select("#info-panel").html(`<h1>${d.id}</h1>${associatedQuestions}`);
  });

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