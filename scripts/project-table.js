function searchTable() {
    var input = document.getElementById("searchSoftwareProjectsTable");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("softwareProjectsTable");
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } 
            else {
                tr[i].style.display = "none";
            }
        }       
    }
}