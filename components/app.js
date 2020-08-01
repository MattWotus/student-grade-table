class App {
  handleGetGradesError(error) {
    console.error(error);
  };
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
      sum += grades[i]["grade"];
    };
    if (grades.length === 0) {
      var average = "N/A";
    } else {
      average = sum / i;
      average = Math.round(average);
    };
    this.pageHeader.updateAverage(average);
  };
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  };
  getGrades() {
    $.ajax({
      headers: {
        "X-Access-Token": "h3ULKq3b"
      },
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  };
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  };
  createGrade(name, course, grade) {
    $.ajax({
      headers: {
        "X-Access-Token": "h3ULKq3b"
      },
      data: {
        name: name,
        course: course,
        grade: grade
      },
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    });
  };
  handleCreateGradeError(error) {
    console.error(error);
  };
  handleCreateGradeSuccess() {
    this.getGrades();
  };
  deleteGrade(id) {
    $.ajax({
      headers: {
        "X-Access-Token": "h3ULKq3b"
      },
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      method: "DELETE",
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    });
  };
  handleDeleteGradeError(error) {
    console.log(error);
  };
  handleDeleteGradeSuccess() {
    this.getGrades();
  };
};
