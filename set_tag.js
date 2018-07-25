
/**
 * 
 * @param {string} npm_package_version 
 */
function get_tags(npm_package_version){

  const [ version, suffix='' ] = npm_package_version.split('-')
  
  let tags = version.split('.').map((v,i,a)=>a.slice(0,i+1).join('.')+(suffix && '-')+suffix)

  let flag = 'latest'

  switch(true){
    case tags[0][0]==='0':
      flag='dev'
      break;
    case suffix!=='':
      flag='beta'
      break;
  }
  
  tags.push(flag)

  return tags.join(',')
  
}

console.log(get_tags(process.env.npm_package_version))
