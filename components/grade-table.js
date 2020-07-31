class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  };
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector("tbody");
    tableBody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      var tableRow = document.createElement("tr");
      var tableDataName = document.createElement("td");
      var tableDataCourse = document.createElement("td");
      var tableDataGrade = document.createElement("td");
      tableBody.appendChild(tableRow);
      tableRow.appendChild(tableDataName);
      tableRow.appendChild(tableDataCourse);
      tableRow.appendChild(tableDataGrade);
      tableDataName.textContent = grades[i]["name"];
      tableDataCourse.textContent = grades[i]["course"];
      tableDataGrade.textContent = grades[i]["grade"];
    };
  };
};
