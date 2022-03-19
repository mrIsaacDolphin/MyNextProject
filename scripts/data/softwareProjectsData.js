/* https://github.com/divanov11/json-html-table/blob/master/jsontable.html */
var softwareProjectsTableData = [
    {
        'name':'School Management System', 
        'type':'Web Development', 
        'link':'https://cdnjs.com/libraries/jquery'
    },
    {
        'name':'Mila', 
        'type':'iOS', 
        'link':'10/1/1989'
    },
    {
        'name':'Paul', 
        'type':'Web Development', 
        'link':'10/14/1990'
    },
    {
        'name':'Dennis', 
        'type':'Web Development', 
        'link':'11/29/1993'
    },
    {
        'name':'Tim', 
        'type':'Blockchain', 
        'link':'3/12/1991'
    },
    {
        'name':'Erik', 
        'type':'Native', 
        'link':'10/31/1995'
    },
]
buildTable(softwareProjectsTableData)
function buildTable(data){
    var table = document.getElementById('softwareProjectsTableBody')
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].type}</td>
                        <td><a href="${data[i].link}" target="_blank">brief.pdf</td>
                   </tr>`
        table.innerHTML += row
    }
}