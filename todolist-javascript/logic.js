 // URL to fetch users
const url = 'https://jsonplaceholder.typicode.com/users';

// Fetch data from the API
fetch(url)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data
    })
    .then(data => {
    const userList = document.getElementById('user-list');

    // Display each user's name in a list
    data.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
    });
    })
    .catch(error => {
    console.error('Fetch error:', error);
    });