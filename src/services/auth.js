class Auth {

    login = (email, password) => {
        if (email === 'blakajnatyra@gmail.com' && password === 'natyra.123') {
            localStorage.setItem('loggedIn', 'true');
            return true;
        } else {
            return false;
        }
    }

}

export default new Auth();
