function scaleHomePage(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            imageItem.classList.remove("zoomOut");
        }
        else {
            imageItem.classList.add("zoomOut");
        }
    })
}

let container = document.getElementById("imageContainer");
let imageItem = container.querySelector("img");

let observerImage = new IntersectionObserver(scaleHomePage, { threshold: 0.7 });
observerImage.observe(imageItem);

/***************************************************************************************** */

function showIntro(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            article.classList.add("displayIntro");
        }
    })
}

let introSection = document.getElementById("intro");
let article = document.getElementById("introArticle");

let observerIntro = new IntersectionObserver(showIntro, { threshold: 0.4 });
observerIntro.observe(introSection);

/***************************************************************************************** */

let content = ["Saint Kuriakose Elias Chavara was a visionary Catholic priest, social reformer, and a key architect of the educational revolution in 19th-century Kerala. He is celebrated for pioneering the 'Pallikkoodam' system, a directive that a school must be attached to every church, which laid the foundation for universal education in the state.<br><br> In a radical move for his time, he opened the doors of his schools to children from lower castes, including Dalits, and even provided them with Sanskrit education. To ensure poor students could attend, he introduced the concept of midday meals, supported by an innovative charity program called 'Pidiyari' (a handful of rice). A man of many firsts, he co-founded the Carmelites of Mary Immaculate (CMI), the first indigenous Catholic congregation for men in India, and established one of Kerala's earliest printing presses, which published the oldest existing Malayalam newspaper, Nasrani Deepika. <br><br>Canonized as a saint in 2014, Chavara is revered as a pioneer whose work in education and social reform continues to have a profound impact",

    "Vaikunta Swamikal, born Muthukutty, was a 19th-century social and religious reformer from the Travancore region. He is the founder of the Ayyavazhi faith, a monotheistic movement that strongly opposed the caste system. His followers believe him to be a full avatar of the god Vishnu.<br><br> His major contributions include establishing the Samathwa Samajam, one of South India's earliest social reform organizations, to promote equality and dignity for oppressed communities, particularly the Nadars. He was a vocal critic of the ruling powers, famously calling the Travancore king a ‘Devil’ and British rule the ‘Rule of White Devils’, which led to his imprisonment in 1838.<br><br>His teachings, compiled by his followers in the book ‘Akilathirattu Ammanai’, continue to inspire anti-caste movements in Kerala and Tamil Nadu. He is regarded as a pioneering forerunner to later reformers like Narayana Guru.",

    "Thycaud Ayya Swamikal, born Subbarayan, was a prominent spiritualist and social reformer from Thiruvananthapuram, considered one of the first to challenge Kerala's rigid caste customs and untouchability. He was a highly influential guru to other major renaissance leaders, including Chattampi Swamikal and Sree Narayana Guru.<br><br> A practitioner of Advaita Vedanta (non-dualism), he taught universal brotherhood, peace, and the spiritual equality of all people. While he left no written works, his oral teachings had a profound impact on Kerala's reform tradition. Ayya Swamikal was also renowned for his accurate astrological predictions, which included the rise of social reformer Ayyankali, the identity of Travancore's last king, the eventual partition of India, and the exact date of his own passing.<br><br> Today, he is remembered as a crucial bridge between tradition and reform, representing a non-violent, spiritual approach to social change.",

    "Arattupuzha Velayudha Panicker was a formidable 19th-century warrior, social reformer, and wealthy Ezhava landlord who used his personal resources and influence to fight caste oppression in Kerala. He is celebrated for his direct and defiant actions against social injustice.<br><br> Panicker led several pivotal agitations to secure the rights and dignity of marginalized women, including the Achipudava Samaram (for the right to wear proper lower garments) and the Mukkuthi Samaram (for the right to wear nose studs). He also organized the first-ever agricultural laborers' strike in the region, the Karshaka Thozhilali Samaram. His contributions extended to culture and religion; he built the Mangalam Shiva temple in 1852, opening it to people of all castes, and established the first Kathakali troupe for Ezhava and other backward communities.<br><br> His growing influence and fearless challenges to the upper-caste hierarchy led to his assassination in 1874 at the age of 48. For his ultimate sacrifice, he is widely revered as the first martyr of the Kerala Renaissance.",

    "Chattampi Swamikal, born Ayyappan Pillai, was a prominent Hindu sage, philosopher, and social reformer whose intellectual work had a profound influence on Kerala's social and religious movements. He is known for his direct challenge to the prevailing caste hierarchy and Brahminical dominance over spiritual knowledge. <br><br>Through powerful written works like ‘Vedadhikara Nirupanam’, he systematically argued that all individuals, regardless of caste, had the inherent right to study the Vedas and other sacred texts, a right previously reserved for Brahmins. He also championed social equality, the upliftment of women, and promoted inter-religious harmony, notably in his respectful analysis of Christianity in ‘Christumatha Saram’. <br><br>Today, Chattampi Swamikal is regarded as a forerunner of rationalism and social criticism in Kerala, whose scholarly yet revolutionary teachings continue to inspire reformers and spiritual seekers.",

    "Sree Narayana Guru was one of the most profound spiritual leaders and social reformers of the Kerala Renaissance. Hailing from the Ezhava community, he led a powerful movement against caste injustice, famously encapsulating his philosophy in the slogan 'One Caste, One Religion, One God for Man.' <br><br>A pivotal moment in Kerala's history was his consecration of a Shiva idol at Aruvippuram in 1888. This revolutionary act, known as the <a href='Aruvippuram.html' target='_blank'>Aruvippuram Pratishta</a>, directly challenged the Brahminical monopoly on religious rituals and opened the doors of worship to all castes. To carry forward his vision, he became the founder-president of the Sree Narayana Dharma Paripalana (SNDP) Yogam in 1903, a crucial organization for social upliftment. <br><br>He also established numerous temples and educational institutions, including the renowned Sivagiri Mutt in Varkala, making them accessible to everyone. His extensive literary works, including the widely recited prayer poem ‘Daiva Dasakam’, continue to be a guiding force for social equality and spiritual enlightenment in Kerala and beyond.",

    "Mahatma Ayyankali was one of Kerala's most formidable Dalit social reformers and a revolutionary leader of the Pulaya community, known for his relentless and direct fight against caste oppression. He is often called the 'King of Pulaya' for his leadership. <br><br>His most iconic act of protest was the Villuvandi Samaram of 1893, where he courageously rode a bullock cart on a public road, directly violating a discriminatory caste law to assert the right of Dalits to access public spaces. To further the cause of social justice, he established the first school for Dalit children in 1904 and founded the Sadhujana Paripalana Sangham (SJPS) in 1907 to organize the community and fight for their rights.<br><br>In 1910, Ayyankali became the first Dalit nominated to the Travancore Legislative Council, where he powerfully advocated for education, land ownership, and labor rights for the oppressed. Today, he is revered as a powerful symbol of resistance and a pioneer of Dalit empowerment whose work paved the way for major social reforms in Kerala.",

    "Vakkom Abdul Khader Moulavi, hailed as the 'Father of Muslim Renaissance in Kerala', was a visionary social reformer, writer, and journalist. He is most famous for founding the newspaper Swadeshabhimani in 1905. <br><br>The publication was known for its fearless criticism of government corruption and the misrule of the Diwan of Travancore, which ultimately led to it being banned and confiscated by the authorities in 1910. Beyond his work as a publisher, Vakkom Moulavi was a dedicated advocate for modern education, particularly for women, and promoted rational thought within the Muslim community. He worked tirelessly to reform Islamic practices by removing superstition, inspiring a new generation of reformers and cementing his legacy as a pioneering Islamic modernist in Kerala.",

    "Mannath Padmanabhan was a visionary social reformer and freedom fighter, most famously recognized as the founder of the Nair Service Society (NSS) in 1914. His primary mission was to unite, reform, and uplift the Nair community, advocating for education and the abolition of outdated customs. <br><br>While dedicated to his community's progress, he was also a powerful voice for broader social equality, playing a significant role in the Vaikom and Guruvayoor Satyagrahas to demand temple entry for all Hindus. A formidable political figure, he served in the Travancore Legislative Assembly and famously led the Vimochana Samaram (Liberation Struggle) in 1959, which resulted in the dismissal of Kerala's first Communist government.Today, he is remembered as a master organizer who profoundly shaped the social and political fabric of Kerala.",

    "Poykayil Appachan, also known as Poykayil Yohannan or Kumara Gurudevan, was a revolutionary Dalit spiritual leader, poet, and social reformer. His work stands out for its powerful critique of caste oppression within both Hinduism and Christianity. <br><br>After experiencing persistent discrimination against Dalits within various Christian denominations, he became disillusioned and concluded that a separate path was necessary for their liberation. This led him to found the Prathyaksha Raksha Daiva Sabha (PRDS) in 1909, a unique socio-religious movement dedicated to the emancipation and empowerment of the oppressed. Through his soul-stirring oral poetry and hymns, he gave voice to the deep pain of untouchability and argued that Dalit history had been systematically erased by dominant narratives.<br><br>Today, Poykayil Appachan is recognized as a pioneering figure in Dalit theology and literature in Kerala, celebrated for carving out a distinct space for Dalit identity and dignity.",

    "Pandit Karuppan, revered as the 'Lincoln of Kerala' for his powerful oratory and reformist zeal, was a distinguished poet, Sanskrit scholar, and social reformer from the Dheevara (fisherfolk) community. He is recognized as the first human rights activist from the erstwhile Cochin State.<br><br>He uniquely wielded his exceptional literary talent as a weapon against untouchability, illiteracy, and other social evils. Through influential poems and plays like his famous work 'Jathikummi', he skillfully exposed the injustices of the caste system and called for social unity. His activism extended into politics when he was appointed to the Cochin Legislative Council, becoming the first representative from his community. In this role, he strongly advocated for establishing schools and libraries to empower marginalized people.<br><br>Today, Pandit Karuppan is remembered as a pioneering literary activist who dedicated his life to the educational and social upliftment of backward communities.",

    "T.K. Madhavan was a revolutionary social reformer, journalist, and a pivotal leader of the Ezhava community, best known as the chief architect and a frontline leader of the Vaikom Satyagraha.<br><br> While the struggle against untouchability at Vaikom had many leaders, it was Madhavan's strategic effort that elevated it to a national movement. He was instrumental in persuading Mahatma Gandhi and the Indian National Congress to get involved, bringing nationwide attention to the cause. As a legislator in the Sree Moolam Praja Sabha and an organizing secretary of the SNDP Yogam, he fought relentlessly for civil rights. He effectively used his position as the editor of the Deshabhimani newspaper to champion the cause of temple entry and eradicate social discrimination, cementing his legacy as a pioneer of the civil rights movement in Kerala.",

    "Sahodaran Ayyappan was a revolutionary social reformer, rationalist, journalist, and politician who, while a disciple of Sree Narayana Guru, pushed the boundaries of social reform with a more radical approach. He is a foundational figure in Kerala's history of progressive and secular thought.<br><br>In 1917, he founded the Sahodara Sangham (Brotherhood Association) and organized the groundbreaking Misra Bhojanam (inter-caste dining). This event, where people from upper and lower castes (including Dalits) dined together, was a direct and powerful assault on the practice of untouchability. Taking his Guru's philosophy a step further, Ayyappan coined the famous rationalist slogan: 'No Caste, No Religion, No God for Man'.<br><br>Through his influential journals like 'Yukthivadi' (The Rationalist), he tirelessly promoted scientific temper, secularism, and anti-caste ideology. His work and ideas firmly established him as the father of the rationalist movement in Kerala and laid the groundwork for the state's vibrant leftist politics.",

    "K. Kelappan, revered as the 'Kerala Gandhi' for his unwavering commitment to non-violence and Gandhian principles, was a pre-eminent freedom fighter, politician, and social reformer. As the first president of the Kerala Pradesh Congress Committee (KPCC), he was a central figure in the Indian independence movement in the region.<br><br> He played a pivotal leadership role in major struggles against both colonial rule and social injustice, including the landmark Vaikom Satyagraha (to open temple roads to all castes) and the Salt Satyagraha in Kerala. While he was a co-founder of the Nair Service Society (NSS), his lifelong focus remained on broader social reform and inter-caste unity.<br><br>After India's independence, Kelappan continued his work through Gandhian movements like Sarvodaya, dedicating the rest of his life to rural upliftment. He is remembered as one of Kerala's foremost freedom fighters and a true embodiment of Gandhian values.",

    "Parvathy Nenmenimangalam was a prominent social reformer and a key feminist voice who emerged from within the orthodox Namboothiri community. Working in close collaboration with reformers like V.T. Bhattathiripad and Arya Pallam, she was at the forefront of the movement to liberate Brahmin women. <br><br>As a leader in the Yogakshema Sabha, she played a crucial role in the campaign to boycott the 'Marakkuda' (cadjan umbrella) and the 'Ghosha' (veil system), which were symbols of female seclusion. She is also credited with being instrumental in organizing the first-ever widow remarriage within the Namboothiri caste, a revolutionary act at the time. Parvathy Nenmenimangalam is remembered as a courageous activist who dedicated her life to bringing women out of domestic confinement and into the social mainstream.",

    "C. Kesavan was a prominent freedom fighter, statesman, and the former Chief Minister of Travancore-Cochin. He is best remembered as a key leader of the Nivarthana Agitation, a major political movement demanding fair democratic representation for all citizens, regardless of caste, in the legislative assembly.<br><br> A powerful orator and a fierce critic of social injustice, his famous speeches denouncing caste-based exploitation and Dewan rule led to his imprisonment. During his tenure as Chief Minister (1950–1952), the Trivandrum Medical College was inaugurated, and he piloted the historic Land Reforms Bill. Known for his frank and rationalist views, C. Kesavan was a pivotal figure in Kerala's transition to a modern democratic state.",

    "V.T. Bhattathiripad was a revolutionary social reformer and dramatist who emerged from within the orthodox Namboothiri Brahmin community to challenge its most rigid and oppressive customs. He used his literary and activist platforms to bring about radical change from within. <br><br>He is most famous for his groundbreaking 1929 play, 'Adukkalayil Ninnu Arangathekku' (From the Kitchen to the Stage). This powerful work exposed the cloistered and oppressive lives of Namboothiri women and served as a clarion call for their education and entry into public life. A man of action, Bhattathiripad also championed the then-taboo practice of widow remarriage, famously arranging the marriage of his own widowed sister-in-law.<br><br>As a prominent leader of the Yogakshema Sabha, he worked tirelessly to reform his community, fighting against patriarchy and conservatism and leaving an indelible mark as a key figure of the Kerala Renaissance.",

    "Arya Pallam was a bold feminist and social reformer who courageously fought against patriarchal oppression from within the Namboothiri Brahmin community. As an active leader in the Yogakshema Sabha, she is renowned for her direct challenges to the symbols of female seclusion. <br><br>She famously led processions where women discarded their 'Ghosha' (veils) and publicly broke their 'Marakkuda' (cadjan umbrellas), declaring that a woman's chastity was not contained in these objects of oppression. She also introduced a resolution to stop domestic oppression ('Anthapura Mardananeesanam'). A woman of action, she was instrumental in arranging and supporting the first widow remarriage in her community. Arya Pallam is remembered as a pioneering figure who helped bring Namboothiri women out of the darkness of their kitchens and into the light of public life.",

    "Dakshayani Velayudhan was a pioneering politician and a powerful leader of the oppressed classes from the Pulayar Dalit community. She holds the unique and historic distinction of being the first and only Dalit woman to serve as a member of the Constituent Assembly of India, the body that framed the nation's constitution. <br><br>In this crucial role, she was a strong voice against untouchability and caste discrimination. A trailblazer in education, she was also the first Scheduled Caste woman in India to earn a degree. Her profound legacy is honored by the Kerala government through the ‘Dakshayani Velayudhan Award,’ given to women who have made significant contributions to women's empowerment in the state."];

