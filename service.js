//Aquí se busca la info del estado de las máquinas en la bd
const getMachines = () => {
    let machines = {}
    machines.timestamp = Date.now()
    return machines
}
//devuelve el estado actual de una consola
const getMachine = (id) => {
    let machine = {}
    //estos datos recuperados de bd
    machine.id = id
    machine.status = 2 //en uso
    machine.averageUseTimePerSession = 25
    return machine
}

const changeStatus = (id, status) => {
    let machine = {}
    //estos datos recuperados de bd
    machine.id = id
    machine.status = status //en uso
    machine.averageUseTimePerSession = 25
    return machine

}

module.exports = { getMachines, getMachine, changeStatus }