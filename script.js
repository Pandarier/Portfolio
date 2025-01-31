function showSection(sectionId) {
    // Verstecke alle Sektionen
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    // Zeige die ausgewählte Sektion
    document.getElementById(sectionId).style.display = 'block';
}

// Phaser-Spielkonfiguration
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('player', 'assets/player.png');
}

function create() {
    this.player = this.add.sprite(400, 200, 'player');
}

function update() {
    // Einfache Logik zur Bewegung des Spielers
    this.player.x += 1;
    if (this.player.x > 800) {
        this.player.x = 0;
    }
}
