# RESS Desktop

Built on ES6, React, Electron, Electron-builder and Foreman to package.
Makes a fetch(POST) request to the RESS endpoint to acqure a token and
the login bundle which has basic info about the user and the roles allocated to them. Future requests(POST) all require the header to be
included with a `bearer` authorization flag. Apollo client is heavily used for the graphql queries, mutations and later subscriptions.

## Interfaces

1. School Registry
2. Accountant
3. Librarian
4. Tutor
5. Manager
6. Student

### Application

Uses react-apollo to interact with the RESS graphql backend

### Usage

Start the browser development server with
\_'yarn start'

Launch the desktop aplication with
\_'yarn dev'

Package a production build with
\_'yarn run ebuild'

### Timeline

-   [x] -   Authenticate with token from server auth endpoint
-   [x] -   User sign in page to make fetch and obtain token from server
-   [ ] -   Dynamic roles menu for authorization
-   [ ] -   Table representation of data
-   [ ] -   Chart-js to represent numeric data
-   [ ] -   Custom calendar component for timetable display
-   [ ] -   Electron pop-up window to handle error messages

### Roles menu

1. Registry {
   Guardians | Tutors | Students | Departments | Subjects | Grades | Lessons | Timetable | Exams | Scores
   }
2. Accountant {
   Guardians | Tutors | Librarians | Students | Fess Structure | Payments
   }
3. Librarian {
   Students | Books
   }
4. Tutor {
   Tutors | Students | Departments | Subjects | Grades | Lessons | Timetable | Books | Exams | Scores
   }
5. Manager { Guardians | Accountants | Registrars | Librarians | Tutors | Students | School |
   Departments | Subjects | Grades | Lessons | Timetable | Exams | Scores
   FeeStructure | Payments | Books }
6. Student { Students | Subjects | Lessons | Timetable | Books | Exams | Scores }
7. Admin { Schools }
