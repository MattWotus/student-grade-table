class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSubmit = this.updateSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.formElement.addEventListener('submit', this.updateSubmit);
  };
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  };
  onUpdate(gradeUpdate) {
    this.gradeUpdate = gradeUpdate;
  };
  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get("name");
    var course = formData.get("course");
    var grade = formData.get("grade");
    this.createGrade(name, course, grade);
    event.target.reset();
  };
  fillGradeForm(data) {
    this.formElement[0].value = data.name;
    this.formElement[1].value = data.course;
    this.formElement[2].value = data.grade;
  };
  updateSubmit(event) {
    var formDataUpdated = new FormData(event.target);
    var nameUpdated = formDataUpdated.get("name");
    var courseUpdated = formDataUpdated.get("course");
    var gradeUpdated = formDataUpdated.get("grade");
    this.gradeUpdate(nameUpdated, courseUpdated, gradeUpdated);
    var addButton = document.getElementById("addButton");
    var updateFormButton = document.getElementById("updateFormButton");
    addButton.classList.remove("d-none");
    updateFormButton.classList.add("d-none");
    event.target.reset();
  }
};
