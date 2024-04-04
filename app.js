document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await axios.get('http://localhost:5000/data');
        const data = response.data;
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayData(data) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<p>${data.message}</p>`;
}