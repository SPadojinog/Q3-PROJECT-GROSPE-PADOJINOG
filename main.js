const fares = {
    "Antipolo": {
        "Marikina": 5,
        "Santolan": 8,
        "Katipunan": 10,
        "Anonas": 12,
        "Cubao": 15,
        "Betty-Go": 17,
        "Gilmore": 18,
        "J. Ruiz": 19,
        "V. Mapa": 20,
        "Pureza": 21,
        "Legarda": 22,
        "Recto": 23
    },
    "Marikina": {
        "Antipolo": 5,
        "Santolan": 8,
        "Katipunan": 10,
        "Anonas": 12,
        "Cubao": 15,
        "Betty-Go": 17,
        "Gilmore": 18,
        "J. Ruiz": 19,
        "V. Mapa": 20,
        "Pureza": 21,
        "Legarda": 22,
        "Recto": 23
    }
};

function calculateFare() {
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const discountType = document.getElementById('discount').value;

    if (departure === arrival) {
        alert("You are already at your destination!");
        return;
    }

    if (!fares[departure] || !fares[departure][arrival]) {
        alert("No fare data available for this route.");
        return;
    }

    let baseFare = fares[departure][arrival];
    let discount = 0;

    if (discountType === 'student') {
        discount = 0.10;
    } else if (discountType === 'senior') {
        discount = 0.20;
    } else if (discountType === 'PWD') {
        discount = 0.30;
    }

    const discountedFare = baseFare * (1 - discount);
    
    alert(`The fare from ${departure} to ${arrival} is ₱${discountedFare.toFixed(2)}.`);
}
