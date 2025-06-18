const data = {
  nodes: [
    { id: "Evaluation", description: "Assess the effectiveness of the current system" }, //info: "Text", url: "pages/evaluation.html"  },
    { id: "Explore and Review to Learn", name: "Explore and Review to Learn", description: "Explore and review existing knowledge with the goal to learn from it"}, //info: "Text", url: "pages/review-to-learn.html"   },
    { id: "Planning", description: "Plan all the steps involved" }, //info: "Text", url: "pages/planning.html"  },
    { id: "Data Collection", description: "Collect data from various sources"},// info: "Text", url: "pages/data-collection.html"  },
    { id: "Data Management", description: "Organize, manage, and publish collected data"}, //info: "Text", url: "pages/data-management.html"  },
    { id: "Analysis & Modelling", description: "Analyze data and create models"}, //info: "Text", url: "pages/analysis-modelling.html"  },
    { id: "Data Products", description: "Generate useful data products"}, //info: "Text", url: "pages/data-products.html"  },
    { id: "Application in Society", description: "How can the findings benefit society"}, //info: "Text", url: "pages/application-in-society.html" },
    { id: "Communication & Outreach", description: "Communicate results and engage with stakeholders"}, //info: "Text", url: "pages/communication-outreach.html"  },
  ],
  links: [
    { source: "Evaluation", target: "Explore and Review to Learn" },
    { source: "Evaluation", target: "Planning" },
    { source: "Evaluation", target: "Data Collection" },
    { source: "Evaluation", target: "Data Management" },
    { source: "Evaluation", target: "Analysis & Modelling" },
    { source: "Evaluation", target: "Data Products" },
    { source: "Evaluation", target: "Application in Society" },
    { source: "Evaluation", target: "Communication & Outreach" },
    { source: "Explore and Review to Learn", target: "Planning" },
    { source: "Explore and Review to Learn", target: "Data Collection" },
    { source: "Explore and Review to Learn", target: "Data Management" },
    { source: "Explore and Review to Learn", target: "Analysis & Modelling" },
    { source: "Explore and Review to Learn", target: "Data Products" },
    { source: "Explore and Review to Learn", target: "Application in Society" },
    { source: "Explore and Review to Learn", target: "Communication & Outreach" },
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
  // Explore and Review to Learn
  { text: "What new techniques are currently being deployed in your study area?", tags: ["Explore and Review to Learn"] },
  { text: "What are the emergent issues that need to be addressed?", tags: ["Explore and Review to Learn"] },
  { text: "How can my review process uncover hidden gaps and lead to meaningful improvements?", tags: ["Explore and Review to Learn"] },
  { text: "Is your review inclusive of other players in the ocean observation? Who else is involved? Who else is doing similar studies?", tags: ["Explore and Review to Learn"] },
  { text: "What current practices are you using and how can it be improved to ensure a holistic and integrated ocean observation system?", tags: ["Explore and Review to Learn"] },
  { text: "How can we improve the ocean observation system to be more inclusive and enhance cooperation among the stakeholders?", tags: ["Explore and Review to Learn"] },
  { text: "How can we improve the ocean observation system to be more inclusive including indigenous people and enhance cooperation among the stakeholders?", tags: ["Explore and Review to Learn"] },


  // Planning
  { text: "Where do I start?", tags: ["Planning"] },
  { text: "Have you thought about the need for a data manager or data scientist?", tags: ["Planning"] },
  { text: "Have you thought about the cost for Data Management? Does your funding require you to budget for data management?", tags: ["Planning"] },
  { text: "Who else has collected this data? How? Why? When?", tags: ["Planning"] },
  { text: "Do you have the minimum information needed?", tags: ["Planning"] },
  { text: "What best practices are you going to employ during data collection, analysis, and data management?", tags: ["Planning"] },
  { text: "What standard vocabularies are relevant to your study?", tags: ["Planning"] },
  { text: "How will you communicate the results to the intended users of your output?", tags: ["Planning"] },
  { text: "What objectives are you planning to achieve? Are they SMART?", tags: ["Planning"] },
  { text: "Which other actors can be involved into your field campaigns?", tags: ["Planning"] },
  { text: "How will you ensure that your data will be FAIR?", tags: ["Planning"] },
  { text: "What new technology (equipment) can be used in your study?", tags: ["Planning"] },
  { text: "What Essential Ocean Variables will you be collecting?", tags: ["Planning"] },
  { text: "How can we strengthen the connection with other ocean observation components?", tags: ["Planning"] },
  { text: "Have you communicated with the relevant stakeholders' (needs and expectations)?", tags: ["Planning"] },

  // Data Collection
  { text: "What do I need to measure? How? When?", tags: ["Data Collection"] },
  { text: "What standard procedures (Best Practices) are you using?", tags: ["Data Collection"] },
  { text: "Has anyone created a model for the data you're planning to collect? Are our standard observation programs addressing the same context?", tags: ["Data Collection"] },
  { text: "Are there colleagues who are collecting similar data in a similar place or time that we can co-ordinate with?", tags: ["Data Collection"] },
  { text: "Are there additional parameters we can measure to enhance the efficiency of the data collection period?", tags: ["Data Collection"] },
  { text: "What controlled vocabularies should you use for this study?", tags: ["Data Collection"] },
  { text: "Did you ask your colleagues if they are interested in adding some sampling on top of yours?", tags: ["Data Collection"] },
  { text: "Does your data collection technique/variable allow for intercomparison with other studies at a global scale?", tags: ["Data Collection"] },
  { text: "Are the sensors being used calibrated? When was the last calibration? How often should it be calibrated?", tags: ["Data Collection"] },

  // Data Management
  { text: "What data management strategy are you going to use?", tags: ["Data Management"] },
  { text: "What format/data standards will you use for your data?", tags: ["Data Management"] },
  { text: "Have you thought about long-term data storage?", tags: ["Data Management"] },
  { text: "Are there any best practices you could use for your data management? Where will you document these procedures?", tags: ["Data Management"] },
  { text: "Where are you going to publish your data? Will you get a DOI for your raw data?", tags: ["Data Management"] },
  { text: "How are CARE principles relevant to your data?", tags: ["Data Management"] },
  { text: "How will you ensure the use of your data is acknowledged?", tags: ["Data Management"] },
  { text: "How will you ensure your data is reusable?", tags: ["Data Management"] },
  { text: "Have you thought about the minimum requirements of your metadata?", tags: ["Data Management"] },
  { text: "What fail safe (backups) will you implement to protect against data loss?", tags: ["Data Management"] },
  { text: "How often will you review your data management plan?", tags: ["Data Management"] },
  { text: "Do you think other data in other languages exists? Will your data require to be saved in other data languages?", tags: ["Data Management"] },
  { text: "Have you thought about controlled vocabularies for all your variables?", tags: ["Data Management"] },

  // Analysis and Modelling
  { text: "What data do you need to conduct your analysis/modelling?", tags: ["Analysis & Modelling"] },
  { text: "Have you checked other data repositories that hold the data that you require for analysis/modelling?", tags: ["Analysis & Modelling"] },
  { text: "How are you going to acknowledge the use of openly accessible data?", tags: ["Analysis & Modelling"] },
  { text: "What data threshold do you need to reduce uncertainty and enhance accuracy in your model?", tags: ["Analysis & Modelling"] },
  { text: "Are there any other variables that can be used in your data analysis/models that can enhance the output?", tags: ["Analysis & Modelling"] },
  { text: "Are your analysis/modeling outputs comparable with others across the globe?", tags: ["Analysis & Modelling"] },
  { text: "Are there ongoing studies that you can use for field validation of your model?", tags: ["Analysis & Modelling"] },
  { text: "How will the finding be applied in the society?", tags: ["Analysis & Modelling"] },

  // Data Products
  { text: "What data products are needed to answer societal problems?", tags: ["Data Products"] },
  { text: "Who is the intended user for this data product?", tags: ["Data Products"] },
  { text: "What expectation does the end user have for this data product?", tags: ["Data Products"] },
  { text: "How accurate is the data product?", tags: ["Data Products"] },
  { text: "How will you communicate the use of the data product to the society?", tags: ["Data Products"] },
  { text: "What data inputs are required for your product? Are they available? Who can you contact?", tags: ["Data Products"] },
  { text: "Is the data product you are providing the society appropriate at the level that they can understand?", tags: ["Data Products"] },
  { text: "How will you communicate the uncertainty in your data product to the end users?", tags: ["Data Products"] },

  // Application in Society
  { text: "Am I giving society what it needs?", tags: ["Application in Society"] },
  { text: "What is the society's need?", tags: ["Application in Society"] },
  { text: "How can you apply the finding in the society?", tags: ["Application in Society"] },
  { text: "How can you communicate the needs of the society to the relevant stakeholders?", tags: ["Application in Society"] },
  { text: "Who are you going to communicate the society’s needs to?", tags: ["Application in Society"] },
  { text: "How can the society (users) be involved in the ocean observation process?", tags: ["Application in Society"] },

  // Communication and Outreach
  { text: "Who are you communicating to/with?", tags: ["Communication & Outreach"] },
  { text: "Is the communication method chosen appropriate for the intended recipient?", tags: ["Communication a&nd Outreach"] },
  { text: "What do you want the respondent to do with the information communicated?", tags: ["Communication & Outreach"] },
  { text: "How can you track the efficiency of your chosen communication method?", tags: ["Communication & Outreach"] },
  { text: "Are there any cultural communication know-hows needed for your communication?", tags: ["Communication & Outreach"] },
  { text: "Do you need a communication specialist to communicate with the intended audience?", tags: ["Communication & Outreach"] },
  { text: "What language does the intended recipient use in communication?", tags: ["Communication & Outreach"] },

  // Evaluation
  { text: "Did we achieve what we set out to do?", tags: ["Evaluation"] },
  { text: "Am I using the best available frameworks to evaluate ocean observation efforts?", tags: ["Evaluation"] },
  { text: "How can I better align my evaluation efforts with the needs of other stakeholders?", tags: ["Evaluation"] },
  { text: "How can I foster stronger collaborations to ensure my evaluation insights lead to action?", tags: ["Evaluation"] },
  { text: "What key metrics should I be tracking to assess my effectiveness in evaluation?", tags: ["Evaluation"] },
  { text: "Is your Data Management Plan working?", tags: ["Evaluation"] },
  { text: "Does my review result in a diverse perspective, or reinforcing existing assumptions?", tags: ["Evaluation"] },

  { text: "Have you thought about a data management plan?", tags: ["Planning", "Data Management"] },
  { text: "Do you have a strategy for outreach?", tags: ["Communication & Outreach"] },
  { text: "Have you evaluated your data collection methods?", tags: ["Evaluation", "Data Collection"] },
  { text: "Have you considered the societal impact of your work?", tags: ["Application in Society"] },
  { text: "Do you know if your data will be usable for analysis and modeling?", tags: ["Data Collection", "Analysis & Modelling"] },
  { text: "Have you considered the data products you will create?", tags: ["Data Products"] },
  { text: "What work has already been done in this field? Who is actively doing work in this (geographic) area?", tags: ["Explore and Review to Learn", "Planning"] },
  { text: "What data do you need to collect to answer your research question?", tags: ["Planning", "Data Collection"] },
  { text: "What data do you have access to?", tags: ["Data Collection"] },
  { text: "Did your data collection methods work as expected?", tags: ["Data Collection", "Evaluation"] },
];

const tooltip = d3.select("#tooltip");
let multiSelectMode = false;

// Initialize SVG
const container = document.getElementById("spiderweb");
const svg = d3.select(container).append("svg");
const svgGroup = svg.append("g");

const dimensions = { width: 0, height: 0, radius: 0, centerX: 0, centerY: 0 };

function updateDimensions() {
  dimensions.width = container.offsetWidth;
  dimensions.height = container.offsetHeight || dimensions.width * 0.8;
  dimensions.radius = Math.min(dimensions.width, dimensions.height) * 0.35;
  dimensions.centerX = dimensions.width / 2;
  dimensions.centerY = dimensions.height / 2;

  svg.attr("width", dimensions.width).attr("height", dimensions.height);
}

const zoom = d3.zoom()
.scaleExtent([0.5, 5])
.on("zoom", (event) => {
  svgGroup.attr("transform", event.transform);
});
svg.call(zoom);

function findNodeById(id) {
  return data.nodes.find((node) => node.id === id);
}

function initializeNodes() {
  svgGroup
    .selectAll(".node")
    .data(data.nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 15)
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip)
    .on("click", toggleNodeSelection);
}

