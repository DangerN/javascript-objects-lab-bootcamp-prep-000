var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{ 
  const newObj = Object.assign({}, object, {[key]:value})
  return(newObj)
}