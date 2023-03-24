export async function getAllFlights() {
    try {
        const response = await fetch('http://localhost:8202/flights');
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function bookFlight(data: {}) {
    try {
        const response = await fetch('http://localhost:8203/bookings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        return await response.json();
    } catch (error) {
        return {};
    }
}