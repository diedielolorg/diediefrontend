const CLIENT_ID = process.env.REACT_APP_KAKAKO_LOGIN

const REDIRECT_URI = 'http://localhost:3000/api/users/kakaoLoginLogic'

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

export default KAKAO_AUTH_URL
