 import logo from '../../images/about-img1.png'
 import chat from '../../images/homepage-image/chat.png'
 import shortlist from '../../images/homepage-image/shortlist.png'
 import form from '../../images/homepage-image/form.png'
 import categories from '../../images/homepage-image/categories.png'
 import checkMark from '../../images/homepage-image/check-mark.png'
 import counsellor from '../../images/counsellors-collagedekho-image/img-banner-counsellor.60b1ca03.svg'
 import noDataImg from '../../images/insurance-image-collagedekho/img-no-data.c0c99478.svg'
 import buLogo from '../../images/collages-collagedekho-image/bulogo.avif'
 import callNowBanner from '../../images/career-collage-dekho-image/callNowBanner.ccb277fe.svg'
 import reward from '../..//images/document-collagedekho-image/img-reward.24f64b27 (1).svg'
 import imgBannerUpload from '../../images/document-collagedekho-image/img-banner-upload.2ad9b1c8.svg'
 import rankUpto1000 from '../../images/feed-collagedekho-image/List_of_Colleges_for_Upto_10000_Rank_in_MAH_MBA_CET.avif'
 import lowRank from '../../images/feed-collagedekho-image/Colleges_Accepting_Low_Rank_in_MAH_MBA_CET.avif'
 import cutOffScore from '../../images/feed-collagedekho-image/Untitled_design_-_2024-03-06T100222.513_1.avif'
 import goodScore from '../../images/feed-collagedekho-image/What_is_a_Good_Score_in_MAH_MBA_CET.avif'
 import topMbaMumbai from '../../images/feed-collagedekho-image/MAH_CET_Cutoff_2023_for_Top_MBA_Colleges_in_Mumbai_1.avif'
 import topMbaPune from '../../images/feed-collagedekho-image/MAH_CET_Cutoff_for_Top_MBA_Colleges_in_Pune_1.avif'
 import normalisation from '../../images/feed-collagedekho-image/MAH_MBA_CET_2023_Normalisation_Process.avif'
 import cutoffJBIMS from '../../images/feed-collagedekho-image/MAH_MBA_CET_Cutoff_for_JBIMS.avif'
 import cutoffPUMBA from '../../images/feed-collagedekho-image/MAH_MBA_CET_Cutoff_2023_for_PUMBA.avif'
 import passingMarks from '../../images/feed-collagedekho-image/MAH_MBA_CET_Passing_Marks.avif'
 import formCorrection from '../../images/feed-collagedekho-image/AP_ICET_Application_Form_Correction.avif'
 import mcaGujarat from '../../images/feed-collagedekho-image/Gujarat_MCA_Admission_Process.avif'
 import mahbacetai from '../../images/feed-collagedekho-image/MAHMBACETAI.avif'
 import catTamilNadu from '../../images/feed-collagedekho-image/Best_CAT_Coaching_Institutes_in_Tamil_Nadu.avif'
 import lowFees from '../../images/feed-collagedekho-image/MBA_Colleges_in_India_with_Low_Fees_1.avif'
 import connectUs from '../../images/payments-image/img-banner-connect-us.05ec2c9e.svg'
 import PsychometricTestimg1 from '../../images/psychometric-test-img1.png'
 import PsychometricTestimg2 from '../../images/psychometric-test-img2.jpg'
 import PsychometricTestimg3 from '../../images/psychometric-test-img3.png'
 import timeLineImg1 from '../../images/timeline/timeline-img1.png'
 import timeLineImg2 from '../../images/timeline/timeline-img2.png'
 import timeLineImg3 from '../../images/timeline/timeline-img3.png'
 import timeLineImg4 from '../../images/timeline/timeline-img4.png'
 import testiUserImg1 from '../../images/testi-user-img1.png'
 import testiUserImg2 from '../../images/testi-user-img2.png'
 import testiUserImg3 from '../../images/testi-user-img3.png'
 import arrowLeftIcon from '../../images/arrow-left-icon.svg'
 import arrowRightIcon from '../../images/arrow-right-icon.svg'
 import alarmClockIcon from '../../images/quiz-image/icons8-alarm-clock-30.png'