function initializeLinks() {
  svgGroup
    .selectAll(".link")
    .data(data.links)
    .enter()
    .append("line")
    .attr("class", "link")
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip)
    .on("click", toggleLinkSelection);
}

function initializeLabels() {
  svgGroup
    .selectAll(".node-label")
    .data(data.nodes)
    .enter()
    .append("text")
    .attr("class", "node-label")
    .text((d) => d.name || d.id)
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip);
}

function positionElements() {
  data.nodes.forEach((node, i) => {
    const angle = (i / data.nodes.length) * 2 * Math.PI - Math.PI / 2;
    node.x = dimensions.centerX + dimensions.radius * Math.cos(angle);
    node.y = dimensions.centerY + dimensions.radius * Math.sin(angle);
  });

  svgGroup.selectAll(".node").attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  svgGroup
    .selectAll(".link")
    .attr("x1", (d) => findNodeById(d.source).x)
    .attr("y1", (d) => findNodeById(d.source).y)
    .attr("x2", (d) => findNodeById(d.target).x)
    .attr("y2", (d) => findNodeById(d.target).y);
  svgGroup
    .selectAll(".node-label")
    .attr("x", (d) => d.x + 22 * Math.cos(Math.atan2(d.y - dimensions.centerY, d.x - dimensions.centerX)))
    .attr("y", (d) => d.y + 22 * Math.sin(Math.atan2(d.y - dimensions.centerY, d.x - dimensions.centerX)))
    .attr("text-anchor", (d) => {
      const angle = Math.atan2(d.y - dimensions.centerY, d.x - dimensions.centerX);
      return Math.cos(angle) > 0 ? "start" : "end";
    })
    .attr("alignment-baseline", (d) => {
      const angle = Math.atan2(d.y - dimensions.centerY, d.x - dimensions.centerX);
      return Math.sin(angle) > 0 ? "hanging" : "alphabetic";
    });  
    
}

