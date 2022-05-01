export const SIGNIN = 'SIGNIN';

export const signin = (email: String, password: String) => (dispatch: any) => {
    dispatch({
        type: SIGNIN,
        payload: {email: email, password: password}
    })
}