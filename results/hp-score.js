function hpScore(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 30) {
        return 'injured';
    }
    return 'healthy';
}

export default hpScore;