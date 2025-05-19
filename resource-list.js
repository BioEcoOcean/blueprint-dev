function updateResourceList(data) {
  const activeTags = Array.from(document.querySelectorAll(".tag-filter input:checked"))
    .map(input => input.value);

  const exclusiveToggle = document.getElementById("exclusive-filter-toggle").checked;

  console.log("Active tags:", activeTags); // Debugging line
  console.log("Exclusive mode:", exclusiveToggle); // Debugging line

  // Filter resources based on active tags
  const filteredData = data.filter(d => {
    const resourceTags = Object.keys(d)
      .filter(key => !["Name", "Link", "Description"].includes(key) && d[key].toLowerCase() === "yes");
    if (exclusiveToggle) {
      // In exclusive mode, include only resources with EXACTLY the active tags
      return resourceTags.length === activeTags.length && activeTags.every(tag => resourceTags.includes(tag));
    } else {
      // Default mode: include resources with ANY of the active tags
      return activeTags.some(tag => resourceTags.includes(tag));
    }
  });

  // If no resources match, show a message
  if (filteredData.length === 0) {
    document.getElementById("resources-list").innerHTML = "<em>No resources match the selected filters.</em>";
    return;
  }

  // Generate HTML for the filtered list
  let html = "<ul>";
  filteredData.forEach(d => {
    const tags = Object.keys(d)
      .filter(key => !["Name", "Link", "Description"].includes(key) && d[key].toLowerCase() === "yes");
    html += `<li>
      <strong><a href="${d.Link}" target="_blank">${d.Name}</a></strong>
      <span>${d.Description}</span><br>
      <span>${tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}</span>
    </li><br>`;
  });
  html += "</ul>";

  // Update the resource list with filtered resources
  document.getElementById("resources-list").innerHTML = html;
}

// Generate filter checkboxes based on unique tag headers
function generateFilterCheckboxes(data) {
  const tagHeaders = Object.keys(data[0]).filter(key => !["Name", "Link", "Description"].includes(key));

  console.log("Tag Headers:", tagHeaders); // Debugging line

  let filterHTML = "";
  tagHeaders.forEach(tag => {
    filterHTML += `
      <div>
        <label>
          <input type="checkbox" value="${tag}" checked> ${tag}
        </label>
      </div>`;
  });

  document.getElementById("filter-controls").innerHTML = filterHTML;
}

// Attach event listeners to checkboxes
function attachFilterListeners(data) {
 const checkboxes = document.querySelectorAll(".tag-filter input");
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => updateResourceList(data));
  });

  const exclusiveToggle = document.getElementById("exclusive-filter-toggle");
  exclusiveToggle.addEventListener("change", () => updateResourceList(data));

  const selectAllButton = document.getElementById("select-all-btn");
  selectAllButton.addEventListener("click", () => {
    // Check all checkboxes
    checkboxes.forEach(checkbox => checkbox.checked = true);

    // Update the resource list after selecting all
    updateResourceList(data);
  });

  const deselectAllButton = document.getElementById("deselect-all-btn");
  deselectAllButton.addEventListener("click", () => {
    // Uncheck all checkboxes
    checkboxes.forEach(checkbox => checkbox.checked = false);

    // Update the resource list after deselecting all
    updateResourceList(data);
  });
}

// Load data and initialize filters
d3.csv("resources/resources.csv").then(function (data) {
  // If no data, show an empty state message
  if (!data || data.length === 0) {
    document.getElementById("resources-list").innerHTML = "<em>No resources listed yet.</em>";
    return;
  }

  // Generate and populate filters
  generateFilterCheckboxes(data);

  // Populate initial resource list
  updateResourceList(data);

  // Attach filter listeners
  attachFilterListeners(data);
}).catch(function (error) {
  console.error("Error loading resources:", error);
  document.getElementById("resources-list").innerHTML = "<em>Could not load resources list.</em>";
});
