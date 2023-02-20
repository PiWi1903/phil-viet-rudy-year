function chinaLunar() {
    var y0 = document.form1.year.value;
    var n = ((y0 - 1000) % 60) + 1;
    var z = n % 12;
    if (z == 0) z = 12;
    var name = new Array(
      "",
      "Rat",
      "Ox",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Goat",
      "Monkey",
      "Rooster",
      "Dog",
      "Pig"
    );
    $(".lunar-year").text(name[z]);
  }
  function learn_sign() {
    var date = document.form1.day.value;
    var month = document.form1.month.value;
    with (document.form1.znak) {
      if ((month == 1 && date >= 20) || (month == 2 && date <= 19))
        value = "Aquarius(20.1 - 19.2)";
      else if ((month == 2 && date >= 20) || (month == 3 && date <= 20))
        value = "Pisces(20.2 - 20.3)";
      else if ((month == 3 && date >= 21) || (month == 4 && date <= 20))
        value = "Aries(21.3 - 20.4)";
      else if ((month == 4 && date >= 21) || (month == 5 && date <= 20))
        value = "Taurus(21.4 - 20.5)";
      else if ((month == 5 && date >= 21) || (month == 6 && date <= 21))
        value = "Gemini(21.5 - 21.6)";
      else if ((month == 6 && date >= 22) || (month == 7 && date <= 22))
        value = "Cancer(22.6 - 22.7)";
      else if ((month == 7 && date >= 23) || (month == 8 && date <= 22))
        value = "Leo(23.7 - 22.8)";
      else if ((month == 8 && date >= 23) || (month == 9 && date <= 22))
        value = "Virgo(23.8 - 22.9)";
      else if ((month == 9 && date >= 23) || (month == 10 && date <= 22))
        value = "Libra(23.9 - 22.10)";
      else if ((month == 10 && date >= 23) || (month == 11 && date <= 21))
        value = "Scorpio(23.10 - 21.11)";
      else if ((month == 11 && date >= 22) || (month == 12 && date <= 21))
        value = "Sagittarius(22.11 - 21.12)";
      else if ((month == 12 && date >= 22) || (month == 1 && date <= 19))
        value = "Capricorn(22.12 - 19.1)";
      else value = "Invalid Date!";
      if (date < 1 || (month == 2 && date > 29)) value = "Invalid Date!";
      if ((month == 1 || 3 || 5 || 7 || 8 || 10 || 12) && date > 31)
        value = "Invalid Date!";
      if ((month == 4 || 6 || 9 || 11) && date > 30) value = "Invalid Date!";
    }
    $(".lunar-date").text(document.form1.znak.value);
  }
  function getAge() {
    var day = document.form1.day.value;
    var month = document.form1.month.value;
    var year = document.form1.year.value;
    var today = new Date();
    var birthDate = new Date(year, month - 1, day);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    $(".your-age").text(age);
    $(".your-birthDate").text(
      birthDate.getDate() +
        "." +
        Number(birthDate.getMonth() + 1) +
        "." +
        birthDate.getFullYear()
    );
  }
  function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }
  $(document).ready(function () {
    $(".js-submit").on("submit", function (e) {
      e.preventDefault();
      chinaLunar();
      learn_sign();
      getAge();
      $(".your-name").text(document.form1.name.value);
      $(".your-name-form").val(document.form1.name.value);
      $(".step-1").hide();
      $(".step-2").show();
      window.scrollTo(0, 0);
      var yourName = $('form[name="form1"] input[name="name"]').val();
      $('form[name="form2"] input[name="name"]').val(yourName);
    });
    $(".step-2_submit").click(function () {
      $(".step-2").hide();
      $(".step-3").show();
      window.scrollTo(0, 0);
      $("footer").show();
    });
  });
  $(".toform").click(function () {
    $("html, body").animate({ scrollTop: $("#form").offset().top - 0 }, 800);
    return false;
  });
  var months_localized = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var d = new Date();
  var dx = 0;
  if (d.getUTCDate() <= 23) {
    dx = d.getMonth();
  } else {
    dx = d.getMonth() + 1;
  }
  if (dx == 12) {
    dx = 0;
  }
  var thisYear = d.getFullYear();
  $(".yearCurrent").text(thisYear);
  $(".monthThen").text(months_localized[dx]);
  var season = {
    pl: ["Zima", "Wiosna", "Lato", "Jesień"],
    th: ["ฤดูหนาว", "ฤดูใบไม้ผลิ", "ฤดูร้อน", "ฤดูใบไม้ร่วง"],
    it: ["L`inverno", "La primavera", "L`estate", "L`autunno"],
    es: ["Invierno", "Primavera", "Verano", "Otoño"],
    cz: ["Zima", "Jaro", "Léto", "Podzim"],
    hu: ["Tél", "Tavasz", "Nyári", "Ősz"],
    en: ["Winter", "Spring", "Summer", "Autumn"],
  };
  var theLanguage = $("html").attr("lang");
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  if (month >= 1 && month <= 10) {
    month += 2;
  } else {
    month -= 10;
    year += 1;
  }
  var sx = 0;
  if (month >= 3 && month <= 5) {
    ++sx;
  } else if (month > 5 && month <= 8) {
    sx += 2;
  } else if (month > 8 && month < 12) {
    sx += 3;
  }
  var fatefulDate = month + "." + year;
  var currentSeason = season[theLanguage][sx];
  $(".fdate").text(fatefulDate);
  $(".season").text(currentSeason);
  
  