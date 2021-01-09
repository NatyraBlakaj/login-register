
class Auth {

    login = (email, password) => {
        if(email === 'blakajnatyra@gmail.com' && password === 'natyra.123') {
            alert(email);
        }
    }

}

export default new Auth();
