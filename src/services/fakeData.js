// test
export const CategoryData = [
    {
        id: 1,
        name: "Lập trình và CNTT",
        revenue: 1000000
    },
    {
        id: 2,
        name: "Ngoại ngữ",
        revenue: 500000
    },
    {
        id: 3,
        name: "Marketing",
        revenue: 200000
    }
]

export const RevenueData = [
    {
        name: 'March',
        revenue: 2100000,
    },
    {
        name: 'April',
        revenue: 400000,
    },
    {
        name: 'May',
        revenue: 2200000,
    },
    {
        name: 'June',
        revenue: 1100000,
    },
    {
        name: 'July',
        revenue: 1900000,
    },
    {
        name: 'September',
        revenue: 5000000,
    }
]


export const CourseData =
    {
        id: 1,
        user: {
            id: 1,
            name: "guest",
            username: 'test',
        },
        courses: [
            {
                id: 5,
                slug: 'ky-nang-tuyen-dung-nhan-vien',
                name: 'Kỹ năng tuyển dụng nhân viên',
                category: {
                    id: 6,
                    parent_id: 0,
                    name: 'Kiến Thức Chuyên Ngành',
                },
                description:
                    'Khóa học tập trung vào những vấn đề về nhân sự trong doanh nghiệp, từ góc nhìn của người quản lý cũng như của người đi xin việc. Bằng việc phân tích và đưa ra cách giải quyết, người học có thể nhận diện và biết cách xử lý các vấn đề về nhân sự trong doanh nghiệp mình. Thông qua khóa học, giảng viên cũng hướng tới các yêu cầu của công việc và kỹ năng tuyển dụng ứng viên dựa vào những yêu cầu này. Những khó khăn trong việc tuyển dụng ứng viên và phỏng vấn các ứng viên cũng được giải đáp trong khóa học này.',
                author: {
                    id: 1,
                    user: {
                        id: 2,
                        name: 'Lê Thẩm Dương',
                        username: 'author',
                    },
                    description: 'co kinh nghiem giang day'
                },
                salesPrice: '399,000 đ',
                price: '699,000 đ',
                isFree: true,
                currentLesson: 1,
                chapters: [
                    {
                        id: 1,
                        name: 'chapter1',
                        lessons: [
                            {
                                id: 1,
                                name: 'bai 1',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 2,
                                name: 'bai 2',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'chapter2',
                        lessons: [
                            {
                                id: 3,
                                name: 'bai 3',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 4,
                                name: 'bai 4',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                ]

            },
            {
                id: 3,
                slug: 'ung-dung-so-do-tu-duy',
                category: {
                    id: 6,
                    parent_id: 0,
                    name: 'Kiến Thức Chuyên Ngành',
                },
                name: 'Ứng dụng sơ đồ tư duy trong cuộc sống ',
                description:
                    'Khóa đào tạo trang bị cho sinh viên và người lao động những hiểu biết cơ bản về sơ đồ tư duy.Hướng dẫn cho sinh viên và người lao động cách thức vận dụng sơ đồ tư duy vào các hoạt động thực tế, để gặt hái thành công trong học tập cũng như công việc. ',
                author: {
                    id: 5,
                    user: {
                        id: 10,
                        name: 'Lại Thế Luyện',
                        username: 'author',
                    },
                    description: 'co kinh nghiem giang day'
                },
                salesPrice: '299,000 đ',
                price: '499,000 đ',
                currentLesson: 1,
                chapters: [
                    {
                        id: 1,
                        name: 'chapter1',
                        lessons: [
                            {
                                id: 1,
                                name: 'bai 1',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 2,
                                name: 'bai 2',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'chapter2',
                        lessons: [
                            {
                                id: 3,
                                name: 'bai 3',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 4,
                                name: 'bai 4',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                ]
            },
            {
                id: 4,
                name: 'YOGA LEVEL UP ĐIÊU KHẮC CƠ THỂ KHỎE ĐẸP SAU SINH',
                slug: 'yoga-level-up-dieu-khac-co-the-khoe-dep-sau-sinh',
                category: {
                    id: 3,
                    parent_id: 0,
                    name: 'Thể Thao - Sức Khỏe',
                },
                description: '',
                author: {
                    id: 2,
                    user: {
                        id: 3,
                        name: 'Trần Thảo Vi',
                        username: 'author',
                    },
                    description: 'co kinh nghiem giang day'
                },
                salesPrice: '299,000 đ',
                currentLesson: 1,
                chapters: [
                    {
                        id: 1,
                        name: 'chapter1',
                        lessons: [
                            {
                                id: 1,
                                name: 'bai 1',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 2,
                                name: 'bai 2',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'chapter2',
                        lessons: [
                            {
                                id: 3,
                                name: 'bai 3',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 4,
                                name: 'bai 4',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                ]

            },
            {
                id: 1,
                category: {
                    id: 1,
                    parent_id: 0,
                    name: 'Lập trình - CNTT',
                },
                slug: 'lap-trinh-frontend',
                name: 'Lập trình frontend',
                salesPrice: '399,000 đ',
                price: '699,000 đ',
                description: 'hoc lap trinh frontend tu A - Z',
                status: 'hoat dong',
                author: {
                    id: 1,
                    user: {
                        id: 2,
                        name: 'Nguyễn Văn A',
                        username: 'author',
                    },
                    description: 'co kinh nghiem giang day'
                },
                currentLesson: 1,
                chapters: [
                    {
                        id: 1,
                        name: 'chapter1',
                        lessons: [
                            {
                                id: 1,
                                name: 'bai 1',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 2,
                                name: 'bai 2',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'chapter2',
                        lessons: [
                            {
                                id: 3,
                                name: 'bai 3',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 4,
                                name: 'bai 4',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                ]
            },
            {
                id: 2,
                category: {
                    id: 1,
                    parent_id: 0,
                    name: 'Lập trình - CNTT',
                },
                slug: 'lap-trinh-backend',
                name: 'Lập trình backend ',
                salesPrice: '399,000 đ',
                price: '699,000 đ',
                description: 'hoc lap trinh backend tu A - Z',
                status: 'hoat dong',
                author: {
                    id: 1,
                    user: {
                        id: 2,
                        name: 'Nguyễn Văn A',
                        username: 'author',
                    },
                    description: 'co kinh nghiem giang day'
                },
                currentLesson: 2,
                chapters: [
                    {
                        id: 3,
                        name: 'chapter1',
                        lessons: [
                            {
                                id: 5,
                                name: 'bai 1',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 6,
                                name: 'bai 2',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: 'chapter2',
                        lessons: [
                            {
                                id: 7,
                                name: 'bai 3',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            },
                            {
                                id: 8,
                                name: 'bai 4',
                                time: '10p',
                                video: 'https://www.youtube.com/embed/1t9Pl0ntH8E',
                            }
                        ]
                    },
                ]
            }
        ],
    };

