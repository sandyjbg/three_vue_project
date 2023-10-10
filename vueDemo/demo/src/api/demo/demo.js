import request from '@/api/common/request'


const demoApi = {
    create: function () {
        const obj = {}
        // 树形
        obj.selectStructure = function (data) {
            return request({
                url: '/backend/Dept/selectStructure',
                method: 'get',
                params: data,
            })
        },
        // 选择人员
        obj.selectAllUserByDepts = function (data) {
            return request({
                url: '/backend/Dept/selectAllUserByDepts',
                method: 'get',
                params: data,
            })
        },
        obj.iotCameraList = function (data) {
            return request({
                url: '/xboot/bigData/Index/iotCameraCoordinate',
                method: 'get',
                params: data,
            })
        }
        return obj
    }

}.create()

export default demoApi