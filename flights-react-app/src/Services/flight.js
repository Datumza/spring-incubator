export async function getAllFlights() {
    try {
        const response = await fetch('http://localhost:8202/flights');
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getFlightById(flightId: number) {
    try {
        const response = await fetch(`http://localhost:8202/flights/${flightId}`)
        return await response.json();
    } catch (error) {
        return {};
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

export async function getBookingsByCustomerId(customerId: number) {
    try {
        const response = await fetch(`http://localhost:8203/bookings/customer/${customerId}`)
        return await response.json();
    } catch (error) {
        return {};
    }
}

export async function getBookings(data: {}) {
    try {
        const response = await fetch('http://localhost:8203/bookings/search', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getCustomerByPassportNumber(data: {}) {
    try{
        const response = await fetch('http://localhost:8201/customers/search', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        return await response.json();
    }catch(error) {
        return {};
    }
}

