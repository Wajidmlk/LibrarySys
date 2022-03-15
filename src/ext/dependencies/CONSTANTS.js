export const SERVER_CREDENTIALS = {
    GET_USERS: {
        _API : 'http://localhost:5000/getUsers',
        _METHOD: 'get'
    },
    GET_USER_PROFILES: {
        _API : 'http://localhost:5000/getUserProfiles',
        _METHOD: 'get'
    },
    GET_USER: {
        _API : 'http://localhost:5000/getUserProfile',
        _METHOD: 'post'
    },
    GET_RECENT_CHATS: {
        _API : 'http://localhost:5000/getRecentChats',
        _METHOD: 'get'
    },
    GET_USER_CHAT: {
        _API : 'http://localhost:5000/getUserChat',
        _METHOD: 'post'
    },
    SET_USER_CHAT: {
        _API : 'http://localhost:5000/setUserChat',
        _METHOD: 'post'
    },
    GET_USER_CHAT: {
        _API : 'http://localhost:5000/getUserChat',
        _METHOD: 'post'
    },
    GET_PROJECTS: {
        _API : 'http://localhost:5000/getProjects',
        _METHOD: 'get'
    },
    GET_USER_PROJECTS: {
        _API : 'http://localhost:5000/getUserProjects',
        _METHOD: 'post'
    },
    DELETE_PROJECT: {
        _API : 'http://localhost:5000/deleteProject',
        _METHOD: 'post'
    },
    INSERT_PROJECT: {
        _API : 'http://localhost:5000/insertProject',
        _METHOD: 'post'
    },
    INSERT_PROJECT_FILES: {
        _API : 'http://localhost:5000/insertProjectFiles',
        _METHOD: 'post'
    },
    SIGN_IN: {
        _API : 'http://localhost:5000/signin',
        _METHOD: 'post'
    },
    SIGN_IN_ADMIN: {
        _API : 'http://localhost:5000/signinAdmin',
        _METHOD: 'post'
    },
    SIGN_UP: {
        _API : 'http://localhost:5000/signup',
        _METHOD: 'post'
    },
    EDIT_USER: {
        _API : 'http://localhost:5000/updateUserProfile',
        _METHOD: 'post'
    },
    UPDATE_USER_DP: {
        _API : 'http://localhost:5000/updateUserPicture',
        _METHOD: 'post'
    },
    GOOGLE_SIGN_UP: {
        _API : 'http://localhost:5000/auth/google',
        _METHOD: 'post'
    }
}

export const ADMIN_PANEL = {
    TABS: {
        _TABS_NAME : 'currentTab'
    }
}