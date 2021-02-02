{
    //Enum 상수값을 한 곳으로 모아 정리하는 것, 타입 보장 

    //JavaScript
    const MAX_NUM = 6;
    const Max_SUTDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    enum Days {
        Monday,
        Tesday,
        Wednesday,
        Thuresday,
        Friday,
        Satarday,
        Sunday
    }

    //enum대신 uniontype 사용이 수월
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
}