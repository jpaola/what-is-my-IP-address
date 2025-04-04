import fetch from 'node-fetch';

fetch('https://ifconfig.co/json')
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		// Get the response
		return response.text();
	})
	.then(data => {
		// Handle response
		showIpData(data);
	})
	.catch(error => {
		// Handle errors
		console.error('There was a problem with the fetch operation:', error);
	});

function showIpData(data) {

	console.log(data)
}