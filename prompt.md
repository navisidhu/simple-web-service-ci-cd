> Note: Using GPT 4.1 (Preview)

## Initial Prompt

    Design a small web service using express.js serving a single html web page at /, containing containing the text "Hello iOR!". Write simple tests to check if the service runs and the page is served correctly. Use jest with supertest for testing. The service should be able to run on port 3000.

    The project should also contain a CI/CD pipeline using Azure DevOps. The pipeline should include the following steps:
        1. Install dependencies
        2. Run tests
        3. Build the project
        4. Configure the infrastructure using Terraform to deploy the project to an Azure App Service.
        5. Deploy the project to the Azure App Service.

## Terraform Variables Prompt

    The terraform code requires the following variables to defined as environment variables:
    - subscription_id
    - project_prefix
    - location
    - sku

    Change the pipeline to ask the above as parameters with defaults and export them as environment variables for the pipeline

## Webpack Prompt

    Generate a webpack config to build and bundle the project for deployment
