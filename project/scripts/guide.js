document.addEventListener('DOMContentLoaded', () => {
    const locationsContainer = document.querySelector('.location-cards');
    const fliesContainer = document.querySelector('.fly-cards');

    const displayLocations = async () => {
        try {
            const response = await fetch('data/locations.json');
            const data = await response.json();
            const locations = data.locations;

            locations.forEach(location => {
                const card = document.createElement('section');
                card.classList.add('card');
                card.innerHTML = `
                <h3>${location.name}</h3>
                <img src="${location.imageURL}" alt="${location.name} loading="lazy">
                <p>${location.description}</p>
                <p><strong>Best Months to Visit:</strong> ${location.monthsToVisit}</p>
                `;
                locationsContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const displayFlies = async () => {
        try {
            const response = await fetch('data/flies.json');
            const data = await response.json();
            const flies = data.flies;

            flies.forEach(fly => {
                const card = document.createElement('section');
                card.classList.add('card');
                card.innerHTML = `
                    <h3>${fly.name}</h3>
                    <img src="${fly.imageURL}" alt="${fly.name}" loading="lazy">
                    <p>${fly.description}</p>
                    <p><strong>Technique:</strong> ${fly.technique}</p>
                `;
                fliesContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching flies:', error);
        }
    };

    displayLocations();
    displayFlies();
});