function toggleNodeSelection(event, node) {
  const nodeElement = d3.select(this);
  const isSelected = nodeElement.classed("selected");
  const nodeId = node.id;

  if (multiSelectMode) {
    if (isSelected) {
      // Deselect the node itself
      nodeElement.classed("selected", false);

      // Deselect all links connected to this node
      d3.selectAll(".link").each(function(link) {
        if (link.source === nodeId || link.target === nodeId) {
          d3.select(this).classed("selected", false);
        }
      });
      hideInfoPanel();resetZoom();
      // Do NOT try to deselect other nodes here!
    } else {
      // Select the node itself
      nodeElement.classed("selected", true);
    }
  } else {
    if (isSelected) {
      // Deselect if the node is already selected
      d3.selectAll(".link, .node").classed("selected", false);
      hideInfoPanel();resetZoom();
    } else {
      // Clear all selections and select the clicked node
      d3.selectAll(".link, .node").classed("selected", false);
      nodeElement.classed("selected", true);
    }
  }

  
  if (!isSelected) zoomToTarget([node]);
  updateInfoPanel();
}

function toggleLinkSelection(event, link) {
  const linkElement = d3.select(this);
  const isSelected = linkElement.classed("selected");

  const sourceNodeId = link.source;
  const targetNodeId = link.target;
  const sourceNode = findNodeById(sourceNodeId);
  const targetNode = findNodeById(targetNodeId);  

  if (multiSelectMode) {
    if (isSelected) {
      // Deselect the link itself
      linkElement.classed("selected", false);

      // Check if the source and target nodes are connected to any other selected links
      const selectedLinks = d3.selectAll(".link.selected").data();

      // Determine if sourceNode should remain selected
      const isSourceConnected = selectedLinks.some(
        (otherLink) =>
          otherLink.source === sourceNodeId || otherLink.target === sourceNodeId
      );

      // Determine if targetNode should remain selected
      const isTargetConnected = selectedLinks.some(
        (otherLink) =>
          otherLink.source === targetNodeId || otherLink.target === targetNodeId
      );

      // Deselect sourceNode if not connected to other selected links
      if (!isSourceConnected) {
        d3.selectAll(".node").each(function (node) {
          if (node.id === sourceNodeId) {
            d3.select(this).classed("selected", false);
          }
        });
      }

      // Deselect targetNode if not connected to other selected links
      if (!isTargetConnected) {
        d3.selectAll(".node").each(function (node) {
          if (node.id === targetNodeId) {
            d3.select(this).classed("selected", false);
          }
        });
      }
      hideInfoPanel();resetZoom();
    } else {
      // Select the link and connected nodes
      linkElement.classed("selected", true);

      d3.selectAll(".node").each(function (node) {
        if (node.id === sourceNodeId || node.id === targetNodeId) {
          d3.select(this).classed("selected", true);
        }
      });
    }
  } else {
    // Single-select mode logic
    if (isSelected) {
      d3.selectAll(".link, .node").classed("selected", false);
      hideInfoPanel();resetZoom();
    } else {
      d3.selectAll(".link, .node").classed("selected", false);
      linkElement.classed("selected", true);

      d3.selectAll(".node").each(function (node) {
        if (node.id === sourceNodeId || node.id === targetNodeId) {
          d3.select(this).classed("selected", true);
        }
      });
    }
  }

  
  if (!isSelected)zoomToTarget([sourceNode, targetNode]);
  updateInfoPanel();
}

