var tableBody = document.querySelector("tbody");

class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement
  };
  updateGrades(grades) {
    tableBody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    };
    if (grades.length === 0) {
      text = document.querySelector("p");
      text.classList.remove("d-none");
    } else {
      text.classList.add("d-none");
    }
  };
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  };
  renderGradeRow(data, deleteGrade) {
    var tableRow = document.createElement("tr");
    var tableDataName = document.createElement("td");
    var tableDataCourse = document.createElement("td");
    var tableDataGrade = document.createElement("td");
    var tableDataDeleteButton = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = "6px 20px 6px 20px";
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataCourse);
    tableRow.appendChild(tableDataGrade);
    tableDataDeleteButton.appendChild(deleteButton);
    tableRow.appendChild(tableDataDeleteButton);
    tableBody.appendChild(tableRow);
    tableDataName.textContent = data.name;
    tableDataCourse.textContent = data.course;
    tableDataGrade.textContent = data.grade;
    deleteButton.addEventListener("click", function() {
      deleteGrade(data.id);
    });
    return tableRow;
  };
};
