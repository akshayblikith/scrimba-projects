const homeScoreEl = document.getElementById("home-score")
const awayScoreEl = document.getElementById("away-score")
const result = document.getElementById("result")
let homeScore = 0
let awayScore = 0

function updateScore(points, team) {
    if (team === 'home') {
        homeScore += points
        homeScoreEl.textContent = homeScore
    } else {
        awayScore += +points
        awayScoreEl.textContent = awayScore;
    }
    updateLeader()
}

function newGame() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    awayScore = 0
    awayScoreEl.textContent = awayScore
    result.textContent = "Let's Play!"
}

function updateLeader() {
    if (homeScore > awayScore) {
        result.textContent = "Home team is leading the game!"
    } else if (homeScore < awayScore) {
        result.textContent = "Guest team is leading the game!"
    } else {
        result.textContent = "It's a tie!"
    }
}
