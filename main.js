document.getElementById('search').addEventListener('click', searchUser);
document.getElementById('search').addEventListener('click', getUserStats);

async function exampleUser() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru`);
    const data = await res.json();
    console.log(data);
    document.getElementById('name').innerText = `Username: ${data.username.toUpperCase()}`;
    document.getElementById('url').innerText = `${data.url}`;
    document.getElementById('followers').innerText = `Followers: ${data.followers}`;
}
exampleUser();

async function getExampleUserStats() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru/stats`);
    const data = await res.json();
    console.log(data);
    document.getElementById('blitz').innerText = `Blitz Rating: ${data.chess_blitz.last.rating}`;
    document.getElementById('bullet').innerText = `Bullet Rating: ${data.chess_bullet.last.rating}`;
    document.getElementById('rapid').innerText = `Rapid Rating: ${data.chess_rapid.last.rating}`;
    if (data.fide != 0) {
         document.getElementById('fide').innerText = `Fide Rating: ${data.fide}`;
    } else {
        document.getElementById('fide').innerText = `Fide Rating: 0`;
    }
}

getExampleUserStats();


async function searchUser() {
    const user = document.getElementById('DragonLearnsChess');
    const res = await fetch(`https://api.chess.com/pub/player/${username.value}`);
    const data = await res.json();
    console.log(data);
    document.getElementById('name').innerText = `Username: ${data.username.toUpperCase()}`;
    document.getElementById('url').innerText = `${data.url}`;
    document.getElementById('followers').innerText = `Followers: ${data.followers}`;
}

async function getUserStats() {
    const user = document.getElementById('username');
    const res = await fetch(`https://api.chess.com/pub/player/${username.value}/stats`);
    const data = await res.json();
    console.log("Second data:")
    console.log(data);
    document.getElementById('blitz').innerText = `Blitz Rating: ${data.chess_blitz.last.rating}`;
    document.getElementById('bullet').innerText = `Bullet Rating: ${data.chess_bullet.last.rating}`;
    document.getElementById('rapid').innerText = `Rapid Rating: ${data.chess_rapid.last.rating}`;
    if (data.fide <= 0) {
         document.getElementById('fide').innerText = `Fide Rating: N/A`;
    } else {
        document.getElementById('fide').innerText = `Fide Rating: 0`;
    }
}
