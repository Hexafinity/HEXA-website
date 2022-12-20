import api from './base.service';

export const contentService = {
    getBanner,
    getRoadMap,
    getEco,
    getPlatform,
    getParticipate
};

function getBanner(data, cb) {
    api.baseApi('/api/get-banner', 'GET', data, (err, res) => {
        cb(err, res)
    })
}

function getRoadMap(data, cb) {
    api.baseApi('/api/get-roadmap', 'GET', data, (err, res) => {
        cb(err, res)
    })
}

function getEco(data, cb) {
    api.baseApi('/api/get-eco', 'GET', data, (err, res) => {
        cb(err, res)
    })
}

function getPlatform(data, cb) {
    api.baseApi('/api/get-platform', 'GET', data, (err, res) => {
        cb(err, res)
    })
}

function getParticipate(data, cb) {
    api.baseApi('/api/get-participate', 'GET', data, (err, res) => {
        cb(err, res)
    })
}

