const getNavigation = (userId) => {
    const links = [
        {
            title: 'Publications',
            link: '/'
        },
        {
            title: 'Share your thoughts',
            link: '/share'
        },
        {
            title: 'Profile',
            link: `/profile/${userId}`
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'Register',
            link: '/register'
        },
        {
            title: 'Publications',
            link: '/'
        },
    ];

    return links;
};

export default getNavigation;