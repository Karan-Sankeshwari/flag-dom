let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    },
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    }
  ];

  
  countriesInfo.forEach((country) =>{
      flag_div = document.createElement("div");
      flag_div.setAttribute("class","flag");
      flag_img_container_div = document.createElement("div");
      flag_img_container_div.setAttribute("class","flag-img-container");
      flag_img = document.createElement("img");
      flag_img.setAttribute("src",country.flag);
      flag_img.setAttribute("class","flag-img");
      flag_img_container_div.append(flag_img);
      text_container = document.createElement("div");
      text_container.setAttribute("class","container-text")
      country_name = document.createElement("h4");
      country_name.innerText = country.name
      p1 = document.createElement("p");
      b1 = document.createElement("h5");
      b1.innerText = "Population: ";
      s1 = document.createElement("span")
      s1.innerText = country.population
      p1.append(b1)
      p1.append(s1)


      p2 = document.createElement("p");
      b2 = document.createElement("b");
      b2.innerText = "Region: ";
      s2 = document.createElement("span")
      s2.innerText = country.region
      p2.append(b2)
      p2.append(s2)

      p3 = document.createElement("p");
      b3 = document.createElement("b");
      b3.innerText = "Capital: ";
      s3 = document.createElement("span")
      s3.innerText = country.capital
      p3.append(b3)
      p3.append(s3)
      text_container.append(country_name)
      text_container.append(p1)
      text_container.append(p2)
      text_container.append(p3)

      flag_div.append(flag_img_container_div)
      flag_div.append(text_container)
      document.body.append(flag_div)
  })