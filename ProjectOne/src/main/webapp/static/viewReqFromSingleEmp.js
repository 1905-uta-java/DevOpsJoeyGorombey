
document.getElementById("submit-btn").addEventListener("click", getReqsFromSingleEmp);
let url = "http://localhost:8080/ProjectOne/api/viewReqFromSingleEmp";

function getReqsFromSingleEmp()
{
	console.log("THE POST REQUEST IS BEING GENERATED!");
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	xhr.onreadystatechange = function()
	{
		if (this.readyState === 4 && this.status === 200)
		{
			console.log("YOU GOT THE REQUEST TO EXECUTE SUCCESSFULLY!");
			document.getElementById("error").hidden = true;
			displayRequests(this);
		}

		else if (this.readyState === 4 && this.status != 200)
		{
		  document.getElementById("error").hidden = false;
		}
		
    }
  

	let enteredNumber = document.getElementById("id-box").value;
	// VALIDATE INPUT HERE!
	console.log(enteredNumber + " is entered number!");
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	let requestBody = "enteredNumber="+enteredNumber;
	xhr.send(requestBody);
}

function displayRequests(xhr)
{
	console.log("ENTERED THE DISPLAY FUNCTION!");
	let requests = JSON.parse(xhr.response);

	for (let item in requests)
	{
		let newRow = document.createElement("tr");
		let table = document.getElementById("table");
		console.log(requests[item]);
		newRow.innerHTML =
		`<td>${requests[item].reqID}</td>
		<td>${requests[item].ammount}</td>
		<td>${requests[item].reason}</td>
		<td>${requests[item].status}</td>
		<td>${requests[item].createdBy}</td>
		<td>${requests[item].resolvedBy}</td>
		<td>${requests[item].outcome}</td>`;

		table.appendChild(newRow);

		
		
	}
}
