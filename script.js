function minDate(dates) {
  let min = new Date(dates[0]);

  for (let i = 1; i < dates.length; i++) {
    const current = new Date(dates[i]);
    if (current < min) {
      min = current;
    }
  }

  const year = min.getFullYear();
  const month = String(min.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(min.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
