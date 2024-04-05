// Function to open the modal
function openModal(technology) {
  var modal = document.getElementById("myModal");
  var modalTitle = document.getElementById("modal-title");
  var installationSteps = document.getElementById("installation-steps");
  var documentationLink = document.getElementById("documentation-link");

  // Set modal title
  modalTitle.innerText = "Install " + technology;

  // Set installation steps and documentation link based on technology
  switch (technology) {
    case 'Node.js':
      installationSteps.innerHTML = `
        <p>1. Go to <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>.</p>
        <p>2. Download and run the installer.</p>
        <p>3. Follow the installation instructions.</p>
        <p>4. Verify the installation by running <code>node -v</code> and <code>npm -v</code> in your terminal or command prompt.</p>
      `;
      documentationLink.href = "https://nodejs.org/en/docs/";
      break;
    case 'Express.js':
      installationSteps.innerHTML = `
        <p>1. Install Node.js if not already installed (see Node.js installation steps).</p>
        <p>2. Create a new directory for your Express.js project.</p>
        <p>3. Navigate to the directory in your terminal or command prompt.</p>
        <p>4. Run the command: <code>npm install express</code>.</p>
        <p>5. Start your Express.js server using the appropriate command.</p>
      `;
      documentationLink.href = "https://expressjs.com/en/starter/installing.html";
      break;
    case 'GraphQL':
      installationSteps.innerHTML = `
        <p>To use GraphQL, you typically integrate it into your existing project or create a new project that utilizes GraphQL.</p>
        <p>Integrate GraphQL into Existing Project: If you have an existing project and want to add GraphQL to it, follow these steps:</p>
        <p>Install GraphQL Dependencies: Use npm or yarn to install the necessary GraphQL packages. Run the following command in your project directory:</p>
        <pre><code class="language-bash">npm install graphql</code></pre>
        <p>or</p>
        <pre><code class="language-bash">yarn add graphql</code></pre>
        <p>Follow the official GraphQL documentation for more information on setting up and using GraphQL in your project.</p>
      `;
      documentationLink.href = "https://graphql.org/";
      break;
    case 'Bootstrap':
      installationSteps.innerHTML = `
        <p>1. Install Bootstrap via npm or yarn by running the following command in your project directory:</p>
        <pre><code class="language-bash">npm install bootstrap</code></pre>
        <p>or</p>
        <pre><code class="language-bash">yarn add bootstrap</code></pre>
        <p>2. Include Bootstrap CSS and JavaScript files in your HTML file.</p>
        <p>3. Follow the Bootstrap documentation and examples to use Bootstrap components and styles in your project.</p>
      `;
      documentationLink.href = "https://getbootstrap.com/docs/5.0/getting-started/introduction/";
      break;
    default:
      installationSteps.innerText = "Installation steps for " + technology + " are not available.";
      documentationLink.href = "#";
  }

  // Open the modal
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal(); // Call closeModal function when clicking outside the modal
  }
}
