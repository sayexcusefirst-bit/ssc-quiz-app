const data = {
  history: [
    {
      question: "Who founded the Mughal Empire in India?",
      options: ["Babur", "Akbar", "Humayun", "Sher Shah Suri"],
      answer: 0,
      solution: "Babur founded the Mughal Empire after defeating Ibrahim Lodi in 1526."
    },
    {
      question: "The First Battle of Panipat was fought in which year?",
      options: ["1526", "1556", "1761", "1576"],
      answer: 0,
      solution: "The First Battle of Panipat was fought in 1526."
    },
    {
      question: "Who defeated Hemu in the Second Battle of Panipat?",
      options: ["Babur", "Akbar", "Humayun", "Bairam Khan"],
      answer: 1,
      solution: "Akbar defeated Hemu in the Second Battle of Panipat (1556)."
    },
    {
      question: "Who introduced the policy of Sulh-i-Kul?",
      options: ["Babur", "Humayun", "Akbar", "Jahangir"],
      answer: 2,
      solution: "Sulh-i-Kul (universal tolerance) was introduced by Akbar."
    },
    {
      question: "Who wrote Ain-i-Akbari?",
      options: ["Abul Fazl", "Faizi", "Badauni", "Tansen"],
      answer: 0,
      solution: "Ain-i-Akbari was written by Abul Fazl."
    },
    {
      question: "Which Mughal ruler abolished Jizya tax?",
      options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
      answer: 0,
      solution: "Akbar abolished the Jizya tax."
    },
    {
      question: "Who was known as Zinda Pir?",
      options: ["Shah Jahan", "Aurangzeb", "Jahangir", "Babur"],
      answer: 1,
      solution: "Aurangzeb was known as Zinda Pir."
    },
    {
      question: "Who built the Taj Mahal?",
      options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
      answer: 2,
      solution: "Taj Mahal was built by Shah Jahan."
    },
    {
      question: "Who founded the Vijayanagara Empire?",
      options: ["Harihara and Bukka", "Krishnadevaraya", "Rana Sanga", "Malik Kafur"],
      answer: 0,
      solution: "Harihara and Bukka founded the Vijayanagara Empire."
    },
    {
      question: "Battle of Talikota led to the fall of which empire?",
      options: ["Mughal Empire", "Maratha Empire", "Vijayanagara Empire", "Bahmani Kingdom"],
      answer: 2,
      solution: "Battle of Talikota (1565) led to the fall of Vijayanagara Empire."
    },
    {
      question: "Krishnadevaraya belonged to which dynasty?",
      options: ["Sangama", "Saluva", "Tuluva", "Aravidu"],
      answer: 2,
      solution: "Krishnadevaraya belonged to the Tuluva dynasty."
    },
    {
      question: "Who introduced the silver coin Rupiya?",
      options: ["Akbar", "Sher Shah Suri", "Babur", "Alauddin Khilji"],
      answer: 1,
      solution: "Sher Shah Suri introduced the silver coin Rupiya."
    },
    {
      question: "Who was the founder of the Slave Dynasty?",
      options: ["Qutbuddin Aibak", "Iltutmish", "Balban", "Razia Sultana"],
      answer: 0,
      solution: "Qutbuddin Aibak founded the Slave Dynasty."
    },
    {
      question: "Who was the first woman ruler of Delhi Sultanate?",
      options: ["Noor Jahan", "Razia Sultana", "Mumtaz Mahal", "Gulbadan Begum"],
      answer: 1,
      solution: "Razia Sultana was the first woman ruler."
    },
    {
      question: "Who built Qutub Minar?",
      options: ["Qutbuddin Aibak", "Iltutmish", "Balban", "Alauddin Khilji"],
      answer: 0,
      solution: "Qutub Minar was started by Qutbuddin Aibak."
    },
    {
      question: "Who introduced market control policy?",
      options: ["Balban", "Alauddin Khilji", "Firoz Shah Tughlaq", "Muhammad bin Tughlaq"],
      answer: 1,
      solution: "Alauddin Khilji introduced market control policy."
    },
    {
      question: "Who transferred capital from Delhi to Daulatabad?",
      options: ["Balban", "Alauddin Khilji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq"],
      answer: 2,
      solution: "Muhammad bin Tughlaq transferred the capital."
    },
    {
      question: "Who founded the Mughal painting school?",
      options: ["Babur", "Humayun", "Akbar", "Jahangir"],
      answer: 2,
      solution: "Mughal painting flourished under Akbar."
    },
    {
      question: "Who was Shivaji’s coronation year?",
      options: ["1666", "1670", "1674", "1680"],
      answer: 2,
      solution: "Shivaji was crowned in 1674."
    },
    {
      question: "Chauth was a tax equal to?",
      options: ["1/10", "1/6", "1/4", "1/2"],
      answer: 2,
      solution: "Chauth was one-fourth of the revenue."
    },

    /* --- Remaining questions follow same SSC pattern --- */

    {
      question: "Who established the Maratha Empire?",
      options: ["Shahu", "Shivaji", "Baji Rao I", "Balaji Vishwanath"],
      answer: 1,
      solution: "Shivaji established the Maratha Empire."
    },
    {
      question: "Who was the Peshwa during Shivaji’s reign?",
      options: ["Baji Rao I", "Balaji Vishwanath", "Moropant", "Madhavrao"],
      answer: 2,
      solution: "Moropant was the Peshwa under Shivaji."
    },
    {
      question: "Which Mughal ruler wrote Tuzuk-i-Jahangiri?",
      options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
      answer: 1,
      solution: "Tuzuk-i-Jahangiri was written by Jahangir."
    },
    {
      question: "Who was the last Mughal Emperor?",
      options: ["Bahadur Shah Zafar", "Akbar II", "Shah Alam II", "Alamgir II"],
      answer: 0,
      solution: "Bahadur Shah Zafar was the last Mughal Emperor."
    },
    {
      question: "The Battle of Buxar was fought in?",
      options: ["1757", "1764", "1761", "1773"],
      answer: 1,
      solution: "The Battle of Buxar was fought in 1764."
    },
    {
      question: "Who introduced Permanent Settlement?",
      options: ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie"],
      answer: 1,
      solution: "Permanent Settlement was introduced by Lord Cornwallis."
    },
    {
      question: "Who founded the Brahmo Samaj?",
      options: ["Dayanand Saraswati", "Raja Ram Mohan Roy", "Vivekananda", "Ishwar Chandra Vidyasagar"],
      answer: 1,
      solution: "Brahmo Samaj was founded by Raja Ram Mohan Roy."
    },
    {
      question: "Partition of Bengal was done in?",
      options: ["1903", "1905", "1911", "1920"],
      answer: 1,
      solution: "Partition of Bengal was done in 1905."
    },
    {
      question: "Who gave the Drain of Wealth theory?",
      options: ["Gokhale", "Dadabhai Naoroji", "Tilak", "Lala Lajpat Rai"],
      answer: 1,
      solution: "Drain of Wealth theory was given by Dadabhai Naoroji."
    }
  ],

  polity: [],
  geography: [],
  economy: [],
  science: []
};
