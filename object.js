var person = {
    name: 'Dhirendra Kumar Prajapati',
    language: ['HTML', 'CSS', 'JS', 'Angular'],
    editor: {
        beginner: 'Notepad++',
        intermideate: ['Sublime', 'brackets'],
        expert: ['Atom', 'Webstorm', 'VS Code'],
        personalFavorate: 'VS Code'
    },
    workingOn: 'Ionic 4',
    target: ['Semantic UI', 'Angualar 8']
};
person.intro = function() {alert('Hi Amigoes')};
person.companyName = 'Unvired';
person['designation'] = 'Software Engineer';
person['likeToKnow'] = ['MongoDB', 'ExpressJS', 'Angular', 'NodeJS'];
person.wannaBe = 'Full Stack Developer';
person['aim'] = {};
person['aim']['startFrom'] = 'Angular 8';
person.aim['andThen'] = 'NodeJS';
person['aim'].thenTargetTo = {};
person['aim'].thenTargetTo[1] = 'Mongo DB';
person['aim']['thenTargetTo'][2] = 'ExpressJS';
person['aim']['becomeMaster'] = 'MEAN';
person['farewell'] = function() {alert('Aasta lavista everyone')}

console.log('Person info: ', person);


// The 'this' keyword refers to the current object the code is being written inside — so in this case 'this' is equivalent to person.
var person1 = {
    name: 'Bailley',
    greetings: function() {alert("Hey I'm " + this.name + '.')}
}
var person2 = {
    name: 'MI',
    greetings: function() {alert("Hey I'm " + this.name +'.')}
}
// person1.greetings();
// person2.greetings();

// Browser APIs |Notification|
var notification = new Notification('Hello');
console.log('Notification: ', notification);