//import Chessboard from '@chrisoakman/chessboardjs'
//import 'chessboard/dist/chessboard-1.0.0.min.css'



let rapidShowMore = false;
document.getElementById('search').addEventListener('click', () => {
    searchUser();
    userLiveGames();
    userRapidLiveGames();
    getUserStats();
    userBulletlLiveGames();
})
document.getElementById('search').addEventListener('click', searchUser);
document.getElementById('search').addEventListener('click', userLiveGames);
document.getElementById('search').addEventListener('click', userRapidLiveGames);
document.getElementById('search').addEventListener('click', getUserStats);


async function exampleUser() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru`);
    const data = await res.json();
    console.log(data);
    document.getElementById('pfp').src = `${data.avatar}`;
    document.getElementById('name').innerText = `Username: ${data.username.toUpperCase()}`;

    let anchor = document.createElement('a');
    document.getElementById('url').innerText = `Chess.com Account`;
    document.getElementById('url').href = data.url;
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


async function searchUser() {
    const res = await fetch(`https://api.chess.com/pub/player/${username.value}`);
    const data = await res.json();
    document.getElementById('name').innerText = `Username: ${data.username.toUpperCase()}`;
    document.getElementById('url').innerText = `Chess.com Account`;
    document.getElementById('url').href = data.url;
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

async function exampleLiveGames() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru/games/live/180/2`);
    const data = await res.json();
    console.log(data.games[0]);



    var board = Chessboard('board1', {
        position: data.games[0].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board1 = Chessboard('board2', {
        position: data.games[1].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board2 = Chessboard('board3', {
        position: data.games[2].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board3 = Chessboard('board4', {
        position: data.games[3].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board4 = Chessboard('board5', {
        position: data.games[4].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board5 = Chessboard('board6', {
        position: data.games[5].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board6 = Chessboard('board7', {
        position: data.games[6].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board7 = Chessboard('board8', {
        position: data.games[7].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board8 = Chessboard('board9', {
        position: data.games[8].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board9 = Chessboard('board10', {
        position: data.games[9].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });
}

exampleLiveGames();

async function exampleRapidLiveGames() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru/games/live/900/0`);
    const data = await res.json();
    console.log(data.games[0]);


    var rapid1 = Chessboard('rapid1', {
        position: data.games[0].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid2 = Chessboard('rapid2', {
        position: data.games[1].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid3 = Chessboard('rapid3', {
        position: data.games[2].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid4 = Chessboard('rapid4', {
        position: data.games[3].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid5 = Chessboard('rapid5', {
        position: data.games[4].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid6 = Chessboard('rapid6', {
        position: data.games[5].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid7 = Chessboard('rapid7', {
        position: data.games[6].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid8 = Chessboard('rapid8', {
        position: data.games[7].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid9 = Chessboard('rapid9', {
        position: data.games[8].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid10 = Chessboard('rapid10', {
        position: data.games[9].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });
}

exampleRapidLiveGames();

async function userLiveGames() {    
    const res = await fetch(`https://api.chess.com/pub/player/${username.value}/games/live/180/2`);
    const data = await res.json();
    console.log(data.games[0]);

    

     var board = Chessboard('board1', {
        position: data.games[0].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board1 = Chessboard('board2', {
        position: data.games[1].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board2 = Chessboard('board3', {
        position: data.games[2].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board3 = Chessboard('board4', {
        position: data.games[3].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board4 = Chessboard('board5', {
        position: data.games[4].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board5 = Chessboard('board6', {
        position: data.games[5].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board6 = Chessboard('board7', {
        position: data.games[6].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board7 = Chessboard('board8', {
        position: data.games[7].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board8 = Chessboard('board9', {
        position: data.games[8].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var board9 = Chessboard('board10', {
        position: data.games[9].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });
}

async function userRapidLiveGames() {
    const res = await fetch(`https://api.chess.com/pub/player/${username.value}/games/live/900/0`);
    const data = await res.json();
    console.log(data.games[0]);


    var rapid1 = Chessboard('rapid1', {
        position: data.games[0].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid2 = Chessboard('rapid2', {
        position: data.games[1].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid3 = Chessboard('rapid3', {
        position: data.games[2].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid4 = Chessboard('rapid4', {
        position: data.games[3].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid5 = Chessboard('rapid5', {
        position: data.games[4].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid6 = Chessboard('rapid6', {
        position: data.games[5].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid7 = Chessboard('rapid7', {
        position: data.games[6].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid8 = Chessboard('rapid8', {
        position: data.games[7].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid9 = Chessboard('rapid9', {
        position: data.games[8].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var rapid10 = Chessboard('rapid10', {
        position: data.games[9].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });
}


async function exampleBulletLiveGames() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru/games/live/60/1`);
    const data = await res.json();
    console.log(data.games[0]);


    var classic1 = Chessboard('classic1', {
        position: data.games[0].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic2 = Chessboard('classic2', {
        position: data.games[1].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic3 = Chessboard('classic3', {
        position: data.games[2].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic4 = Chessboard('classic4', {
        position: data.games[3].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic5 = Chessboard('classic5', {
        position: data.games[4].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic6 = Chessboard('classic6', {
        position: data.games[5].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic7 = Chessboard('classic7', {
        position: data.games[6].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic8 = Chessboard('classic8', {
        position: data.games[7].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic9 = Chessboard('classic9', {
        position: data.games[8].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic10 = Chessboard('classic10', {
        position: data.games[9].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });
}

exampleBulletLiveGames();

async function userBulletlLiveGames() {
    const res = await fetch(`https://api.chess.com/pub/player/${username.value}/games/live/60/1`);
    const data = await res.json();
    console.log(data.games[0]);


    var classic1 = Chessboard('classic1', {
        position: data.games[0].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic2 = Chessboard('classic2', {
        position: data.games[1].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic3 = Chessboard('classic3', {
        position: data.games[2].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic4 = Chessboard('classic4', {
        position: data.games[3].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic5 = Chessboard('classic5', {
        position: data.games[4].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic6 = Chessboard('classic6', {
        position: data.games[5].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic7 = Chessboard('classic7', {
        position: data.games[6].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic8 = Chessboard('classic8', {
        position: data.games[7].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic9 = Chessboard('classic9', {
        position: data.games[8].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });

     var classic10 = Chessboard('classic10', {
        position: data.games[9].fen,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });
}




async function tester() {
    const res = await fetch(`https://api.chess.com/pub/player/Hikaru/games/live/900/10`);
    const data = await res.json();
    console.log(data);
}

tester();