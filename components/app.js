class App {
  handleGetGradesError(error) {
    console.error(error);
  };
  handleGetGradesSuccess(grades) {
    console.log(grades);
  };
  constructor() {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
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
