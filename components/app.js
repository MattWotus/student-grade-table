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
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
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
  };
};
