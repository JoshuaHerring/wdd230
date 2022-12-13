function form_submited()
{
    let submissions = localStorage.getItem("forms_submitted");
    submissions ++
    localStorage.setItem("forms_submitted", submissions)
}