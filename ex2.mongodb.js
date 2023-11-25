use('cc6240');

db.instructor.aggregate([
  {
    $unwind: {
      path: "$teaches",
      preserveNullAndEmptyArrays: false
    }
  },
  {
    $lookup: {
      from: "section",
      localField: "teaches.sec_id",
      foreignField: "sec_id",
      as: "sections"
    }
  },
  {
    $unwind: {
      path: "$sections",
      preserveNullAndEmptyArrays: false
    }
  },
  {
    $project: {
      _id: "$_id",
      values: {
        name: "$name",
        building: "$sections.building",
        room_number: "$sections.room_number"
      }
    }
  },
  {
    $group: {
      _id: "$values",
      id: {$first: "$_id"}
    }
  },
  {
    $project: {
      _id: "$id",
      name: "$_id.name",
      building: "$_id.building",
      room_number: "$_id.room_number",
    }
  },
])
