
$(document).ready(function () {
   $('#myTable').DataTable();
} );
    
 var datos= data[0].results[0].members;
 
 var tabla = document.getElementById("house-data");

 datos.forEach(element => {
   tabla.innerHTML +=`
  <tr>
     <td scope="row"><a href="${element.url}"> ${element.first_name}</a> ${element.last_name} </th>
     <td scope="row">${element.party}</th>
     <td scope="row">${element.state}</th>
     <td scope="row">${element.seniority}</th>
     <td scope="row">${element.votes_with_party_pct} %</th>
  </tr>
    `
});

 
  