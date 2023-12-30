function handleProjectHover() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            const description = this.querySelector('p');
            description.style.opacity = '1';
        });

        project.addEventListener('mouseleave', function() {
            const description = this.querySelector('p');
            description.style.opacity = '0';
        });
    });
}

handleProjectHover();

profilePicture.addEventListener('dblclick', function() {
    alert('Double-clicked! You can customize this further.');
});

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.querySelector('.tablinks').click();



