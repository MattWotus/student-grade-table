var tableBody = document.querySelector("tbody");

class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  };
  updateGrades(grades) {
    tableBody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade, this.gradeUpdate, this.setUpdating);
    };
    if (grades.length === 0) {
      this.noGradesElement.classList.remove("d-none");
    } else {
      this.noGradesElement.classList.add("d-none");
    }
  };
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  };
  onGradeUpdateClick(gradeUpdate) {
    this.gradeUpdate = gradeUpdate;
  };
  onUpdateButtonClick(setUpdating) {
    this.setUpdating = setUpdating
  };
  renderGradeRow(data, deleteGrade, gradeUpdate, setUpdating) {
    var tableRow = document.createElement("tr");
    var tableDataName = document.createElement("td");
    var tableDataCourse = document.createElement("td");
    var tableDataGrade = document.createElement("td");
    var tableDataButtons = document.createElement("td");
    var updateButton = document.createElement("button");
    updateButton.classList.add("btn");
    updateButton.classList.add("btn-info");
    updateButton.textContent = "Update";
    updateButton.style.padding = "6px 20px 6px 20px";
    updateButton.style.margin = "0 15px 0 0";
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = "6px 20px 6px 20px";
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataCourse);
    tableRow.appendChild(tableDataGrade);
    tableDataButtons.appendChild(updateButton);
    tableDataButtons.appendChild(deleteButton);
    tableRow.appendChild(tableDataButtons);
    tableBody.appendChild(tableRow);
    tableDataName.textContent = data.name;
    tableDataCourse.textContent = data.course;
    tableDataGrade.textContent = data.grade;
    deleteButton.addEventListener("click", function () {
      deleteGrade(data.id);
    });
    updateButton.addEventListener("click", function () {
      setUpdating(data);
      var addButton = document.getElementById("addButton");
      var updateFormButton = document.getElementById("updateFormButton");
      addButton.classList.add("d-none");
      updateFormButton.classList.remove("d-none");
    });
    return tableRow;
  };
};
