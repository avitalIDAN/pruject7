import React from 'react';
import Tools from '../images/Tools2.jpg';
import main from '../images/main.jpg';
import regulations from './תקנון השאלת ציוד ארגז כלים.docx'
import "./Home.css";

const Home = () => {
  return (
    <div dir="rtl" className="Home-container">
      <img className='image-main' src={Tools} alt="Logo" />
      <div>
        <p className="Home-p-about">
          מכירים את זה שאתם ממש ממש זקוקים לציוד מסוים<br/>
        <b>והוא לא בהישג יד?🪑🛠</b><br/>

        מברגה כדי להרכיב את הארון החדש מאיקאה (הגיע הזמן להתחדש!)<br/>
        כלים לשיפוץ הבית (בשעה טובה כמה חיכתם לזה!)<br/>
        או אפילו כסאות ושולחנות לשבת חתן הקרובה? (סוףסוף היא התחתנה!)<br/>

        ארגז כלים הגיע לעיר! בואו להשאיל במחיר מסובסד!<br/>
        </p>
        <h3>ימי שני וחמישי | 18:00-20:00</h3>
        <h3>מתנ״ס השחר (כניסה אחורית)</h3>
        <h3>מספר טלפון: 012-3456789</h3>
        <h3>באו להתנדב</h3>
        <a href={regulations}  target="_blank">לקריאת התקנון</a>
        {/* "/Layout/regulations" */}
      </div>
    </div>
  );
};

export default Home;
