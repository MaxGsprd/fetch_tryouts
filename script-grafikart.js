// Video grafikart 

// requête GET avec fetch

const getUsers = async function () {
    try {
        let response = await fetch('http://jsonplaceholder.typicode.com/users')
        if (response.ok) {
            let data = await response.json();
            console.log(data);  
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (e) {
        console.log(e);
    }
}

getUsers();

// fecht en post

const insertPost = async function (data) {
    let response = await fetch('http://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (response.ok) {
        let responseData = await response.json();
        console.log(responseData);
    }
}

insertPost({
    name: 'Jean',
    age: 29
});