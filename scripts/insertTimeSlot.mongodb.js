use('cc6240');

db.time_slot.deleteMany({});

db.time_slot.insertMany(
  [{
    "_id": ObjectId("655bcfd0bb1f6f86f279fa57"),
    "id": "A",
    "day": "M",
    "start_hr": 8,
    "start_min": 0,
    "end_hr": 8,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa58"),
    "id": "A",
    "day": "W",
    "start_hr": 8,
    "start_min": 0,
    "end_hr": 8,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa59"),
    "id": "A",
    "day": "F",
    "start_hr": 8,
    "start_min": 0,
    "end_hr": 8,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa5a"),
    "id": "B",
    "day": "M",
    "start_hr": 9,
    "start_min": 0,
    "end_hr": 9,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa5b"),
    "id": "B",
    "day": "W",
    "start_hr": 9,
    "start_min": 0,
    "end_hr": 9,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa5c"),
    "id": "B",
    "day": "F",
    "start_hr": 9,
    "start_min": 0,
    "end_hr": 9,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa5d"),
    "id": "C",
    "day": "M",
    "start_hr": 11,
    "start_min": 0,
    "end_hr": 11,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa5e"),
    "id": "C",
    "day": "W",
    "start_hr": 11,
    "start_min": 0,
    "end_hr": 11,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa5f"),
    "id": "C",
    "day": "F",
    "start_hr": 11,
    "start_min": 0,
    "end_hr": 11,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa60"),
    "id": "D",
    "day": "M",
    "start_hr": 13,
    "start_min": 0,
    "end_hr": 13,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa61"),
    "id": "D",
    "day": "W",
    "start_hr": 13,
    "start_min": 0,
    "end_hr": 13,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa62"),
    "id": "D",
    "day": "F",
    "start_hr": 13,
    "start_min": 0,
    "end_hr": 13,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa63"),
    "id": "E",
    "day": "T",
    "start_hr": 10,
    "start_min": 30,
    "end_hr": 11,
    "end_min": 45
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa64"),
    "id": "E",
    "day": "R",
    "start_hr": 10,
    "start_min": 30,
    "end_hr": 11,
    "end_min": 45
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa65"),
    "id": "F",
    "day": "T",
    "start_hr": 14,
    "start_min": 30,
    "end_hr": 15,
    "end_min": 45
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa66"),
    "id": "F",
    "day": "R",
    "start_hr": 14,
    "start_min": 30,
    "end_hr": 15,
    "end_min": 45
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa67"),
    "id": "G",
    "day": "M",
    "start_hr": 16,
    "start_min": 0,
    "end_hr": 16,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa68"),
    "id": "G",
    "day": "W",
    "start_hr": 16,
    "start_min": 0,
    "end_hr": 16,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa69"),
    "id": "G",
    "day": "F",
    "start_hr": 16,
    "start_min": 0,
    "end_hr": 16,
    "end_min": 50
  },
  {
    "_id": ObjectId("655bcfd0bb1f6f86f279fa6a"),
    "id": "H",
    "day": "W",
    "start_hr": 10,
    "start_min": 0,
    "end_hr": 12,
    "end_min": 30
  }]
);


db.time_slot.find({})