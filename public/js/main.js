//
const url = window.location.href;
const editButton = document.querySelectorAll('.editBtn');
const form = document.getElementById('form');
//
const name = document.getElementById('name'),
    description = document.getElementById('description'),
    date = document.getElementById('date'),
    time = document.getElementById('time');
//

const teamName = document.getElementById('teamName'),
    teamdescription = document.getElementById('teamdescription'),
    teamDate = document.getElementById('teamDate'),
    teamTime = document.getElementById('teamTime');


const names = [name, description, date, time];

let edit_url = url + "edit/";

valueChange();

function valueChange() {
    editButton.forEach(edit => {
        edit.addEventListener('click', e => {

            console.log(teamName.textContent);
            name.value = teamName.textContent;
            description.value = teamdescription.textContent;
            date.value = teamDate.date;
            time.value = teamTime.textContent;
            console.log(name.value);






            console.log(e.target.parentNode.parentNode);

        });
    });
}

const setValue = (props) => {
    this.props = props;
    props.forEach(val => {
        this.props = val.attributes.value.value;
    });
    return this.props;
}