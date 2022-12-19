import api from './base.service';

export const userService = {
    login,
    logout,
    register,
    getUserByUserSns,
    updateUser,
    deleteUser
};

function login(data, cb) {
    api.baseApi('/api/v1/users/login', 'POST', data, (err, res) => {
        if (err == null) {
            localStorage.currentUser = JSON.stringify(res)
        }
        cb(err, res)
    })
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}

function register(data, cb) {
    api.baseApi('/api/v1/users', 'POST', data, (err, res) => {
        cb(err, res)
    })
}

function getUserByUserSns(data, cb) {
    api.baseApi('/api/v1/users/usersns/' + data.user_sns, 'GET', data, (err, res) => {
        cb(err, res)
    })
}

function updateUser(data, cb) {
    api.baseApi('/api/v1/users/id/' + data.id, 'PATCH', data, (err, res) => {
        cb(err, res)
    })
}

function deleteUser(data, cb) {
    api.baseApi('/api/v1/users/id/' + data.id, 'DELETE', data, (err, res) => {
        cb(err, res)
    })
}
