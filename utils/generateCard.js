function generateCard(person) {
    if (!person) {
        return;
    }
    console.log(person);

    var name = person.getName();
    var id = person.getId();
    var email = person.getEmail();
    let variant;

    if(person.getRole() === 'Engineer') {
        variant = `<h4>GitHub URL: <a href="${person.getGithub()}">${person.getGithub()}</a></h4>`;
    } else if (person.getRole() === 'Intern') {
        variant = `<h4>School: ${person.getSchool()}</h4>`;
    } else if (person.getRole() === 'Manager') {
        variant = `<h4>Office #: ${person.getOffice()}</h4>`;
    } else {
        variant = ``;
    }

    return `
        <section class="card">
            <div class="card-header">
                <h2>${name}</h2>
                <h3>Role: ${role}</h3>
            </div>
            <div class="card-body">
                <h4>Employee ID: ${id}</h4>
                <h4>Email: <a href="mailto:${email}">${email}</a></h4>
                ${variant}
            </div>
        </section>
    `;
}

module.exports = generateCard;