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

    // If departure and arrival are the same
    if (departure === arrival) {
        document.getElementById('fare').textContent = "You are already at your destination!";
        return;
    }

    // Check if fare exists
    if (!fares[departure] || !fares[departure][arrival]) {
        document.getElementById('fare').textContent = "No fare data available for this route.";
        return;
    }

    let baseFare = fares[departure][arrival];
    let discount = 0;

    // Apply discount based on selection
    if (discountType === 'student') {
        discount = 0.10;
    } else if (discountType === 'senior') {
        discount = 0.20;
    } else if (discountType === 'PWD') {
        discount = 0.30;
    }

    // Calculate discounted fare
    const discountedFare = baseFare * (1 - discount);

    // Display result
    document.getElementById('fare').textContent = `The fare from ${departure} to ${arrival} is ₱${discountedFare.toFixed(2)}.`;
}
