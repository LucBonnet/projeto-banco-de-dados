use('cc6240');

db.student.deleteMany({});

db.student.insertMany(
  [
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9db"),
      "name": "Zhang",
      "dept_name": "Comp. Sci.",
      "tot_cred": 102,
      "advisor": ObjectId("655ba06dbd7f6680bc2310bc"),
      "takes": [
        {
          "course_id": "CS-101",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "A"
        },
        {
          "course_id": "CS-347",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "A-"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9dc"),
      "name": "Shankar",
      "dept_name": "Comp. Sci.",
      "tot_cred": 32,
      "advisor": ObjectId("655ba06dbd7f6680bc2310bc"),
      "takes": [
        {
          "course_id": "CS-101",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "C"
        },
        {
          "course_id": "CS-190",
          "sec_id": "2",
          "semester": "Spring",
          "year": 2017,
          "grade": "A"
        },
        {
          "course_id": "CS-315",
          "sec_id": "1",
          "semester": "Spring",
          "year": 2018,
          "grade": "A"
        },
        {
          "course_id": "CS-347",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "A"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9dd"),
      "name": "Brandt",
      "dept_name": "History",
      "tot_cred": 80,
      "advisor": null,
      "takes": [
        {
          "course_id": "HIS-351",
          "sec_id": "1",
          "semester": "Spring",
          "year": 2018,
          "grade": "B"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9de"),
      "name": "Chavez",
      "dept_name": "Finance",
      "tot_cred": 110,
      "advisor": ObjectId("655ba06dbd7f6680bc2310c4"),
      "takes": [
        {
          "course_id": "FIN-201",
          "sec_id": "1",
          "semester": "Spring",
          "year": 2018,
          "grade": "C+"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9df"),
      "name": "Peltier",
      "dept_name": "Physics",
      "tot_cred": 56,
      "advisor": ObjectId("655ba06dbd7f6680bc2310bf"),
      "takes": [
        {
          "course_id": "PHY-101",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "B-"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9e0"),
      "name": "Levy",
      "dept_name": "Physics",
      "tot_cred": 46,
      "advisor": ObjectId("655ba06dbd7f6680bc2310bf"),
      "takes": [
        {
          "course_id": "CS-101",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "F"
        },
        {
          "course_id": "CS-101",
          "sec_id": "1",
          "semester": "Spring",
          "year": 2018,
          "grade": "B+"
        },
        {
          "course_id": "CS-319",
          "sec_id": "1",
          "semester": "Spring",
          "year": 2018,
          "grade": "B"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9e1"),
      "name": "Williams",
      "dept_name": "Comp. Sci.",
      "tot_cred": 54,
      "advisor": null,
      "takes": [
        {
          "course_id": "CS-101",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "A-"
        },
        {
          "course_id": "CS-190",
          "sec_id": "2",
          "semester": "Spring",
          "year": 2017,
          "grade": "B+"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9e2"),
      "name": "Sanchez",
      "dept_name": "Music",
      "tot_cred": 38,
      "advisor": null,
      "takes": [
        {
          "course_id": "MU-199",
          "sec_id": "1",
          "semester": "Spring",
          "year": 2018,
          "grade": "A-"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9e3"),
      "name": "Snow",
      "dept_name": "Physics",
      "tot_cred": 0,
      "advisor": null,
      "takes": []
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9e4"),
      "name": "Brown",
      "dept_name": "Comp. Sci.",
      "tot_cred": 58,
      "advisor": ObjectId("655ba06dbd7f6680bc2310c2"),
      "takes": [
        {
          "course_id": "CS-101",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "A"
        },
        {
          "course_id": "CS-319",
          "sec_id": "2",
          "semester": "Spring",
          "year": 2018,
          "grade": "A"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9e5"),
      "name": "Aoi",
      "dept_name": "Elec. Eng.",
      "tot_cred": 60,
      "advisor": ObjectId("655ba06dbd7f6680bc2310c7"),
      "takes": [
        {
          "course_id": "EE-181",
          "sec_id": "1",
          "semester": "Spring",
          "year": 2017,
          "grade": "C"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9e6"),
      "name": "Bourikas",
      "dept_name": "Elec. Eng.",
      "tot_cred": 98,
      "advisor": ObjectId("655ba06dbd7f6680bc2310c7"),
      "takes": [
        {
          "course_id": "CS-101",
          "sec_id": "1",
          "semester": "Fall",
          "year": 2017,
          "grade": "C-"
        },
        {
          "course_id": "CS-315",
          "sec_id": "1",
          "semester": "Spring",
          "year": 2018,
          "grade": "B"
        }
      ]
    },
    {
      "_id": ObjectId("655baae9bb1f6f86f279f9e7"),
      "name": "Tanaka",
      "dept_name": "Biology",
      "tot_cred": 120,
      "advisor": ObjectId("655ba06dbd7f6680bc2310c5"),
      "takes": [
        {
          "course_id": "BIO-101",
          "sec_id": "1",
          "semester": "Summer",
          "year": 2017,
          "grade": "A"
        },
        {
          "course_id": "BIO-301",
          "sec_id": "1",
          "semester": "Summer",
          "year": 2018,
          "grade": null
        }
      ]
    }
  ]
);


db.student.find({})