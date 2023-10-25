# ReactJS Frontend for LangChain OpenAI API Integration

This repository contains a ReactJS frontend application that communicates with the LangChain OpenAI API integration. This frontend allows users to interact with the OpenAI's model through the API endpoints provided by the backend Flask application. This README file will guide you through the setup and usage of the ReactJS application.

## Prerequisites

Before you begin, ensure you have the following installed/configured:

- [Node.js](https://nodejs.org/en/) installed on your machine
- npm (Node Package Manager)
- The LangChain OpenAI API backend server up and running

## Installation

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/jangster3794/LLM-Frontend.git
    ```

2. Navigate to the project directory:

    ```
    cd LLM-Frontend
    ```

3. Install the required npm packages:

    ```
    npm install
    ```

## Configuration

Replace `"http://localhost:5000"` with the base URL where your LangChain OpenAI API backend is running.

## Usage

### Running the ReactJS Application

To start the ReactJS application, run the following command in your terminal within the project directory:

```
npm start
```

The application will start running at `http://localhost:3000/`. You can access the application in your web browser.

### Interacting with the Application

1. **Single Query:**
   - Enter your question in the input field and click the "Submit" button to send a single query to the OpenAI language model.

2. **Conversation Chain:**
   - Click the "Start Conversation" button to initiate a conversation with the OpenAI model.
   - Enter your questions one by one in the input field and click the "Ask" button to send queries to the model as part of the conversation.

3. **PDF Vectorstore Query:**
   - Click the "Upload PDF" button to select a PDF file.
   - After uploading, enter your question in the input field and click the "Submit" button to send a query to the PDF AI vectorstore model.

## Additional Notes

- Ensure that your LangChain OpenAI API backend server is running and accessible from the ReactJS application. Update the `serverURL` in the `services/DataManagementService.js` file if your backend server is deployed on a different URL or port.

- Make sure your OpenAI API key is configured properly in the backend to authenticate and interact with the OpenAI GPT model.

- Customize the ReactJS components and styles according to your requirements to enhance the user interface and user experience of the application.

Feel free to modify and extend the ReactJS application based on your project needs!
