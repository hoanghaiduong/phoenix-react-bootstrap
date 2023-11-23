import React from 'react'
import signInWithGoogle, { useAuth } from '../../context/AuthContext'
import { auth } from "../../config/InitialFirebase";
import { useToasts } from 'react-toast-notifications';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserInfoAction } from '../../redux/Actions';
function GoogleButton({ buttonText }) {
    const { createOrLogin } = useAuth();
    const { addToast } = useToasts()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    // };
    const { signInWithGoogle } = useAuth();
    const handleGoogleSignIn =async () => {
        await signInWithGoogle().then((result) => {
            addToast("Đăng Nhập thành công", {
                appearance: 'success',
                autoDismiss: true,
              })
              createOrLogin(result.user.accessToken, navigate)
            dispatch(setUserInfoAction({
                displayName: result.user.displayName,
                accessToken: result.user.accessToken,
                photoURL: result.user.photoURL
            }));
            console.log(result)
          }).catch(error => {
            console.log(error.message)
            addToast(error.message, {
                appearance: 'error',
                autoDismiss: true,
              })
          })
    };
    return (
        <button className="btn btn-phoenix-secondary w-100 mb-3" onClick={handleGoogleSignIn}>
            <span className="fab fa-google text-danger me-2 fs--1" />
            {buttonText}
        </button>
    )
}

export default GoogleButton