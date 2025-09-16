document.getElementById('search').addEventListener('click', searchUser);
document.getElementById('search').addEventListener('click', getUserStats);

async function exampleUser() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru`);
    const data = await res.json();
    console.log(data);
    document.getElementById('pfp').src = `${data.avatar}`;
    document.getElementById('name').innerText = `Username: ${data.username.toUpperCase()}`;
    document.getElementById('url').innerText = `${data.url}`;
    document.getElementById('followers').innerText = `Followers: ${data.followers}`;
}
exampleUser();

async function getExampleUserStats() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru/stats`);
    const data = await res.json();
    document.getElementById('blitz').innerText = `Blitz Rating: ${data.chess_blitz.last.rating}`;
    document.getElementById('bullet').innerText = `Bullet Rating: ${data.chess_bullet.last.rating}`;
    document.getElementById('rapid').innerText = `Rapid Rating: ${data.chess_rapid.last.rating}`;
    document.getElementById('fide').innerText = `Fide Rating: ${data.fide}`;
}

getExampleUserStats();


async function loadRapidLeaderBoard() {
    const res = await fetch(`https://api.chess.com/pub/leaderboards`);
    const data = await res.json();
    for (let i = 0; i < 49; i++) {
        const newLi = document.createElement('li');
        const parent = document.getElementById('rapid-list');
        parent.appendChild(newLi);
        newLi.innerText = `${data.live_rapid[i].username} ${data.live_rapid[i].title}`;
    }

    for (let i = 0; i < 49; i++) {
        const newLi = document.createElement('li');
        const parent = document.getElementById('blitz-list');
        parent.appendChild(newLi);
        newLi.innerText = `${data.live_blitz[i].username} ${data.live_blitz[i].title}`;
    }

    for (let i = 0; i < 49; i++) {
        const newLi = document.createElement('li');
        const parent = document.getElementById('bullet-list');
        parent.appendChild(newLi);
        newLi.innerText = `${data.live_bullet[i].username} ${data.live_bullet[i].title}`;
    }
}

loadRapidLeaderBoard();

async function searchUser() {
    const user = document.getElementById('DragonLearnsChess');
    const res = await fetch(`https://api.chess.com/pub/player/${username.value}`);
    const data = await res.json();
    document.getElementById('name').innerText = `Username: ${data.username.toUpperCase()}`;
    document.getElementById('url').innerText = `${data.url}`;
     document.getElementById('pfp').src = `${data.avatar}`;
    document.getElementById('followers').innerText = `Followers: ${data.followers}`;
}

async function getUserStats() {
    const res = await fetch(`https://api.chess.com/pub/player/${username.value}/stats`);
    const data = await res.json();
    document.getElementById('blitz').innerText = `Blitz Rating: ${data.chess_blitz.last.rating}`;
    document.getElementById('bullet').innerText = `Bullet Rating: ${data.chess_bullet.last.rating}`;
    document.getElementById('rapid').innerText = `Rapid Rating: ${data.chess_rapid.last.rating}`;
    document.getElementById('fide').innerText = `Fide Rating: ${data.fide}`;
    // if (data.fide <= 0) {
    //      document.getElementById('fide').innerText = `Fide Rating: N/A`;
    // } else {
    //     document.getElementById('fide').innerText = `Fide Rating: 0`;
    // }
}




