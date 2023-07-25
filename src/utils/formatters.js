let myMap = new Map()

function formatProxy (array) {
  array.forEach(element => {
    if (element.type === 'http') element.type = 'HTTP'
    myMap.set(element.ip, {
      _id: element.ip,
      ip: element.ip,
      port: element.port,
      country: element.country,
      anonymity: element.anonymity,
      type: element.type,
      code: element.code ? element.code : ''
    })
  })
}

function splitProxy (array, type) {
  array.forEach(element => {
    let splitted = element.split(':')

    myMap.set(splitted[0], {
      _id: splitted[0],
      ip: splitted[0],
      port: splitted[1],
      country: '',
      anonymity: '',
      type: type,
      code: ''
    })
  })
}

function formatSocksProxy (array) {
  array.forEach(element => {
    let el = element.split('\t')
    myMap.set(el[0], {
      _id: el[0],
      ip: el[0],
      port: el[1],
      country: el[3],
      anonymity: el[5],
      type: el[4],
      code: el[2]
    })
  })
}

function formatUsSslProxy (array) {
  array.forEach(element => {
    let el = element.split('\t')
    myMap.set(el[0], {
      _id: el[0],
      ip: el[0],
      port: el[1],
      country: el[3],
      anonymity: el[4],
      type: el[6] === 'yes' ? 'Https' : '',
      code: el[2]
    })
  })
}

module.exports = { formatProxy, splitProxy, formatSocksProxy, formatUsSslProxy }