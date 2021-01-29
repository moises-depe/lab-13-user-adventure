function coinScore(coins) {
    if (coins === 0) {
        return 'poor';
    }
    else if (coins < 50) {
        return 'middle class';
    }
    return 'wealthy';
}

export default coinScore;
