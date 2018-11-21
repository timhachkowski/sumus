var form = document.forms.info;
var values = ["name", "position", "phone", "email", "promo", "link"];
var User = {};

function doc(x) {
  return document.getElementById(x)
}

function getname(name) {
  for (var i = 0; i < name.length; i++) {
    if (name[i] == " ") {
      var fname = name.slice(0,i);
      User.fname = fname;
    }
  }
}

function updatelinks(){
  doc('email').href = "mailto:" + User.email+'?subject=Just Reaching Out&body=Hello '+User.fname
  +',';
  doc('phone').href = "tel:" + User.phone;
  doc('promo').href = User.link;
}

function generate() {
  for (let i = 0; i < values.length; i++) {
    User[values[i]] = form[values[i]].value;
    doc(values[i]).innerHTML = User[values[i]];
    if (values[i] == 'phone') {
        var area = User.phone.slice(0,3);
        var x = User.phone.slice(3,6);
        var y = User.phone.slice(6,10);
        doc('phone').innerHTML = '1.'+ area + '.'+x+'.'+y
    }
    getname(User.name);
    updatelinks();
  }
}
