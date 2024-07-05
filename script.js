let points = 0;
let upgrades = [
    { cost: 10, multiplier: 2 },
    { cost: 50, multiplier: 3 },
    { cost: 100, multiplier: 4 },
    { cost: 200, multiplier: 5 },
    { cost: 500, multiplier: 6 },
    { cost: 1000, multiplier: 7 },
    { cost: 2000, multiplier: 8 },
    { cost: 5000, multiplier: 9 },
    { cost: 10000, multiplier: 10 },
    { cost: 20000, multiplier: 12 }
];

function clickButton() {
    points++;
    updatePointsDisplay();
}

function updatePointsDisplay() {
    document.getElementById('points').textContent = points;
}

function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if (points >= upgrade.cost) {
        points -= upgrade.cost;
        upgrade.cost *= 2; // Increase the cost for next purchase
        upgrade.multiplier++; // Increase the multiplier
        updatePointsDisplay();
        updateUpgradeButtons();
    } else {
        alert("Not enough points to buy this upgrade!");
    }
}

function updateUpgradeButtons() {
    const upgradesDiv = document.getElementById('upgrades');
    upgradesDiv.innerHTML = '<h2>Upgrades:</h2>';
    
    upgrades.forEach((upgrade, index) => {
        const button = document.createElement('button');
        button.textContent = `Upgrade ${index + 1} (Cost: ${upgrade.cost} points, Multiplier: x${upgrade.multiplier})`;
        button.classList.add('upgrade-button');
        button.onclick = function() { buyUpgrade(index); };
        upgradesDiv.appendChild(button);
    });
}
