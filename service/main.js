let serviceList = [];

const main = {

    addServiceToList(service) {
        serviceList.push(service);
    },

    getServiceList() {
        return serviceList;
    },

    getAvailableFunctions() {
        availableFunctions = [];
        service = {};
        for(let i = 0; i <= serviceList.length; i++) {
            if (serviceList[i]) {
                service.name = serviceList[i].name
                service.functions = Object.keys(serviceList[i].spec.paths)
                availableFunctions.push(service);
            }
        }
        return availableFunctions
    },
}


module.exports = main