let reformerPhotos = ["Pictures/KuriakoseChavara.jpg", "Pictures/Vaikunda_Swami.jpg", "Pictures/ThycaudAyya.jpg", "Pictures/ArattupuzhaVelayudhaPanicker.jpg", "Pictures/chattampiSwamikal.jpg", "Pictures/sreeNarayanaGuru.jpg", "Pictures/Ayyankali.jpg", "Pictures/VakkomMoulavi.jpg", "Pictures/Mannath_Padmanabhan_Pillai.jpg", "Pictures/PoykayilAppachan.jpg", "Pictures/PanditKaruppan.jpg", "Pictures/TK-Madhavan...jpg", "Pictures/SahodaranAyyapan.jpg", "Pictures/KKelappan.jpg", "Pictures/ParvathyNenmenimangalam.jpg", "Pictures/C_Kesavan.jpg", "Pictures/VTBhattathiripad.jpg", "Pictures/AryaPallam.jpg", "Pictures/DVelayudhan.jpg"]

let keepTrack = 0;

function showContentWindow(cardNumber) {
    let bodyDim = document.getElementById("bodyGradient");
    let window = document.getElementById("contentWindow");
    let para = window.querySelector("p");
    let image = window.querySelector("img");

    para.innerHTML = content[cardNumber];
    window.style.display = "flex";
    window.style.flexDirection = "column";
    bodyDim.classList.add("dull");
    image.setAttribute("src", reformerPhotos[cardNumber]);

    setTimeout(() => {
        window.classList.add("showPopup");
    }, 10);
}

function closeContentWindow() {
    let bodyDim = document.getElementById("bodyGradient");
    let window = document.getElementById("contentWindow");
    window.classList.remove("showPopup");


    setTimeout(() => {
        window.style.display = "none";
    }, 500);

    bodyDim.classList.remove("dull");
}

/***************************************************************************************** */
let cardContainer = document.querySelectorAll(".card");

function zoomCards(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            entry.target.classList.add("emphasisCard");
        }
        else {
            entry.target.classList.remove("emphasisCard");
        }
    })
}

let observerCard = new IntersectionObserver(zoomCards, { threshold: 0.8 });
cardContainer.forEach(item => observerCard.observe(item));

/***************************************************************************************** */