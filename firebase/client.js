import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBHmXyM3TffnTWvDPyHLioVTyjq7zZbM4s",
  authDomain: "dev-login-cd302.firebaseapp.com",
  projectId: "dev-login-cd302",
  storageBucket: "dev-login-cd302.appspot.com",
  messagingSenderId: "901375545609",
  appId: "1:901375545609:web:66e88577005045724dc3d8",
  measurementId: "G-702JKFCKSR",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapStateUserAuth = (user) => {
  const { displayName, photoURL, email } = user
  return {
    avatar: photoURL,
    email,
    username: displayName,
  }
}
export const logoutUser = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => "ok")
}

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? mapStateUserAuth(user) : null
    onChange(normalizeUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const signupWithEmail = (params) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(params.email, params.password)
    .then(mapStateUserAuth)
}

export const signinWithEmail = (params) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(params.email, params.password)
    .then(mapStateUserAuth)
}

export const signinWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}

export const signinWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider()
  return firebase.auth().signInWithPopup(facebookProvider)
}
export const signinWithTwitter = () => {
  const twitterProvider = new firebase.auth.TwitterAuthProvider()
  return firebase.auth().signInWithPopup(twitterProvider)
}
