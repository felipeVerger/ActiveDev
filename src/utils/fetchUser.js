export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    if (userInfo) {
        return userInfo[0];
    }
    return null;
}