function zoomToTarget(targetNodes = []) {
  const svg = d3.select("svg"); // Adjust selector based on your setup
  const g = svg.select("g"); // Assuming your graph elements are within a <g> element

  if (targetNodes.length === 0) {
    // Reset zoom to default view
    const resetTransform = d3.zoomIdentity.translate(0, 0).scale(1);
    svg.transition()
      .duration(750)
      .call(zoom.transform, resetTransform); // Update d3.zoom state
    return;
  }

  const bounds = { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity };

  targetNodes.forEach(node => {
    bounds.x1 = Math.min(bounds.x1, node.x);
    bounds.y1 = Math.min(bounds.y1, node.y);
    bounds.x2 = Math.max(bounds.x2, node.x);
    bounds.y2 = Math.max(bounds.y2, node.y);
  });

  const width = bounds.x2 - bounds.x1;
  const height = bounds.y2 - bounds.y1;
  const centerX = (bounds.x1 + bounds.x2) / 2;
  const centerY = (bounds.y1 + bounds.y2) / 2;

  const svgWidth = parseInt(svg.style("width"));
  const svgHeight = parseInt(svg.style("height"));

  const scale = Math.min(svgWidth / width, svgHeight / height, 2); // Cap scale at 2 for max zoom
  const translate = [
    svgWidth / 2 - scale * centerX - 100,
    svgHeight / 2 - scale * centerY,
  ];

  const transform = d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale);

  svg.transition()
    .duration(750)
    .call(zoom.transform, transform); // Update d3.zoom state
}

