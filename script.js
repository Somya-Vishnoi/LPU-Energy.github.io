function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Update electricity consumption and solar values dynamically
function updateDynamicValues() {
    document.querySelectorAll('.electricity-value').forEach(elem => {
        elem.textContent = randomValue(1000, 2000) + ' kJ';
    });
    document.querySelectorAll('.solar-value').forEach(elem => {
        elem.textContent = randomValue(300, 700) + ' kJ';
    });
    document.getElementById('meter').textContent = randomValue(500000, 700000);
}

// Call update every few seconds
setInterval(updateDynamicValues, 3000);

// Function to simulate real-time temperature in Jalandhar
function updateTemperature() {
    const temperatureElement = document.getElementById('temperature-value');
    const minTemperature = 10; // Minimum realistic temperature
    const maxTemperature = 40; // Maximum realistic temperature

    // Generate a random temperature within the range
    const randomTemperature = (Math.random() * (maxTemperature - minTemperature) + minTemperature).toFixed(1);

    // Update the temperature display
    temperatureElement.textContent = `${randomTemperature}°C`;
}

// Call the function to update temperature every 5 seconds
setInterval(updateTemperature, 5000);

// Function to generate a random value within a range
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update solar energy and cost savings for each block
function updateSolarData() {
    const costPerKWh = 5.5;

    // List of blocks and their initial energy values
    const blocks = [
        { id: 'admission', initialEnergy: 1200 },
        { id: 'library', initialEnergy: 950 },
        { id: 'boys', initialEnergy: 800 },
        { id: 'girls', initialEnergy: 700 },
        { id: 'mall', initialEnergy: 600 },
        { id: 'hospital', initialEnergy: 650 },
        { id: 'unipolis', initialEnergy: 500 },
        { id: 'auditorium', initialEnergy: 550 }
    ];

    // Variables to accumulate total energy and savings
    let totalEnergy = 0;
    let totalSavings = 0;

    // Update each block's energy and savings
    blocks.forEach(block => {
        // Generate a new energy value within ±10% of the initial energy
        const newEnergy = getRandomValue(block.initialEnergy * 0.9, block.initialEnergy * 1.1);
        const newSavings = newEnergy * costPerKWh;

        // Update the table cells
        document.getElementById(`${block.id}-energy`).textContent = newEnergy;
        document.getElementById(`${block.id}-savings`).textContent = `₹${newSavings.toFixed(2)}`;

        // Accumulate totals
        totalEnergy += newEnergy;
        totalSavings += newSavings;
    });

    // Update the total row
    document.getElementById('total-energy').textContent = `${totalEnergy} kWh`;
    document.getElementById('total-savings').textContent = `₹${totalSavings.toFixed(2)}`;
}

// Call the update function every 3 seconds to simulate real-time data
setInterval(updateSolarData, 3000);


// Function to generate a random value within a range
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update electricity consumption and costs for each block
function updateElectricityData() {}
    const costPerKWh = 5.5;  // Cost of electricity per kWh

    // List of blocks and their initial electricity consumption values
    const blocks = [
        { id: 'admission', initialElectricity: 1200 },
        { id: 'library', initialElectricity: 950 },
        { id: 'boys', initialElectricity: 800 },
        { id: 'girls', initialElectricity: 700 },
        { id: 'mall', initialElectricity: 1600 },
        { id: 'hospital', initialElectricity: 650 },
        { id: 'unipolis', initialElectricity: 500 },
        { id: 'auditorium', initialElectricity: 550 }
    ];

