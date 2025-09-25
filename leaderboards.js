async function loadRapidLeaderBoard() {
    const res = await fetch(`https://api.chess.com/pub/leaderboards`);
    const data = await res.json();
    console.log(data)
        for (let i = 0; i != 49; i++) {
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