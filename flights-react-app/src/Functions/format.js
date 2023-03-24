export function formatPrice(num) {
    return num.toFixed(2);
}

export function formatDate(str) {
    const date = new Date(str);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${month} ${day}, ${year} at ${hours}:${minutes}`;
}

export function formatUsername(user) {
    if (user === undefined || user === null){
        return "Sign in"
    }

    return user.username
}

export function formatAvatar(user) {
    if (user === undefined || user === null){
        return null
    }

    return user.username.toUpperCase().charAt(0)
}