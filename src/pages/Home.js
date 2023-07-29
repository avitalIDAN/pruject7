import React from 'react';
import Tools from '../images/Tools2.jpg';
import main from '../images/main.jpg';
import regulations from './תקנון השאלת ציוד ארגז כלים.docx';
import "./Home.css";

const Home = () => {
  return (
    <div dir="rtl" className="Home-container">
      <div className="left-column">
        <div className="updates-section">עדכונים</div>
      </div>
      <div className="center-column">
      <img className="image-main" src={main} alt="Logo" />
      <p className="Home-p-about">
        מכירים את זה שאתם ממש ממש זקוקים לציוד מסוים<br />
        <b>והוא לא בהישג יד?🪑🛠</b><br />

        מברגה כדי להרכיב את הארון החדש מאיקאה (הגיע הזמן להתחדש!)<br />
        כלים לשיפוץ הבית (בשעה טובה כמה חיכתם לזה!)<br />
        או אפילו כסאות ושולחנות לשבת חתן הקרובה? (סוףסוף היא התחתנה!)<br />

        ארגז כלים הגיע לעיר! בואו להשאיל במחיר מסובסד!<br />
      </p>
      </div>
      <div className="right-column">
        <div className="updates-container">
          <h3 className="days-section">ימי שני וחמישי | 18:00-20:00</h3>
          <h3 className="location-section">מתנ״ס השחר (כניסה אחורית)</h3>
          <h3 className="phone-section">מספר טלפון: 012-3456789</h3>
          <button className="volunteer-section">בואו להתנדב</button>
          <a className="regulations-link" href={regulations}>
            לקריאת התקנון
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
