//Traversy video 16min

document.getElementById("getTextBtn").addEventListener('click', getText);
document.getElementById('getJsonBtn').addEventListener('click', getJson);
/**
 * fetch the sample.txt file
 */
function getText() {
    fetch('sample.txt')
    .then((response) => response.text())
    .then((data) => {
        document.getElementById('output').innerText = data;
    })
    .catch((err) => console.log(err));
}

/**
 * fetch users.json, parse
 */
function getJson() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach( (user) => {
            output += `
                <ul>
                    <li>Is ${user.name} alive ? It's ${user.isAlive}</li>
                </ul>`
        });
        document.getElementById('output').innerHTML = output;
    })
}


