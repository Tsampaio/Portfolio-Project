var bio = {
	"name" : "Telmo Sampaio",
	"role" : "Front End Developer",
	"welcomeMessage" : "I'm a student from the Udacity Nanodegree Front End Developement. "
	+ "This is my online resume project where you can find some information about me and the projects that I'm currently working on.",
	"biopic" : "images/ts2.jpg",
	"contacts" : {
		"mobile" : "07852726903",
		"email" : "telmoasampaio@gmail.com",
		"github" : "https://github.com/Tsampaio",
		"location" : "Manchester United Kingdom",
		"skype" : "telmo.sampaio"
	},
	"skills" : ["HTML","CSS","JQUERY","PHP"]
};

var work = {
	"jobs" : [
	{
		"employer" : "Udacity",
		"title" : "Web-developer",
		"dates" : "2016",
		"location" : "Online",
		"description" : "Develop and mantain responsive websites"
	},
	{
		"employer" : "Pret A Manger",
		"title" : "Team Leader",
		"dates" : "2013 - 2016",
		"location" : "Manchester",
		"description" : "Responsible to manage stock, balance waste and Increase sales"
	}]
};

var projects = {
	"projects" : [{
		"title" : "Portfolio Website",
		"dates" : "2016",
		"description" : "Build a professional and responsive Portfolio Website",
		"images" : ["images/project1.jpg"]
	},
	{
		"title" : "Online Resume",
		"dates" : "2016",
		"description" : "Build a professional and responsive Portfolio Website",
		"images" : ["images/project2.jpg"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "University of Coimbra",
		"location" : "Coimbra",
		"degree" : "Masters",
		"majors" : ["Civil Engineering"],
		"dates" : "2005 - 2013",
		"url" : "http://www.dec.uc.pt"
	}
	],

	"onlineCourses" : [
	{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : "2016",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Front-End Web Developer",
		"school" : "Teamtreehouse",
		"date" : "2015",
		"url" : "https://www.teamtreehouse.com"
	}
	]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedImage).append(formattedName,formattedRole);
	$(".about-me").append(formattedMessage);

	bio.skills.forEach( function(skill) {
    	var formattedSkills = HTMLskills.replace("%data%",skill);
		$(".skills").append(formattedSkills);
   });

    	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype: ").replace("%data%",bio.contacts.skype);
		var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype,formattedGitHub,formattedLocation);
   		$(".contacts").append(formattedMobile,formattedEmail,formattedSkype,formattedGitHub,formattedLocation);
};


education.display = function() {

	$("#education").append(HTMLschoolStart);
	$("#education").append(HTMLonlineClasses);

	for (var i=0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
   }

	for (i=0; i < education.onlineCourses.length; i++) {

		var onlineName = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		var onlineDegree = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		var onlinedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].date);
		var onlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);

		$("#education").append(onlineDegree + onlineName, onlinedDates, onlineUrl);
	}
};


work.display = function() {

	$("#workExperience").append(HTMLworkStart);

	for (var i=0; i < work.jobs.length; i++) {
       	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription, formattedLocation);
	}
};


projects.display = function(){

	$("#projects").append(HTMLprojectStart);

	for (var i=0; i < projects.projects.length; i++) {

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[0]);

		$(".project-entry:last").append(formattedImage, formattedTitle,formattedDates,formattedDescription);
	}

};


function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
}


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$('#mapDiv').append(googleMap);