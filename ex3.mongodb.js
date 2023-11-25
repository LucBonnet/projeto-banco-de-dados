use('cc6240');

db.department.aggregate([
  {
    $lookup: {
      from: "student",
      localField: "dept_name",
      foreignField: "dept_name",
      as: "students"
    }
  }, 
  {
    $lookup: {
      from: "instructor",
      localField: "dept_name",
      foreignField: "dept_name",
      as: "instructors"
    }
  },
  {
    $unwind: "$instructors"
  }, 
  {
    $group: {
      _id: "$_id",
      instructors: {
        $avg: "$instructors.salary"
      },
      dept_name: {
        $first: "$dept_name"
      },
      budget: {
        $first: "$budget"
      },
      students: {
        $first: "$students"
      },
    }
  },
  {
    $project: {
      dept_name: "$dept_name",
      budget: "$budget",
      students: {
        $size: "$students"
      },
      avg_salary: "$instructors"
    }
  },
])