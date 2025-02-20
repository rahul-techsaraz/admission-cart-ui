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
import ICmanageProfile from '../../images/homepage-image/Ic-manage-profile.dd386740.svg';
import ICFeedbackProfile from '../../images/homepage-image/Ic-feedback.47ae6b92.svg';
import ICLegalProfile from '../../images/homepage-image/ic-legal.6c5d124d.svg';
import ICSettingProfile from '../../images/homepage-image/Ic-settings.5c58e061.svg';
const constants = {
    apiEndPoint: {
        UPLOAD_FILE: "https://techsaraz.in/admission-cart/api/fileupload/upload.php",
        USER_SIGNUP: "https://techsaraz.in//admission-cart/api/login/register.php",
        USER_LOGIN: "https://techsaraz.in//admission-cart/api/login/login.php",
        USER_AUTHORISATION: "https://techsaraz.in//admission-cart/api/login/user-info.php",
        USER_DETAILS_GET_ALL_USER: "https://techsaraz.in/admission-cart/api/user.php",
        USER_DETAILS_GET_ALL_USER_TO_VERIFY: "https://techsaraz.in/admission-cart/api/user.php?requestType=userDetails&email=",
        USER_EDUCATIONAL_QUALIFICATION_TO_VERIFY: "https://techsaraz.in/admission-cart/api/user.php?requestType=educationalQualification&email=",
        USER_PREFERENCE_TO_VERIFY: "https://techsaraz.in/admission-cart/api/user.php?requestType=collegePreferences&email=",
        USER_DETAILS_SAVE_UPDATE: "https://techsaraz.in/admission-cart/api/user.php?requestType=userDetails",
        USER_EDUCATIONAL_QUALIFICATION_UPDATE: "https://techsaraz.in/admission-cart/api/user.php?requestType=educationalQualification",
        USER_PREFERENCE_SAVE_UPDATE: "https://techsaraz.in/admission-cart/api/user.php?requestType=collegePreferences",
        USER_DOCUMENT_SAVE_UPDATE: "https://techsaraz.in//admission-cart/api/user.php?requestType=uploadBasicDocument",
        USER_DOCUMENT_GET_ALL_DOCUMENT: " https://techsaraz.in//admission-cart/api/user.php?requestType=uploadBasicDocument&email=",
        USER_FEADBACK: "https://techsaraz.in//admission-cart/api/user.php?requestType=userFeedbackReport",
        USER_FEADBACK_RESPONSE:"https://techsaraz.in//admission-cart/api/user.php?requestType=userFeedbackReport&email=",
        USER_SORTLIST_SAVE_UPDATE:"https://techsaraz.in//admission-cart/api/user.php?requestType=userShortListedCollege",
        USER_SORTLIST_GET_ALL:"https://techsaraz.in//admission-cart/api/user.php?requestType=userShortListedCollege&email=",
        DOCUMENT_PATH: "https://techsaraz.in/admission-cart/api/fileupload/",
        COLLEGE_LIST: 'https://techsaraz.in/admission-cart/api/colleges.php',
        EXAM_LIST: 'https://techsaraz.in//admission-cart/api/exam.php',
        COURSE_LIST: 'https://techsaraz.in//admission-cart/api/courses.php',
        CATEGORY_LIST: 'https://techsaraz.in//admission-cart/api/course_category_list.php',
    },
    apiMethod: {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete',
    },
    apiHeader: {
        HEADER: { 'Content-Type': 'application/json' }
    },
    apiResponseStatus: {
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error',
        NOT_FOUND: 'NOT FOUND'
      },
      imageAbsolutePath: 'https://techsaraz.in/admission-cart/api/fileupload/',
    tabList: {
        COURSES_NAME: 'Courses',
        COLLEGES_NAME: 'Colleges',
        EXAM_LIST: 'Exam',
        ABOUT: 'About',
        CONTACT_US: 'Contacts'
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
    enginerringCategory: [
        { 
            name: 'B.Tech',
            path: '/colleges_details/'
        },
        {
            name: 'M.Tech',
            path: '/colleges_details/' 
        }, 
        {
            name: 'B.Arch', 
            path: '/colleges_details/' 
        }, 
        { 
            name: 'B.Tech+M.Tech', 
            path: '/colleges_details/' 
        }, 
        { 
            name: 'Diploma', 
            path: '/colleges_details/' 
        }
    ],
    jeeMainsCategory: [],
    engineeringAndArchitectureExams: [
        {
            name: 'JEE Main 2024',
            path: '/exam_details/'
        },
        {
            name: 'GATE 2024',
            path: '/exam_details/'
        },
        {
            name: 'JEE Advanced 2024',
            path: '/exam_details/'
        },
        {
            name: 'MET 2024',
            path: '/exam_details/'
        },
        {
            name: 'KCET 2024',
            path: '/exam_details/'
        },
        {
            name: 'AEEE 2024',
            path: '/exam_details/'
        },
        {
            name: 'BITSAT 2024',
            path: '/exam_details/'
        },
        {
            name: 'View All Engineering Exams',
            path: '/exam_list/'
        }
    ],
    engineeringAndArchitectureColleges: [
        {
            name: 'Colleges Accepting B.Tech Applications',
            path: '/exam_details/'
        },
        {
            name: 'Top Engineering Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Engineering Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Engineering Colleges in Tamil Nadu',
            path: '/exam_details/'
        },
        {
            name: 'Top Engineering colleges in Hyderabad',
            path: '/exam_details/'
        },
        {
            name: 'Top Engineering colleges in Bangalore',
            path: '/exam_details/'
        },
        {
            name: 'Top Engineering colleges in Maharashtra',
            path: '/exam_details/'
        }
    ],
    engineeringAndArchitecturePredictors: [
        {
            name: 'JEE Main College Predictors',
            path: '/exam_details/'
        },
        {
            name: 'JEE Main Rank Predictor',
            path: '/exam_details/'
        },
        {
            name: 'MHT CET College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'Ap EAMCET College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'TS EAMCET College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'KCET College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'JEE Advanced College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'View All College Predictors',
            path: '/exam_details/'
        }
    ],
    engineeringAndArchitectureResources: [
        {
            name: 'JEE Main Question Paper',
            path: '/exam_details/'
        },
        {
            name: 'JEE Main Mock Test',
            path: '/exam_details/'
        },
        {
            name: 'JEE Main Answer Key',
            path: '/exam_details/'
        },
        {
            name: 'JEE Main Syllabus',
            path: '/exam_details/'
        },
        {
            name: 'Download E-Books and Sample Papers',
            path: '/exam_details/'
        },
        {
            name: 'Compare Colleges',
            path: '/exam_details/'
        },
        {
            name: 'B.Tech College Applications',
            path: '/exam_details/'
        },
        {
            name: 'JEE Main Result',
            path: '/exam_details/'
        }
    ],
    mbaExams: [
        {
            name: 'XAT Exam',
            path: '/exam_details/'
        },
        {
            name: 'CMAT Exam',
            path: '/exam_details/'
        },
        {
            name: 'MAH MBA CET Exam',
            path: '/exam_details/'
        },
        {
            name: 'CAT EXAM',
            path: '/exam_details/'
        },
        {
            name: 'NMAT Exam',
            path: '/exam_details/'
        },
        {
            name: 'SNAP Exam',
            path: '/exam_details/'
        },
        {
            name: 'IPMAT EXAM',
            path: '/exam_details/'
        },
        {
            name: 'View All Engineering Exams',
            path: '/exam_list/'
        }
    ],
    mbaColleges: [
        {
            name: 'MBA',
            path: '/exam_details/'
        },
        {
            name: 'MBA College Admissions',
            path: '/exam_details/'
        },
        {
            name: 'MBA Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top MBA Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top Online MBA Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Online MBA',
            path: '/exam_details/'
        },
        {
            name: 'MBA Colleges Accepting XAT Score',
            path: '/exam_details/'
        },
        {
            name: 'BBA Colleges in India',
            path: '/exam_details/'
        }
    ],
    mbaPredictors: [
        {
            name: 'XAT College Predictor 2024',
            path: '/exam_details/'
        },
        {
            name: 'SNAP College Predictor 2023',
            path: '/exam_details/'
        },
        {
            name: 'NMAT College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'MAT College Predictor 2024',
            path: '/exam_details/'
        },
        {
            name: 'CMAT College Predictor 2024',
            path: '/exam_details/'
        },
        {
            name: 'CAT Percentile Predictor 2023',
            path: '/exam_details/'
        },
        {
            name: 'CAT 2023 College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_details/'
        }
    ],
    mbaResources: [
        {
            name: 'CMAT 2024 Registration',
            path: '/exam_details/'
        },
        {
            name: 'XAT Cut Off 2024',
            path: '/exam_details/'
        },
        {
            name: 'XAT Score vs Percentile 2024',
            path: '/exam_details/'
        },
        {
            name: 'CAT Score vs Percentile',
            path: '/exam_details/'
        },
        {
            name: 'Download Helpful Ebooks',
            path: '/exam_details/'
        },
        {
            name: 'List of Popular Branches',
            path: '/exam_details/'
        },
        {
            name: 'QnA - Get answers to your doubts',
            path: '/exam_details/'
        },
        {
            name: 'IIM Fees Structure',
            path: '/exam_details/'
        }
    ],
    lawExams: [
        {
            name: 'CLAT 2024',
            path: '/exam_details/'
        },
        {
            name: 'AILET 2020',
            path: '/exam_details/'
        },
        {
            name: 'ULSAT',
            path: '/exam_details/'
        },
        {
            name: 'TS LAWCET',
            path: '/exam_details/'
        },
        {
            name: 'MH CET Law',
            path: '/exam_details/'
        },
        {
            name: 'LSAT India 2024',
            path: '/exam_details/'
        },
        {
            name: 'AIBE 2023',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_list/'
        }
    ],
    lawColleges: [
        {
            name: 'Colleges Accepting Admissions',
            path: '/exam_details/'
        },
        {
            name: 'Top Law Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'LAw College Accepting CLAT Score',
            path: '/exam_details/'
        },
        {
            name: 'List of Law Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top Law Colleges in Delhi',
            path: '/exam_details/'
        },
        {
            name: 'Top Law Colleges in Indore',
            path: '/exam_details/'
        },
        {
            name: 'Top Law Colleges in Chandigarh',
            path: '/exam_details/'
        },
        {
            name: 'Top Law Colleges in Lucknow',
            path: '/exam_details/'
        }
    ],
    lawPredictors: [
        {
            name: 'CLAT College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'MHCET Law (5 Year L.L.B) College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'AILET College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'Sample Papers',
            path: '/exam_details/'
        },
        {
            name: 'E-Books',
            path: '/exam_details/'
        }
    ],
    lawResources: [
        {
            name: 'Compare Law Collages',
            path: '/exam_details/'
        },
        {
            name: 'QnA - Get answers to your doubts',
            path: '/exam_details/'
        },
        {
            name: 'Careers360 Youtube Channel',
            path: '/exam_details/'
        },
        {
            name: 'CLAT 2020 Exam Live',
            path: '/exam_details/'
        },
        {
            name: 'CLAT Result 2024',
            path: '/exam_details/'
        },
        {
            name: 'AIBE 18 Result 2023',
            path: '/exam_details/'
        }
    ],
    MediaMassCommunicationExams: [
        {
            name: 'IPU CET BJMC',
            path: '/exam_details/'
        },
        {
            name: 'JMI Mass Communication Entrance Exam',
            path: '/exam_details/'
        },
        {
            name: 'IIMC Entrance Exam',
            path: '/exam_details/'
        },
        {
            name: 'NPAT 2023',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_list/'
        }
    ],
    MediaMassCommunicationColleges: [
        {
            name: 'Compare Colleges',
            path: '/exam_details/'
        },
        {
            name: 'Media & Journalism Colleges in Delhi',
            path: '/exam_details/'
        },
        {
            name: 'Media & Journalism Colleges in Bangalore',
            path: '/exam_details/'
        },
        {
            name: 'Media & Journalism Colleges in Mumbai',
            path: '/exam_details/'
        },
        {
            name: 'Colleges Accepting Admissions',
            path: '/exam_details/'
        },
        {
            name: 'List of Media & Journalism Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_details/'
        }
    ],
    MediaMassCommunicationResources: [
        {
            name: 'Free E-Books',
            path: '/exam_details/'
        },
        {
            name: 'Free Sample Papers',
            path: '/exam_details/'
        },
        {
            name: 'List of Popular Branches',
            path: '/exam_details/'
        },
        {
            name: 'QnA - Get answers to your doubts',
            path: '/exam_details/'
        },
        {
            name: 'Careers360 Youtube Channel',
            path: '/exam_details/'
        }
    ],
    medicineAndAlliedScienceExams: [
        {
            name: 'NEET',
            path: '/exam_details/'
        },
        {
            name: 'NEET PG',
            path: '/exam_details/'
        },
        {
            name: 'NEET MDS',
            path: '/exam_details/'
        },
        {
            name: 'FMGE',
            path: '/exam_details/'
        },
        {
            name: 'INI CET',
            path: '/exam_details/'
        },
        {
            name: 'AIIMS Nursing',
            path: '/exam_details/'
        },
        {
            name: 'NEET SS',
            path: '/exam_details/'
        },
        {
            name: 'AIAPGET',
            path: '/exam_details/'
        }
    ],
    medicineAndAlliedScienceColleges: [
        {
            name: 'Top Medical Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top Medical Colleges in India Accepting NEET Score',
            path: '/exam_details/'
        },
        {
            name: 'Medical Colleges Accepting NEET',
            path: '/exam_details/'
        },
        {
            name: 'List of Medical Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'List of AIIMS Colleges in Maharashtra',
            path: '/exam_details/'
        },
        {
            name: 'Medical Colleges in India Accepting NEET PG',
            path: '/exam_details/'
        }
    ],
    medicineAndAlliedSciencePredictors: [
        {
            name: 'Neet COllege Predictor',
            path: '/exam_details/'
        },
        {
            name: 'NEET PG College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'NEET MDS College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'DNB CET College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'DNB PDCET College Predictor',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_details/'
        }
    ],
    medicineAndAlliedScienceResources: [
        {
            name: 'NEET Application Form 2024',
            path: '/exam_details/'
        },
        {
            name: 'NEET PG Application Form 2024',
            path: '/exam_details/'
        },
        {
            name: 'NEET Cut off',
            path: '/exam_details/'
        },
        {
            name: 'NEET Online Preparation',
            path: '/exam_details/'
        },
        {
            name: 'Download Helpful E-Books',
            path: '/exam_details/'
        },
        {
            name: 'QnA - Get answers to your doubts',
            path: '/exam_details/'
        }
    ],
    artsCommerceScienceExams: [
        {
            name: 'CUET 2024',
            path: '/exam_details/'
        },
        {
            name: 'CUET PG 2024',
            path: '/exam_details/'
        },
        {
            name: 'IGNOU B.Ed Admission 2024',
            path: '/exam_details/'
        },
        {
            name: 'DU Admission',
            path: '/exam_details/'
        },
        {
            name: 'UP B.Ed JEE 2024',
            path: '/exam_details/'
        },
        {
            name: 'DDU Entrance Exam',
            path: '/exam_details/'
        },
        {
            name: 'IIT JAM 2024',
            path: '/exam_details/'
        },
        {
            name: 'ICAR AIEEA Exam',
            path: '/exam_details/'
        }
    ],
    artsCommerceScienceColleges: [
        {
            name: 'Universities in India 2023',
            path: '/exam_details/'
        },
        {
            name: 'Top Universities in India 2023',
            path: '/exam_details/'
        },
        {
            name: 'Top Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top Universities in Uttar Pradesh 2023',
            path: '/exam_details/'
        },
        {
            name: 'Top Universities in Bihar 2023',
            path: '/exam_details/'
        },
        {
            name: 'Top Universities in Madhya Pradesh 2023',
            path: '/exam_details/'
        },
        {
            name: 'Top Universities in Tamil Nadu 2023',
            path: '/exam_details/'
        },
        {
            name: 'Central Universities in India',
            path: '/exam_details/'
        }
    ],
    artsCommerceScienceUpcomingEvents: [
        {
            name: 'IIT JAM Admit Card 2024',
            path: '/exam_details/'
        },
        {
            name: 'IGNOU Date Sheet',
            path: '/exam_details/'
        },
        {
            name: 'CUET Mock Test 2024',
            path: '/exam_details/'
        },
        {
            name: 'CUET Application Form 2024',
            path: '/exam_details/'
        },
        {
            name: 'CUET PG Application Form 2024',
            path: '/exam_details/'
        },
        {
            name: 'CUET Participating Universities 2024',
            path: '/exam_details/'
        },
        {
            name: 'CUET Previous Year Question Paper',
            path: '/exam_details/'
        },
        {
            name: 'ICAR AIEEA Previous Year Question Papers',
            path: '/exam_details/'
        }
    ],
    artsCommerceScienceResources: [
        {
            name: 'E-Books and Sample Papers',
            path: '/exam_details/'
        },
        {
            name: 'CUET Exam Pattern 2024',
            path: '/exam_details/'
        },
        {
            name: 'CUET Exam Date 2024',
            path: '/exam_details/'
        },
        {
            name: 'CUET PG 2024',
            path: '/exam_details/'
        },
        {
            name: 'CUET Syllanus 2024',
            path: '/exam_details/'
        },
        {
            name: 'IGNOU Exam Form 2024',
            path: '/exam_details/'
        },
        {
            name: 'IGNOU Result 2023',
            path: '/exam_details/'
        },
        {
            name: 'CUET PG Courses 2024',
            path: '/exam_details/'
        }
    ],
    hospitalityExams: [
        {
            name: 'NCHMCT JEE 2024',
            path: '/exam_details/'
        },
        {
            name: 'MAH BHMCT CET',
            path: '/exam_details/'
        },
        {
            name: 'MAH HM CET',
            path: '/exam_details/'
        },
        {
            name: 'PUTHAT',
            path: '/exam_details/'
        },
        {
            name: 'IHM-A',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_list/'
        }
    ],
    hospitalityColleges: [
        {
            name: 'Top Hotel Management Colleges in Delhi',
            path: '/exam_details/'
        },
        {
            name: 'Top Hotel Management Colleges in Hyderabad',
            path: '/exam_details/'
        },
        {
            name: 'Top Hotel Management Colleges in Mumbai',
            path: '/exam_details/'
        },
        {
            name: 'Top Hotel Management Colleges in Tamil Nadu',
            path: '/exam_details/'
        },
        {
            name: 'Top Hotel Management Colleges in Maharashtra',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_details/'
        }
    ],
    hospitalityResources: [
        {
            name: 'Free E-Books',
            path: '/exam_details/'
        },
        {
            name: 'Sample Papers',
            path: '/exam_details/'
        },
        {
            name: 'BHM Course',
            path: '/exam_details/'
        },
        {
            name: 'B.Sc Hotel Management',
            path: '/exam_details/'
        },
        {
            name: 'Hotel Management',
            path: '/exam_details/'
        },
        {
            name: 'Diploma in Hotel Management and Catering Technology',
            path: '/exam_details/'
        },
        {
            name: 'List of Popular Branches',
            path: '/exam_details/'
        }
    ],
    hospitalityDiplomaColleges: [
        {
            name: 'Top Diploma Colleges in Maharashtra',
            path: '/exam_details/'
        }
    ],
    pharmacyExams: [
        {
            name: 'GPAI',
            path: '/exam_details/'
        },
        {
            name: 'RUHS Pharmacy Admission Test',
            path: '/exam_details/'
        },
        {
            name: 'KAHER-AIET',
            path: '/exam_details/'
        },
        {
            name: 'NIPER JEE',
            path: '/exam_details/'
        },
        {
            name: 'UPESPAT',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_list/'
        }
    ],
    pharmacyColleges: [
        {
            name: 'Top Pharmacy Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Pharmacy Colleges in Pune',
            path: '/exam_details/'
        },
        {
            name: 'Pharmacy Colleges in Mumbai',
            path: '/exam_details/'
        },
        {
            name: 'Colleges Accepting GPAI Score',
            path: '/exam_details/'
        },
        {
            name: 'Pharmacy Colleges in Lucknow',
            path: '/exam_details/'
        },{
            name: 'List of Pharmacy Colleges in Nagpur',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_details/'
        }
    ],
    pharmacyResources: [
        {
            name: 'GPAT Result',
            path: '/exam_details/'
        },
        {
            name: 'GPAT 2024 Admit Card',
            path: '/exam_details/'
        },
        {
            name: 'GPAT Question Papers',
            path: '/exam_details/'
        },
        {
            name: 'B. Pharma',
            path: '/exam_details/'
        },
        {
            name: 'M. Pharma',
            path: '/exam_details/'
        },
        {
            name: 'Free E-Books',
            path: '/exam_details/'
        },
        {
            name: 'Free Sample Papers',
            path: '/exam_details/'
        },
        {
            name: 'Careers360 Youtube Channel',
            path: '/exam_details/'
        }
    ],
    financeAccountsExams: [
        {
            name: 'CA Intermediate',
            path: '/exam_details/'
        },
        {
            name: 'CA Foundation',
            path: '/exam_details/'
        },
        {
            name: 'CA Final',
            path: '/exam_details/'
        },
        {
            name: 'CS Executive',
            path: '/exam_details/'
        },
        {
            name: 'CS Professional',
            path: '/exam_details/'
        },
        {
            name: 'CFA Exam',
            path: '/exam_details/'
        },
        {
            name: 'CSEET',
            path: '/exam_details/'
        },
        {
            name: 'ACET',
            path: '/exam_details/'
        }
    ],
    financeAccountsColleges: [
        {
            name: 'Top Commerce Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top Government Commerce Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top Private Commerce Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top M.Com Colleges in India',
            path: '/exam_details/'
        },
        {
            name: 'Top B.Com Colleges in India',
            path: '/exam_details/'
        }
    ],
    financeAccountsResources: [
        {
            name: 'Difference between CA and CS',
            path: '/exam_details/'
        },
        {
            name: 'Difference between CA and CMA',
            path: '/exam_details/'
        },
        {
            name: 'CA Full form',
            path: '/exam_details/'
        },
        {
            name: 'CMA Full form',
            path: '/exam_details/'
        },
        {
            name: 'CS Full form',
            path: '/exam_details/'
        },
        {
            name: 'Free E-Books',
            path: '/exam_details/'
        },
        {
            name: 'Free Sample Papers',
            path: '/exam_details/'
        },
        {
            name: 'CA Salary in India',
            path: '/exam_details/'
        }
    ],
    financeAccountsTopCoursesAndCareers: [
        {
            name: 'Bachelor of Commerce (B.Com)',
            path: '/exam_details/'
        },
        {
            name: 'Master of Commerce (M.Com)',
            path: '/exam_details/'
        },
        {
            name: 'Company Secretary',
            path: '/exam_details/'
        },
        {
            name: 'Cost Accountant',
            path: '/exam_details/'
        },
        {
            name: 'Charted Accountant',
            path: '/exam_details/'
        },
        {
            name: 'Credit Manager',
            path: '/exam_details/'
        },
        {
            name: 'Financial Advisor',
            path: '/exam_details/'
        }
    ],
    studyAbroadExams: [
        {
            name: 'TOEFL',
            path: '/exam_details/'
        },
        {
            name: 'LSAT',
            path: '/exam_details/'
        },
        {
            name: 'IELTS',
            path: '/exam_details/'
        },
        {
            name: 'GRE',
            path: '/exam_details/'
        },
        {
            name: 'SAT',
            path: '/exam_details/'
        },
        {
            name: 'ACT',
            path: '/exam_details/'
        },
        {
            name: 'MCAT',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_list/'
        }
    ],
    studyAbroadColleges: [
        {
            name: 'Top University in USA',
            path: '/exam_details/'
        },
        {
            name: 'Top University in Canada',
            path: '/exam_details/'
        },
        {
            name: 'Top University in Ireland',
            path: '/exam_details/'
        },
        {
            name: 'Top University in UK',
            path: '/exam_details/'
        },
        {
            name: 'Top University in Australia',
            path: '/exam_details/'
        },
        {
            name: 'Best MBA Colleges in Abroad',
            path: '/exam_details/'
        },
        {
            name: 'Business Management Studies Colleges',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_details/'
        }
    ],
    studyAbroadTopCountries: [
        {
            name: 'Study in USA',
            path: '/exam_details/'
        },
        {
            name: 'Study in UK',
            path: '/exam_details/'
        },
        {
            name: 'Study in Canada',
            path: '/exam_details/'
        },
        {
            name: 'Study in Australia',
            path: '/exam_details/'
        },
        {
            name: 'Study in Ireland',
            path: '/exam_details/'
        },
        {
            name: 'Study in Germany',
            path: '/exam_details/'
        },
        {
            name: 'Study in China',
            path: '/exam_details/'
        },
        {
            name: 'Study in Europe',
            path: '/exam_details/'
        }
    ],
    studyAbroadStudentVisas: [
        {
            name: 'Student Visa Canada',
            path: '/exam_details/'
        },
        {
            name: 'Student Visa UK',
            path: '/exam_details/'
        },
        {
            name: 'Student Visa USA',
            path: '/exam_details/'
        },
        {
            name: 'Student Visa Australia',
            path: '/exam_details/'
        },
        {
            name: 'Student Visa Germany',
            path: '/exam_details/'
        },
        {
            name: 'Student Visa New Zealand',
            path: '/exam_details/'
        },
        {
            name: 'Student Visa ireland',
            path: '/exam_details/'
        }
    ],
    schoolExams: [
        {
            name: 'CBSE Class 10th',
            path: '/exam_details/'
        },
        {
            name: 'CBSE Class 12th',
            path: '/exam_details/'
        },
        {
            name: 'UP Board 10th',
            path: '/exam_details/'
        },
        {
            name: 'UP Board 12th',
            path: '/exam_details/'
        },
        {
            name: 'Bihar Board 10th',
            path: '/exam_details/'
        },
        {
            name: 'Bihar Board 12th',
            path: '/exam_details/'
        },
        {
            name: 'View All',
            path: '/exam_list/'
        }
    ],
    schoolRanking: [
        {
            name: 'Top Schools in India',
            path: '/exam_details/'
        },
        {
            name: 'Top Schools in Delhi',
            path: '/exam_details/'
        },
        {
            name: 'Top Schools in Mumbai',
            path: '/exam_details/'
        },
        {
            name: 'Top Schools in Chennai',
            path: '/exam_details/'
        },
        {
            name: 'Top Schools in Hyderabad',
            path: '/exam_details/'
        },
        {
            name: 'Top Schools in Kolkata',
            path: '/exam_details/'
        },
        {
            name: 'Top Schools in Pune',
            path: '/exam_details/'
        },
        {
            name: 'Top Schools in Bangalore',
            path: '/exam_details/'
        }
    ],
    schoolProductsResources: [
        {
            name: 'JEE Main Knockout April',
            path: '/exam_details/'
        },
        {
            name: 'Free Sample Papers',
            path: '/exam_details/'
        },
        {
            name: 'Free E-Books',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Notes',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Syllabus',
            path: '/exam_details/'
        },
        {
            name: 'RD Sharma Solutions',
            path: '/exam_details/'
        },
        {
            name: 'Navodaya Vidyalaya Admission 2024-25',
            path: '/exam_details/'
        }
    ],
    schoolNcertSolutions: [
        {
            name: 'NCERT',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Solutions',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Solutions for Class 12',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Solutions for Class 11',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Solutions for Class 10',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Solutions for Class 9',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Solutions for Class 8',
            path: '/exam_details/'
        },
        {
            name: 'NCERT Solutions for Class 7',
            path: '/exam_details/'
        }
    ],
    popularColleges: [
        'Sanskriti University',
        'ITS Engineering College',
        'Sanjay Ghodawat University',
        'Amity University Punjab',
        'Chandigarh University'
    ],
    topColleges: [
        'IIT Kharagpur',
        'IIT Delhi',
        'IIT Madras',
        'IIT Roorkee',
        'IIT Kanpur'
    ],
    collegesLocation: ['Karnataka', 'Delhi', 'Rajasthan'],
    courseList: [
        { name: 'B.Tech', path: '/courses_details/' },
        { name: 'B.Arch', path: '/courses_details/' },
        { name: 'B.Tech in Mechanical Engineering', path: '/courses_details/' },
        { name: 'BSc Radiotherapy', path: '/courses_details/' },
        { name: 'B.Sc in Medical Laboratory Technology', path: '/courses_details/' },
        { name: 'MBA', path: '/courses_details/' },
        { name: 'Auto CAD', path: '/courses_details/' },
        { name: 'B.Des', path: '/courses_details/' },
        { name: 'B.Ed', path: '/courses_details/' },
        { name: 'B.Sc Agriculture', path: '/courses_details/' },
        { name: 'MBA in Media Management', path: '/courses_details/' },
        { name: 'MBA in International Business', path: '/courses_details/' },
        { name: 'MBA in Operations Management', path: '/courses_details/' },
        { name: 'B.Sc in Statistics', path: '/courses_details/' },
        { name: 'B.Sc in Home Science', path: '/courses_details/' },
        { name: 'Bachelor of Management Studies', path: '/courses_details/' },
        { name: 'Bachelor of Mass Communication', path: '/courses_details/' },
        { name: 'Bachelor of Computer Application', path: '/courses_details/' },
        { name: 'B.Pharma', path: '/courses_details/' },
        { name: 'Bachelor of Dental Surgery (BDS)', path: '/courses_details/' },


    ],
    images: {
        users: {
            logo: logo, chat: chat, shortlist: shortlist,
            form: form, categories: categories, checkMark: checkMark,
            counsellor: counsellor, noDataImg: noDataImg, buLogo: buLogo,
            callNowBanner: callNowBanner, reward: reward, imgBannerUpload: imgBannerUpload,
            rankUpto1000: rankUpto1000, lowRank: lowRank, cutOffScore: cutOffScore,
            goodScore: goodScore, topMbaMumbai: topMbaMumbai, topMbaPune: topMbaPune,
            normalisation: normalisation, cutoffJBIMS: cutoffJBIMS, cutoffPUMBA: cutoffPUMBA,
            passingMarks: passingMarks, formCorrection: formCorrection,
            mcaGujarat: mcaGujarat, mahbacetai: mahbacetai, catTamilNadu: catTamilNadu,
            lowFees: lowFees, connectUs: connectUs
        },
        PsychometricTest: {
            PsychometricTestimg1: PsychometricTestimg1, PsychometricTestimg2: PsychometricTestimg2,
            PsychometricTestimg3: PsychometricTestimg3, timeLineImg1: timeLineImg1, timeLineImg2: timeLineImg2,
            timeLineImg3: timeLineImg3, timeLineImg4: timeLineImg4, testiUserImg1: testiUserImg1, testiUserImg2: testiUserImg2,
            testiUserImg3: testiUserImg3, arrowLeftIcon: arrowLeftIcon, arrowRightIcon: arrowRightIcon, alarmClockIcon: alarmClockIcon
        }
    },
    userDashBoardSidebarMenu: [
        {
            lableName: "Home",
            path: "/home",
            firstSpanClassName: "home-icon",
            itagClassName: "fa-house",
            secondSpanClassName: "home-text"
        },
        {
            lableName: "Profile",
            path: "/profile",
            firstSpanClassName: "profile-icon",
            itagClassName: "fa-user",
            secondSpanClassName: "profile-text"
        },
        // {
        //     lableName: "My Test Performance",
        //     path: "/performence",
        //     firstSpanClassName: "profile-icon",
        //     itagClassName: "fa-chart-pie",
        //     secondSpanClassName: "perfomence-text"
        // },
        {
            lableName: "Collages",
            path: "/collages",
            firstSpanClassName: "profile-icon",
            itagClassName: "fa-building-columns",
            secondSpanClassName: "collages-text"
        },
        // {
        //     lableName: "Career",
        //     path: "/career",
        //     firstSpanClassName: "profile-icon",
        //     itagClassName: "fa-compass",
        //     secondSpanClassName: "career-text"
        // },
        {
            lableName: "Document",
            path: "/document",
            firstSpanClassName: "profile-icon",
            itagClassName: "fa-id-card",
            secondSpanClassName: "document-text"
        },
        {
            lableName: "Counsellors",
            path: "/counsellor",
            firstSpanClassName: "profile-icon",
            itagClassName: "fa-face-smile",
            secondSpanClassName: "counsellors-text"
        },
        {
            lableName: "Account Settings",
            path: "/account",
            firstSpanClassName: "profile-icon",
            itagClassName: "fa-gear",
            secondSpanClassName: "account-text"
        }

    ],
    userDashBoasrLookingForMenu: [
        {
            path: '/profile',
            imageSrc: ICmanageProfile,
            imageAlt: 'Profile img',
            title: 'Manage Profile',
            activeIndex: 1
        },
        {
            path: '',
            imageSrc: ICFeedbackProfile,
            imageAlt: 'feedback-img',
            title: 'Give Us Feedback',
            activeIndex: ''
        },
        // {
        //     path: '/home',
        //     imageSrc: ICLegalProfile,
        //     imageAlt: 'legal-img',
        //     title: 'Legal',
        //     activeIndex: 1
        // },
        {
            path: '/account',
            imageSrc: ICSettingProfile,
            imageAlt: 'settimgs-img',
            title: 'Account Settings',
            activeIndex: 5
        },

    ],
    examDetailsList:[
        {
            linkClass: "nav-link mb-3 d-flex align-items-stretch gap-2 active",
            pTagData : "The JEE Main Admit Card 2024 will be released separately for the January and April sessions. The JEE Main Hall Ticket 2024 download link will be made available at jeemain.nta.nic.in. Only those who successfully register for the NTA JEE Main 2024 Exam will be issued the admit card. To obtain the JEE Main 2024 Hall Ticket, students must utilize their JEE Main 2024 login credentials - application form number and password. <br /> JEE Main 2024 Admit Card will contain information about the national-level entrance test such as the JEE Main test centre address, JEE Main 2024 exam date and time, personal information, guidelines, and more. Candidates must carry their JEE Main Admit Card 2024, as well as a piece of valid ID evidence to the JEE test centre. It must be noted that students shall not be allowed to enter the test venue unless they have a valid JEE Main 2024 Hall Ticket."
        },
        {
            linkClass: "nav-link mb-3 d-flex align-items-stretch gap-2 active",
            pTagData : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            linkClass: "nav-link mb-3 d-flex align-items-stretch gap-2 active",
            pTagData : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            linkClass: "nav-link mb-3 d-flex align-items-stretch gap-2 active",
            pTagData : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            linkClass: "nav-link mb-3 d-flex align-items-stretch gap-2 active",
            pTagData : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ],
    userPreferencesStream:[
        "Select", "Science", "Commerce", 'Arts'
    ],
    userPreferencesLevel:[
        "Select",
        "10th Standard",
        "PUC",
        "Diploma",
        "Graduation",
        "Post Graduation",
        "Masters",
    ],
    state:[
        'Select',
        'Andaman & Nicobar Island',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Chandigarh',
        'Daman & Diu',
        'Delhi',
        'Dadara & Nagar Havelli',
        'Goa',
        'Gujarat',
        'Himachal Pradesh',
        'Haryana Jharkhand',
        'Jammu and Kashmir',
        'Karnataka',
        'Kerala',
        'Lakshadweep',
        'Meghalaya',
        'Manipur',
        'Madhya Pradesh',
        'Maharashtra',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Puducherry',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttarakhand',
        'Uttar Pradesh',
        'West Bengal',
    ],
    collegeType:['Select', 'Private', 'Government', 'Autonomous'],
    feeRange:['Select', '10 - 30 Lakhs', '30 - 50 Lakhs', '50 - 70 Lakhs', '70 - 90 Lakhs'],
    studingAbroad:['Select', 'Yes', 'No'],
    loan:['Select', 'Yes', 'No'],
    faqData:[
        {
            question : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?',
            answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            question : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?',
            answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            question : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?',
            answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },{
            question : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?',
            answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ]
}
export default constants;