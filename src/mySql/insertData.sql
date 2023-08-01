INSERT INTO users (id, name, username, email, address, phone)
VALUES
  (1, 'ספיר ונונו', 'ספיר', 'john.doe@example.com', '123 Main St', '+1234567890'),
  (2, 'אביטל עידן', 'אביטל', 'jane.smith@example.com', '456 Maple Ave', '+9876543210'),
  (3, 'יונתן לוי', 'יונתן', 'michael.johnson@example.com', '789 Oak Rd', '+5555555555');

INSERT INTO userspass (id, username, password, isManager)
VALUES
  (1, 'ספיר', 'Sap1!', true),
  (2, 'אביטל', 'Avi1!', false),
  (3, 'יונתן', 'Yoni1!', false);

INSERT INTO garden (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'מזמרה ידנית', 2, 2, 10, 5, 'GardenTools/ManualPruningShears.jpg'),
 (2, 'את חפירה', 2, 2, 10, 10, 'GardenTools/Shovel.jpg'),
 (3, 'מגרפה', 2, 2, 10, 20, 'GardenTools/rake.jpg'),
 (4, 'מנקש עשבים', 2, 2, 10, 10, 'GardenTools/weedEater.jpg'),
 (5, 'ערכת מזמרה', 2, 2, 20, 2, 'GardenTools/mazmera.jpg'),
 (6, 'מסור עלים', 1, 1, 20, 7, 'GardenTools/leafSaw.jpg');

INSERT INTO electric (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'פטישון', 2, 2, 20, 3, 'ElectricTools/patishon.jpg'),
 (2, 'מסור ידני חשמלי', 1, 1, 20, 5, 'ElectricTools/masor.jpg'),
 (3, 'מלטשת', 1, 1, 20, 3, 'ElectricTools/melateshet.jpg'),
 (4, 'מברגה גדולה', 1, 1, 20, 10, 'ElectricTools/mavregas.jpg'),
 (5, 'מברגות קטנות', 2, 2, 20, 5, 'ElectricTools/mavregab.jpg');
 
 INSERT INTO handTools (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'מפתח שוודי', 2, 2, 20, 4, 'handTools/img1.jpg'),
 (2, 'פטיש', 1, 1, 20, 4, 'handTools/img2.jpg'),
 (3, 'ראש למברגה', 1, 1, 20, 4, 'handTools/img3.jpg'),
 (4, 'יתד', 1, 1, 20, 4, 'handTools/img4.jpg'),
 (5, 'מפתח צינורות', 1, 1, 20, 4, 'handTools/img5.jpg'),
 (6, 'מברג שטוח', 1, 1, 20, 4, 'handTools/img6.jpg'),
 (7, 'סולם ענק', 1, 1, 20, 4, 'handTools/img7.jpg'),
 (8, 'קאטר', 1, 1, 20, 4, 'handTools/img8.jpg'),
 (9, 'פלאייר מתכוונן', 1, 1, 20, 4, 'handTools/img9.jpg'),
 (10, 'צינור לסתימות', 1, 1, 20, 4, 'handTools/img10.jpg'),
 (11, 'מסור ידני', 1, 1, 20, 4, 'handTools/img11.jpg'),
 (12, 'פלס', 1, 1, 20, 4, 'handTools/img12.jpg'),
 (13, 'לום', 1, 1, 20, 4, 'handTools/img13.jpg'),
 (14, 'אקדח לסילקון', 1, 1, 20, 4, 'handTools/img14.jpg');
 
INSERT INTO potectorTools (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'אוזניות', 2, 2, 20, 2, 'potectorTools/img1.jpg'),
 (2, 'משקפי מגן', 3, 3, 20, 1, 'potectorTools/img2.jpg'),
 (3, 'כפפות', 5, 5, 5, 3, 'potectorTools/img3.jpg');
 
 INSERT INTO homeTools (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'גרניק', 2, 2, 20, 5, 'homeTools/img1.jpg'),
 (2, 'כיסאות כתר', 30, 30, 1, 5, 'homeTools/img2.jpg'),
 (3, 'דלי', 5, 5, 20, 3, 'homeTools/img3.jpg'),
 (4, 'אקדח סיכות', 1, 1, 5, 2, 'homeTools/img4.jpg'),
 (5, 'אקדח דבק חם', 2, 2, 5, 1, 'homeTools/img5.jpg'),
 (6, 'דבק חם', 1, 1, 5, 1, 'homeTools/img6.jpg');
 
  INSERT INTO camping (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'צידנית', 2, 2, 5, 1, 'camping/img1.jpg'),
 (2, 'שולחן מתקפל', 5, 5, 10, 5, 'camping/img2.jpg'),
 (3, 'מחצלות', 10, 10, 10, 20, 'camping/img3.jpg'),
 (4, 'מאוורר', 1, 1, 20, 5, 'camping/img4.jpg'),
 (5, 'פרוגקטור', 1, 1, 10, 5, 'camping/img5.jpg'),
 (6, 'כבל מאריך', 4, 4, 5, 20, 'camping/img6.jpg');