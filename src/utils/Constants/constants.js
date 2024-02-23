 const constants = {
    tabList:{
        COURSES_NAME:'Courses',
        COLLEGES_NAME:'Colleges',
        EXAM_LIST:'Exam',
        ABOUT:'About',
        CONTACT_US:'Contacts'
     },
     categoryList: [
         'Engineering',
         'Management',
         'Commerce & Banking',
         'Medical',
         'Science',
         'Hotel Management',
         'Information Technology',
         'Mass Communication',
         'Nursing',
         'Agriculture',
         'Law Pharmacy',
         '10th Standard',
         'PUC'
     ],
     enginerringCategory: [{ name: 'B.Tech', path: '/colleges_details/' }, { name: 'M.Tech', path: '/colleges_details/' }, { name: 'B.Arch', path: '/colleges_details/' }, { name: 'B.Tech+M.Tech', path: '/colleges_details/' }, { name: 'Diploma', path: '/colleges_details/' }],
     jeeMainsCategory: [{name:'Eligibility',path:'/exam_details/'}, {name:'Syllabus',path:'/exam_details/'}, {name:'Exam Pattern',path:'/exam_details/'}, {name:'How To Prepare',path:'/exam_details/'}, {name:'Previous Year Question Paper',path:'/exam_details/'}],
     
     popularColleges: ['Sanskriti University', 'ITS Engineering College', 'Sanjay Ghodawat University', 'Amity University Punjab',
         'Chandigarh University'
     ],
      topColleges: ['IIT Kharagpur', 'IIT Delhi', 'IIT Madras', 'IIT Roorkee',
         'IIT Kanpur'
     ],
     collegesLocation: ['Karnataka', 'Delhi', 'Rajasthan'],
     courseList: [
         { name: 'B.Tech', path: '/courses_details/' },
         {name:'B.Arch',path:'/courses_details/'},
         {name:'B.Tech in Mechanical Engineering',path:'/courses_details/'},
         {name:'BSc Radiotherapy',path:'/courses_details/'},
         {name:'B.Sc in Medical Laboratory Technology',path:'/courses_details/'},
         {name:'MBA',path:'/courses_details/'},
         {name:'Auto CAD',path:'/courses_details/'},
         {name:'B.Des',path:'/courses_details/'},
         {name:'B.Ed',path:'/courses_details/'},
         {name:'B.Sc Agriculture',path:'/courses_details/'},
         {name:'MBA in Media Management',path:'/courses_details/'},
         {name:'MBA in International Business',path:'/courses_details/'},
         {name:'MBA in Operations Management',path:'/courses_details/'},
         {name:'B.Sc in Statistics',path:'/courses_details/'},
         {name:'B.Sc in Home Science',path:'/courses_details/'},
         {name:'Bachelor of Management Studies',path:'/courses_details/'},
         { name: 'Bachelor of Mass Communication', path: '/courses_details/' },
         {name:'Bachelor of Computer Application',path:'/courses_details/'},
         {name:'B.Pharma',path:'/courses_details/'},
         {name:'Bachelor of Dental Surgery (BDS)',path:'/courses_details/'},
         
         
     ] 
}
export default constants;