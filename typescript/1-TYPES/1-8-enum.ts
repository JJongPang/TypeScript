{
    // Enum: 여러가지에 관련된 상수값들을 한 곳으로 모아서 정의할수있게 도와주는 타입


    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 2, "WEDNESDAY": 3});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    // 되도록이면 union type을 사용하면 좋다.
     type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

    enum Days {
        Monday = 'mon',
        Tuesday = 'tue',
        Wednesday = 'wed',
        Thursday = 'thu',
        Friday = 'fri',
        Satarday = 'sat',
        Sunday = 'sun',
    }
    console.log(Days.Monday);
    const day: Days = Days.Satarday;
    console.log(day);

    const dayOfResult: DaysOfWeek = 'Monday';

}