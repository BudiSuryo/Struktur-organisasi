//JavaScript

let chart = new OrgChart(document.getElementById("tree"), {
    mouseScrool: OrgChart.action.none,
    nodeMenu: {
        add: {text: "Add New"},
        edit: {text: "Edit"},
        remove: {text: "Remove"}
    },
    editForm: {
        photoBinding: "ImgUrl",
        elements: [
            { type: 'textbox', label: 'Photo Url', binding: 'ImgUrl', btn: 'Upload' },
        ]
    },
    nodeBinding: {
        field_0: "EmployeeName",
        field_1: "Title",
        img_0: "ImgUrl"
    }
});

chart.onUpdateNode(function(args){
    //post the data from args to your server
    console.log(args.oldData) // old node data
    console.log(args.newData) // new node data
});


chart.onRemoveNode(function(args){
    //post the data from args to your server
    console.log(args.id); // id of the removed data

});


chart.onAddNode(function(args){
    //post the data from args to your server
    console.log(args.data) // added node data
});


chart.editUI.on('element-btn-click', function (sender, args) {
    OrgChart.fileUploadDialog(function (file) {
        let formData = new FormData();
        formData.append('file', file);
        alert('upload the file');
        console.log(args);
    })
});

chart.load([
    { id: "1", EmployeeName: "Jack Hill", Title: "Chairman and CEO", Email: "amber@domain.com", ImgUrl: "https://cdn.balkan.app/shared/16.jpg", tags: ['orange'] },
]);