function resetZoom() {
  const resetTransform = d3.zoomIdentity.translate(0, 0).scale(1);
  svg.transition()
    .duration(750)
    .call(zoom.transform, resetTransform); // Update d3.zoom state
}
function showTooltip(event, d) {
  const content = d.description || `${d.source} ↔ ${d.target}`;
  tooltip.style("left", `${event.pageX + 10}px`)
    .style("top", `${event.pageY + 10}px`)
    .style("display", "inline-block")
    .html(`<strong>${d.id || "Link"}</strong><br>${content}`);
}
function hideTooltip() {
  tooltip.style("display", "none");
}

function updateInfoPanel() {
  console.log("updateInfoPanel called");
  const selectedNodes = d3.selectAll(".node.selected").data();
  const selectedLinks = d3.selectAll(".link.selected").data();
  
  const selectedNodeIds = selectedNodes.map(node => node.id);
  const selectedLinkNodeIds = selectedLinks.flatMap(link => [link.source, link.target]);

  const allSelectedIds = [...new Set([...selectedNodeIds, ...selectedLinkNodeIds])];

  const selectedDescriptions = selectedNodes
    .map(node => `<strong>${node.id}:</strong> ${node.description}`)
    .join("<br><br>");

  const associatedQuestions = questions.filter(q => allSelectedIds.some(id => q.tags.includes(id)))
    .map(q => `<li>${q.text}</li>`).join("");

    const selectedComponents = allSelectedIds.join(", ");
    if (allSelectedIds.length > 0 || associatedQuestions) {
      showInfoPanel(`
        <h2>Blueprint Component(s):</h2><h3>${selectedComponents}</h3>
        <h2>Description:</h2><p>${selectedDescriptions}</p>
        <h2>Questions:</h2>${associatedQuestions}`);
    } else {
    hideInfoPanel();
  }
}
function showInfoPanel(content) {
  console.log("showInfoPanel called with content:", content);
  d3.select("#info-content").html(content);
  document.getElementById("info-panel").style.display = "block";
}
function hideInfoPanel() {
  console.log("hideInfoPanel called");
  document.getElementById("info-panel").style.display = "none";
  resetZoom();
}

function resetSelection() {
  d3.selectAll(".node, .link").classed("selected", false);
  updateInfoPanel();
  zoomToTarget();
}

document.getElementById("toggle-selection-mode").addEventListener("change", (e) => {
  multiSelectMode = e.target.checked;
  document.getElementById("toggle-label").textContent = multiSelectMode ? "Multi-Select" : "Single Select";
});
document.getElementById("close-info-panel").addEventListener("click", hideInfoPanel);

document.getElementById("deselect-all").addEventListener("click", resetSelection);

function initialize() {
  updateDimensions();
  initializeLinks();
  initializeNodes(); 
  initializeLabels(); 
  positionElements();

  const resizeObserver = new ResizeObserver(() => {
    updateDimensions();
    positionElements();
  });
  resizeObserver.observe(container);
}

initialize();