// Function to generate a random value within a range
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update electricity consumption for each block
function updateElectricityData() {
    // Initial electricity consumption (kWh) for each block
    const blocks = [
        { id: 'admission', initialElectricity: 1200 },
        { id: 'library', initialElectricity: 950 },
        { id: 'boys', initialElectricity: 800 },
        { id: 'girls', initialElectricity: 700 },
        { id: 'mall', initialElectricity: 600 },
        { id: 'hospital', initialElectricity: 650 },
        { id: 'unipolis', initialElectricity: 500 },
        { id: 'auditorium', initialElectricity: 550 }
    ];

    // Update the meter and electricity value for each block
    blocks.forEach(block => {
        // Simulate a random electricity consumption within ±10% of the initial value
        const newElectricity = getRandomValue(block.initialElectricity * 0.9, block.initialElectricity * 1.1);
        const meterWidth = (newElectricity / 1200) * 100; // Scale to 100%

        // Update the electricity value on the page
        document.getElementById(`${block.id}-electricity`).textContent = `${newElectricity} kWh`;

        // Update the meter fill width
        const meterElement = document.getElementById(`${block.id}-meter`);
        meterElement.innerHTML = `<div class="meter-fill" style="width: ${meterWidth}%;"></div>`;
    });
}

// Call the update function every 3 seconds to simulate real-time data
setInterval(updateElectricityData, 3000)

// Function to create increasing meters with random increments
function increaseMeter(selector, startValue, incrementMin, incrementMax) {
    const element = document.querySelector(selector);
    let currentValue = startValue;

    setInterval(() => {
        // Random increment within specified range
        const increment = Math.floor(Math.random() * (incrementMax - incrementMin + 1)) + incrementMin;
        currentValue += increment;
        element.textContent = currentValue.toLocaleString(); // Display the value with comma separators
    }, 1000); // Update every second
}

window.onload = function() {
    // Solar energy meters for different blocks
    increaseMeter('.admission-meter', 50000, 10, 50);
    increaseMeter('.library-meter', 30000, 5, 30);
    increaseMeter('.boys-hostel-meter', 20000, 8, 40);
    increaseMeter('.girls-hostel-meter', 25000, 10, 45);
    increaseMeter('.uni-mall-meter', 40000, 10, 50);
    increaseMeter('.uni-hospital-meter', 15000, 5, 25);
    increaseMeter('.unipolis-meter', 35000, 8, 35);
    increaseMeter('.auditorium-meter', 18000, 5, 20);

    // Electricity meters for different blocks
    increaseMeter('.admission-electric-meter', 45000, 10, 55);
    increaseMeter('.library-electric-meter', 28000, 8, 33);
    increaseMeter('.boys-hostel-electric-meter', 22000, 9, 42);
    increaseMeter('.girls-hostel-electric-meter', 24000, 10, 50);
    increaseMeter('.uni-mall-electric-meter', 38000, 12, 60);
    increaseMeter('.uni-hospital-electric-meter', 13000, 6, 28);
    increaseMeter('.unipolis-electric-meter', 34000, 7, 38);
    increaseMeter('.auditorium-electric-meter', 17000, 5, 23);
};



// Data for the bar chart
const barData = {
    labels: ['Coal', 'Oil', 'Natural Gas', 'Biofuels and Waste', 'Others'],
    datasets: [{
        label: 'Total Energy Supply (2021)',
        data: [44.6, 23.7, 5.8, 21.6, 4.3], // Example data based on the image
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Config for the bar chart
const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percentage (%)'
                }
            }
        }
    }
};

// Render the bar chart
const barChart = new Chart(
    document.getElementById('barChart'),
    barConfig
);

// Data for the line chart
const lineData = {
    labels: ['2000', '2005', '2010', '2015', '2021'], // Timeline
    datasets: [
        {
            label: 'Coal',
            data: [35, 37, 38, 42, 45], // Example data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.4
        },
        {
            label: 'Oil',
            data: [20, 22, 24, 23, 24], // Example data
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.4
        },
        {
            label: 'Natural Gas',
            data: [5, 6, 7, 6, 5.8], // Example data
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: true,
            tension: 0.4
        },
        {
            label: 'Biofuel',
            data: [15, 18, 20, 21, 21.6], // Example data
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4
        }
    ]
};

// Config for the line chart
const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percentage (%)'
                }
            }
        }
    }
};

// Render the line chart
const lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig
);
