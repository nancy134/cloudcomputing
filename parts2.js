function getAllParts(){
  console.log("getAllParts()");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var responseJSON = JSON.parse(this.responseText);
      var rows = "";
      for (i=0; i<responseJSON.data.length; i++){
        rows += "<tr><td>"+responseJSON.data[i].id+"</td>"+
        "<td>"+responseJSON.data[i].name+"</td></tr>";
        console.log(responseJSON.data[i].id+" "+responseJSON.data[i].name);
      }
      console.log("rows:"+rows);
      var partsTable = document.getElementById("partsTable").innerHTML;
      console.log("partsTable: "+partsTable);
      var partsRows = partsTable + rows;
      console.log("partsRows: "+partsRows);
      partsTable.innerHTML = partsRows;
    }
  };
  xhttp.open("GET","http://ec2-18-217-82-191.us-east-2.compute.amazonaws.com/rest/api/parts", true);
  xhttp.send();
}
