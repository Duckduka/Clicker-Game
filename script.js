let points = 0;
let clickMultiplier = 1;

let upgrades = [
    { 
        name: "+2 clicks",
        cost: 50,
        effect: 2,
        description: "Adds 2 to your click points."
    },
    {
        name: "The three clicks",
        cost: 100,
        effect: 3,
        description: "Adds 3 to your click points."
    },
    { 
        name: "Finger Clicking",
        cost: 500,
        effect: 5,
        description: "Adds 5 to your click points."
    },
    { 
        name: "2, 4's",
        cost: 1500,
        effect: 8,
        description: "Your click points are increased by 8."
    },
];

function clickButton() {
    points += clickMultiplier;
    updatePointsDisplay();
}

function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if (points >= upgrade.cost) {
        points -= upgrade.cost;
        upgrade.cost *= 1.5; 
        clickMultiplier += upgrade.effect;
        updatePointsDisplay();
        updateUpgradeList();
    } else {
        alert("Not enough points to buy this upgrade!");
    }
}

function updatePointsDisplay() {
    document.getElementById('points').textContent = points;
}

function updateUpgradeList() {
    const upgradeList = document.getElementById('upgrade-list');
    upgradeList.innerHTML = '';

    upgrades.forEach((upgrade, index) => {
        const button = document.createElement('button');
        button.textContent = `${upgrade.name} (Cost: ${upgrade.cost} points, Effect: +${upgrade.effect} per click)`;
        button.classList.add('upgrade-button');
        button.onclick = function() { buyUpgrade(index); };
        upgradeList.appendChild(button);
    });
}

// Initial setup
updatePointsDisplay();
updateUpgradeList();
document.getElementById('clickButton').addEventListener('click', clickButton);
