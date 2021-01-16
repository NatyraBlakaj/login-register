import firebase from "firebase";

class Auth {

    register = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((user) => {
                localStorage.setItem('loggedIn', 'true');
                window.location.reload();
            })
            .catch((error) => {
                console.log('register failed');
            });
    }

    login = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                localStorage.setItem('loggedIn', 'true');
                window.location.reload();
            })
            .catch((error) => {
                console.log('Login failed');
            });
    }

    logout = () => {
        firebase.auth().signOut().then(() => {
            localStorage.clear();
            return true;
        }).catch((error) => {
            return false;
        });
    }

}

export default new Auth();
