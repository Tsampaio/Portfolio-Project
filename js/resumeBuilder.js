var bio = {
	"name" : "Telmo Sampaio",
	"role" : "Front End Developer",
	"welcomeMessage" : "I'm a student from the Udacity Nanodegree Front End Developement. This is my online resume project where you can find some information about me and the projects that I'm currently working on.", 
	"image" : "images/ts.jpg",
	"contacts" : [{
		"mobile" : "07852726903",
		"skype" : "telmo.sampaio", 
		"location" : "Manchester",
		"email" : "telmoasampaio@gmail.com"
	}],	
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
	"project" : [{
		"title" : "Portfolio Website",
		"dates" : "2016", 
		"description" : "Build a professional and responsive Portfolio Website", 
		"images" : ["images/project1.jpg"]
	},
	{
		"title" : "Online Resume",
		"dates" : "2016", 
		"description" : "Build a professional and responsive Portfolio Website", 
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "University of Coimbra",
		"location" : "Coimbra",
		"degree" : "Masters", 
		"majors" : "Civil Engineering",
		"dates" : "2005 - 2013",
		"url" : "http://www.dec.uc.pt"
	}
	],

	"onlineCourses" : [
	{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2016",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Front-End Web Developer",
		"school" : "Teamtreehouse",
		"dates" : "2015",
		"url" : "https://www.teamtreehouse.com"
	}
	]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedImage).append(formattedName,formattedRole);
	$(".about-me").append(formattedMessage);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$(".skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype: ").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {

	$("#education").append(HTMLschoolStart);
	$("#education").append(HTMLonlineClasses);

	for(school in education.schools) {
		
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

	for(school in education.onlineCourses) {
		
		
		var onlineName = HTMLonlineSchool.replace("%data%",education.onlineCourses[school].school);
		var onlineDegree = HTMLonlineTitle.replace("%data%",education.onlineCourses[school].title);
		var onlinedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[school].dates);
		var onlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[school].url);
		
		$("#education").append(onlineDegree + onlineName, onlinedDates);
	}
};


work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		

		
	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);