var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{ 
  const newObj = Object.assign({}, object, {[key]:value});
  return(newObj);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return(object);
}