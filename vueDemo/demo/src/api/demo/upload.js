import request from '@/api/common/request'


const demoApi = {
    create: function () {
        const obj = {}
        // 上传图片
        obj.file = function (data) {
            return request({
                url: '/xboot/app/FileLibrary/file',
                method: 'post',
                data,
            })
        }
        return obj
    }

}.create()

export default demoApi