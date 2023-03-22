export async function getAllFlights() {
    try{
        const response = await fetch('http://localhost:8202/flights');
        return await response.json();
    }catch(error) {
        return [];
    }
}