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
    var average = sum / i;
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
  }
};
