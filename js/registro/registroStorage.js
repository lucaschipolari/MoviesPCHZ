export function saveToLocalStorage(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
}

export function clearLocalStorage() {
    localStorage.removeItem('userData');
}