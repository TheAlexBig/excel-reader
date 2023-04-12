const keyMap = {
    "Código de País": "country _code",
    "Código de referencia": "reference_code",
    "Institución": "institution",
    "Dependencia": "dependency",
    "Tipo de documento": "document_type",
    "Título": "title",
    "Lugar y Fecha": "place_and_date",
    "Volumen": "volume",
    "Productor/ Procedencia": "provenance",
    "Alcance y contenido": "content",
    "Lengua": "language",
    "Características físicas": "physical_characteristics",
    "Notas": "notes"
  };

export default function(jsonData = []) {
 
  const result = [];
  // Use the map method to transform the keys of the data object
  jsonData.forEach((element) => {
    const newData = Object.keys(element).filter(key => key).map(key => {
      const newKey = keyMap[key] || key;
      return { [newKey]: element[key] };
    });
    result.push(newData);
  });
  


  return result;
}