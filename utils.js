const keyData = 'user data;';
const emptyData = [];

export function saveUserData(userData) {
    const stringyUserData = JSON.stringify(userData);

    localStorage.setItem(keyData, stringyUserData);

}

export function getUserData() {
    const stringData = localStorage.getItem(keyData);
    const parsedData = JSON.parse(stringData);

    return parsedData;
}

// export function clearUserData({
//     const stringifyEmptyData = JSON.stringify(emptyData);

//     localStorage.setItem(keyData, stringifyEmptyData);
// }


export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

