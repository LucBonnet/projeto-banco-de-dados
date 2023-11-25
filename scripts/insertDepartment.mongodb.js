use('cc6240');

db.department.deleteMany({});

db.department.insertMany(
  [{
    "_id": ObjectId("655bbdcbbb1f6f86f279fa0b"),
    "dept_name": "Biology",
    "building": "Watson",
    "budget": 90000
  },
  {
    "_id": ObjectId("655bbdcbbb1f6f86f279fa0c"),
    "dept_name": "Comp. Sci.",
    "building": "Taylor",
    "budget": 100000
  },
  {
    "_id": ObjectId("655bbdcbbb1f6f86f279fa0d"),
    "dept_name": "Elec. Eng.",
    "building": "Taylor",
    "budget": 85000
  },
  {
    "_id": ObjectId("655bbdcbbb1f6f86f279fa0e"),
    "dept_name": "Finance",
    "building": "Painter",
    "budget": 120000
  },
  {
    "_id": ObjectId("655bbdcbbb1f6f86f279fa0f"),
    "dept_name": "History",
    "building": "Painter",
    "budget": 50000
  },
  {
    "_id": ObjectId("655bbdcbbb1f6f86f279fa10"),
    "dept_name": "Music",
    "building": "Packard",
    "budget": 80000
  },
  {
    "_id": ObjectId("655bbdcbbb1f6f86f279fa11"),
    "dept_name": "Physics",
    "building": "Watson",
    "budget": 70000
  }]
);


db.department.find({})