import { getRequest, postRequest, multipartPostRequeset } from "./WebService"

const serverURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"

function askSingleQuery(question) {
    let url = `${serverURL}/openai_llm/single-query`
    let formData={
        "question": question
    }
    return postRequest(url, formData)
}

function askConvoChain(question) {
    let url = `${serverURL}/openai_llm/convo-chain`
    let formData={
        "question": question
    }
    return postRequest(url, formData)
}

function getConvoChain() {
    let url = `${serverURL}/openai_llm/convo-chain`
    return getRequest(url)
}

function uploadPDFFile(formData) {
    let url = `${serverURL}/pdf_ai_llm/create-store`
    return multipartPostRequeset(url, formData)
}

function talkToPDF(question) {
    let url = `${serverURL}/pdf_ai_llm/query`
    let formData={
        "question": question
    }
    return postRequest(url, formData)
}

export const dataManagementService ={
    askSingleQuery,
    askConvoChain,
    getConvoChain,
    uploadPDFFile,
    talkToPDF
};