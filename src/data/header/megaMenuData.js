import constants from "../../utils/Constants/constants";

export const megaMenuData = [
    {
        categoryName: 'Engineering',
        mainCategory:constants.tabList.COLLEGES_NAME,
        data: [
            {
                heading: "Colleges By Degree",
                subMenu: constants.enginerringCategory,

            },
             {
                heading: "Popular Colleges",
                 subMenu: constants.popularColleges,
                
            },
             {
                heading: "Top Colleges",
                 subMenu: constants.topColleges,
                
            },
             {
                heading: "Colleges By Location",
                 subMenu: constants.collegesLocation,
                
            }
        ]
    },
    {
        categoryName: 'Management',
        data: [
            {
                heading: "Colleges By Degree",
                subMenu: constants.enginerringCategory,
            },
             {
                heading: "Popular Colleges",
                subMenu: constants.enginerringCategory,
            },
             {
                heading: "Top Colleges",
                subMenu: constants.enginerringCategory,
            },
             {
                heading: " Colleges By Location",
                subMenu: constants.enginerringCategory,
            }
        ]
    },
    {
        categoryName: 'Medical',
        mainCategory:constants.tabList.COLLEGES_NAME,
        data: [
            {
                heading: "Colleges By Degree",
                subMenu: constants.enginerringCategory,
            },
             {
                heading: "Popular Colleges",
                subMenu: constants.popularColleges,
            },
             {
                heading: "Top Colleges",
                subMenu: constants.topColleges,
            },
             {
                heading: " Colleges By Location",
                subMenu: constants.collegesLocation,
            }
        ]
    },
    {
        categoryName: 'Commerce and Banking',
        mainCategory:constants.tabList.COLLEGES_NAME,
        data: [
            {
                heading: "Colleges By Degree",
                subMenu: constants.enginerringCategory,
            },
             {
                heading: "Popular Colleges",
                subMenu: constants.enginerringCategory,
            },
             {
                heading: "Top Colleges",
                subMenu: constants.enginerringCategory,
            },
             {
                heading: " Colleges By Location",
                subMenu: constants.enginerringCategory,
            }
        ]
    },
    {
        categoryName: 'Commerce and Banking',
        mainCategory:constants.tabList.COURSES_NAME,
        data: [
            {
                heading: "Colleges By Degree",
                subMenu: constants.courseList,
            },
             {
                heading: "Popular Colleges",
                subMenu: constants.courseList,
            },
             {
                heading: "Top Colleges",
                subMenu: constants.courseList,
            },
             {
                heading: " Colleges By Location",
                subMenu: constants.courseList,
            }
        ]
    },
    {
        categoryName: 'Engineering',
        mainCategory:constants.tabList.EXAM_LIST,
        data: [
            {
                heading: "JEE Mains",
                subMenu: constants.jeeMainsCategory,
            },
             {
                heading: "JEE ADVANCE",
                subMenu: constants.jeeMainsCategory,
            },
             {
                heading: "WBJEE",
                subMenu: constants.jeeMainsCategory,
            },
             {
                heading: "GATE",
                subMenu: constants.jeeMainsCategory,
            }
        ]
    },
]