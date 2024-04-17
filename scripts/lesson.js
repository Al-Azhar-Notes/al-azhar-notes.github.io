// DEPENDENCIES:
// * /scripts/global.js
function loadSubject(id) {
	fetch("/lessons/index.json")
		.then((response) => response.json())
		.then((data) => {
			var title = document.getElementById("title-banner");
			var subtitle = document.getElementById("subtitle");
			var container = document.getElementById("container");
			var banner = document.getElementById("img-dynamic-subject");

			console.log(data.subjects[id]);

			if (isLangIndonesia()) {
				title.innerHTML = data.subjects[id].titleId;
			} else {
				title.innerHTML = data.subjects[id].titleEn;
			}
			subtitle.innerHTML = data.subjects[id].splash;
			container.innerHTML = "";
			var bannerPath = data.subjects[id].bannerOriginal;
			banner.style.setProperty("background-image", `url(${bannerPath})`)

			var chapterLength = data.subjects[id].chapters.length;

			for (var i = 0; i < chapterLength; i++) {
				var chapterContainer = `
					<h1 id="bab${i}">${(isLangIndonesia()) ? "Bab" : "Chapter"} ${i + 1}: ${(isLangIndonesia()) ? data.subjects[id].chapters[i].titleId : data.subjects[id].chapters[i].titleEn}</h1>
					<div class="button-group-container">
				`

				var lessonLength = data.subjects[id].chapters[i].lessons.length;

					if (lessonLength > 1) {
						for (var j = 0; j < lessonLength; j++) {
						var l = data.subjects[id].chapters[i].lessons[j];
						var style = "";

						if (j == 0) {
							style = "button-grouped-top";
						} else if (j == lessonLength - 1) {
							style = "button-grouped-bottom";
						}
							
						chapterContainer += `
								<a class="button-grouped ${style}" href="${(l.type == "lesson") ? 'lesson' : 'quiz' }/?subject=${id}&chapter=${i}&id=${j}">
									<span class="button-char-icon">${(l.type == "lesson") ? '📚' :'✏️' }</span>
									<span>${(isLangIndonesia()) ? l.titleId : l.titleEn}</span>
								</a>
							`
						}
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
// * /scripts/global.js
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

			if (isLangIndonesia()) {
				title.innerHTML = lessonData.titleId;
				subtitle.innerHTML = `Bab ${parseInt(chapter) + 1}`;
				container.innerHTML = "";
				chipGrade.innerHTML = "Kelas " + lessonData.grade;
					if (lessonData.authors.length == 1) {
						chipAuthor.innerHTML = "Ditulis oleh " + lessonData.authors[0];
					} else {
						chipAuthor.innerHTML = "Ditulis oleh ";
						for (var i = 0; i < lessonData.authors.length - 1; i++) {
							chipAuthor.innerHTML += lessonData.authors[i] + ", ";
						}
						chipAuthor.innerHTML += "dan " + lessonData.authors[lessonData.authors.length - 1];
					}
			} else {
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
			}
			// why the heck switch case not working
			// guess i'm too stupid for a switch case.
			// no i'm not yandev
			if (isLangIndonesia()) {
				if (lessonData.status == 0) {
					chipStatus.innerHTML = "❓ Belum Terverifikasi";
				} else if (lessonData.status == 1) {
					chipStatus.innerHTML = "✅ Terverifikasi";
				} else if (lessonData.status == 2) {
					chipStatus.innerHTML = "⚠️ Mengandung Informasi Tidak Akurat";
				}
			} else {
				if (lessonData.status == 0) {
					chipStatus.innerHTML = "❓ Not Verified";
				} else if (lessonData.status == 1) {
					chipStatus.innerHTML = "✅ Verified";
				} else if (lessonData.status == 2) {
					chipStatus.innerHTML = "⚠️ Contains Wrong Information";
				}
			}

			fetch((isLangIndonesia()) ? lessonData.pathId : lessonData.pathEn)
				.then((response) => response.text())
				.then((data) => {
					const md = markdownit({
						"html": true
					});
					container.innerHTML = md.render(data);
				}).then(() => {
					MathJax.typeset();
				}).then(() => {
					toc();
				});
		}
	);
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
							<h2>${(isLangIndonesia()) ? data.subjects[i].titleId : data.subjects[i].titleEn}</h2>
						</a>
					</div>
				`;

				container.innerHTML += card;
			}
		}
	);
}
