import requires from './require'

export const getElsData = (params) => requires({
    url: '/getElsData', data: params, method: 'post', headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});