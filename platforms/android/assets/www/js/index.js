console.log('The sample page has loaded!');
function intenseLog() {
    for (var i = 0; i < 500; i++) {
        console.log('hey ' + i + ' !');
    }
}
function oupsss() {
    var test = null;
    test.someValue = "will cause error...";
}
var SampleObjBase = function () {
};
SampleObjBase.prototype.someFunction = function (dummy) {
};
var SampleObj = function (name) {
    this.objname = name;
};
SampleObj.prototype = new SampleObjBase();
SampleObj.prototype.anotherFunction = function (dummy) {
};
window.samplePageObjectTest = new SampleObj('a test for object description');
window.samplePageObjectTest.testForArray = [1, 2, 3, 4, 5, 6];
window.samplePageObjectTest.captainAge = 42;
window.samplePageObjectTest.child = new SampleObj('another test for nested objects');