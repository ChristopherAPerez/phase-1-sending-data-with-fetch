// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        document.querySelector('body').append(JSON.stringify(json))
    })
    .catch(function(error) {
        alert("Unauthorized Access");
        document.querySelector('body').append(error.message);
    })
}

