import api from './base.service';

export const bannerService = {
    getBanners,
    deleteBanner,
    addBanner,
    updateBanner
};

function getBanners(data, cb) {
    api.baseApi('/api/v1/banners?banner_type=' + data.category_id, 'GET', data, (err, res) => {
        cb(err, res)
    })
}

function deleteBanner(data, cb) {
    api.baseApi('/api/v1/banners/id/' + data.id, 'DELETE', data, (err, res) => {
        cb(err, res)
    })
}

function updateBanner(data, cb) {
    api.baseApi('/api/v1/banners/id/' + data.id, 'PATCH', data, (err, res) => {
        cb(err, res)
    })
}

function addBanner(data, cb) {
    api.baseApi('/api/v1/banners', 'POST', data, (err, res) => {
        cb(err, res)
    })
}