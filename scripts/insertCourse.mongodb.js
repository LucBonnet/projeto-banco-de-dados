use("cc6240")

db.course.deleteMany({})

db.course.insertMany(
  [{
    "_id": ObjectId("655bc135bb1f6f86f279fa2a"),
    "id": "BIO-101",
    "title": "Intro. to Biology",
    "dept_name": "Biology",
    "credits": 4,
    "prereq": null
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa2b"),
    "id": "BIO-301",
    "title": "Genetics",
    "dept_name": "Biology",
    "credits": 4,
    "prereq": "BIO-101"
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa2c"),
    "id": "BIO-399",
    "title": "Computational Biology",
    "dept_name": "Biology",
    "credits": 3,
    "prereq": "BIO-101"
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa2d"),
    "id": "CS-101",
    "title": "Intro. to Computer Science",
    "dept_name": "Comp. Sci.",
    "credits": 4,
    "prereq": null
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa2e"),
    "id": "CS-190",
    "title": "Game Design",
    "dept_name": "Comp. Sci.",
    "credits": 4,
    "prereq": "CS-101"
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa2f"),
    "id": "CS-315",
    "title": "Robotics",
    "dept_name": "Comp. Sci.",
    "credits": 3,
    "prereq": "CS-101"
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa30"),
    "id": "CS-319",
    "title": "Image Processing",
    "dept_name": "Comp. Sci.",
    "credits": 3,
    "prereq": "CS-101"
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa31"),
    "id": "CS-347",
    "title": "Database System Concepts",
    "dept_name": "Comp. Sci.",
    "credits": 3,
    "prereq": "CS-101"
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa32"),
    "id": "EE-181",
    "title": "Intro. to Digital Systems",
    "dept_name": "Elec. Eng.",
    "credits": 3,
    "prereq": "PHY-101"
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa33"),
    "id": "FIN-201",
    "title": "Investment Banking",
    "dept_name": "Finance",
    "credits": 3,
    "prereq": null
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa34"),
    "id": "HIS-351",
    "title": "World History",
    "dept_name": "History",
    "credits": 3,
    "prereq": null
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa35"),
    "id": "MU-199",
    "title": "Music Video Production",
    "dept_name": "Music",
    "credits": 3,
    "prereq": null
  },
  {
    "_id": ObjectId("655bc135bb1f6f86f279fa36"),
    "id": "PHY-101",
    "title": "Physical Principles",
    "dept_name": "Physics",
    "credits": 4,
    "prereq": null
  }]
);

db.course.find({});