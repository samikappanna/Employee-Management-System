const employees = [
  {
      "Id": 1,
      "firstName": "Alice",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Prepare monthly report",
              "description": "Compile and analyze monthly sales data.",
              "date": "2024-10-01",
              "category": "Reporting"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Update client database",
              "description": "Review and update client contact information.",
              "date": "2024-09-15",
              "category": "Database"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "title": "Schedule team training",
              "description": "Organize training sessions for the new software update.",
              "date": "2024-10-08",
              "category": "Training"
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "Id": 2,
      "firstName": "Bob",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Organize team meeting",
              "description": "Arrange meeting with project stakeholders.",
              "date": "2024-09-20",
              "category": "Meetings"
          },
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Submit project proposal",
              "description": "Draft and submit a new project proposal.",
              "date": "2024-10-05",
              "category": "Project Management"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "title": "Conduct project review",
              "description": "Review project goals and timelines with team.",
              "date": "2024-10-12",
              "category": "Project Review"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Client follow-up",
              "description": "Follow up with clients on recent project feedback.",
              "date": "2024-09-30",
              "category": "Client Relations"
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 2,
          "failed": 0
      }
  },
  {
      "Id": 3,
      "firstName": "Charlie",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": true,
              "title": "Fix software bugs",
              "description": "Resolve critical issues in client software.",
              "date": "2024-10-07",
              "category": "Development"
          },
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Design UI mockups",
              "description": "Create mockups for the client portal.",
              "date": "2024-10-09",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "title": "Implement feedback system",
              "description": "Integrate feedback system for project reviews.",
              "date": "2024-10-10",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Set up test environment",
              "description": "Create a staging area for client testing.",
              "date": "2024-10-15",
              "category": "Testing"
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 2
      }
  },
  {
      "Id": 4,
      "firstName": "Diana",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Audit financial records",
              "description": "Review and audit all Q3 financial records.",
              "date": "2024-10-10",
              "category": "Finance"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Update payroll",
              "description": "Ensure payroll information is accurate.",
              "date": "2024-09-28",
              "category": "HR"
          },
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Organize team outing",
              "description": "Plan and organize team-building outing.",
              "date": "2024-10-20",
              "category": "HR"
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "Id": 5,
      "firstName": "Ethan",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Customer feedback analysis",
              "description": "Analyze feedback received from recent survey.",
              "date": "2024-10-15",
              "category": "Customer Support"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Prepare training module",
              "description": "Develop a new training module for the sales team.",
              "date": "2024-09-30",
              "category": "Training"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "title": "Handle customer complaints",
              "description": "Manage and resolve recent complaints.",
              "date": "2024-10-13",
              "category": "Customer Support"
          },
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Research market trends",
              "description": "Study recent trends in customer demand.",
              "date": "2024-10-17",
              "category": "Market Research"
          }
      ],
      "taskCounts": {
          "active": 3,
          "newTask": 2,
          "completed": 1,
          "failed": 0
      }
  }
];

const admin = {
  "Id": 1,
  "firstName": "Admin",
  "email": "admin@example.com",
  "password": "123"
};

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
