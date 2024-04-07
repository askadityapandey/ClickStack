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
      case 'Flask':
  installationSteps.innerHTML = `
    <p>1. Install Python if not already installed. You can download Python from <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a>.</p>
    <p>2. Create a virtual environment for your Flask project. Open your terminal or command prompt and navigate to your project directory.</p>
    <pre><code class="language-bash">python -m venv myprojectenv</code></pre>
    <p>3. Activate the virtual environment. On Windows:</p>
    <pre><code class="language-bash">myprojectenv\Scripts\activate</code></pre>
    <p>On macOS and Linux:</p>
    <pre><code class="language-bash">source myprojectenv/bin/activate</code></pre>
    <p>4. Install Flask within your virtual environment using pip:</p>
    <pre><code class="language-bash">pip install Flask</code></pre>
    <p>5. Create your Flask application. You can create a new Python file, for example, <code>app.py</code>, and write your Flask code in it.</p>
    <p>6. Run your Flask application:</p>
    <pre><code class="language-bash">python app.py</code></pre>
  `;
  documentationLink.href = "https://flask.palletsprojects.com/en/2.0.x/";
  break;
  case 'Django':
    installationSteps.innerHTML = `
      <p>1. Install Python: Django is a Python web framework, so you'll need to have Python installed on your system. You can download Python from <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a>.</p>
      <p>2. Create a Virtual Environment: It's recommended to work within a virtual environment to keep your Django project dependencies isolated. You can create a virtual environment using the following command:</p>
      <pre><code class="language-bash">python3 -m venv myenv</code></pre>
      <p>3. Activate the Virtual Environment: Activate the virtual environment by running the appropriate command for your operating system:</p>
      <pre><code class="language-bash">source myenv/bin/activate (Linux/macOS)</code></pre>
      <pre><code class="language-bash">myenv\Scripts\activate (Windows)</code></pre>
      <p>4. Install Django: Once the virtual environment is activated, you can install Django using pip:</p>
      <pre><code class="language-bash">pip install django</code></pre>
      <p>5. Create a Django Project: After installing Django, you can create a new Django project using the following command:</p>
      <pre><code class="language-bash">django-admin startproject myproject</code></pre>
      <p>6. Run the Development Server: Navigate into the project directory and start the Django development server:</p>
      <pre><code class="language-bash">cd myproject</code></pre>
      <pre><code class="language-bash">python manage.py runserver</code></pre>
      <p>7. Visit localhost:8000 in your web browser to see your Django project running.</p>
    `;
    documentationLink.href = "https://docs.djangoproject.com/en/stable/";
    break;
    case 'Bootstrap':
      installationSteps.innerHTML = `
        <p>1. Install Bootstrap via npm or yarn by running the following command in your project directory:</p>
        <pre><code class="language-bash">npm install bootstrap</code></pre>
        <p>or</p>
        <pre><code class="language-bash">yarn add bootstrap</code></pre>
        <p>2. Include Bootstrap CSS and JavaScript files in your HTML file. You can do this by adding the following lines to the <head> section of your HTML:</p>
        <pre><code class="language-html">&lt;link href="path/to/bootstrap.min.css" rel="stylesheet"&gt;</code></pre>
        <pre><code class="language-html">&lt;script src="path/to/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</code></pre>
        <p>Replace "path/to" with the actual path to the Bootstrap files in your project.</p>
        <p>3. Alternatively, you can include Bootstrap via CDN (Content Delivery Network) by adding the following lines to the <head> section of your HTML:</p>
        <pre><code class="language-html">&lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet"&gt;</code></pre>
        <pre><code class="language-html">&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</code></pre>
        <p>Replace "5.3.0" with the desired version of Bootstrap.</p>
        <p>4. Follow the Bootstrap documentation and examples to use Bootstrap components and styles in your project.</p>
      `;
      documentationLink.href = "https://getbootstrap.com/docs/5.3/getting-started/introduction/";
      break;
      case 'Vue.js':
        installationSteps.innerHTML = `
          <p>1. Install Node.js: Vue.js requires Node.js and npm (Node Package Manager) to be installed on your system. You can download Node.js from <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>.</p>
          <p>2. Create a Vue.js Project: You can create a new Vue.js project using Vue CLI (Command Line Interface). Install Vue CLI globally using npm:</p>
          <pre><code class="language-bash">npm install -g @vue/cli</code></pre>
          <p>3. Create a new Vue.js project by running:</p>
          <pre><code class="language-bash">vue create my-vue-project</code></pre>
          <p>4. Follow the prompts to select features and configure your project. You can choose the default settings for a quick start.</p>
          <p>5. Navigate to your project directory:</p>
          <pre><code class="language-bash">cd my-vue-project</code></pre>
          <p>6. Run the development server:</p>
          <pre><code class="language-bash">npm run serve</code></pre>
          <p>7. Open your web browser and go to the address provided by the development server (usually http://localhost:8080/) to see your Vue.js application running.</p>
        `;
        documentationLink.href = "https://vuejs.org/v2/guide/";
        break;
        case 'TensorFlow':
          installationSteps.innerHTML = `
            <p>1. Install Python: TensorFlow is compatible with Python, so you need to have Python installed on your system. You can download Python from <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a>.</p>
            <p>2. Create a Virtual Environment (optional): While not strictly necessary, it's recommended to work within a virtual environment to manage dependencies. You can create a virtual environment using the following command:</p>
            <pre><code class="language-bash">python3 -m venv myenv</code></pre>
            <p>3. Activate the Virtual Environment (optional): Activate the virtual environment by running the appropriate command for your operating system:</p>
            <pre><code class="language-bash">source myenv/bin/activate (Linux/macOS)</code></pre>
            <pre><code class="language-bash">myenv\Scripts\activate (Windows)</code></pre>
            <p>4. Install TensorFlow: You can install TensorFlow using pip, which is Python's package manager:</p>
            <pre><code class="language-bash">pip install tensorflow</code></pre>
            <p>Depending on your system and requirements, you can install the CPU version of TensorFlow with the command above. If you have a compatible GPU and want to utilize it, you can install the GPU version using:</p>
            <pre><code class="language-bash">pip install tensorflow-gpu</code></pre>
            <p>5. Verify the Installation: After installation, you can verify TensorFlow installation by importing it in a Python script or a Python interactive shell:</p>
            <pre><code class="language-python">import tensorflow as tf</code></pre>
            <p>If no errors occur, TensorFlow is successfully installed.</p>
          `;
          documentationLink.href = "https://www.tensorflow.org/install";
          break;
          case 'Svelte.js':
            installationSteps.innerHTML = `
              <p>1. Install Node.js: Svelte.js requires Node.js to be installed on your system. You can download and install Node.js from <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>.</p>
              <p>2. Create a New Svelte Project: Use the degit tool to clone the official Svelte template from GitHub. Run the following command in your terminal or command prompt:</p>
              <pre><code class="language-bash">npx degit sveltejs/template my-svelte-project</code></pre>
              <p>This will create a new directory named "my-svelte-project" with the Svelte project template.</p>
              <p>3. Navigate to Your Project Directory: Change into the directory of your newly created Svelte project:</p>
              <pre><code class="language-bash">cd my-svelte-project</code></pre>
              <p>4. Install Dependencies: Use npm or yarn to install the project dependencies:</p>
              <pre><code class="language-bash">npm install</code></pre>
              <p>or</p>
              <pre><code class="language-bash">yarn install</code></pre>
              <p>5. Start the Development Server: Once the dependencies are installed, you can start the development server:</p>
              <pre><code class="language-bash">npm run dev</code></pre>
              <p>This command will start a development server at <code>localhost:5000</code> where you can see your Svelte app running.</p>
              <p>6. Start Building Your Svelte App: You can now start building your Svelte application by modifying the files in the project directory. Refer to the official Svelte documentation for more information on building Svelte apps.</p>
            `;
            documentationLink.href = "https://svelte.dev/docs";
            break;
            case 'Redux':
              installationSteps.innerHTML = `
                <p>1. Install Redux: You can install Redux and its related packages using npm or yarn. Run the following command in your project directory:</p>
                <pre><code class="language-bash">npm install redux react-redux</code></pre>
                <p>or</p>
                <pre><code class="language-bash">yarn add redux react-redux</code></pre>
                <p>2. Set up Redux Store: Create a Redux store to manage your application state. This typically involves creating a store configuration file where you combine reducers and middleware.</p>
                <p>3. Create Reducers: Define reducers to specify how the state should change in response to actions. Reducers are pure functions that take the previous state and an action as arguments and return the new state.</p>
                <p>4. Connect Components: Use the connect function provided by react-redux to connect your React components to the Redux store. This allows components to access state and dispatch actions.</p>
                <p>5. Dispatch Actions: Dispatch actions from your components or other parts of your application to update the state in the Redux store.</p>
                <p>6. Handle Actions: Implement action creators to create actions, which are plain JavaScript objects with a type property that describes the action.</p>
                <p>7. Update State: Update the application state in the Redux store based on the actions dispatched by your components.</p>
                <p>8. Use Middleware (Optional): Apply middleware to extend Redux with custom functionality, such as logging, asynchronous actions, or routing.</p>
                <p>9. Follow Redux Documentation and Tutorials: Explore the official Redux documentation and tutorials to learn more about best practices and advanced features.</p>
              `;
              documentationLink.href = "https://redux.js.org/";
              break;
              case 'Redis':
                installationSteps.innerHTML = `
                  <p>1. Download and Extract Redis: Visit the Redis download page at <a href="https://redis.io/download" target="_blank">https://redis.io/download</a> and download the latest stable version of Redis. Once downloaded, extract the contents of the archive to a directory on your system.</p>
                  <p>2. Compile Redis: Open a terminal or command prompt, navigate to the directory where you extracted Redis, and run the following commands to compile Redis:</p>
                  <pre><code class="language-bash">cd redis-x.y.z (Replace x.y.z with the version number)</code></pre>
                  <pre><code class="language-bash">make</code></pre>
                  <p>3. Run Redis Server: After compilation, you can start the Redis server by running the following command:</p>
                  <pre><code class="language-bash">src/redis-server</code></pre>
                  <p>4. Verify Installation: You can verify that Redis is running correctly by opening another terminal or command prompt window and running the Redis CLI:</p>
                  <pre><code class="language-bash">src/redis-cli</code></pre>
                  <p>This should open the Redis command-line interface where you can interact with the Redis server.</p>
                  <p>5. Integration with Your Application: To integrate Redis with your application, you'll need to install a Redis client library for your programming language of choice. Consult the documentation or community resources for your specific programming language for instructions on how to install and use the Redis client.</p>
                `;
                documentationLink.href = "https://redis.io/documentation";
                break;
                case 'Next.js':
                  installationSteps.innerHTML = `
                    <p>1. Initialize a New Next.js Project: You can create a new Next.js project using the following command in your terminal:</p>
                    <pre><code class="language-bash">npx create-next-app my-next-app</code></pre>
                    <p>This command will set up a new Next.js project with all the necessary files and dependencies.</p>
                    <p>2. Navigate to the Project Directory: Move into your newly created Next.js project directory:</p>
                    <pre><code class="language-bash">cd my-next-app</code></pre>
                    <p>3. Run the Development Server: Start the development server by running the following command:</p>
                    <pre><code class="language-bash">npm run dev</code></pre>
                    <p>This will start the development server and you can access your Next.js application at <code>http://localhost:3000</code>.</p>
                    <p>4. Explore Next.js Documentation and Examples: Visit the Next.js documentation to learn more about how to build and deploy Next.js applications:</p>
                    <a href="https://nextjs.org/docs" target="_blank">Next.js Documentation</a>
                  `;
                  documentationLink.href = "https://nextjs.org/";
                  break;
                  case 'Socket.IO':
                    installationSteps.innerHTML = `
                      <p>1. Install Node.js: Socket.IO is a JavaScript library that runs on Node.js, so you'll need to have Node.js installed on your system. You can download Node.js from <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>.</p>
                      <p>2. Create a new directory for your project and navigate into it using your terminal or command prompt.</p>
                      <p>3. Initialize a new Node.js project by running the following command:</p>
                      <pre><code class="language-bash">npm init -y</code></pre>
                      <p>4. Install Socket.IO: Use npm to install Socket.IO in your project directory:</p>
                      <pre><code class="language-bash">npm install socket.io</code></pre>
                      <p>5. Create a JavaScript file (e.g., index.js) where you'll write your Socket.IO server code.</p>
                      <p>6. In your index.js file, require Socket.IO and create a new instance of the Socket.IO server:</p>
                      <pre><code class="language-javascript">const io = require('socket.io')(server);</code></pre>
                      <p>7. Implement Socket.IO functionality in your server-side JavaScript code, such as handling connections, events, and broadcasting messages.</p>
                      <p>8. You can also create a client-side HTML file where you'll include the Socket.IO client library and write JavaScript code to interact with the server.</p>
                      <p>9. Start your Socket.IO server by running your index.js file:</p>
                      <pre><code class="language-bash">node index.js</code></pre>
                      <p>10. Access your Socket.IO application through your web browser or another client application.</p>
                    `;
                    documentationLink.href = "https://socket.io/docs/";
                    break;
                    case 'Tailwind':
                      installationSteps.innerHTML = `
                        <p>1. Create a New Project: Start by creating a new project directory where you want to use Tailwind CSS.</p>
                        <p>2. Initialize the Project: Navigate to your project directory in the terminal and run the following command to initialize your project:</p>
                        <pre><code class="language-bash">npm init -y</code></pre>
                        <p>3. Install Tailwind CSS: Install Tailwind CSS and its dependencies using npm:</p>
                        <pre><code class="language-bash">npm install tailwindcss postcss autoprefixer</code></pre>
                        <p>4. Create Configuration Files: Create a Tailwind CSS configuration file named <code>tailwind.config.js</code> by running the following command:</p>
                        <pre><code class="language-bash">npx tailwindcss init</code></pre>
                        <p>5. Create PostCSS Configuration: Create a PostCSS configuration file named <code>postcss.config.js</code> in your project root directory:</p>
                        <pre><code class="language-bash">touch postcss.config.js</code></pre>
                        <p>And add the following content to the <code>postcss.config.js</code> file:</p>
                        <pre><code class="language-js">module.exports = {
                      plugins: [
                        require('tailwindcss'),
                        require('autoprefixer'),
                      ],
                    }</code></pre>
                        <p>6. Include Tailwind CSS in Your CSS: Create a CSS file (e.g., <code>styles.css</code>) where you will include Tailwind CSS utility classes:</p>
                        <pre><code class="language-bash">touch styles.css</code></pre>
                        <p>And add the following content to the <code>styles.css</code> file:</p>
                        <pre><code class="language-css">@import 'tailwindcss/base';
                    @import 'tailwindcss/components';
                    @import 'tailwindcss/utilities';</code></pre>
                        <p>7. Build Your CSS: You can now use Tailwind CSS utility classes in your HTML files. To build your CSS, add a build script to your <code>package.json</code> file:</p>
                        <pre><code class="language-json">"scripts": {
                      "build:css": "postcss styles.css -o output.css"
                    }</code></pre>
                        <p>Then run the build script:</p>
                        <pre><code class="language-bash">npm run build:css</code></pre>
                        <p>8. Link CSS in HTML: Finally, link the compiled CSS file (<code>output.css</code>) in your HTML files:</p>
                        <pre><code class="language-html">&lt;link rel="stylesheet" href="output.css"&gt;</code></pre>
                        <p>Now you can start using Tailwind CSS classes in your HTML files.</p>
                      `;
                      documentationLink.href = "https://tailwindcss.com/docs/installation";
                      break;
                      case 'Kafka':
                        installationSteps.innerHTML = `
                          <p>1. Download Apache Kafka: Go to the official Apache Kafka website (<a href="https://kafka.apache.org/downloads" target="_blank">https://kafka.apache.org/downloads</a>) and download the latest stable release.</p>
                          <p>2. Extract the Kafka Archive: Once the download is complete, extract the contents of the Kafka archive to your desired installation directory.</p>
                          <pre><code class="language-bash">tar -xzf kafka_2.x-x.x.x.tgz</code></pre>
                          <p>3. Navigate to Kafka Directory: Change into the Kafka directory:</p>
                          <pre><code class="language-bash">cd kafka_2.x-x.x.x</code></pre>
                          <p>4. Start Zookeeper: Kafka uses Zookeeper, so you need to start a Zookeeper server. You can use the provided script:</p>
                          <pre><code class="language-bash">bin/zookeeper-server-start.sh config/zookeeper.properties</code></pre>
                          <p>5. Start Kafka Server: Open a new terminal and start the Kafka server:</p>
                          <pre><code class="language-bash">bin/kafka-server-start.sh config/server.properties</code></pre>
                          <p>6. Create a Topic: You can create a Kafka topic using the following command:</p>
                          <pre><code class="language-bash">
        bin/kafka-topics.sh --create --topic my-topic --
        bootstrap-server localhost:9092 --replication-factor 1 
        --partitions 1</code></pre>
                          <p>Replace 'my-topic' with your desired topic name.</p>
                          <p>7. Produce and Consume Messages: You can now produce and consume messages from your Kafka topic. Use the following commands:</p>
                          <pre><code class="language-bash">bin/kafka-console-producer.sh --topic my-topic
                           --bootstrap-server localhost:9092</code></pre>
                          <p>and</p>
                          <pre><code class="language-bash">bin/kafka-console-consumer.sh --topic my-topic --from-beginning 
                          --bootstrap-server localhost:9092</code></pre>
                          <p>Replace 'my-topic' with your actual topic name.</p>
                          <p>8. Explore Kafka Documentation: Refer to the official Kafka documentation for advanced configurations and usage.</p>
                        `;
                        documentationLink.href = "https://kafka.apache.org/documentation/";
                        break;
                        case 'Firebase':
                          installationSteps.innerHTML = `
                            <p>1. Set up a Firebase Project: Go to the Firebase Console (<a href="https://console.firebase.google.com/" target="_blank">https://console.firebase.google.com/</a>) and create a new project.</p>
                            <p>2. Add Firebase to your Web App: In the Firebase Console, select your project and click on the Web icon (</>). Follow the instructions to register your app with Firebase and obtain your Firebase configuration settings.</p>
                            <p>3. Install Firebase SDK: In your project directory, install the Firebase SDK using npm or yarn:</p>
                            <pre><code class="language-bash">npm install firebase</code></pre>
                            <p>or</p>
                            <pre><code class="language-bash">yarn add firebase</code></pre>
                            <p>4. Initialize Firebase in your App: In your JavaScript code, initialize Firebase with your Firebase configuration:</p>
                            <pre><code class="language-javascript">
                 // Import Firebase SDK
                import firebase from 'firebase/app';
               import 'firebase/auth'; 
              import 'firebase/firestore';
                        
                // Initialize Firebase
             const firebaseConfig = {
             apiKey: "YOUR_API_KEY",
             authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
             messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
             appId: "YOUR_APP_ID"
                            };
                        
              firebase.initializeApp(firebaseConfig);
                            </code></pre>
                            <p>5. Start using Firebase: Now you can start using Firebase services like Authentication, Firestore, Realtime Database, Cloud Storage, etc. Refer to the Firebase documentation for more information on integrating and using Firebase services in your app.</p>
                          `;
                          documentationLink.href = "https://firebase.google.com/docs";
                          break;
                          case 'Docker':
                            installationSteps.innerHTML = `
                              <p>1. Install Docker Desktop: Docker Desktop is available for both Windows and macOS. You can download it from the official Docker website: <a href="https://www.docker.com/products/docker-desktop" target="_blank">https://www.docker.com/products/docker-desktop</a>.</p>
                              <p>2. Run the Installer: Once the download is complete, run the Docker Desktop installer and follow the on-screen instructions to complete the installation.</p>
                              <p>3. Start Docker Desktop: After installation, start Docker Desktop from your applications menu. It may take a few moments to initialize.</p>
                              <p>4. Verify Installation: Once Docker Desktop is running, open a terminal or command prompt and run the following command to verify that Docker is installed:</p>
                              <pre><code class="language-bash">docker --version</code></pre>
                              <p>You should see the Docker version information if the installation was successful.</p>
                              <p>5. Optionally, you can create a Docker Hub account if you want to share your Docker images or collaborate with others. You can sign up for a Docker Hub account at <a href="https://hub.docker.com/" target="_blank">https://hub.docker.com/</a>.</p>
                            `;
                            documentationLink.href = "https://docs.docker.com/get-started/";
                            break;
                            case 'AXIOS':
                              installationSteps.innerHTML = `
                                <p>1. Install Axios: You can install Axios via npm or yarn by running the following command in your project directory:</p>
                                <pre><code class="language-bash">npm install axios</code></pre>
                                <p>or</p>
                                <pre><code class="language-bash">yarn add axios</code></pre>
                                <p>2. Import Axios: Once installed, you can import Axios into your project where you need to make HTTP requests. For example:</p>
                                <pre><code class="language-javascript">import axios from 'axios';</code></pre>
                                <p>3. Use Axios: You can now use Axios to make HTTP requests. Here's an example of making a GET request:</p>
                                <pre><code class="language-javascript">// Make a GET request
            axios.get('https://api.example.com/data')
              then(response => {
              // Handle success
               console.log(response.data);
                })
              .catch(error => {
            // Handle error
            console.error('There was an error!', error);
             });</code></pre>
                                  <p>4. Refer to the Axios documentation for more advanced usage and configuration options.</p>                       
                              `;
                              documentationLink.href = "https://axios-http.com/docs/intro";
                              break;
                              case 'Angular':
                                installationSteps.innerHTML = `
                                  <p>1. Install Node.js: Angular requires Node.js and npm to be installed on your system. You can download and install Node.js from <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>.</p>
                                  <p>2. Install Angular CLI: Angular CLI is a command-line interface tool that helps you to initialize, develop, scaffold, and maintain Angular applications. Install it globally using npm:</p>
                                  <pre><code class="language-bash">npm install -g @angular/cli</code></pre>
                                  <p>3. Create a New Angular Project: Once Angular CLI is installed, you can create a new Angular project using the following command:</p>
                                  <pre><code class="language-bash">ng new my-angular-app</code></pre>
                                  <p>4. Navigate into the Project Directory: Move into the newly created project directory:</p>
                                  <pre><code class="language-bash">cd my-angular-app</code></pre>
                                  <p>5. Serve the Application: Use Angular CLI to serve your application locally. This will build the application, watch for changes in your files, and reload the browser automatically:</p>
                                  <pre><code class="language-bash">ng serve</code></pre>
                                  <p>6. Visit localhost:4200: Open your web browser and navigate to <a href="http://localhost:4200" target="_blank">http://localhost:4200</a> to see your Angular application running.</p>
                                `;
                                documentationLink.href = "https://angular.io/docs";
                                break;
                                case 'ffmpeg':
                                  installationSteps.innerHTML = `
                                    <p>1. Download ffmpeg: Visit the official ffmpeg website at <a href="https://ffmpeg.org/download.html" target="_blank">https://ffmpeg.org/download.html</a>.</p>
                                    <p>2. Choose your operating system: Select the appropriate download link for your operating system (Windows, macOS, Linux).</p>
                                    <p>3. Install ffmpeg:</p>
                                    <ul>
                                      <li><strong>Windows:</strong> Extract the downloaded zip file and add the ffmpeg binary directory to your system's PATH environment variable.</li>
                                      <li><strong>macOS:</strong> Follow the instructions provided in the downloaded package to install ffmpeg. You may need to move the ffmpeg binary to a location in your PATH or use it directly from the extracted directory.</li>
                                      <li><strong>Linux:</strong> Use your package manager to install ffmpeg. For example, on Ubuntu, you can run:</li>
                                    </ul>
                                    <pre><code class="language-bash">sudo apt-get install ffmpeg</code></pre>
                                    <p>4. Verify the installation: Open a terminal or command prompt and run:</p>
                                    <pre><code class="language-bash">ffmpeg -version</code></pre>
                                    <p>You should see ffmpeg version information printed to the console if the installation was successful.</p>
                                  `;
                                  documentationLink.href = "https://ffmpeg.org/documentation.html";
                                  break;
                                  case 'GitHub':
                                    installationSteps.innerHTML = `
                                      <p>1. Sign Up/Login to GitHub: If you haven't already, sign up for a GitHub account at <a href="https://github.com/" target="_blank">https://github.com/</a>.</p>
                                      <p>2. Create a Repository: Once logged in, you can create a new repository by clicking on the "New" button on the top-right corner of your GitHub dashboard. Fill in the repository name, description, and other details as needed.</p>
                                      <p>3. Clone Repository: To work with a repository locally, you need to clone it to your computer. Go to the repository's page on GitHub and click the "Code" button. Copy the URL provided.</p>
                                      <pre><code class="language-bash">git clone <repository_URL></code></pre>
                                      <p>4. Navigate to Repository: Change your current directory to the newly cloned repository:</p>
                                      <pre><code class="language-bash">cd <repository_name></code></pre>
                                      <p>5. Make Changes: Now you can make changes to the files within the repository using your preferred code editor.</p>
                                      <p>6. Add and Commit Changes: After making changes, you need to add them to the staging area and commit them to the repository:</p>
                                      <pre><code class="language-bash">git add .</code></pre>
                                      <pre><code class="language-bash">git commit -m "Your commit message here"</code></pre>
                                      <p>7. Push Changes to GitHub: Finally, push your committed changes to GitHub:</p>
                                      <pre><code class="language-bash">git push origin master</code></pre>
                                      <p>8. View Repository on GitHub: Your changes should now be reflected in the GitHub repository.</p>
                                    `;
                                    documentationLink.href = "https://docs.github.com/en/get-started";
                                    break;
                                    case 'TypeScript':
                                      installationSteps.innerHTML = `
                                        <p>1. Install Node.js: TypeScript requires Node.js and npm (Node Package Manager) for installation. You can download Node.js from <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>.</p>
                                        <p>2. Install TypeScript: Once Node.js is installed, you can install TypeScript globally using npm:</p>
                                        <pre><code class="language-bash">npm install -g typescript</code></pre>
                                        <p>3. Create a TypeScript Project: After installing TypeScript, you can create a new directory for your TypeScript project and navigate into it.</p>
                                        <p>4. Initialize the Project: Run the following command to initialize a new TypeScript project:</p>
                                        <pre><code class="language-bash">tsc --init</code></pre>
                                        <p>This command will generate a tsconfig.json file which contains TypeScript compiler options for your project.</p>
                                        <p>5. Write TypeScript Code: Write your TypeScript code in .ts files.</p>
                                        <p>6. Compile TypeScript to JavaScript: Use the TypeScript compiler (tsc) to compile your TypeScript code into JavaScript:</p>
                                        <pre><code class="language-bash">tsc your-file.ts</code></pre>
                                        <p>7. Run JavaScript Code: Once compiled, you can run your JavaScript code using Node.js.</p>
                                      `;
                                      documentationLink.href = "https://www.typescriptlang.org/docs/";
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
