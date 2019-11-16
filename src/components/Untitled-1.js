const employeeList = [
  {
    id: "v001",
    name: "Thu Wai Naing",
    experience: 4,
    salary: 1500000,
    gender: "male"
  },
  {
    id: "v002",
    name: "Yae Linn Htet",
    experience: 3,
    salary: 1200000,
    gender: "male"
  },
  {
    id: "v003",
    name: "Nyan Lynn Tun",
    experience: 3,
    salary: 1100000,
    gender: "male"
  },
  {
    id: "v004",
    name: "Aung Min Khant Oo",
    experience: 1,
    salary: 1000000,
    gender: "male"
  },
  {
    id: "v005",
    name: "Chit Hsu Thway",
    experience: 2,
    salary: 1100000,
    gender: "female"
  },
  {
    id: "v006",
    name: "Hein Zayar Htet",
    experience: 2,
    salary: 1000000,
    gender: "male"
  },
  {
    id: "v007",
    name: "Kaung Satt Hein",
    experience: 3,
    salary: 1100000,
    gender: "male"
  },
  {
    id: "v008",
    name: "Nyein Chan Oo",
    experience: 1,
    salary: 900000,
    gender: "male"
  },
  {
    id: "v009",
    name: "Phyo Wai Nyunt",
    experience: 4,
    salary: 1400000,
    gender: "male"
  },
  {
    id: "v0010",
    name: "Thiha Thuta Aung",
    experience: 2,
    salary: 1000000,
    gender: "male"
  },
  {
    id: "v0012",
    name: "Thu Kha",
    experience: 1,
    salary: 1000000,
    gender: "male"
  },
  {
    id: "v0013",
    name: "Zay Yar Htun",
    experience: 3,
    salary: 1300000,
    gender: "male"
  }
];
let result = employeeList.filter(item => {
  item.experience == 3 && item.salary >= 1100000;
  return item;
});
console.log(result);