const constants = {
    apiEndPoint: {
         UPLOAD_FILE:"https://techsaraz.in/admission-cart/api/fileupload/upload.php",
         USER_SIGNUP:"https://techsaraz.in//admission-cart/api/login/register.php",
         USER_LOGIN:"https://techsaraz.in//admission-cart/api/login/login.php",
         USER_AUTHORISATION:"https://techsaraz.in//admission-cart/api/login/user-info.php",
         USER_DETAILS_GET_ALL_USER:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_ADD_or_UPDATE_USER_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_DELETE_USER_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_ADD_OR_UPDATE_USER_Educational_Qualification_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_DELETE_USER_Educational_Qualification_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_GET_ALL_USER_Educational_Qualification_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_ADD_OR_UPDATE_USER_User_Preferences_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_DELETE_USER_User_Preferences_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_GET_ALL_USER_User_Preferences_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_ADD_OR_UPDATE_USER_Basic_Document_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_DELETE_USER_Basic_Document_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_GET_ALL_USER_Basic_Document_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_ADD_OR_UPDATE_USER_Admission_Document_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_DELETE_USER_Admission_Document_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",
         USER_DETAILS_GET_ALL_USER_Admission_Document_DETAILS_Only_Registered_Users:"https://techsaraz.in/admission-cart/api/user.php",

     },
     apiMethod:{
        GET:'get',
        POST:'post',
        PUT:'put',
        DELETE:'delete',
     },
     apiHeader:{
        HEADER: {'Content-Type':'application/json'}
     },
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
         
         
     ],
    images:{
        users:{
            logo:logo, chat:chat, shortlist:shortlist,
            form:form, categories:categories, checkMark:checkMark,
            counsellor:counsellor, noDataImg:noDataImg, buLogo:buLogo,
            callNowBanner:callNowBanner, reward:reward,imgBannerUpload:imgBannerUpload,
            rankUpto1000:rankUpto1000, lowRank:lowRank, cutOffScore:cutOffScore,
            goodScore:goodScore, topMbaMumbai:topMbaMumbai, topMbaPune:topMbaPune,
            normalisation:normalisation, cutoffJBIMS:cutoffJBIMS, cutoffPUMBA:cutoffPUMBA,
            passingMarks:passingMarks, formCorrection:formCorrection,
            mcaGujarat:mcaGujarat, mahbacetai:mahbacetai, catTamilNadu:catTamilNadu,
            lowFees:lowFees, connectUs:connectUs
        },
        PsychometricTest:{
            PsychometricTestimg1:PsychometricTestimg1, PsychometricTestimg2:PsychometricTestimg2,
            PsychometricTestimg3:PsychometricTestimg3, timeLineImg1:timeLineImg1, timeLineImg2:timeLineImg2,
            timeLineImg3:timeLineImg3, timeLineImg4:timeLineImg4, testiUserImg1:testiUserImg1, testiUserImg2:testiUserImg2,
            testiUserImg3:testiUserImg3, arrowLeftIcon:arrowLeftIcon, arrowRightIcon:arrowRightIcon, alarmClockIcon:alarmClockIcon
        }
    },
    userDashBoardSidebarMenu:[
        {
            lableName:"Home",
            path:"/home",
            firstSpanClassName:"home-icon",
            itagClassName:"fa-house",
            secondSpanClassName:"home-text"
        },
        {
            lableName:"Profile",
            path:"/profile",
            firstSpanClassName:"profile-icon",
            itagClassName:"fa-user",
            secondSpanClassName:"profile-text"
        },
        {
            lableName:"My Test Performance",
            path:"/performence",
            firstSpanClassName:"perfomence-i",
            itagClassName:"fa-chart-pie",
            secondSpanClassName:"perfomence-text"
        },
        {
            lableName:"Collages",
            path:"/collages",
            firstSpanClassName:"collages-i",
            itagClassName:"fa-building-columns",
            secondSpanClassName:"collages-text"
        },
        {
            lableName:"Career",
            path:"/career",
            firstSpanClassName:"career-i",
            itagClassName:"fa-compass",
            secondSpanClassName:"career-text"
        },
        {
            lableName:"Document",
            path:"/document",
            firstSpanClassName:"document-i",
            itagClassName:"fa-id-card",
            secondSpanClassName:"document-text"
        },
       
       
        
        {
            lableName:"Counsellors",
            path:"/counsellor",
            firstSpanClassName:"counsellors-i",
            itagClassName:"fa-face-smile",
            secondSpanClassName:"counsellors-text"
        },
        {
            lableName:"Account Settings",
            path:"/account",
            firstSpanClassName:"account-i",
            itagClassName:"fa-gear",
            secondSpanClassName:"account-text"
        }

    ]

     
}
export default constants;