import React, { useState } from 'react'

const ExamFront = () => {
     const [activeTab, setActiveTab] = useState("tab-1"); // Set initial active tab

     // Function to handle tab switching
     const handleTabClick = (tabId) => {
       setActiveTab(tabId);
     };
  return (
    <div>
      <section className="news-style-two banner-style-18">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 news-block">
                <div id="content_block_43">
                  <div className="content-box wall-box">
                    <div className="tabs-box">
                      <div className="tab-btn-box">
                        <ul className="tab-btns tab-buttons clearfix">
                          <li
                            className={`tab-btn ${
                              activeTab === "tab-1" ? "active-btn" : ""
                            }`}
                            onClick={() => handleTabClick("tab-1")}
                          >
                            English
                          </li>
                          <li
                            className={`tab-btn ${
                              activeTab === "tab-2" ? "active-btn" : ""
                            }`}
                            onClick={() => handleTabClick("tab-2")}
                          >
                            Hindi
                          </li>
                          <li
                            className={`tab-btn ${
                              activeTab === "tab-3" ? "active-btn" : ""
                            }`}
                            onClick={() => handleTabClick("tab-3")}
                          >
                            Gujarati
                          </li>
                        </ul>
                      </div>
                      <div className="tabs-content box-deion">
                        <div className="tab d-block transform-none">
                          <div className="row align-items-center">
                            <div className="col-md-8">
                              <h4 className="cource-title">
                                Study Habit Inventory
                              </h4>
                            </div>
                            <div className="col-md-4">
                              <table className="table table-bordered table-timing">
                                <tbody>
                                  <tr>
                                    <td>Total Question</td>
                                    <td>50</td>
                                  </tr>
                                  <tr>
                                    <td>Total Minutes</td>
                                    <td>60 Min</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* Tab 1 Content */}
                        <div
                          className={`tab ${
                            activeTab === "tab-1" ? "active-tab" : ""
                          }`}
                          id="tab-1"
                        >
                          <div>
                            <p>
                              Much of your success in the examination depends
                              upon the way you study your School/College
                              subjects. Following are the statements describing
                              your habits of study. We wish to know your study
                              habits so that we may help you in getting better
                              marks in your examination. Your active
                              cooperation, therefore, is absolutely needed.
                            </p>

                            <p>
                              Please read the following statements. Three
                              alternatives are given for your answers i.e. (A)
                              Always or mostly, (B) Sometimes, (C) Rarely or
                              Never. The example will help you in understanding
                              the mode of answers.
                            </p>

                            <p>Alternatives I take notes when I study:</p>

                            <ul className="mb-2">
                              <li>(A) (Always or mostly) </li>
                              <li>(B) (Sometimes) </li>
                              <li>(C) (Rarely or Never) </li>
                            </ul>

                            <p>
                              If you take notes always, then select alternative
                              A and cross mark on X in your answer sheet, if you
                              take note 'Sometimes' then select alternative B
                              and cross mark it, and if you rarely or never take
                              notes, then select alternative C and cross mark
                              it. There is no time limit, but give answers to
                              all statements as honestly and as carefully as you
                              can within 20 minutes.
                            </p>
                          </div>
                        </div>

                        {/* Tab 2 Content */}
                        <div
                          className={`tab ${
                            activeTab === "tab-2" ? "active-tab" : ""
                          }`}
                          id="tab-2"
                        >
                          <div className="hindi-text">
                            <p>
                              परीक्षाओं में आपको मिलनेवाली सफलताएँ आप आपकी
                              पाठशाला/कोलेज के विषय किस प्रकार पढ़तें हैं उस पर
                              आधारित होती हैं | नीचे दिए गए वाक्य आपके पढ़ने की
                              आदतों का वर्णन करते हैं | हम आपके पढ़ने की आदतों के
                              बारे मे अधिक जानना चाहते हैं जिससे हम आपको आपकी
                              परीक्षाओं में अधिक मार्क्स प्राप्त करने में सहायक
                              बन सकें | इसलिए, सम्पूर्णत: आपका सहयोग आवश्यक है |
                            </p>

                            <p>
                              इस प्रश्नपत्र में विविध वाक्य दिए गए हैं | हर
                              वाक्य के लिए तीन विकल्प दिए गए हैं | हमेशा/लगभग,
                              कभी कभी, शायद/कभी नहीं | हर वाक्य के लिए आपको जो
                              विकल्प उचित लगे उस पर आपके उत्तरपत्रक में क्रोस
                              करें|
                            </p>

                            <p>Alternatives I take notes when I study:</p>

                            <ul className="mb-2">
                              <li>(A) (हमेशा/लगभग) </li>
                              <li>(B) (कभी कभी)) </li>
                              <li>(C) (शायद/कभी नहीं) </li>
                            </ul>

                            <p>
                              अगर आप हमेशा नोट्स बनाते हैं, तो विकल्प A पसंद
                              करें और आपके उत्तरपत्रक में A के उपर क्रोस लगाएं,
                              यदि आप 'कभी कभी' नोट्स बनाते हैं, तो विकल्प B
                              चुनें और उस पर क्रोस लगाएं, और अगर आप शायद नोट्स
                              बनाते हैं या कभी नहीं, तो विकल्प C चुनें और उस पर
                              क्रोस लगाएं | इसके लिए कोई समयसीमा नहीं है, लेकिन
                              इन वाक्यों के उत्तर 20 मिनट में आपसे हो सके इतनी
                              प्रमाणिकता से और ध्यानपूर्वक दें |
                            </p>
                          </div>
                        </div>

                        {/* Tab 3 Content */}
                        <div
                          className={`tab ${
                            activeTab === "tab-3" ? "active-tab" : ""
                          }`}
                          id="tab-3"
                        >
                          <div className="gujarati-text">
                            <p>
                              પરીક્ષાઓમાં મળનારી તમારી સફળતાઓ તમે તમારા
                              શાળા/કોલેજના વિષયો કેવી રીતે ભણો છો તેના પર આધારિત
                              હોય છે. નીચેના વિધાનો તમારી ભણવાની ટેવોનું વર્ણન
                              કરે છે. અમે તમારી ભણવાની ટેવો વિશે જાણવા માંગીએ
                              છીએ જેથી અમે તમને તમારી પરીક્ષામાં વધુ સારા ગુણ
                              મેળવવામાં મદદ કરી શકીએ. આથી, સંપૂર્ણપણે તમારો
                              સક્રિય સહયોગ આવશ્યક છે.
                            </p>

                            <p>
                              આ પ્રશ્નપત્રમાં જુદાં જુદાં વાક્યો આપેલા છે. દરેક
                              વાક્યો માટે ત્રણ વિકલ્પો આપેલા છે. A હંમેશા/લગભગ,
                              B કોઈવાર, C કદાચ/ક્યારેય નહીં. દરેક વાક્યો માટે
                              તમને જે વિકલ્પ યોગ્ય લાગે તેના ઉપર તમારા
                              જવાબપત્રકમાં ચોકડી (X) ની નિશાની કરવી.
                            </p>

                            <p>Alternatives I take notes when I study:</p>

                            <ul className="mb-2">
                              <li>(A) (હંમેશા/લગભગ) </li>
                              <li>(B) (કોઈવાર) </li>
                              <li>(C) (કદાચ/ક્યારેય નહીં) </li>
                            </ul>

                            <p>
                              જો તમે હંમેશા નોંધ લખતા હોવ, તો વિકલ્પ અ પસંદ કરો
                              અને તમારા જવાબપત્રકમાં A ઉપર ચોકડીની નિશાની કરો.
                              જો તમે 'કોઈવાર' નોંધ લખતા હોવ, તો વિકલ્પ B પસંદ
                              કરો અને તેના ઉપર ચોકડીની નિશાની કરો, અને જો તમે
                              કદાચ નોંધ લખતા હોવ કે ક્યારેય નોંધ લખતા ના હોવ, તો
                              વિકલ્પ C પસંદ કરો અને તેના ઉપર ચોકડીની નિશાની કરો.
                              આના માટે કોઈ સમયમર્યાદા નથી, પરંતુ આ વાક્યો માટેના
                              જવાબો તમારાથી બની શકે તેટલી પ્રામાણિકતાથી અને
                              ધ્યાનથી અપાય તેવી રીતે 20 મિનિટની અંદર આપો.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* End row */}
                </div>
              </div>

              {/* End col */}
            </div>
          </div>
          <div className="tab d-block transform-none">
            <div className="text-center form-group message-btn mt-4">
              <a href="exam-page.html" className="theme-btn-two">
                Start Exam
              </a>
            </div>
          </div>
          {/* End container */}
        </div>
        {/* End bg */}
      </section>
    </div>
  );
}

export default ExamFront
