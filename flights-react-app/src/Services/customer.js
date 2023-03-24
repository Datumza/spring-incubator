export async function createCustomer(data: {}) {
    const response = await fetch('http://localhost:8201/customers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    return await response.json();
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
