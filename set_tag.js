
const version = /**@type {string}*/(process.env.npm_package_version)

const versions = version.split('.').map((v,i,a)=>a.slice(0,i+1).join('.')).join(',')

console.log(versions)