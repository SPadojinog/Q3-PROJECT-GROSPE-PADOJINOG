const fares = {
            "Antipolo": {
                "Marikina": 5,
                "Santolan": 8,
                "Katipunan": 8,
                "Anonas": 8,
                "Cubao": 8,
                "Betty-Go": 8,
                "Gilmore": 8,
                "J. Ruiz": 8,
                "V. Mapa": 8,
                "Pureza": 8,
                "Legarda": 8,
                "Recto": 8,
            }
            "Marikina": {
                "Antipolo": 8,
                "Santolan": 8,
                "Katipunan": 8,
                "Anonas": 8,
                "Cubao": 8,
                "Betty-Go": 8,
                "Gilmore": 8,
                "J. Ruiz": 8,
                "V. Mapa": 8,
                "Pureza": 8,
                "Legarda": 8,
                "Recto": 8,
            },
            "stationC": {
                "stationA": 8,
                "stationB": 6
            }
        };

        function calculateFare() {
            const departure = document.getElementById('departure').value;
            const arrival = document.getElementById('arrival').value;
            const discountType = document.getElementById('discount').value;

            if (departure === arrival) {
                document.getElementById('fare').textContent = "You are already at your destination!";
                return;

            let discount = 0;

            if (discountType === 'student') {
                discount = 0.10; 
            } else if (discountType === 'senior') {
                discount = 0.20; 
            }
            } else if (discountType === 'PWD') {
                discount = 0.30; 
            }

            // Apply discount
            const discountedFare = baseFare * (1 - discount);

            const fare = fares[departure][arrival];
            document.getElementById('fare').textContent = `The fare from ${departure} to ${arrival} is $${fare}.`;
        }
