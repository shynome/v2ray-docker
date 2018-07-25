
const [ version, suffix='' ] = /**@type {string}*/(process.env.npm_package_version).split('-')

const versions = version.split('.').map((v,i,a)=>a.slice(0,i+1).join('.')+suffix)

versions.join(versions[0]==='0'?'dev':'latest')

console.log(versions.join(','))