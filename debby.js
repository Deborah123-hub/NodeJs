var Student = [{
        name: "Oyekale Tosin",
        age: 22,
        address: "Faringada",
        tribe: "Yoruba",
        gender: "female",
        Height: 1.00,
        department: "CSC",
        level: 300,
        grade: [60, 70, 90, 90, 100]
    },
    {
        name: "kaslong Kevin",
        age: 22,
        address: "Twad",
        tribe: "Gomai",
        gender: "male",
        Height: 1.60,
        department: "CSC",
        level: 200,
        grade: [60, 70, 9, 90, 100]
    },
    {
        name: "Mark Adams",
        age: 26,
        address: "Rukuba Road",
        tribe: "Idoma",
        gender: "male",
        Height: 1.65,
        department: "CSC",
        level: 300,
        grade: [50, 70, 80, 90, 100]
    },
    {
        name: "Elizabeth John",
        age: 26,
        address: "Salama Hostel",
        tribe: "ibibo",
        gender: "female",
        Height: 1.50,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 90, 100]
    },
    {
        name: "Susan Owoicho",
        age: 19,
        address: "Salama Hostel",
        tribe: "Idoma",
        gender: "female",
        Height: 1.65,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 90, 100]
    },
    {
        name: "Yada Martins",
        age: 23,
        address: "Village Hostel",
        tribe: "^Kagoro",
        Height: 1.75,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 80, 100]
    },
    {
        name: "Ifeoma Ibedu",
        age: 24,
        address: "Angwa Rukuba",
        tribe: "Igbo",
        gender: "female",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 40, 50, 90, 100]
    },
    {
        name: "Peter Temitope Asalu",
        age: 25,
        address: "Celebridge",
        tribe: "Yagba",
        gender: "male",
        Height: 1.80,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 70, 100]
    },
    {
        name: "Awari Yohanna Duada",
        age: 27,
        address: "Angwa Rukuba",
        tribe: "Afizare",
        gender: "male",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 80, 90]
    },
    {
        name: "Josephine Sunday",
        age: 23,
        address: "Odus",
        tribe: "Eggon",
        gender: "female",
        Height: 1.50,
        department: "CSC",
        level: 300,
        grade: [30, 50, 50, 90, 100]
    },
    {
        name: "Nanbal Moses Kundam",
        age: 26,
        address: "Federal locust",
        tribe: "Mupun",
        gender: "male",
        Height: 1.65,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 100, 100]
    },
    {
        name: "Victoria Bok",
        age: 22,
        address: "Oduns",
        tribe: "Berom",
        gender: "female",
        Height: 1.32,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 90, 100]
    },
    {
        name: "Yusuf Paul Osanga",
        age: 22,
        address: "Rayfield",
        tribe: "Berom",
        gender: "male",
        Height: 1.60,
        department: "CSC",
        level: 400,
        grade: [30, 70, 80, 90, 100]
    },
    {
        name: "Bamigboye Christiana Temitope",
        age: 23,
        address: "Village Hostel",
        tribe: "Yoruba",
        gender: "female",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 60, 80, 90, 100]
    },
    {
        name: "Job Gift Elejo",
        age: 24,
        address: "Village Hostel",
        tribe: "Igala",
        gender: "female",
        Height: 1.60,
        department: "CSC",
        level: 300,
        grade: [30, 40, 50, 90, 100]
    },
    {
        name: "Musa Deborah Kibba",
        age: 21,
        address: "Oduns",
        tribe: "Amo",
        gender: "female",
        Height: 1.55,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 80, 100]
    },
    {
        name: "Joy Ohue Osedebamen",
        age: 20,
        address: "Oduns",
        tribe: "Idoma",
        gender: "female",
        Height: 1.40,
        department: "CSC",
        level: 300,
        grade: [30, 40, 60, 90, 100]
    },
    {
        name: "Ponfa Micheal",
        age: 22,
        address: "Oduns",
        tribe: "Tarok",
        gender: "male",
        Height: 1.20,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 90, 100]
    },
    {
        name: "Mabas Maryam",
        age: 20,
        address: "PTS, Jos",
        tribe: "Challa",
        gender: "female",
        Height: 1.60,
        department: "CSC",
        level: 200,
        grade: [30, 40, 80, 90, 100]
    },
    {
        name: "Uzaifat Ibrahim",
        age: 24,
        address: "Dodo street Jos",
        tribe: "Magwavul",
        gender: "female",
        Height: 1.30,
        department: "CSC",
        level: 300,
        grade: [30, 40, 80, 90, 100]
    }
];

var allColleagues = Student.filter((mate)=> mate);
console.log("The output of all the students is");
console.log(allColleagues);
console.log("\n\n");
//get the miximum Height of the person
a = 0;
var mates = Student.filter(function(values) {
    if (a < values.Height) {
        a = values.Height;
    }
});

//get the full details of the person with max height
var result = Student.filter(function(data) {
    if (data.Height == a) {

        return data;
        
    }

});

console.log("The tallest student is ");
console.log(result);
console.log("\n\n");
console.log("\n\n");

function avg(arr) {
    var num = 0;
    for (var index = 0; index < arr.length; index++) {
        num = num + arr[index];
    }
    return num / arr.length;
}

var b = 0;
var v;
Student.forEach(function(item, index, data) {

    if (b < avg(item.grade)){
        b = avg(item.grade);
        v = index;
       // console.log(data[index]);

    }


});
console.log("The student with the highest height is ");
console.log(Student[v]);