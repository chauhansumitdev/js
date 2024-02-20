// async
// freeflow execution no blocking

// CALLBACKS

// callbacks are functions passed to other functions which are invoked when an async operation completes.

function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Data received:", data);
});


// PROMISES

// they represent a value that is available now , in future or never

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Some data";
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// ASYNC/AWAIT

// built on top of promises
// sugar

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Some data";
            resolve(data);
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();


// FETCH API

fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
