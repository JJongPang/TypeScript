{
    // 서로다른 타입을 합칠때
    
    type PageInfo = {
        title: string;
    };

    type Page = 'home' | 'about' | 'contact';

    const nav: Record<Page, PageInfo> = {
        home: {
            title: 'Home',
        },

        about: {
            title: 'About'
        },

        contact: {
            title: 'Contact'
        }
    }
}