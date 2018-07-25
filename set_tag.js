
/**
 * 
 * @param {string} npm_package_version 
 */
function get_tags(npm_package_version){

  const [ version, suffix='' ] = npm_package_version.split('-')
  
  const versions = version.split('.').map((v,i,a)=>a.slice(0,i+1).join('.')+(suffix && '-')+suffix)
  
  versions.join(versions[0]==='0'?'dev':'latest')

  return versions.join(',')
  
}

console.log(get_tags(process.env.npm_package_version))