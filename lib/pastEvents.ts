export interface CalendarEvent {
  month: string;
  day: string;
  summary: string;
  link: string;
  date: string;
}

const pastEvents: CalendarEvent[] = [
  {
    month: 'Feb',
    day: '10',
    summary: 'Central Park Classic',
    link: 'https://www.bikereg.com/64054',
    date: '2024-02-10',
  },
  {
    month: 'Feb',
    day: '25',
    summary: 'Prospect Park Spring Classic',
    link: 'https://www.bikereg.com/64230',
    date: '2024-02-25',
  },
  {
    month: 'Apr',
    day: '13',
    summary: 'Beach Channel Bike Time Trial & Inline Skates',
    link: 'https://www.bikereg.com/64965',
    date: '2024-04-13',
  },
  {
    month: 'Apr',
    day: '27',
    summary: 'Atlantic Duathlon',
    link: 'https://runsignup.com/Race/NY/FarRockaway/AtlanticDuathlon',
    date: '2024-04-27',
  },
  {
    month: 'May',
    day: '12',
    summary: 'Coney Island Criterium (Road, Fixed, Skates)',
    link: 'https://www.bikereg.com/65211',
    date: '2024-05-12',
  },
  {
    month: 'May',
    day: '18',
    summary: 'Free Chariot Tournament',
    link: 'https://www.bikereg.com/65852',
    date: '2024-05-18',
  },
  {
    month: 'Jun',
    day: '23',
    summary: "Randall's Island Criterium (Road, Fixed, Skates)",
    link: 'https://www.bikereg.com/65638',
    date: '2024-06-23',
  },
  {
    month: 'Jun',
    day: '29',
    summary: 'Free Chariot Tournament',
    link: 'https://www.bikereg.com/66169',
    date: '2024-06-29',
  },
  {
    month: 'Jul',
    day: '14',
    summary: 'Free Endurance Clinic & Races',
    link: 'https://www.bikereg.com/66835',
    date: '2024-07-14',
  },
  {
    month: 'Aug',
    day: '4',
    summary: "The Devil's Scratch (Kissena Velodrome)",
    link: 'https://www.bikereg.com/thedevilsscratch',
    date: '2024-08-04',
  },
  {
    month: 'Aug',
    day: '18',
    summary: 'East New York Criterium (Road, Fixed, Skates)',
    link: 'https://www.bikereg.com/64408',
    date: '2024-08-18',
  },
  {
    month: 'Aug',
    day: '25',
    summary: 'Riverside Criterium',
    link: 'https://www.bikereg.com/65268',
    date: '2024-08-25',
  },
  {
    month: 'Sep',
    day: '29',
    summary: "Randall's Island Criterium (Road, Fixed, Skates)",
    link: 'https://www.bikereg.com/randalls',
    date: '2024-09-29',
  },

  // Events for 2023
  {
    month: 'Feb',
    day: '26',
    summary: "Randall's Island Crit #1",
    link: 'https://www.bikereg.com/59086',
    date: '2023-02-26',
  },
  {
    month: 'Mar',
    day: '4',
    summary: "Randall's Island Crit #2",
    link: 'https://www.bikereg.com/59217',
    date: '2023-03-04',
  },
  {
    month: 'Mar',
    day: '18',
    summary: "Randall's Island Crit #3",
    link: 'https://www.bikereg.com/59640',
    date: '2023-03-18',
  },
  {
    month: 'Mar',
    day: '19',
    summary: "Randall's Island Crit #4",
    link: 'https://www.bikereg.com/59218',
    date: '2023-03-19',
  },
  {
    month: 'Apr',
    day: '8',
    summary: 'Prospect Park Spring Classic',
    link: 'https://www.bikereg.com/59920',
    date: '2023-04-08',
  },
  {
    month: 'Apr',
    day: '22',
    summary: 'First Responders Beach Channel TT (Bike & Inline Skate)',
    link: 'https://www.bikereg.com/59297',
    date: '2023-04-22',
  },
  {
    month: 'May',
    day: '6',
    summary: 'Central Park Spring Classic',
    link: 'https://www.bikereg.com/60687',
    date: '2023-05-06',
  },
  {
    month: 'Jul',
    day: '2',
    summary:
      "NYC Crits #1: Randall's Island Criterium (Road Bikes & Inline Skates)",
    link: 'https://www.bikereg.com/61098',
    date: '2023-07-02',
  },
  {
    month: 'Jul',
    day: '9',
    summary:
      "NYC Crits #2: Randall's Island Criterium Road and Fixed Gear Bikes",
    link: 'https://www.bikereg.com/61225',
    date: '2023-07-09',
  },
  {
    month: 'Jul',
    day: '22',
    summary: 'NYC Crits #3: North Woodmere Criterium',
    link: 'https://www.bikereg.com/61515',
    date: '2023-07-22',
  },
  {
    month: 'Jul',
    day: '23',
    summary:
      "NYC Crits #4: Randall's Island Criterium (Road Bikes & Inline Skates)",
    link: 'https://www.bikereg.com/61226',
    date: '2023-07-23',
  },
  {
    month: 'Aug',
    day: '20',
    summary: 'East New York Criterium',
    link: 'https://www.bikereg.com/61993',
    date: '2023-08-20',
  },

  // // Events for 2022
  // {
  //   month: 'Apr',
  //   day: '24',
  //   summary: "NYC Crits: Randall's Island Criterium (Fixed & Road Bike)",
  //   link: 'https://www.bikereg.com/56179',
  //   date: '2022-04-24',
  // },
  // {
  //   month: 'May',
  //   day: '7',
  //   summary: 'NYC Crits: Central Park Criterium (Road Bikes & Inline Skates)',
  //   link: 'https://www.bikereg.com/55973',
  //   date: '2022-05-07',
  // },
  // {
  //   month: 'Jun',
  //   day: '11',
  //   summary: 'NYC Crits: Coney Island Crit (Road & Fixed Gear Bikes)',
  //   link: 'https://www.bikereg.com/56612',
  //   date: '2022-06-11',
  // },
  // {
  //   month: 'Jul',
  //   day: '9',
  //   summary: "NYC Crits: Randall's Island Criterium (Road & Fixed Gear)",
  //   link: 'https://www.bikereg.com/57258',
  //   date: '2022-07-09',
  // },
  // {
  //   month: 'Jul',
  //   day: '23',
  //   summary: "NYC Crits: Randall's Island Criterium (Road & Fixed Gear)",
  //   link: 'https://www.bikereg.com/57259',
  //   date: '2022-07-23',
  // },

  // // Events for 2021
  // {
  //   month: 'Apr',
  //   day: '11',
  //   summary: "Randall's Island Criterium (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/51459',
  //   date: '2021-04-11',
  // },
  // {
  //   month: 'May',
  //   day: '1',
  //   summary: 'Central Park Criterium (Road & Fixed Gear Bikes)',
  //   link: 'https://www.bikereg.com/52654',
  //   date: '2021-05-01',
  // },
  // {
  //   month: 'Jun',
  //   day: '12',
  //   summary: 'Coney Island Criterium (Road & Fixed Gear Bikes)',
  //   link: 'https://www.bikereg.com/53897',
  //   date: '2021-06-12',
  // },
  // {
  //   month: 'Jul',
  //   day: '10',
  //   summary: "Randall's Island Crit (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/55061',
  //   date: '2021-07-10',
  // },

  // // Events for 2020
  // {
  //   month: 'Mar',
  //   day: '15',
  //   summary: "Randall's Island Crit (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/47853',
  //   date: '2020-03-15',
  // },
  // {
  //   month: 'Apr',
  //   day: '5',
  //   summary: 'Central Park Criterium (Road & Fixed Gear Bikes)',
  //   link: 'https://www.bikereg.com/48677',
  //   date: '2020-04-05',
  // },
  // {
  //   month: 'Jun',
  //   day: '7',
  //   summary: 'Coney Island Criterium (Road & Fixed Gear Bikes)',
  //   link: 'https://www.bikereg.com/49435',
  //   date: '2020-06-07',
  // },

  // // Events for 2019
  // {
  //   month: 'Feb',
  //   day: '16',
  //   summary: 'Central Park Winter Classic',
  //   link: 'https://www.bikereg.com/46473',
  //   date: '2019-02-16',
  // },
  // {
  //   month: 'Mar',
  //   day: '9',
  //   summary: "Randall's Island Crit (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/46992',
  //   date: '2019-03-09',
  // },
  // {
  //   month: 'Apr',
  //   day: '6',
  //   summary: 'Prospect Park Spring Classic',
  //   link: 'https://www.bikereg.com/47529',
  //   date: '2019-04-06',
  // },
  // {
  //   month: 'May',
  //   day: '11',
  //   summary: 'Coney Island Crit (Road & Fixed Gear Bikes)',
  //   link: 'https://www.bikereg.com/48268',
  //   date: '2019-05-11',
  // },
  // {
  //   month: 'Jun',
  //   day: '15',
  //   summary: "Randall's Island Criterium (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/49075',
  //   date: '2019-06-15',
  // },
  // {
  //   month: 'Jul',
  //   day: '14',
  //   summary: "Randall's Island Criterium (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/49656',
  //   date: '2019-07-14',
  // },

  // // Events for 2018
  // {
  //   month: 'Feb',
  //   day: '25',
  //   summary: "Randall's Island Winter Crit",
  //   link: 'https://www.bikereg.com/45271',
  //   date: '2018-02-25',
  // },
  // {
  //   month: 'Mar',
  //   day: '18',
  //   summary: "Randall's Island Crit (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/45532',
  //   date: '2018-03-18',
  // },
  // {
  //   month: 'Apr',
  //   day: '7',
  //   summary: 'Prospect Park Spring Classic',
  //   link: 'https://www.bikereg.com/46022',
  //   date: '2018-04-07',
  // },
  // {
  //   month: 'May',
  //   day: '5',
  //   summary: 'Central Park Classic',
  //   link: 'https://www.bikereg.com/46654',
  //   date: '2018-05-05',
  // },
  // {
  //   month: 'Jun',
  //   day: '16',
  //   summary: "Randall's Island Crit (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/47319',
  //   date: '2018-06-16',
  // },
  // {
  //   month: 'Jul',
  //   day: '14',
  //   summary: "Randall's Island Crit (Road & Fixed Gear Bikes)",
  //   link: 'https://www.bikereg.com/47721',
  //   date: '2018-07-14',
  // },
];

export default pastEvents;
