function loadSubject(id) {
    fetch("/lessons/index.json")
	.then((response) => response.json())
        .then((data) => {
	    var title = document.getElementById("title-banner");
	    var subtitle = document.getElementById("subtitle");
	    var container = document.getElementById("container")

	    console.log(data.subjects[id]);

	    title.innerHTML = data.subjects[id].titleEn;
	    subtitle.innerHTML = data.subjects[id].splash;
	    container.innerHTML = "";

	    var chapterLength = data.subjects[id].chapters.length;

	    for (var i = 0; i < chapterLength; i++) {
		var chapterContainer = `
		    <h1 id="bab${i}">Chapter ${i + 1}: ${data.subjects[id].chapters[i].titleEn}</h1>
		    <div class="button-group-container">
		`

		var lessonLength = data.subjects[id].chapters[i].lessons.length;

	    	if (lessonLength > 1) {
	    	    chapterContainer += `
	    	        <a class="button-grouped button-grouped-top" href="lesson/?subject=${id}&chapter=${i}&id=0">
	    	    	<span class="button-char-icon">${(data.subjects[id].chapters[i].lessons[0].type == "lesson") ? '📚' :'✏️' }</span>
	    	            <span>${data.subjects[id].chapters[i].lessons[0].titleEn}</span>
	    	    	</a>
	    	    `
	    	    for (var j = 1; j < lessonLength - 1; j++) {
	    	        chapterContainer += `
	    	    	<a class="button-grouped" href="lesson/?subject=${id}&chapter=${i}&id=${j}">
	    	    	    <span class="button-char-icon">${(data.subjects[id].chapters[i].lessons[j].type == "lesson") ? '📚' :'✏️' }</span>
	    	    	    <span>${data.subjects[id].chapters[i].lessons[j].titleEn}</span>
	    	    	</a>
	    	        `
	    	    }
	    	    chapterContainer += `
	    	        <a class="button-grouped button-grouped-bottom" href="lesson/?subject=${id}&chapter=${i}&id=${lessonLength - 1}">
	    	    	<span class="button-char-icon">${(data.subjects[id].chapters[i].lessons[lessonLength - 1].type == "lesson") ? '📚' :'✏️' }</span>
	    	    	<span>${data.subjects[id].chapters[i].lessons[lessonLength - 1].titleEn}</span>
	    	        </a>
	    	    `
	    	} else {

	    	}

		chapterContainer += `\n</div>`

		container.innerHTML += chapterContainer;
	    }
	    // return data.subjects[id];
    	}
    );
}

// DEPENDENCIES:
// * /scripts/toc.js
// * markdown-it
function loadLesson(subject, chapter, lesson) {
    fetch("/lessons/index.json")
	.then((response) => response.json())
        .then((data) => {
	    var title = document.getElementById("title-banner");
	    var subtitle = document.getElementById("subtitle");
	    var container = document.getElementById("container")

	    var chipStatus = document.getElementById("chip-status");
	    var chipAuthor = document.getElementById("chip-author");
	    var chipGrade = document.getElementById("chip-grade");

	    var lessonData = data.subjects[subject].chapters[chapter].lessons[lesson];

	    console.log(lessonData);

	    title.innerHTML = lessonData.titleEn;
	    subtitle.innerHTML = `Chapter ${parseInt(chapter) + 1}`;
	    container.innerHTML = "";
	    chipGrade.innerHTML = "Grade " + lessonData.grade;
	    if (lessonData.authors.length == 1) {
		chipAuthor.innerHTML = "Written by " + lessonData.authors[0];
	    } else {
		chipAuthor.innerHTML = "Written by ";
		for (var i = 0; i < lessonData.authors.length - 1; i++) {
		    chipAuthor.innerHTML += lessonData.authors[i] + ", ";
		}
		chipAuthor.innerHTML += "and " + lessonData.authors[lessonData.authors.length - 1];
	    }
	    // why the heck switch case not working
	    // guess i'm too stupid for a switch case.
	    // no i'm not yandev
	    if (lessonData.status == 0) {    
		chipStatus.innerHTML = "❓ Not Verified";
	    } else if (lessonData.status == 1) {
		    chipStatus.innerHTML = "✅ Verified";
	    } else if (lessonData.status == 2) {
		    chipStatus.innerHTML = "⚠️ Contains Wrong Information";
	    }

	    fetch(lessonData.pathEn)
		.then((response) => response.text())
		.then((data) => {
		    const md = markdownit();
		    container.innerHTML = md.render(data);
		}).then(() => {
		    MathJax.typeset();
		});
	}
    ).then(() => {
	toc();
    });
    console.log(subject);
    console.log(chapter);
    console.log(lesson);
    
}

function loadQuiz(subject, chapter, lesson) {

}

function listSubjects() {
    fetch("/lessons/index.json")
	.then((response) => response.json())
        .then((data) => {
	    var container = document.getElementById("subject-container");

	    for (var i = 0; i < data.subjects.length; i++) {
		var card = `
                    <div class="card">
                        <a href="/subject/?id=${i}" class="link-card"></a>
                        <img src="${data.subjects[i].banner}" alt="" class="card-img">
                        <a href="/subject/?id=${i}">
                            <h2>${data.subjects[i].titleEn}</h2>
                        </a>
                    </div>
		`;

		container.innerHTML += card;
	    }
    	}
    );
}
