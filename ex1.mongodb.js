use('cc6240');

db.student.aggregate([
  {
    $lookup: {
      from: "instructor",
      localField: "advisor",
      foreignField: "_id",
      as: "advisor"
    }
  },
  {
    $unwind: "$takes"
  },
  {
    $unwind: "$advisor"
  }, 
  {
    $unwind: "$advisor.teaches"
  }, 
  {
    $match: {
      $expr: {
        $eq: [
          "$advisor.teaches.course_id", 
          "$takes.course_id"
        ]
      }
    }
  }, 
  {
    $lookup: {
      from: "course",
      localField: "takes.course_id",
      foreignField: "id",
      as: "course"
    }
  },
  {
    $unwind: "$course"
  },
  {
    $project: {
      student_name: "$name",
      instructor_name: "$advisor.name",
      course_title: "$course.title"
    }
  },
  {
    $sort: {
      student_name: 1
    }
  }
])