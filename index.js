fetch('https://api.allorigins.win/raw?url=https://ifconfig.co/json')
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		// Get the response
		return response.json();
	})
	.then(data => {
		// Handle response
		// console.log(data.user_agent.comment)
		document.getElementById('row-ip').innerHTML += `<td>${data.ip}</td>`;
		document.getElementById('row-ip-decimal').innerHTML += `<td>${data.ip_decimal}</td>`;
		document.getElementById('row-country').innerHTML += `<td>${data.country}</td>`;
		document.getElementById('row-country-iso').innerHTML += `<td>${data.country_iso}</td>`;
		document.getElementById('row-country-eu').innerHTML += `<td>${data.country_eu}</td>`;
		document.getElementById('row-region-name').innerHTML += `<td>${data.region_name}</td>`;
		document.getElementById('row-region-code').innerHTML += `<td>${data.region_code}</td>`;
		document.getElementById('row-metro-code').innerHTML += `<td>${data.metro_code}</td>`;
		document.getElementById('row-zip-code').innerHTML += `<td>${data.zip_code}</td>`;
		document.getElementById('row-city').innerHTML += `<td>${data.city}</td>`;
		document.getElementById('row-latitude').innerHTML += `<td>${data.latitude}</td>`;
		document.getElementById('row-longitude').innerHTML += `<td>${data.longitude}</td>`;
		document.getElementById('row-time-zone').innerHTML += `<td>${data.time_zone}</td>`;
		document.getElementById('row-asn').innerHTML += `<td>${data.asn}</td>`;
		document.getElementById('row-asn-org').innerHTML += `<td>${data.asn_org}</td>`;
		document.getElementById('row-user-agent-comment').innerHTML += `<td>${data.user_agent.comment}</td>`;
		document.getElementById('row-user-agent-raw-value').innerHTML += `<td>${data.user_agent.raw_value}</td>`;
	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});