mongosh> use StudentDB
switched to db StudentDB


StudentDB> db.createCollection("students")
{ ok: 1 }


StudentDB> show collections
students


StudentDB> show dbs
EmployeeDB  56.00 KiB
StudentDB    8.00 KiB
admin       40.00 KiB
collegeDB    8.00 KiB
config      36.00 KiB
database    72.00 KiB
local       72.00 KiB


StudentDB> db.students.insertMany([
|     {
|         name: "Rahul",
|         age: 21,
|         course: "CSE",
|         city: "Delhi"
|     },
|     {
|         name: "Aman",
|         age: 19,
|         course: "ECE",
|         city: "Noida"
|     },
|     {
|         name: "Priya",
|         age: 22,
|         course: "CSE",
|         city: "Ghaziabad"
|     },
|     {
|         name: "Rohit",
|         age: 20,
|         course: "IT",
|         city: "Meerut"
|     },
|     {
|         name: "Sneha",
|         age: 23,
|         course: "CSE",
|         city: "Delhi"
|     }
| ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6b02c5303b62383d6cfff7e2'),
    '1': ObjectId('6b02c5303b62383d6cfff7e3'),
    '2': ObjectId('6b02c5303b62383d6cfff7e4'),
    '3': ObjectId('6b02c5303b62383d6cfff7e5'),
    '4': ObjectId('6b02c5303b62383d6cfff7e6')
  }
}

<!--  the Output after inserting the students data -->

StudentDB> db.students.find()
[
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e2'),
    name: 'Rahul',
    age: 21,
    course: 'CSE',
    city: 'Delhi'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e3'),
    name: 'Aman',
    age: 19,
    course: 'ECE',
    city: 'Noida'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e4'),
    name: 'Priya',
    age: 22,
    course: 'CSE',
    city: 'Ghaziabad'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e5'),
    name: 'Rohit',
    age: 20,
    course: 'IT',
    city: 'Meerut'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e6'),
    name: 'Sneha',
    age: 23,
    course: 'CSE',
    city: 'Delhi'
  }
]


<!-- With the help of this Command we can find the Student who is above 20 -->
StudentDB> db.students.find({
|     age: { $gt: 20 }
| });
[
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e2'),
    name: 'Rahul',
    age: 21,
    course: 'CSE',
    city: 'Delhi'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e4'),
    name: 'Priya',
    age: 22,
    course: 'CSE',
    city: 'Ghaziabad'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e6'),
    name: 'Sneha',
    age: 23,
    course: 'CSE',
    city: 'Delhi'
  }
]


<!--  This helps us to update any entry in the student database -->
StudentDB> db.students.updateOne(
|     { name: "Rahul" },
|     { $set: { age: 24 } }
| );
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}



StudentDB> db.students.findOne({ name: "Rahul" });
{
  _id: ObjectId('6b02c5303b62383d6cfff7e2'),
  name: 'Rahul',
  age: 24,
  course: 'CSE',
  city: 'Delhi'
}


<!-- This command help us to delete any entry from the student database -->
StudentDB> db.students.deleteOne({
|     name: "Aman"
| });
{ acknowledged: true, deletedCount: 1 }



StudentDB> db.students.find()
[
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e2'),
    name: 'Rahul',
    age: 24,
    course: 'CSE',
    city: 'Delhi'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e4'),
    name: 'Priya',
    age: 22,
    course: 'CSE',
    city: 'Ghaziabad'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e5'),
    name: 'Rohit',
    age: 20,
    course: 'IT',
    city: 'Meerut'
  },
  {
    _id: ObjectId('6b02c5303b62383d6cfff7e6'),
    name: 'Sneha',
    age: 23,
    course: 'CSE',
    city: 'Delhi'
  }
]