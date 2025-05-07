# Express Hello iOR

This project is a simple web service built using Express.js that serves a single HTML page displaying the text "Hello iOR!". It includes tests using Jest and Supertest to ensure the service runs correctly and the page is served as expected. Additionally, it features a CI/CD pipeline configured with Azure DevOps for automated deployment.

## Project Structure

```
express-hello-ior
├── src
│   ├── app.js          # Sets up the Express application and defines routes
│   └── server.js       # Entry point for starting the Express server
├── public
│   └── index.html      # HTML content served by the Express application
├── tests
│   └── app.test.js     # Tests for the Express application
├── .azure-pipelines
│   └── azure-pipelines.yml # CI/CD pipeline configuration for Azure DevOps
├── terraform
│   ├── main.tf         # Terraform configuration for Azure App Service
│   ├── variables.tf    # Variables used in Terraform configuration
│   └── outputs.tf      # Outputs from the Terraform configuration
├── package.json         # npm configuration file with dependencies and scripts
├── jest.config.js      # Jest configuration for testing
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- Azure account for deployment

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-hello-ior
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Running Tests

To run the tests, use:
```
npm test
```

### CI/CD Pipeline

The CI/CD pipeline is defined in the `.azure-pipelines/azure-pipelines.yml` file. It includes steps for:

1. Installing dependencies
2. Running tests
3. Building the project
4. Configuring infrastructure using Terraform
5. Deploying to Azure App Service

### Deployment

To deploy the application, ensure you have configured your Azure DevOps pipeline and have the necessary permissions set up in your Azure account.

## License

This project is licensed under the MIT License.