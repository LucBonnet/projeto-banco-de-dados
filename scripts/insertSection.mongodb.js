use('cc6240');

db.section.deleteMany({});

db.section.insertMany(
  [{
    "_id": ObjectId("655bc787bb1f6f86f279fa3c"),
    "course_id": "BIO-101",
    "sec_id": "1",
    "semester": "Summer",
    "year": 2017,
    "building": "Painter",
    "room_number": 514,
    "time_slot": "B"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa3d"),
    "course_id": "BIO-301",
    "sec_id": "1",
    "semester": "Summer",
    "year": 2018,
    "building": "Painter",
    "room_number": 514,
    "time_slot": "A"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa3e"),
    "course_id": "CS-101",
    "sec_id": "1",
    "semester": "Fall",
    "year": 2017,
    "building": "Packard",
    "room_number": 101,
    "time_slot": "H"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa3f"),
    "course_id": "CS-101",
    "sec_id": "1",
    "semester": "Spring",
    "year": 2018,
    "building": "Packard",
    "room_number": 101,
    "time_slot": "F"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa40"),
    "course_id": "CS-190",
    "sec_id": "1",
    "semester": "Spring",
    "year": 2017,
    "building": "Taylor",
    "room_number": 3128,
    "time_slot": "E"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa41"),
    "course_id": "CS-190",
    "sec_id": "2",
    "semester": "Spring",
    "year": 2017,
    "building": "Taylor",
    "room_number": 3128,
    "time_slot": "A"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa42"),
    "course_id": "CS-315",
    "sec_id": "1",
    "semester": "Spring",
    "year": 2018,
    "building": "Watson",
    "room_number": 120,
    "time_slot": "D"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa43"),
    "course_id": "CS-319",
    "sec_id": "1",
    "semester": "Spring",
    "year": 2018,
    "building": "Watson",
    "room_number": 100,
    "time_slot": "B"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa44"),
    "course_id": "CS-319",
    "sec_id": "2",
    "semester": "Spring",
    "year": 2018,
    "building": "Taylor",
    "room_number": 3128,
    "time_slot": "C"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa45"),
    "course_id": "CS-347",
    "sec_id": "1",
    "semester": "Fall",
    "year": 2017,
    "building": "Taylor",
    "room_number": 3128,
    "time_slot": "A"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa46"),
    "course_id": "EE-181",
    "sec_id": "1",
    "semester": "Spring",
    "year": 2017,
    "building": "Taylor",
    "room_number": 3128,
    "time_slot": "C"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa47"),
    "course_id": "FIN-201",
    "sec_id": "1",
    "semester": "Spring",
    "year": 2018,
    "building": "Packard",
    "room_number": 101,
    "time_slot": "B"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa48"),
    "course_id": "HIS-351",
    "sec_id": "1",
    "semester": "Spring",
    "year": 2018,
    "building": "Painter",
    "room_number": 514,
    "time_slot": "C"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa49"),
    "course_id": "MU-199",
    "sec_id": "1",
    "semester": "Spring",
    "year": 2018,
    "building": "Packard",
    "room_number": 101,
    "time_slot": "C"
  },
  {
    "_id": ObjectId("655bc787bb1f6f86f279fa4a"),
    "course_id": "PHY-101",
    "sec_id": "1",
    "semester": "Fall",
    "year": 2017,
    "building": "Watson",
    "room_number": 100,
    "time_slot": "A"
  }]
);


db.section.find({})