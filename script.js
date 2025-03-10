const data = {
  nodes: [
    { id: "Evaluation"}, //info: "Text", url: "pages/evaluation.html"  },
    { id: "Explore & Review to Learn"}, //info: "Text", url: "pages/review-to-learn.html"   },
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

// Dummy questions with tags
const questions = [
  { text: "Have you thought about a data management plan?", tags: ["Planning", "Data Management"] },
  { text: "Do you have a strategy for outreach?", tags: ["Communication & Outreach"] },
  { text: "Have you evaluated your data collection methods?", tags: ["Evaluation", "Data Collection"] },
  { text: "Have you considered the societal impact of your work?", tags: ["Application in Society"] },
  { text: "Do you know if your data will be usable for analysis and modeling?", tags: ["Data Collection", "Analysis & Modelling"] },
  { text: "Have you considered the data products you will create?", tags: ["Data Products"] },
  { text: "What work has already been done in this field? Who is actively doing work in this (geographic) area?", tags: ["Review to Learn", "Planning"] },
  { text: "What data do you need to collect to answer your research question?", tags: ["Planning", "Data Collection"] },
  { text: "What data do you have access to?", tags: ["Data Collection"] },
  { text: "Did your data collection methods work as expected?", tags: ["Data Collection", "Evaluation"] },
];

const svgWidth = 800; // Set the width of the SVG box
const svgHeight = 600; // Set the height of the SVG box
const radius = 200; // Circle radius
const centerX = svgWidth / 2;
const centerY = svgHeight / 2;

// Assign fixed positions for nodes
data.nodes.forEach((node, i) => {
  const angle = (i / data.nodes.length) * 2 * Math.PI - Math.PI / 2; // Start at top
  node.x = centerX + radius * Math.cos(angle);
  node.y = centerY + radius * Math.sin(angle);
});

// Create the SVG canvas
const svg = d3.select("#spiderweb").append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Tooltip
const tooltip = d3.select("#tooltip");

// Selection mode toggle
let multiSelectMode = false;
document.getElementById("toggle-selection-mode").addEventListener("change", (event) => {
  multiSelectMode = event.target.checked;
  document.getElementById("toggle-label").textContent = multiSelectMode ? "Multi-Select" : "Single Select";
});

// Deselect all button
document.getElementById("deselect-all").addEventListener("click", () => {
  d3.selectAll(".node").classed("selected", false);
  d3.selectAll(".link").classed("selected", false);
  hideInfoPanel();
});

// Add links
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
  .on("click", (event, d) => {
      // Add selected class to the clicked link
      svg.transition().duration(900)
      .attr("transform", "translate(-400, 0) scale(1)");

      const sourceNode = data.nodes.find(node => node.id === d.source);
  const targetNode = data.nodes.find(node => node.id === d.target);

  if (multiSelectMode) {
    // Toggle the selected class on the clicked link
    const link = d3.select(event.currentTarget);
    const isLinkSelected = link.classed("selected");
    link.classed("selected", !isLinkSelected);

    // Re-evaluate node selection based on remaining selected links
    d3.selectAll(".node").classed("selected", node => {
      // Check if the node is part of any currently selected links
      const isConnectedToSelectedLink = d3
        .selectAll(".link.selected")
        .data()
        .some(link => link.source === node.id || link.target === node.id);

      return isConnectedToSelectedLink;
    });
  } else {
    // Single-select mode: clear all and highlight the current link and nodes
    d3.selectAll(".node").classed("selected", false);
    d3.selectAll(".link").classed("selected", false);

    d3.selectAll(".node").classed("selected", node => {
      return node.id === sourceNode.id || node.id === targetNode.id;
    });
    d3.select(event.currentTarget).classed("selected", true);
  }

  // Update the info panel with the current selection
  updateInfoPanel();
})
  .on("mouseover", (event, d) => {
    tooltip.style("left", `${event.pageX + 10}px`)
      .style("top", `${event.pageY + 10}px`)
      .style("display", "inline-block")
      .html(`Connection: ${d.source} ↔ ${d.target}`) ;
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
  .attr("r", 10)
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("fill", "#1f78b4")
  .on("click", (event, d) => {
    svg.transition().duration(900)
    .attr("transform", "translate(-400, 0) scale(1)");
    const node = d3.select(event.currentTarget);
    const isSelected = node.classed("selected");

    if (multiSelectMode) {
      // Toggle selected class on the clicked node
      node.classed("selected", !isSelected);
    } else {
      // Deselect all nodes and links, then select the clicked node
      d3.selectAll(".node").classed("selected", false);
      d3.selectAll(".link").classed("selected", false);
      node.classed("selected", true);
    }

    // Show info panel with questions related to the selected nodes and links
    updateInfoPanel();
  });

 // Handle showing the info panel
function showInfoPanel(content) {
  d3.select("#info-panel")
    .style("display", "block");
  // Add content to the info panel
  d3.select("#info-content").html(content);
  // Add the close button behavior
  //document.getElementById("close-info-panel").addEventListener("click", hideInfoPanel);
}

// Handle hiding the info panel
function hideInfoPanel() {
  // Hide the info panel
  d3.select("#info-panel")
    .style("display", "none");

  // Reset the spiderweb scale
  svg.transition().duration(900)
    .attr("transform", "scale(1) translate(0, 0)");
  
    // Remove selected class from all nodes and links
  d3.selectAll(".node").classed("selected", false);
  d3.selectAll(".link").classed("selected", false);
}

// Add event listener to close button
document.getElementById("close-info-panel").addEventListener("click", hideInfoPanel);

// Add labels
svg.selectAll(".node-label")
  .data(data.nodes)
  .enter()
  .append("text")
  .attr("class", "node-label")
  .attr("x", d => d.x + (15 * Math.cos(Math.atan2(d.y - centerY, d.x - centerX)))) // Offset text outward
  .attr("y", d => d.y + (15 * Math.sin(Math.atan2(d.y - centerY, d.x - centerX)))) // Offset text outward
  .attr("text-anchor", d => {
    const angle = Math.atan2(d.y - centerY, d.x - centerX);
    return Math.cos(angle) > 0 ? "start" : "end"; // Align text based on direction
  })
  .attr("alignment-baseline", d => {
    const angle = Math.atan2(d.y - centerY, d.x - centerX);
    return Math.sin(angle) > 0 ? "hanging" : "alphabetic"; // Adjust vertical alignment
  })
  .text(d => d.id);

  // Update info panel with questions related to selected nodes and links
function updateInfoPanel() {
  const selectedNodes = d3.selectAll(".node.selected").data();
  const selectedLinks = d3.selectAll(".link.selected").data();

  const selectedNodeIds = selectedNodes.map(node => node.id);
  const selectedLinkNodeIds = selectedLinks.flatMap(link => [link.source, link.target]);

  const allSelectedIds = [...new Set([...selectedNodeIds, ...selectedLinkNodeIds])];

  const associatedQuestions = questions.filter(q => allSelectedIds.some(id => q.tags.includes(id)))
    .map(q => `<p>${q.text}</p>`).join("");

    const selectedComponents = allSelectedIds.join(", ");
    if (allSelectedIds.length > 0 || associatedQuestions) {
      showInfoPanel(`<h2>Blueprint Component(s):</h2><h3>${selectedComponents}</h3><h2>Questions:</h2>${associatedQuestions}`);
    } else {
    hideInfoPanel();
  }
}

console.log(data.nodes);
console.log(data.links);
