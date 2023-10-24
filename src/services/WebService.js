import axios from 'axios';

let _getHeader = {
	"Content-Type": "application/json",
	"Accept": "application/json"
};


/* For Post */
let _postHeader = {
	"Content-Type": "application/json",
	"Accept": "application/json"
};


/* For Multipart */
let _multipartHeader = {
	"Content-Type":"multipart/form-data",
	"id": "",
};

export const getRequest = async (relativeUrl) => {
    const requestOptions = {
        headers: _getHeader
    };
    return axios.get(relativeUrl, requestOptions)
        .then(response => {
            return response;
        })
        .catch(errorObj => {
            return Promise.reject(errorObj);
        });
}

export const postRequest = async(relativeUrl, data) => {
	const config = {
		headers: _postHeader,
	};
	return axios.post(relativeUrl, data, config)
		.then(response => {
			return response;
		})
		.catch(errorObj => {
			console.log("errorObj", errorObj.status)
			return Promise.reject(errorObj);
		});
}

export const multipartPostRequeset = async(relativeUrl, data) => {
	const requestOptions = {
		headers: _multipartHeader,
	};
	return axios.post(relativeUrl, data, requestOptions)
		.then(response => {
			return response;
		})
		.catch(errorObj => {
			return Promise.reject(errorObj);
		});
}