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


