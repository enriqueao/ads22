
const fileName = "Aguascalientes";
const filePathRead = "../documents/" + fileName+ ".xml";
const filePathWrite = "../documents/" + fileName+ ".json";
const fileXML = require(filePathRead);


function xmlToJson( xml ) {
     // Crea el objeto a retornar
    var obj = {};

    if ( xml.nodeType == 1 ) { // elemento
      // attributos
      if ( xml.attributes.length > 0 ) {
      obj["@attributes"] = {};
        for ( var j = 0; j < xml.attributes.length; j++ ) {
          var attribute = xml.attributes.item( j );
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if ( xml.nodeType == 3 ) { // text
      obj = xml.nodeValue;
    }
   
    // hijos
    if ( xml.hasChildNodes() ) {
      for( var i = 0; i < xml.childNodes.length; i++ ) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if ( typeof(obj[nodeName] ) == "undefined" ) {
          obj[nodeName] = xmlToJson( item );
        } else {
          if ( typeof( obj[nodeName].push ) == "undefined" ) {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push( old );
          }
          obj[nodeName].push( xmlToJson( item ) );
        }
      }
    }
    //Retorna el objeto convertido de xml a json
      obj.writeFileSync(filePathWrite, JSON.stringify(obj));
      return obj; 
  };


