// api url
const api_url =
	"http://ec2-13-233-91-89.ap-south-1.compute.amazonaws.com:8080/search";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Id</th>
		<th>Code</th>
		<th>Name</th>
		<th>Access URL</th>
    <th>Account Type</th>
    <th>Status Code</th>
    <th>Source</th>
    <th>GoLive</th>
    <th>Bussiness Name</th>
    <th>Bussiness Model</th>
    <th>Industry</th>
    <th>Created</th>
    <th>Updated</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.id} </td>
	<td>${r.name}</td>
	<td>${r.accessUrl}</td>
	<td>${r.accountType}</td>	
	<td>${r.statusCode} </td>
	<td>${r.source}</td>
	<td>${r.goLive}</td>
	<td>${r.bussinessName}</td>
	<td>${r.bussinessModel} </td>
	<td>${r.industry}</td>
	<td>${r.created}</td>
	<td>${r.updated}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
