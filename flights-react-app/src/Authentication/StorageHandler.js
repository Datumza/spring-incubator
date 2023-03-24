export const saveToStorage = (key, toBeSaved) => {
    const toBeSaved_serialized = JSON.stringify(toBeSaved);
    localStorage.setItem(key, toBeSaved_serialized);
}

export const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const deleteFromStorage = (key) => {
    localStorage.removeItem(key);
}