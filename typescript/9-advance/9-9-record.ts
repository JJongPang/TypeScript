type PageInfo = {
    title: string;
};

type Page = 'home' | 'about' | 'contact';

// 묶다
const nav: Record<Page, PageInfo> = {
    home: {
        title: 'Home'
    },
    about: {
        title: 'About'
    },
    contact: {
        title: 'Contact'
    }
}