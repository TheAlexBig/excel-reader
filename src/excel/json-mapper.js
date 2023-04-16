import { keyMap } from '../constants/index.js';

export default function(jsonData = []) {
 
  const result = [];
  // Use the map method to transform the keys of the data object
  jsonData.forEach((element) => {
    const transformedObj = {};
    Object.keys(element).filter(key => key).forEach(key => {
      const newKey = keyMap[key] || key;
      transformedObj[newKey] = element[key];
    });
    result.push(transformedObj);
  });

  return result;
}