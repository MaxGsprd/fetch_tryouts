
document.getElementById("getTextBtn").addEventListener('click', getText);
document.getElementById('getJsonBtn').addEventListener('click', getJson);
document.getElementById('getApiDataBtn').addEventListener('click', getApiData);
document.getElementById('addPost').addEventListener('submit', addPost);

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
 * fetch users.json file
 */
function getJson() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2 class="mb-4">Users</h2>';
        data.forEach( (user) => {
            output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">Is ${user.name} alive ? It's ${user.isAlive}</li>
                </ul>`
        });
        document.getElementById('output').innerHTML = output;
    })
}

/**
 * get Jsonplaceholder Api data
 */
function getApiData() {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then( (data) => {
        let output = '<h2 class="mb-4">Posts</h2>';
        data.forEach((post) =>  {
            output += `
            <div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            </div>`
        })
        document.getElementById('output').innerHTML = output;
    });
}

/**
 * Send post to jsonplaceholder api
 */
function addPost(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('http://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then( res => res.json())
    .then( data => console.log(data))
}