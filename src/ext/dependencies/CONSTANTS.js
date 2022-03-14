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

export const USER_CREDENTIALS = {
    INFO: {
        _LOCAL_LOGIN_KEY : 'logged',
        _USER_NAME : 'user_name',
        _USER_EMAIL : 'user_email'
    },
    USER_PREFERENCES: {
        _LOGIN_WITH_REGISTER : false
    }
}

export const ADMIN_CREDENTIALS = {
    INFO: {
        _LOCAL_LOGIN_KEY : 'admin_logged',
        _ADMIN_NAME : 'admin_name',
        _ADMIN_EMAIL : 'admin_email'
    },
    USER_PREFERENCES: {
        _LOGIN_WITH_REGISTER : false
    }
}

export const ADMIN_PANEL = {
    TABS: {
        _TABS_NAME : 'currentTab'
    }
}

export const ADMIN_INBOX = {
    USERS: {
        _ACTIVE_USER : 'Active'
    }
}

export const SOCKET_IO = {
    HOST: 'http://localhost:5001',
    CALLS: {
        SEND: 'send_message',
        RECIEVE: 'receive_message',
        JOIN: 'joined_chat'
    }
}

export const APP = {
    ROUTES: {
        ADMIN: '/admin',
        HOME: '/home',
        HOMESUBS: {
            HOME: '/',
            PROJECTS: '/Projects',
            LOGIN: '/Login',
            SERVICES: '/Services',
            ABOUT: '/About',
            CONTACT: '/Contact',
            CONSOLE: '/Console',
            PROFILE: '/Profile'
        }
    }
}
