let points = 0;
let clickMultiplier = 1;

let upgrades = [
    { 
        name: "Double clicks",
        cost: 50,
        effect: 2,
        description: "Doubles your click points."
    },
    {
        name: "Triple clicks",
        cost: 100,
        effect: 3,
        description: "Triples your click points."
    },
    { 
        name: "Solid Clicking",
        cost: 500,
        effect: 5,
        description: "Quintuples your click points."
    },
    { 
        name: "Upgrade 4",
        cost: 1500,
        effect: 8,
        description: "Your click points are multiplied by 8."
    },
    // Add more upgrades as needed
];

function clickButton() {
    points += clickMultiplier;
    updatePointsDisplay();
}

function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if (points >= upgrade.cost) {
        points -= upgrade.cost;
        upgrade.cost *= 2; // Increase cost for next purchase
        clickMultiplier += upgrade.effect; // Apply upgrade effect
        updatePointsDisplay();
        updateUpgradeList(); // Update displayed upgrades
    } else {
        alert("Not enough points to buy this upgrade!");
    }
}

function updatePointsDisplay() {
    document.getElementById('points').textContent = points;
}

function updateUpgradeList() {
    const upgradeList = document.getElementById('upgrade-list');
    upgradeList.innerHTML = ''; // Clear existing list

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
