const axios = require('axios')
const moment = require('moment')
const sortBy = require('lodash/fp/sortBy')
const manualData = require('./data.json')

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
  const map = Object.entries(package.supports).map(([key, value]) => {
    return value ? ' ■ ' : ' □ '
  })

  return map.join('')
}

// prettier-ignore
const rankTableHeaders = `| Stars | Package | Version | Open Issues | Features ([?](#how-to-read-the-feature-column)) | Created |
| - | - | - | - | - | - |
`

const getRankRow = package => {
  // prettier-ignore
  const row = `|${package.stargazers_count}|[${package.name}](#${package.name})|[![npm version](https://badge.fury.io/js/${package.name}.svg)](https://badge.fury.io/js/${package.name})|${package.open_issues_count}|${getFeatures(package)}|${moment(package.created_at).format('LL')}|
  `
  return row
}

// prettier-ignore
const projectFeaturesHeaders = `| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|`

// prettier-ignore
const getProjectFEaturesRow = package => `|${package.supports.automaticVendorPrefix ? '✓':' '}|${package.supports.pseudoClasses ? '✓':' '}|${package.supports.mediaQueries ? '✓':' '}|${package.supports.stylesAsObjLiterals ? '✓':' '}| ${package.supports.extractCssFile ? '✓':' '}
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

${projectFeaturesHeaders}
${getProjectFEaturesRow(package)}

Created by [${package.owner.login}](${package.owner.html_url}) on ${moment(
        package.created_at
      ).format('LL')} ${package.archived ? '[***Archived***]' : ''}

***${package.stargazers_count}*** stars, ***${
        package.open_issues_count
      }*** open issues, ***${package.forks_count}*** forks

License: ${package.license ? package.license.name : '-'}

[Github](${package.html_url})

[Demo Package](/Packages/${package.name})

---

`
    })
    .join('')

  return package
}

const getPackageData = async () =>
  new Promise((resolve, reject) => {
    axios
      .get('https://api.github.com/users/css-in-js-stats/starred?per_page=100')
      .then(response => {
        data = response.data.map(package => margeManualData(package))
        //fs.writeFileSync('./dumped_data.json', JSON.stringify(data))
        resolve()
      })
      .catch(function(error) {
        reject(error)
      })
  })

module.exports = {
  getPackageData,
  getProjectList,
  getDate,
  getStarRank
}

// getPackageData()
