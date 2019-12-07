export const authAPI = {
    login: async user => {
        try {
            let response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            });
            let userInfo = await response.json();

            if (response.ok) {
                return userInfo;
            }
            throw new Error(userInfo);
        } catch (error) {
            throw Error(error);
        }
    },
    signup: async user => {
        try {
            let response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            });
            let userInfo = await response.json();

            if (response.ok) {
                return userInfo;
            }
            throw new Error(userInfo);
        } catch (error) {
            throw Error(error);
        }
    },
    logout: async () => {
        try {
            let response = await fetch('/api/auth/logout');
            let bool = await response.json();

            if (response.ok) {
                return bool;
            }
            throw new Error(bool);
        } catch (error) {
            throw Error(error);
        }
    }
};

export const tracksAPI = {};

export const userAPI = {};