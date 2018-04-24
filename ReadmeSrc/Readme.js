const axios = require('axios')
const moment = require('moment')
const sortBy = require('lodash/fp/sortBy')
const manualData = require('./manualData.json')
const dummyData = require('./data.json')

const fs = require('fs')

let data

const getDate = () => moment().format('LL')

const margeManualData = package => {
  const data = manualData.find(item => item.name === package.name) || {
    supports: {},
    version: '',
    packagePath: ''
  }

  return {...package, ...data}
}

const getFeatures = package => {
  // const entries = Object.entries(package.supports)
  // console.log('entries', entries)

  const map = Object.entries(package.supports).map(([key, value]) => {
    return value ? '✓' : '✗'
  })

  return map.join('')
}

// prettier-ignore
const rankTableHeaders = `| Stars | Package | Version | Open Issues | Features | Created |
| - | - | - | - | - | - |
`

const getRankRow = package => {
  // prettier-ignore
  const row = `|${package.stargazers_count}|[${package.name}](#${package.name})|[![npm version](https://badge.fury.io/js/${package.name}.svg)](https://badge.fury.io/js/${package.name})|${package.open_issues_count}|${getFeatures(package)}|${moment(package.created_at).format('LL')}|
  `
  return row
}

// prettier-ignore
const projectTableHeaders = `| Stars | Open Issues | Forks | Created | Archived |
| - | - | - | - |-|`

// prettier-ignore
const getProjectRow = package => `|${package.stargazers_count}|${package.open_issues_count}|${package.forks_count}|${moment(package.created_at).format('LL')}| ${package.archived ? '✓':''}
`

const getStarRank = () => {
  const sorted = sortBy('stargazers_count')(data)

  const rankRows = sorted
    .reverse()
    .map(package => getRankRow(package))
    .join('')

  return rankTableHeaders + rankRows
}

const getProjectList = () => {
  const sorted = sortBy('name')(data)

  const mod = sorted.map(p => {
    // prettier-ignore
    return `{"name":"${p.name}","packagePath":"","version":"","supports": {"automaticVendorPrefix": false,"pseudoClasses": false,"mediaQueries": false,"stylesAsObjLiterals": false,"extractCssFile": false}}`
  })

  const package = sorted
    .map(package => {
      return `
### ${package.name}

> ${package.description}

${projectTableHeaders}
${getProjectRow(package)}

Author: [${package.owner.login}](${package.html_url})



License: ${package.license ? package.license.name : '-'}

[Github](${package.html_url})

[Demo Package](/Packages/${package.packagePath})

---

`
    })
    .join('')

  return package
}

const getPackageData = async () =>
  new Promise((resolve, reject) => {
    const source = dummyData

    data = source.map(package => margeManualData(package))

    resolve()
    // axios
    //   .get('https://api.github.com/users/css-in-js-stats/starred?per_page=100')
    //   .then(response => {
    //     data = getFeatures(response.data)
    //     fs.writeFileSync('./log.json', JSON.stringify(data))
    //     resolve()
    //   })
    //   .catch(function(error) {
    //     reject(error)
    //   })
  })

module.exports = {
  getPackageData,
  getProjectList,
  getDate,
  getStarRank
}

// getPackageData()
