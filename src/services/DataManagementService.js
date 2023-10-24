import { getRequest, postRequest, multipartPostRequeset } from "./WebService"

const serverURL = "http://localhost:5000"

function askSingleQuery(question) {
    let url = `${serverURL}/llm/single-query`
    let formData={
        "question": question
    }
    return postRequest(url, formData)
}

function askConvoChain(question) {
    let url = `${serverURL}/llm/convo-chain`
    let formData={
        "question": question
    }
    return postRequest(url, formData)
}

function getConvoChain() {
    let url = `${serverURL}/llm/convo-chain`
    return getRequest(url)
}

function uploadPDFFile(formData) {
    let url = `${serverURL}/custom-llm/create-store`
    return multipartPostRequeset(url, formData)
}

function talkToPDF(question) {
    let url = `${serverURL}/custom-llm/query`
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