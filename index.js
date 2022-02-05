// Add your code here
function submitData(name, email){
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })
    .catch(function(error) {
        alert("Unauthorized Access");
        console.log(error.message);
    })
}
