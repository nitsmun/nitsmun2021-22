/*
CHANGES REQUIRED:
1. make one article(and the expand and shrink functions) a seperate component, 
    and pass article data as a prop from the parent component
    (instead of doing it in the for loop with iteration)
2. Get rid of the inline styling and bootstrap. 
*/

import { Suspense } from "react";
import Loading from "../Loading";
import "./Articles.css";

function Articles(props) {
    function Expand(article_index) {
        var buttons = document.getElementsByClassName("expand" + article_index)
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "hidden"
        }
        let element = document.getElementById("Expand" + article_index)
        element.style.display = ""
        //console.log(element)
    }

    function Shrink(article_index) {
        // let element = document.querySelector("#Expand")
        // var buttons = document.getElementsByClassName("expand")
        let element = document.getElementById("Expand" + article_index)
        var buttons = document.getElementsByClassName("expand" + article_index)
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "visible"
        }
        //console.log(element)
        element.style.display = "none"
    }
    // store the dates in a proper format
    const articles_list = [
        {
            index: "1",
            heading: "Groovy Sundries: The Best Weapon",
            date: "29th June, 2021",
            image: "img/groovy_war_and_peace.jpg",
            short: <>“The best weapon is to sit and talk”- NELSON MANDELA. <br /><br /> The aforementioned quote was an absolute idea for world peace and an inspiration for architecture firm Snøhheta, which gave shape to a piece of Architecture with deep Engrossed meaning, THE BEST WEAPON. <br /><br /> A six-and-half metre long arc, made of anodized aluminium for it’s durability is installed at UN Headquarters’ Plaza in NYC. The arc touches ground at its lowest point pulling the people closer to each other because of it’s curve and imparts a subtle message to promote the effectiveness of dialogues between two opposite thought processes.</>,
            long: <>Since it’s installation, it has been a sign of Dialogue and Diplomacy and a tribute to all the Noble Peace Prize laureates and their efforts to make this world a better place. According to sources, it shall be later on shifted to Nobel Peace Centre at Oslo City Hall but, right now it is located at the main entry of UN Headquarters Plaza, right beside another jaw-dropping sculpture resembling Non-violence, "The Knotted Gun".<br /><br /> An exquisite quote lead to an inspiring Idea which gave birth to a symbolic sculpture for promoting dialogue and Peace.</>,
        },
        {
            index: "2",
            heading: "International Day of Cooperatives",
            date: "3rd July, 2021",
            image: "img/day_of_cooperatives.jpg",
            short: <>“Coming together is a beginning, keeping together is progress, working together is success" - Henry Ford. <br /><br />Cooperatives have always been an integral part in bringing people together in a democratic and equal way contributing to the eradication of poverty and promoting economic and social progress.</>,
            long: <>To increase awareness and to promote the Cooperative Movement's ideals of international solidarity, economic efficiency, equality and world peace, The International Day of Cooperatives (#coopsday) is celebrated on the first Saturday of July every year. Since 1995,the United Nations and the International Cooperative Alliance have been setting the theme for International Coops Day. <br /><br />This year, 3rd July will be celebrated as International Day of Cooperatives with the theme “Rebuild Better Together". The theme aims at unitedly building back better and stronger tomorrow overcoming the social and economic impact the COVID-19 pandemic had on different strata of the society. <br /><br />On this day, Cooperatives in different spheres of work all across the globe will showcase the strength of togetherness and how with the sustained values of self-help and solidarity, the world can overcome the immediate impacts of the pandemic. <br /><br />NITSMUN urges everyone to actively participate with the Cooperatives to build a better world for all of us.</>,
        },
        {
            index: "3",
            heading: "Groovy Sundries: The Peace Window",
            date: "5th July, 2021",
            image: "img/groovy_the_peace_window.jpg",
            short: <>"A tous ceux qui ont servi les buts et principes de la Charte des Nations Unies et pour lesquels Dag Hammarskjöld a donné sa vie" ["To all who served the Purposes and Principles of the United Nations Charter, for which Dag Hammarskjöld gave his life."]. <br /><br />Inspired by A Biblical passage, Isaiah 9, 1–7, Russian-French artist Marc Chagall’s “The Peace Window”, was a gift from the United Nations staff members, as well as Marc Chagall himself. </>,
            long: <>The panel, whose full title is “The Window of Peace and Human Happiness”, is predominantly blue in color and full of whimsical figures and symbolism. It stands at 12 feet and 15 feet wide and contains several symbols of peace and love, such as the young child in the center being kissed by an angelic face which, emerges from a mass of flowers. On the left, below and above, motherhood and the people who are struggling for peace are depicted. Musical symbols in the panel evoke the thoughts of Beethoven's Ninth Symphony, which was a favorite of Mr. Hammarskjöld's.This beautiful, vibrant stained glass window was unveiled by Secretary-General U Thant on 17 September 1964.</>,
        },
        {
            index: "4",
            heading: "World Population Day",
            date: "11th July, 2021",
            image: "img/day_world_population.jpg",
            short: <>"Rights and choices are the answer: Whether baby boom or bust, the solution to shifting fertility rates lies in prioritizing the reproductive health and rights of all people."<br /><br /> With the above-given theme, the 32nd World population Day is celebrated this year. Established by the Governing Council of the United Nations Development Program on 11th July 1989, the event was first observed on 11th July 1990, in more than 90 countries. World Population Day is an annual event, with an aim to raise awareness of global population issues.</>,
            long: <>The Covid-19 pandemic and its control measures have impacted health care systems particularly in sexual and reproductive health and reproductive behavior globally. It has also marked an increase in gender-based violence, and the risk of child marriage and female genital mutilation, as programs to abolish the harmful practices were disrupted. <br /><br /> Thus, World Population Day is the celebration of awareness, people are encouraged to learn about issues like the importance of family planning, gender equality, poverty, human rights, maternal and baby health, right to health, sexuality education, use of contraceptives, and safety measures, reproductive health, adolescent pregnancy, girl child education, child marriage, sexually transmitted infections, etc. <br /><br />NITSMUN reminds everyone that collective efforts to control population will help to ensure resources for all!</>,
        },
        {
            index: "5",
            heading: "Groovy Sundries: War and Peace",
            date: "13th July, 2021",
            image: "img/groovy_war_and_peace.jpg",
            short: <>"War and Peace are more than magnificent works of art. They are Portinari’s call to action. Thanks to him, all leaders who enter the United Nations see the terrible toll of war and the universal dream for peace."<br /><br />Quoted by Ban Ki-moon during the inauguration of War and Peace, in the United Nations Headquarters on September 8, 2015, the above lines were dedicated to Candido Portinari, a Brazilian painter.</>,
            long: <>His masterpiece War and Peace, made between 1952 and 1956, consists of a set of two paintings that work together as a representation of the atrocity of war and the suffering of victims and the importance of maintaining peace and the attempts to end violent conflicts in the world. <br /><br /> Recognised as a gift from the Brazilian government for the United Nations Headquarters, these paintings are about 14.32 metres tall and 10.66 metres large each.<br /><br /> War and peace were marked as Portinari’s last work and the reason for the artist’s death on February 6, 1962. Despite being warned by the doctors about being intoxicated due to long term inhalation of the paint he used, Portinari was dedicated to finishing his masterpieces and thus, sacrificed his own health in the hope to send an important message to the world.</>,
        },
        {
            index: "6",
            heading: "World Youth Skills Day",
            date: "15th July, 2021",
            image: "img/youth_skills_day.jpg",
            short: <>The COVID-19 Pandemic has enveloped the world population and has had its toll on various sectors of society, leaving the economy crippled. With institutions of learning coming to a closure, work from home being the sole retreat from avoiding the spread of infection, the developing countries with lack of accessibility to technological instruments of communication have suffered staggering unemployment in a world practising social distancing. For the creation of a better world economy that promotes employment through the development of skills, World Youth Skills Day is observed. The objective of the day is to direct the youth towards making informed choices in matters of employment and focus on the development of strategies for equipping the youth with skills for entrepreneurship and decent work.</>,
            long: <>15th July was first recognised as world Youth Skills Day in the year 2014 by the United Nations General Assembly. The UNESCO and the UNEVOC, working under the United Nations, contribute towards the promotion of the activities associated with the day. Furthermore, to realise the objective behind the observance of this day, the India Skills Competition is held every two years.<br />With the aim to celebrate the creativity and resilience of youth through the pandemic, the theme for this year has been decided to be “Reimagining youth skills post-pandemic”. It devotes attention to areas of skill development in various fields including Technical and Vocal education and training (TVEC), which would help in realising the goal of Education 2030.<br /><br />Recognising the importance of acquiring skills in creating sustainable economic growth, the NITSMUN fraternity wishes everyone a happy World Youth Skills Day. Start training in a new skill today!</>,
        },
        {
            index: "7",
            heading: "International Nelson Mandela Day",
            date: "18th July, 2021",
            image: "img/nelson_mandela_day.jpg",
            short: <>AS WE LET OUR OWN LIGHT SHINE, WE UNCONSIOUSLY GIVE OTHER PEOPLE PERMISSION TO DO THE SAME” - Nelson Mandela<br /><br />When we think of great personalities who have affected lives of millions around the world and have been the source of inspiration for generations. One name that comes up in everyone’s mind is Nelson Mandela. He was a former president of south Africa from 1994 to 1999. he was the country’s first black head of state and the first elected in a fully representative democratic election. His enormous contributions towards laying the foundation of democratic south Africa with peaceful termination of the Apartheid regime led him to win the Nobel Peace Prize in 1993.</>,
            long: <>The United Nations General Assembly (UNGA) declared 18 July as “The Nelson Mandela International Day” on November 2009. Resolution A/RES/64/13 recognises and acknowledges his struggle and contributions for promoting a culture of peace internationally.<br /><br />The theme for this year is “Take action, inspire change”. It signifies the importance of working together in this tough time of pandemic to bring change in the upcoming days.<br /><br />This year on Nelson Mandela’s birthday, NITSMUN urges everyone to put a step forward to help those who are in need, inspire them and collectively pass through this fight against COVID-19 and move toward a healthy and peaceful world.</>,
        },
        {
            index: "8",
            heading: "Groovy Sundries: Bust of Polish astronomer Nicolaus Copernicus",
            date: "19th July, 2021",
            image: "img/groovy_bust_of_polish_astronomer.jpg",
            short: <>“To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge”— Nicolaus Copernicus<br /><br />Nicolaus Copernicus (1473-1543) was a renaissance polymath, an active mathematician and astronomer, who formulated a model of the universe that proved that in the middle of everything is the sun rather than the Earth. His books “De revolutionibus orbium Coelestium” had led to the end of the heliocentric theory of the sun’s motion and instead suggested the movement of planets around the sun.</>,
            long: <>Copernicus’ Bust was carved out from a block of Finnish granite. Secretary General U Thant in his presentation of this gift in 1970 said “Copernicus was one of those rare brilliant individuals who extend the frontiers of knowledge for mankind. All of us at the United Nations will draw inspiration from the universal message which he brings to us. Having laid the foundation of modern planetary astronomy, Copernicus can take credit for having launched our twentieth century astronauts and cosmonauts on their adventurous journey into the universe." Nicolaus Copernicus had truly revolutionised the world of Mathematics and Astronomy. The Bust is located at the Dag Hammarskjöld Library, New York.</>,
        },
        {
            index: "9",
            heading: "Groovy Sundries: La Freccia(The Arrow)",
            date: "27th July, 2021",
            image: "img/groovy_arnaldo_pomodoro.jpg",
            short: <>Arnaldo Pomodoro, the author of 'La Freccia" was born in Italy, on June 23, 1926. Everyone is surprised by his work because he deeply takes care into geometrical importance of the sculpture as well as inside material.Firstly he will work on the drawing and later he creates it for life-size plaster preparation. Pomodoro stated that "artistic deformation occurs here when the 'freccia' splits into two open segments in space."</>,
            long: <>Carlo Azeglio Ciampi, The president of Italian Republic, donated the sculpture to UNESCO during 31st General Conference of UNESCO. At first it was placed at Fontenoy Piazza but later it was shifted to the Bonvin Piazza.Actually the bronze "La Freccia" gives the impression of having been open, leaving the cracks as signifying the fragility of the material.The Italian State Secretary for Cultural Assets and Activities clearly explained during the inauguration that the two wings in the Sculpture represents 'Culture and Education' that elevates the man like this arrow towards their noble goals.</>,
        },
        {
            index: "10",
            heading: "Groovy Sundries: Peace monument",
            date: "25th October, 2021",
            image: "img/peace_monument.jpg",
            short: <>Popularly known as the statue of “Mir”(Peace), one of the renowned works of Croation sculptor Antun Augustinčić, it is one of the symbols of the United Nations Headquarters in New York.</>,
            long: <><br />The statue symbolising a female equestrian leading the Nations of the World towards peace, was cast in bronze in Zagreb in 1954 while the 33 feet high pedestal, on which she stands, was made of marble from the Croatian Island of Brač. The statue shows the equestrian carrying an olive branch in one hand while a globe on the other, with her cloak fluttering on her back and the stance of the horse that suggests powerful forward movement.<br /><br />The construction of the statue was completed in Rijeka, after which, it was transported to New York. Originally a gift of the Government of the former Yugoslavia, it is placed on the North Lawn of the United Nations Headquarters.</>,
        },
        {
            index: "11",
            heading: "International Day to End Impunity for Crimes against Journalists",
            date: "2nd November, 2021",
            image: "img/crime_against_journalists.jpg",
            short: <>Reporting the news is often a risky job if one is up against the powerful, and statistics tell us an equivalent. It has been found that one journalist has been murdered every 4 days within the last decade, on an average. Countries with no armed conflict had a higher ratio of these crimes. More than 12,000 journalists were assassinated between 2006 and 2020 for just doing their job. The killers walk free in 9 out of 10 cases, says the UNESCO observatory for killed journalists. These stats paint a dark picture for freedom of the press.</>,
            long: <>To raise awareness and formulate ways to counter these incidents, the United Nations General Assembly declared November 2 as the International Day to End Impunity for Crimes against Journalists. The resolution passed within the General Assembly in 2013 not only condemns all such attacks on journalists but also urges all member nations to guard journalists from threats to their lives and make sure that the victims get access to the specified remedies. In addition, it appeals to counties to empower journalists by giving them a secure atmosphere to try to do their job with no interference.<br /><br />The key aspect of prosecutorial services is the primary focus of this year’s International Day to end Impunity for Crimes against Journalists. This includes a deep check out investigating and prosecuting not just assassinations but all types of threats of violence towards journalists.<br /><br />This day just doesn’t address the sole issue of murdering journalists, but goes beyond and also incorporate talks about threats of violence, kidnapping, torture, harassment, and online harassment. Women journalists are the foremost common targets of online harassment.<br /><br />These dangers lead to an environment where ideas and speech cannot travel freely. This is the rationale that such each day is required to guard and empower media professionals across the planet.</>,
        },
        {
            index: "12",
            heading: "Groovy Sundries: Zun of Peace",
            date: "3rd November, 2021",
            image: "img/zun_of_peace.jpg",
            short: <>Modelled after Zun, a bronze ritual object in China, the sculpture Zun of Peace is a gift to United Nations from China.<br /><br />The word “Zun” means reverence in Chinese. China’s high regar and the wishes of 1.3 billion Chinese people to the United Nations is represented by this sculpture.</>,
            long: <>The sculpture is coloured in “Chinese Red” with dragons on top which represent the guardians of peace. Prosperity across the whole wide world is represented by the elephants and phoenixes on  both sides. Traditional elements on the whole work represent the Silk Road, representative of China’s vision of peace and development. China’s high regard for 70 years of the United Nation’s dedication to world peace is symbolized by 7 flying doves.</>,
        },
        {
            index: "13",
            heading: "International Day for Preventing the Exploitation of the Environment in War and Armed Conflict",
            date: "6th November, 2021",
            image: "img/exploitation_of_env_in_war.jpg",
            short: <>Even though humanity has always counted its war casualties in terms of dead and wounded soldiers and civilians, destroyed cities and livelihoods, the environment has often remained the unpublicized victim of war. Water wells have been polluted, crops torched, forests cut down, soils poisoned, and animals killed to gain military advantage.<br /><br />Then United Nations attaches great importance to ensuring that action on the environment is part of conflict prevention and peacekeeping  strategies, because there can be no durable peace if the natural resources that sustain livelihoods and ecosystems are destroyed.</>,
            long: <>On 27 May 2016, the United Nations Environment Assembly adopted resolution UNEP/EA.2/Res.15, which recognized the role of healthy ecosystems and sustainably managed resources in reducing the risk of armed conflict, and reaffirmed its strong commitment to the full implementation of the Sustainable Development Goals listed in General Assembly resolution 70/1, entitled “Transforming our world: the 2030 Agenda for Sustainable Development”.<br /><br />Therefore, the United Nations Environment Programme (UNEP) has found that over the last 60 years, at least 40% of all internal conflicts have been linked to the exploitation of natural resources.<br /><br />So, on 5 November 2001, the UN General Assembly declared 6 November of each year as the International Day for Preventing the Exploitation of the Environment in War and Armed Conflict.</>,
        },
        {
            index: "14",
            heading: "World Science Day for Peace and Development",
            date: "10th November, 2021",
            image: "img/science_day.jpg",
            short: <>Every year since 2002, UNESCO observes 10 November as World Science Day for Peace and Development. The day emphasises the importance of science in society and the importance of involving the common people in growing scientific challenges. It aims to ensure that citizens are informed and up-to-date about the developments in science. The day sheds light on the vital contributions of scientists on the daily lives of humans.</>,
            long: <>COVID 19 pandemic made the world realize the importance of science. Although society wasn’t completely oblivious to the existence of science, the importance of science in society was rejuvenated in the pandemic.<br /><br />The main purpose of this day is to make the common public aware of the role of science for peaceful and sustainable societies. Promoting national and international solidarity for shared science and renewing commitments for the use of science for benefit of societies is also a purpose of this day. It also strives to call attention to the different hurdles that science faces in its pursuit of knowledge.<br /><br />"Building Climate-Ready Communities" is the theme of World Science Day for Peace and Development for 2021. Now that the pandemic induced wounds are healing, the theme targets the bigger evil, Climate change. The objective is to bring science closer to society and highlight scientific and technological solutions to some of society's major global challenges today.</>,
        },
        {
            index: "15",
            heading: "Good defeats Evil",
            date: "15th November, 2021",
            image: "img/good_defeats_evil.jpg",
            short: <>"I don't think good and evil are polarised".<br />– Sam Mendes<br /><br />The Sculpture was created by the Russian painter and sculptor, Zurab Tsereteli. It remembers  the 1987 signing of the Treaty on the Elimination of Intermediate - Range and Shorter - Range Nuclear Missiles (INF Treaty), and is in celebration of the 45 Session of the General Assembly. It was created as a monument to peace, the sculpture consists of several parts of actual US and Soviet missiles. The work actually depicts an allegorical St. George, one arm raised person, as he drives a lance through a double headed dragon.</>,
            long: <>But really,the dragon in the sculpture is not the important mythological beast of the first Christian tradition.It's the specter of nuclear war vanquished by the historic treaties between the Soviet Union and the United States. Therefore the dragon in the sculpture is shown as lying down amid the broken pieces of Soviet SS-20 and U.S. Pershing missiles. Hence actual fragments of that weapons are utilized in the sculpture.</>,
        },
        {
            index: "16",
            heading: "International Day for Tolerance",
            date: "16th November, 2021",
            image: "img/int_day_for_tolerance.jpg",
            short: <>“In the practice of tolerance, one’s enemy is his best teacher”<br />–  Dalai Lama XIV<br /><br />International Day for Tolerance is commemorated every year on November 16 to strengthen the mutual understanding among different cultures and promote tolerance among people. The day began as an initiative to affirm that tolerance is an appreciation of the world’s diversity which recognises human rights and the freedom of others. The wide diversity of culture, mindset, ethnicity around the globe requires only tolerance to ensure the peaceful survival of mixed communities.</>,
            long: <>The United Nations declared November 16 as the International Day for tolerance in 1995 because it was the day when the UNESCO(United Nations Educational, Scientific and Cultural Organization) formulated the Declaration of Principles on Tolerance. The Declaration signifies tolerance not only as a moral duty, but also as a political and legal requirement for Individuals, Groups and States. In 1995, to mark the UN year for tolerance and 125th birth anniversary of Mahatma Gandhi ji, UNESCO created a prize (The UNESCO-Madanjeet Singh Prize for the Promotion of Tolerance and Non-Violence) to reward those who have made significant contributions in the field of science, art, culture and communication with the aim of promoting the spirit of tolerance and non violence. The prize is awarded to institutions/organisations or individuals every two year on this day.<br /><br />To celebrate the day, various events are organised around the globe at educational institutions to generate awareness about the importance of tolerance among cultures and socio-economic groups. This imperative lies at the core of the United Nations Charter, as well as the Universal Declaration of Human Rights. The true virtue of tolerance is more important than ever in this era of rising and violent extremism and widening conflicts that are characterized by a fundamental disregard for human life.<br /><br />NITSMUN urges everyone to develop a feeling of respect, acceptance and appreciation for the rich diversity of our world’s culture and expressions and to lead the world towards a peaceful future.</>,
        },
        {
            index: "17",
            heading: "Fernand Léger Murals",
            date: "22nd November, 2021",
            image: "img/fernand_leger_murals.jpg",
            short: <>“Above all, it is a matter of loving art, not understanding it.”<br />
                – Fernand Léger<br /><br />
                Painted to fill the empty walls of the newly constructed UN General Assembly hall in 1952, these two murals still shine in one of the most prominent places of the world.</>,
            long: <>Designed by an abstract loving artist, the pieces were chosen by his child (out of a number of his sketches) and were completed by one of his pupils, Bruce Gregory. Despite his wish to complete these murals himself, he was concerned to not allow entrance into the US due to his adopted Communist milieu. The most significant fact about these artifacts is that they are still the only gifts to be present in the General Assembly Hall. Then President Harry Truman reportedly exclaimed his perplexity on the murals and gave them unofficial monikers still used widely.<br /><br />A toast to “Bugs Bunny” and “Scrambled eggs!” Significantly exclaiming the fact that you don’t always need to stress on compound logistics to achieve the crest of eminence. Sometimes it’s good to trust the beautiful sync of nature and glide the way in peace!</>,
        },
        {
            index: "18",
            heading: "International Day for the Elimination of Violence against Women",
            date: "25th November, 2021",
            image: "img/elimination_of_crime_against_women.jpg",
            short: <>There is one universal truth, applicable to all countries, cultures and communities: violence against women is never acceptable, never excusable, never tolerable.<br />
                -Ban Ki-moon<br /><br />
                International Day for the Elimination of Violence against Women is celebrated to raise the attention of the fact that women around the world are subject to rape , domestic violence, and other forms of violence. Approximately 1 in 3 women have been abused in their life once. And the numbers even increase, during the crisis as seen during the COVID-19 pandemic.</>,
            long: <>It's high time that gender-based violence must be prevented. Eradication of violence against women starts with believing survivors, adopting extensive and comprehensive strategies that tackle the root causes, transform harmful social norms, and endow women and girls. We can end gender-based violence with proper survivor-centred essential services across policing, justice, health, and social sectors, and adequate financing for the women’s rights agenda.<br /><br />
                The day takes us back to November 25, 1960, when the Mirabal sisters of the Dominican Republic were assassinated by henchmen of dictator Rafael Trujillo. The sisters, who had been active in movements against the Trujillo regime, were beaten and strangled to death.<br /><br />
                The United Nations General Assembly in December 1999, designated November 25 as the International Day for the Elimination of Violence against Women. The date commemorates the beginning of 16 days of remembrance and activism, concluding in International Human Rights Day.<br /><br />
                This campaign which is being led by the UN Secretary-General and UN Women since 2008, aims to stave off violence against women and girls around the world, calling for universal endeavor to increase awareness, encourage advocacy, and develop opportunities for discussion on challenges and solutions.<br /><br />
                NITSMUN encourages everyone to take part in the movement by sharing photos, messages and videos showing how you "orange the world" alongside other people worldwide so that together we can combat the issue and make this world a safer place for women.</>,
        },
        {
            index: "19",
            heading: "Day of Remembrance for all Victims of Chemical Warfare",
            date: "30th November, 2021",
            image: "img/chemical_warfare.jpg",
            short: <>“We must perfect a worldwide system of accountability for nuclear, biological and chemical weapons.” <br />
                – Richard Lugar<br /><br />
                Wars- a threat to humanity and it’s existence, have undergone several evolutions. Archery as a warfare to using of nuclear weapons , all sorts of wars whether fought with ancient or modern weapons have caused catastrophes. The most predominant is the annihilation caused as a consequence of chemical warfare. The world has witnessed the several casualties caused due to chemical weapons in the recent past. In an attempt to offer condolences and tribute to all the victims of Chemical Warfare, an annual event entitled “The Day of Remembrance for all Victims of Chemical Warfare” is observed every year. It even symbolizes the firmness and will towards the commitment of the Organisation for the Prohibition of Chemical Weapons (OPCW) in eliminating the threat posed by chemical warfare thereby promoting the goals of peace, security, and multilateralism.</>,
            long: <>Towards the end of the Second World War, two atomic bombs caused massive destruction in the cities of Hiroshima and Nagasaki that consequently led to 300,000 deaths and other fatalities. Around 9 countries are known to possess nuclear weapons that can be used for warfare any moment. UN in an attempt to evade any such catastrophes caused by chemical weapons in the near future, it sought CHEMICAL DISARMAMENT, while another main reason remains “To Save Succeeding Generations from the Scourge of War".<br /><br />
                Chemical weapons were used on a massive scale during World War I which caused more than 100,000 fatalities and a million casualties.<br /><br />
                However, on the battleground in Europe in World War II, chemical weapons were not into use.  Following World War II, and with the advent of the nuclear debate, several countries gradually came to the realisation that the marginal value of having chemical weapons in their arsenals was limited, while the availability and proliferation of such weapons could cause a severe threat to one’s nation as well to the world peace and that  made a comprehensive ban desirable.<br /><br />
                Consequently, The Conference of the States Parties to the Chemical Weapons Convention, at its 20th Session, decided that a memorial Day of Remembrance for all Victims of Chemical Warfare would be observed on 30 November each year or, when appropriate, on the first day of the regular session of the Conference.<br /><br />
                This memorial day should limelight the several detrimental consequences of a possible chemical warfare in the near future. Today, several countries have become nuclear equipped which is an indication of technology advancement and proliferation, while on the other hand, advancement of nuclear energy, if not used ethically can and will cause serious threat to the world peace. In the Korean Peninsula , rapid nuclear tests have been a matter of concern. The developing nations and those with nuclear technology should ethically and rationally act on using nuclear energy , thereby avoiding any future calamities due to chemical warfare. </>,
        },
        {
            index: "20",
            heading: "World Aids Day",
            date: "1st Dec, 2021",
            image: "img/aids_day.jpg",
            short: <>In the year 2021, there is scarcely anyone on the planet who hasn't heard of the term 'virus.' For the past 1-2 years, the massive COVID-19 outbreak has plagued the entire world. But, as we all know, the COVID-19 vaccine has already been discovered and has reached a huge chunk of the population. Unfortunately the same doesn’t go for AIDS (Acquired Immune Deficiency Syndrome) which is caused by the Human immunodeficiency virus (HIV). The cure for AIDS is yet to be discovered since the discovery of HIV-1 in 1983. AIDS is far more deadly in comparison to COVID-19. By decreasing white blood cells, it targets the entire immune system of the human body, destroying the individual's ability to fight infections in a timely manner. Various Governmental and Non-Governmental organizations throughout the world have been making efforts to spread awareness about AIDS to the masses.</>,
            long: <>Life for an individual becomes very miserable after being tested positive for AIDS. Apart from the physical difficulties caused due to the disease, the social stigma and discrimination act as a slow poison. On December 1 every year, the world commemorates WORLD AIDS DAY to express our respect and support to the people who lost their lives and those who are living with this dreadful disease. The day aims to end all the discriminations and inequalities that drive pandemics such as AIDS around the globe. If we're to end AIDS by 2030, economic, social, cultural, and legal inequalities must be ended as a matter of urgency. “End Inequalities. End AIDS” is the theme of World AIDS day 2021. We need to instill the belief through our love, care, and support among HIV-positive individuals that they can still lead a long and healthy life.<br /><br />
                Currently, AIDS cannot be cured or completely eradicated from society but a part of the solution to AIDS lies in prevention and awareness.<br /><br />
                NITSMUN encourages every individual to have regular and periodical health checkups to avoid such deadly diseases and also to educate others to do the same. We show our support to the brave souls who are fighting the disease and wish for their well-being.<br /><br />
                STAY SAFE, STAY HEALTHY! </>,
        },
        {
            index: "21",
            heading: "International Day for the Abolition of Slavery",
            date: "2nd Dec, 2021",
            image: "img/abolition_of_slavery.jpg",
            short: <>From the bondage system of the 16 century to everyday stories of human trafficking, humankind is ashamed of this deterioration of souls by putting a price tag on them. A fancy but sinister word chosen for it was "Slavery."<br /><br />
                Slavery isn't restricted to its conventional meaning anymore. The modern forms of it are often recognised as forced labour, debt bondage, forced marriage, and human trafficking. More than 40 million people worldwide are victims of it. One in every four is a child!</>,
            long: <>UN alongside International Labour Organisation (ILO) and many other institutions are working relentlessly to make our world free from all forms of slavery. Unfortunately only a few of these discussions have impacted on-ground reality. There are still many innocent women and girls getting exploited everyday just because someone believes to buy emotions with money. There are still millions of young people left in search of livelihood and never returned home! There are still indigent humans working persistently but not treated as one, due to abuses and accidents by ignoring the guidelines. There are cries at many unhearing dark corners of the world, slowly fading away in the clings of death!<br /><br />
                NITSMUN fraternity expresses its solidarity and urges you to contribute to flagship programmes released by the UN and other recognised institutions. Apart from the monetary aid, we request you to understand the social responsibility to lend your hand for anyone in need. Let's not restrict ourselves to a discussion in an air condition chamber or a community post. Together is the way to go!<br /><br />
                An IPEC+ Flagship Programme for COVID-19 impact on child labour and forced labour: <a href="https://www.ilo.org/.../WCMS_745287/lang--en/index.htm">https://www.ilo.org/.../WCMS_745287/lang--en/index.htm</a></>,
        },
        {
            index: "22",
            heading: "International Day of Persons with Disabilities",
            date: "3rd Dec, 2021",
            image: "img/person_with_disability.jpg",
            short: <>Just because a man lacks the use of his eyes doesn’t mean he lacks vision.” <br />
                – Stevie Wonder<br /> <br />
                In this world, there exists a population of nearly 1 billion who experiences disability in one form or the other. This statistic is predicted to rise owing to population ageing and in addition to that, a proliferation of certain noncommunicable diseases shall also spike the number of people with disabilities. A human whether physically well-equipped or physically challenged shall have and enjoy all fundamental human rights.</>,
            long: <>The International Day of Persons with Disabilities, observed every year on the 3rd of December, aims at promoting awareness regarding the dignity, rights and well-being of the persons with disabilities at every level of the society and development. It was initially observed in 1992 and was formerly called International Day of Disabled Persons till 2007.<br /> <br />
                Every year, this day is observed with a specific cause and theme.  For this year, the theme chosen is ‘Leadership and participation of persons with disabilities towards an inclusive, accessible, and sustainable post-COVID-19 world.’ <br /> <br />
                This year, we are celebrating the challenges, barriers and opportunities for people who live with disabilities, in the context of a global pandemic.<br /> <br />
                We shall call on health organisations whether public or private , political representatives, advocates, supporters, and every citizen in every community, to learn from the experiences of people living with disabilities during this pandemic, and inculcate a sense of responsibility towards  more meaningful investments into the socioeconomic building blocks which will reduce the barriers faced by people with disabilities in every community on earth.</>,
        },
        {
            index: "23",
            heading: "International Volunteer Day for economic and Social Development",
            date: "5th Dec, 2021",
            image: "img/volunteer_day.jpg",
            short: <>“Volunteers are often the first to act in times of crisis, helping millions to survive despite the risks. Their work upholds our common humanity."<br />
                -Secretary-General António Guterres, International Volunteer Day 2017<br /><br />
                International Volunteer Day for economic and Social Development is observed every year on 5th December with the sincere motive to acknowledge as well as encourage  the dedication , work and contributions rendered  by volunteers . Volunteers in every aspect play a pivotal role in promoting community engagement to achieve better and greater goals. As per the resolution 40/212 on 17th December 1985, the UN General Assembly  urged  governments of nations to create awareness about the important contributions made by volunteers and hence encourage people to respect volunteerism and come forward as volunteers to offer the best of services, be it at local or global levels.</>,
            long: <>Changes we make today bring us a brighter tomorrow. Encouragement and recognition of volunteerism is of great importance to bring about changes for future good in a wider scale and for ensuring a future for communities characterised by equality and coordination.The International Volunteer Day for Economic and Social Development provides opportunities for organizations and Government to applaud and encourage the dedicated services of volunteers and recognize their contributions in the run of achieving SDGs at local , country and global levels. This day, mandated by the UN General Assembly in 1985 , is also favoured by the United Nations Volunteers Programme (UNV).Every year, a campaign is coordinated by the UNV Programme to highlight the significant roles of volunteers in communities at national and global stages for maintaining peace and development.<br /><br />
                A distinguished theme revolving around the motive of this day is taken up every year. The theme for International Volunteer Day for Economic and Social Development is: Volunteer now for our common future.</>,
        },
        {
            index: "24",
            heading: "Single Form",
            date: "6th Dec, 2021",
            image: "img/single_form.jpg",
            short: <>Single Form (BH 325) is a remarkable bronze monument created by the British artist Barbara Hepworth. It is one of her most popular public commissions displayed in a circular water feature that forms a traffic island at the Headquarters of the United Nations in New York City, since 1964. The work was delegated by the Jacob and Hilda Blaustein Foundation as a shrine to the UN Secretary-General Dag Hammarskjöld after his death in 1961 due to an air crash in Africa.</>,
            long: <>The monument is a primarily flat, jagged shape, broadly oval, pierced near the top by a circular hole. The flat grounds are pitted and marked with three intersecting lines – one sizably vertical, and two considerably horizontal – on each face, reflecting its casting in distinct pieces. <br /><br />
                The sculpture was exhibited at the Whitechapel Art Gallery in May 1962. The first finished bronze of Single Form (Memorial) was exhibited in the open-air statue exhibition at Battersea Park in 1963 and the full-size one was cast in seven pieces and assembled at the  Morris Singer foundry in London which is 21 feet (6.4 m) high and weighs 5.5 tonnes (5.4 long tons; 6.1 short tons). The art analyst Dore Ashton endorsed it as a "vision of the cosmos".</>,
        },
        {
            index: "25",
            heading: "International Day of Commemoration and Dignity of Genocide Victims and the Prevention of Genocide",
            date: "9th Dec, 2021",
            image: "img/genocide_prevention_day.jpg",
            short: <>Our history, unfortunately, is tainted by individuals or organisations who attempted to exterminate large groups of people. Individual races and nations have been included in these groups of people. This is referred to as genocide.<br /><br />
                For instance, during the Holocaust, Nazi Germany murdered 6 million Jews, making it one of the most infamous cases of genocide. However, in addition to Jews, the Nazis attempted to exterminate other groups of people. People with disabilities, homosexuals, and Jehovah's Witnesses were among those targeted. </>,
            long: <>The United Nations, since the year 2015 has observed the International Day of Commemoration and Dignity of Genocide Victims and the Prevention of Genocide, also known as Genocide Prevention Day.<br /><br />
                9th December commemorates the adoption of the 1948 Convention on the Prevention and Punishment of the Crime of Genocide by the United Nations. Following the horrors of the Holocaust, the convention defined genocide and outlined the international community's commitment to "never again." Raphael Lemkin coined the term "genocide." <br /><br />
                Lemkin coined the term in response to Nazi policies of systematic murder of Jews during the Holocaust, but also to previous instances in history of targeted actions aimed at the annihilation of specific groups of people.<br /><br />
                On this day, we remember genocide victims. People all over the world are being encouraged to learn from history and take actions to prevent future atrocities. Today, on the 7th International Genocide Prevention Day, NITSMUN calls everyone from the global society to come forward, and recognise the fact that humans, irrespective of the backgrounds they emerge from, are unified by the thread of humanity. </>,
        },
        {
            index: "26",
            heading: "International Anti-Corruption Day",
            date: "9th Dec, 2021",
            image: "img/anti_corruption_day.jpg",
            short: <>Corruption is a multifaceted social, political, and economic issue that affects every country. It undermines democratic institutions, stifles economic growth, and contributes to political instability and distorts election processes, prevents the rule of law, and establishes bureaucratic quagmires whose main function is to receive bribes.<br /><br />
                Corruption prevention accelerates progress toward the Sustainable Development Goals, protects our planet, creates jobs, advances gender equality, and ensures greater access to key services like healthcare and education.“Your right, your role: Say no to Corruption” has been decided as the theme for the International Anti-Corruption Day 2021. </>,
            long: <>In the wake of the recent of Covid-19, when efforts to achieve the Sustainable Development Goals have taken a major hit, it is critical to highlight the rights and responsibilities of every individual stakeholder in tackling corruption, including the public and private sectors, law enforcement agencies, media, youth and civil society organizations. Not only the countries but also every single person- young and old - should play the roles to prevent corruption which promotes integrity in society.<br /><br />
                A 6-week campaign was started in November that highlighted the role of stakeholders and common people in preventing corruption. Each week focused on Education and youth, sports, gender, private sector, COVID 19 and international cooperation. The United Nations Convention Against Corruption highlights governments' obligation to put in place adequate whistleblower protection to guarantee that those who speak out are not retaliated against.<br /><br />
                On behalf of the world society, NITSMUN asks you to join hands in eliminating corruption and say #NoToCorruption.</>,
        },
        {
            index: "27",
            heading: "International Human Rights Day",
            date: "10th Dec, 2021",
            image: "img/human_right_day.jpg",
            short: <>“To deny people their human rights is to challenge their very humanity.”<br />
                – Former South African President Nelson Mandela<br /><br />
                The United Nations on 10th December, 1948 adopted a declaration entitled “Universal Declaration of Human Rights (UDHR)” which is a milestone document, that proclaims the inalienable rights that everyone is entitled to as a human being, regardless of their race, colour, religion, sex, language, political or other opinion, national or social origin, property, birth or other status. Every year, on 10th of December, in honour of this day and to limelight several issues of human rights violation in many countries or states, Human Rights Day is observed worldwide. </>,
            long: <>Human Rights are not a matter of choice, it's a fundamental amenity and  sole right of all human entities. Whenever any state or Government opposes or refuses to provide the fundamental possessions of its citizens or residents, human rights are violated. Human Rights are inherent to all irrespective of race, caste, creed or sex. <br /><br />
                There have been many instances or reports wherein an attempt to sustain the authority over a state, many governments have committed several atrocities on its citizens making them deprived of their fundamental rights. For a human to lead a peaceful life with tranquillity, his or her human rights must be preserved.<br /><br />
                This Year 2021, the theme for Human Rights Day is Equality - Reducing inequalities, advancing human rights, which relates to 'Equality' and Article 1 of the UDHR – “All human beings are born free and equal in dignity and rights."<br /><br />
                A society where human rights are preserved and celebrated, there would exist no inequalities or injustice which in fact would be a perfect destination for all human beings to live in.<br /><br />
                NITSMUN invites everyone to join hands with us to prevent conflicts amongst all and build resilience through equality, inclusion and human rights.</>,
        },
        {
            index: "28",
            heading: "International Day of Neutrality",
            date: "12th Dec, 2021",
            image: "img/day_of_neutrality.jpg",
            short: <>A state of Neutrality is a promise for peacekeeping.<br></br><br></br>
                With the motive to campaign and promote for amicable and mutually beneficial relations among nations, International Day of Neutrality is observed annually on 12th of December.<br></br><br></br>
                A nation not favouring any side at times of war or conflict and maintaining indifference towards either side is a neutral state. In the Hague Convention of 1907, the duties and rights of a neutral state were set. In 1815, Switzerland was the first country to declare its permanent state of neutrality. However, the only state that has been approved by the United Nations as a neutral nation is Turkmenistan. On 12 December, 1995, the United Nations General Assembly adopted Resolution 50/80 which recognized Turkmenistan as a completely neutral state. Later, in the year 2017, on 2 February the UN General Assembly declared 12th December as the International Day of Neutrality.</>,
            long: <>Neutrality serves as a significant concept for the United Nations to achieve cooperation and coordination among member nations. The UN essentially creates awareness on neutrality to promote as well as strengthen peace and security in certain regions, and further across the globe. Under the banner of Neutrality, there are several purposes which enlists prevention of negotiation, conflicts, mediation and employment of special consultations, envoys and development activities. On this day, several organizations, member states and concerned individuals and educators host events at national level to promote Neutrality among nations.<br></br><br></br>
                NITSMUN believes that peace and friendly relations between the countries are a must for the well being of citizens and aims at enhancing public awareness of the value of neutrality in international relations.</>,
        },
        {
            index: "29",
            heading: "Anyanwu",
            date: "13th Dec, 2021",
            image: "img/anyanwu.jpg",
            short: <>At the end of every dark and gloomy night, come rays of rise and hopes conjoined. The sculpture "Anywanwu" (Igbo for 'awakening') marked the dawn of 17 African Nations liberated from Colonial rule in the 1960s. The first of them being Nigeria.<br /><br />
                Gifted on the 6th anniversary of Nigerian independence, "eyes of the sun" still stand tall (6 feet 10 inches) and affirmed in the Conference building. Hundreds of delegates, staff, and visitors pass by her everyday witnessing the eternal grace and dignity, which was not only described as 'aesthetically beautiful' but with 'great rhythm and spirituality' by the artists around the world. </>,
            long: <>"I am aflame but my wings are wet! Leave me to carry on- I will soar and make history." Said Ben Enwonwu, the pioneer of African sculptors and role model to many around the world. By all accounts, he surely chiseled his name with the dirks of gold!</>,
        },
        {
            index: "30",
            heading: "International Human Solidarity day",
            date: "20th Dec, 2021",
            image: "img/solidarity_day.jpg",
            short: <>International Human Solidarity day is observed on 20 December every year to spread awareness among the populace about the significance of solidarity and to heave people out of poverty, hunger, and disease. <br /><br />
                The notion of solidarity has established the work of the United Nations since the advent of the Organization. The United Nations work to bring peoples' and nations' of the world together to accentuate human rights, peace, social and economic development. So, concerning globalisation and challenges of growing inequality, promotion of the culture of solidarity is important, hence it's decided to celebrate 20 December as the International Human Solidarity Day.</>,
            long: <>It's a day to commemorate our unity in diversity; a day to remind governments to honour their commitments to international agreements; a day to facilitate debate on the ways to promote solidarity for the achievement of the Sustainable Development Goals; and lastly, a day of action to promote new initiatives for poverty eradication.<br /><br />
                On behalf of the world society, NITSMUN encourages you to promote solidarity and join hands in the elimination of poverty and hunger. </>,
        },
        {
            index: "31",
            heading: "Wrap up 2021",
            date: "31st Dec, 2021",
            image: "img/wrapup2.jpg",
            short: <>JULY :<br /><br />
                COVID-19 Delta variant has been found in 98 countries and is continuing to mutate according to WHO. The World Bank pledged an additional $8 billion in support for Covid-19 vaccinations for underdeveloped countries. The Changjiang Nuclear Power Plant in China's Hainan Province has officially commenced construction of the world's first commercial modular nuclear reactor, dubbed 'Linglong One.' Singapore has revealed one of the largest floating solar panel farms in the world. Three days of high winds and heavy monsoon rain on huge refugee camps in Bangladesh's Cox's Bazar have claimed the lives of Rohingya refugees and caused widespread devastation. The Taliban's attacks on UN operations in Afghanistan (UNAMA) drew worldwide attention.</>,
            long: <>AUGUST:<br /><br />
                As the Taliban approached Kabul, the crisis in Afghanistan worsened. Afghanistan President Ashraf Ghani resigned a few days later, as the government surrendered to Taliban fighters, who entered Kabul and demanded the central government's complete surrender. UN Secretary-General António Guterres had urged the Taliban and all other parties to "show the greatest moderation to safeguard lives." The World Health Organization (WHO) established a new advisory body known as the International Scientific Advisory Group for Origins of Novel Pathogens, or SAGO.  The World Bank established a new 'Cybersecurity Multi-Donor Trust Fund' to facilitate the methodical implementation of the cybersecurity development agenda.<br /><br />
                September :<br /><br />
                Sri Lanka declared a state of emergency as the food crisis worsened due to the lack of foreign cash to fund imports. In an effort to monitor environmental preservation measures, China launched the 24th Gaofen-series Earth observation satellite. El Salvador became the world's first country to accept Bitcoin as legal cash. The World Health Organization had reduced the allowed limits of exposure to major pollutants such as ozone, nitrogen dioxide, sulphur dioxide, carbon monoxide, and particulate matter (PM). WHO said that suicide prevention must be emphasized after 18 months of the COVID-19 pandemic ahead of World Suicide Prevention Day.<br /><br />
                OCTOBER:<br /><br />
                The United States International Development Finance Corporation (DFC) and the United States Agency for International Development (USAID) co-sponsored a $55 million credit guarantee to address the economic impact of covid-19 by supporting loans to farmer producer organisations, ag-tech companies, and companies engaged in clean energy solutions for agriculture. The first automated and driverless train in the world was inaugurated by the German rail operator, Deutsche Bahn, and the industrial conglomerate, Siemens. China successfully launched Shijian-21, a new satellite designed to test and validate space debris reduction technology.<br /><br />
                NOVEMBER:<br /><br />
                The United Nations Climate Summit, known as COP26, began in Glasgow, Scotland, with UN diplomats and politicians making new promises to reduce greenhouse gas emissions. WHO approved Bharat Biotech's Covaxin. The United Kingdom's health officials had authorised the world's first pill to treat symptomatic COVID-19. On November 10, 2021, NASA and Elon Musk's commercial rocket business SpaceX launched the "Crew 3" mission. On November 24, 2021, a new COVID-19 variant B.1.1.529 was reported to WHO from South Africa which was categorised as Omicron by the World Health Organization (WHO).<br /><br />
                DECEMBER:<br /><br />
                The United States provided $10 million to the Food and Agriculture Organization (FAO) to help with COVID-19 response and addressing dangers to human, animal, and environmental health, including future pandemics.</>,
        },
        {
            index: "32",
            heading: "Wrap up 2021",
            date: "31st Dec, 2021",
            image: "img/wrapup1.jpg",
            short: <>JANUARY:<br /><br />
                The Year began with COVID-19 cases worldwide surpassing the mark of 100 million, and the WHO urging effective and fair use of covid vaccines. Developments in space included the USA’s plan to set up the first nuclear reactor on the moon by the end of 2026. On January 20, 2021, Biden was sworn in by U.S. Chief Justice John Roberts as the 46th president of the United States. The United States, before the formal transition of the President’s office from Trump to Biden, designated the Kingdom of Bahrain and the United Arab Emirates (UAE) as the major strategic partners of the country.</>,
            long: <>FEBRUARY:<br /><br />
                The Government of Denmark approved a project to build the world’s first energy island, in the North Sea that will produce and store enough green energy to meet the electricity needs of three million households in European countries.
                Further, President Moon Jae-in-led, South Korea Government approved a plan to build the world’s largest wind power plant in the country by 2030, replacing, the world’s largest offshore wind farm Hornsea 1 of Britain.
                The former European Central Bank Chief Mario Draghi was sworn in as the new Prime Minister of Italy on 12 February 2021.
                The United States officially rejoined the Paris Agreement, under the Presidency of US President Joe Biden which the US had officially exited, on the order of then-President Donald Trump.<br /><br />
                MARCH:<br /><br />
                Recognizing that resolving the crisis in Syria is the international community's common obligation, $6.4 billion was raised to assist those impacted by the conflict. Roscosmos, Russia's space organisation, successfully launched its first satellite to monitor the temperature and ecosystem of the Arctic. Ghana became the world's first country to get vaccines obtained under the United Nations-backed COVAX project. El Salvador was the first Central American country to be declared malaria-free by the World Health Organization. Mark Rutte, the Prime Minister of the Netherlands, gained the most seats in the 2021 legislative elections and will be sworn in as Prime Minister for the fourth time.<br /><br />
                APRIL:<br /><br />
                US President Joe Biden declared that all American soldiers will leave Afghanistan by September 11 2021, putting the country's longest conflict to an end. US soldiers, as well as NATO (North Atlantic Treaty Organization) Allies and operational partners, will leave Afghanistan before the 20th anniversary of that horrible act on September 11, 2001.
                Singapore has accepted the Regional Comprehensive Economic Partnership (RCEP), the world's largest free trade pact sponsored by China. Singapore became the first of the 15 participant nations to approve RCEP.
                Russia's agriculture safety authority Rosselkhoznadzor has registered the world's first animal vaccination against the new coronavirus.<br /><br />
                MAY:<br /><br />
                The Democratic Republic of the Congo has proclaimed the 12th Ebola outbreak to be over. In response to the clashes between Israeli police and Palestinian demonstrators at the Al-Aqsa Mosque, Hamas, a Palestinian movement based in Gaza, launched crimson rockets at Israel. Following Hamas assaults, the Israeli military carried out 139 airstrikes over Gaza. Nearly 200 individuals were killed as a result of the horrific sequence of events. The World Health Organization designated the COVID-19 variation B.1.617 discovered in India as a worldwide "variant of concern." China's first Mars Rover, dubbed 'Zhu Rong,' safely arrived on Mars. The International Monetary Fund suggested a $50 billion worldwide COVID-19 immunisation programme.<br /><br />
                JUNE:<br /><br />
                The World Health Organization assigned designations to COVID-19 variants B.1.617.1 and B.1.617.2 discovered in India. The United Nations General Assembly's 2019 resolution, The United Nations Decode on Ecosystem Restoration, was formally started. Interpol created I-Familia, a worldwide database that utilises family DNA to locate missing individuals. El Salvador was the first country to accept Bitcoin as legal currency. France has committed a direct donation of one million euros to the International Solar Alliance. Naftali Bernett took the oath of office as Israel's next Prime Minister. Albania, Brazil, Gabon, Ghana, and the United Arab Emirates were chosen as non-permanent members of the UN Security Council for the 2022-2023 term. Ebrahim Raisi was elected President of Iran in 2021.
                For the first time, Microsoft's market value surpassed $2 trillion.</>,
        },
        {
            index: "33",
            heading: "World Braille Day",
            date: "4th Jan, 2022",
            image: "img/braille_day.jpg",
            short: <>Literacy is a right, which is, as much fundamental to the specially-abled as it is to the abled. January 4 marks an important day in the history of Human Rights. It celebrates awareness of braille as a means of communication.<br /><br /> The Covid-19 pandemic has additionally posed several issues in terms of isolation especially in the lives of those dependant on the use of touch for communication. In concern to this, the UNDP, OHCHR, UNICEF and other bodies of the UN have taken multiple steps in trying to improve the lives of those affected.</>,
            long: <></>,
        },

    ]

    articles_list.reverse()
    // useEffect(()=> {

    //     // *Setting Up Page Title*
    //     document.title = props.title;

    //   }, [props.title]);
    return (

        // heading and stuff
        <Suspense fallback={<Loading />}>
            <div
                className="container-fluid p-0"
                style={{ overflowX: "hidden", fontFamily: "var(--font2)" }}
            >
                <div
                    id="intro"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "black",
                        height: "70px",
                    }}
                >
                    <h1 style={{ color: "white", fontVariant: "small-caps", fontFamily: "var(--font2)", fontWeight: "bold" }}>
                        Articles
                    </h1>
                </div>

                {/* article starts here */}
                {articles_list.map(article => {
                    return (

                        <div key={"article-" + article.index}>
                            {/* mobile view here */}
                            <div className="row no-gutters smallscreen-article">
                                <h2
                                    style={{
                                        fontVariant: "small-caps",
                                        textAlign: "center",
                                        paddingTop: "20px",
                                    }}
                                >
                                    {article.heading}
                                </h2>
                                <div className="col-md-1"></div>
                                <div
                                    className="col-md-2 d-flex justify-content-center align-items-center"
                                    style={{ textAlign: "center" }}
                                >
                                    <img
                                        className="img-fluid aos-init"
                                        src={article.image}
                                        alt="nits mun logo"
                                        style={{ width: "70%", borderRadius: "5%" }}
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="col-md-3"
                                    style={{ textAlign: "center", overflowX: "hidden" }}
                                >
                                    <p
                                        style={{
                                            textAlign: "justify",
                                            padding: "30px",
                                            paddingBottom: "0px",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        <p style={{ fontStyle: "italic", textAlign: "center", marginBottom: "0px", paddingTop: "0px" }} >Posted on: {article.date}</p>
                                        <br />

                                        {article.short}
                                    </p>
                                    <button
                                        id="btn1"
                                        type="button"
                                        className={"btn btn-outline-dark expand" + article.index}
                                        onClick={() => Expand(article.index)}
                                        style={{ width: "150px" }}
                                    >
                                        Read more
                                    </button>
                                </div>

                                <div className="col-md-1"></div>
                            </div>
                            <div className="row no-gutters largescreen-article">
                                <div className="col-md-1"></div>
                                <div
                                    className="col-md-4 d-flex justify-content-center align-items-center"
                                    style={{ textAlign: "center", minHeight: "200px" }}
                                >
                                    <img
                                        className="img-fluid aos-init aos-animate"
                                        src={article.image}
                                        alt="nits mun"
                                        style={{ height: "350px", borderRadius: "5%" }}
                                    />
                                </div>
                                <div
                                    className="col-md-6"
                                    style={{
                                        textAlign: "center",
                                        paddingTop: "5vh",
                                        overflowX: "hidden",
                                    }}
                                >
                                    <h2 style={{ fontVariant: "small-caps" }}>
                                        {article.heading}
                                    </h2>

                                    <p
                                        style={{
                                            textAlign: "justify",
                                            padding: "30px",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        <p style={{ fontStyle: "italic", textAlign: "center", marginBottom: "0px", paddingTop: "0px" }} >Posted on: {article.date}</p>
                                        <br />
                                        {article.short}
                                    </p>

                                    <button
                                        id="btn1"
                                        type="button"
                                        className={"btn btn-outline-dark expand" + article.index}
                                        onClick={() => Expand(article.index)}
                                        style={{ width: "150px" }}
                                    >
                                        Read more
                                    </button>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div
                                className="row no-gutters"
                                id={"Expand" + article.index}
                                style={{ display: "none" }}
                            >
                                <div className="col-md-1"></div>
                                <div
                                    className="col-md-10"
                                    style={{ textAlign: "center", overflowX: "hidden" }}
                                >
                                    <p
                                        style={{
                                            textAlign: "justify",
                                            fontSize: "1.1rem",
                                            padding: "0 30px",
                                        }}
                                    >
                                        {article.long}
                                    </p>
                                    <button
                                        id="btn2"
                                        type="button"
                                        className="btn btn-outline-dark"
                                        onClick={() => Shrink(article.index)}
                                        style={{ width: "150px" }}
                                    >
                                        Show less
                                    </button>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            {
                                article.index !== "1" && <hr />
                            }




                        </div>
                    )
                })}


                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "var(--theme4-060)",
                        marginTop: "10px"
                    }}
                >
                    <h3 style={{ color: "white", fontVariant: "small-caps", textAlign: "center" }}>
                        Check out <a href="https://www.instagram.com/nitsmun/" style={{ textDecoration: "none", color: "blue" }}>@nitsmun</a> for all our articles!
                    </h3>
                </div>

            </div>

        </Suspense>
    )
}

export default Articles;
