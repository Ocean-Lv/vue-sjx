const axios = require('axios');

var test_url = 'http://60.28.158.166:7050/tbi-obt-staticinfo-api/api/v2/static/city/inCityAutoCompleter?query=s';

function httpGet (url) {
    return new Promise((resolve, reject)=>{
        axios.get(url)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
}

const server = {
    getCodes: async (url) => {
        return await httpGet(url);
    }
}

//async 函数总是返回一个 Promise 对象,所以你可以用then去处理结果
server.getCodes(test_url).then(res=>{
    console.log(res)
})

