// Simulate login (replace with actual authentication logic)
export const login = (token) => {
    localStorage.setItem('userToken', token);
};

// Simulate logout
export const logout = () => {
    localStorage.removeItem('userToken');
};

// Check if user is authenticated
export const checkAuthStatus = () => {
    const userToken = localStorage.getItem('userToken');
    return !!userToken; // Return true if token exists
};
