INSERT INTO users (id, name, username, email, address, phone)
VALUES
  (1, 'John Doe', 'john_doe', 'john.doe@example.com', '123 Main St', '+1234567890'),
  (2, 'Jane Smith', 'jane_smith', 'jane.smith@example.com', '456 Maple Ave', '+9876543210'),
  (3, 'Michael Johnson', 'michael_j', 'michael.johnson@example.com', '789 Oak Rd', '+5555555555');

INSERT INTO userspass (id, username, password, isManager)
VALUES
  (1, 'john_doe', 'password1', true),
  (2, 'jane_smith', 'password2', false),
  (3, 'michael_j', 'password3', false);

INSERT INTO garden (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'מזמרה ידנית', 2, 2, 10, null, 'GardenTools/ManualPruningShears.jpg'),
 (2, 'את חפירה', 2, 2, 10, null, 'GardenTools/Shovel.jpg'),
 (3, 'מגרפה', 2, 2, 10, null, 'GardenTools/rake.jpg'),
 (4, 'מנקש עשבים', 2, 2, 10, null, 'GardenTools/weedEater.jpg'),
 (5, 'ערכת מזמרה', 2, 2, 20, null, 'GardenTools/mazmera.jpg'),
 (6, 'מסור עלים', 1, 1, 20, null, 'GardenTools/leafSaw.jpg');

INSERT INTO electric (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'פטישון', 2, 2, 20, null, 'ElectricTools/patishon.jpg'),
 (2, 'מסור ידני חשמלי', 1, 1, 20, null, 'ElectricTools/masor.jpg'),
 (3, 'מלטשת', 1, 1, 20, null, 'ElectricTools/melateshet.jpg'),
 (4, 'מברגה גדולה', 1, 1, 20, null, 'ElectricTools/mavregas.jpg'),
 (5, 'מברגות קטנות', 2, 2, 20, null, 'ElectricTools/mavregab.jpg');
 
 INSERT INTO handTools (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'מפתח שוודי', 2, 2, 20, null, 'handTools/img1.jpg'),
 (2, 'פטיש', 1, 1, 20, null, 'handTools/img2.jpg'),
 (3, 'ראש למברגה', 1, 1, 20, null, 'handTools/img3.jpg'),
 (4, 'יתד', 1, 1, 20, null, 'handTools/img4.jpg'),
 (5, 'מפתח צינורות', 1, 1, 20, null, 'handTools/img5.jpg'),
 (6, 'מברג שטוח', 1, 1, 20, null, 'handTools/img6.jpg'),
 (7, 'סולם ענק', 1, 1, 20, null, 'handTools/img7.jpg'),
 (8, 'קאטר', 1, 1, 20, null, 'handTools/img8.jpg'),
 (9, 'פלאייר מתכוונן', 1, 1, 20, null, 'handTools/img9.jpg'),
 (10, 'צינור לסתימות', 1, 1, 20, null, 'handTools/img10.jpg'),
 (11, 'מסור ידני', 1, 1, 20, null, 'handTools/img11.jpg'),
 (12, 'פלס', 1, 1, 20, null, 'handTools/img12.jpg'),
 (13, 'לום', 1, 1, 20, null, 'handTools/img13.jpg'),
 (14, 'אקדח לסילקון', 1, 1, 20, null, 'handTools/img14.jpg');
 
INSERT INTO potectorTools (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'אוזניות', 2, 2, 20, null, 'potectorTools/img1.jpg'),
 (2, 'משקפי מגן', 3, 3, 20, null, 'potectorTools/img2.jpg'),
 (3, 'כפפות', 5, 5, 5, null, 'potectorTools/img3.jpg');
 
 INSERT INTO homeTools (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'גרניק', 2, 2, 20, null, 'homeTools/img1.jpg'),
 (2, 'כיסאות כתר', 30, 30, 1, null, 'homeTools/img2.jpg'),
 (3, 'דלי', 5, 5, 20, null, 'homeTools/img3.jpg'),
 (4, 'אקדח סיכות', 1, 1, 5, null, 'homeTools/img4.jpg'),
 (5, 'אקדח דבק חם', 2, 2, 5, null, 'homeTools/img5.jpg'),
 (6, 'דבק חם', 1, 1, 5, null, 'homeTools/img6.jpg');
 
  INSERT INTO camping (id, name, quantity, quantityAvailable, cost, size, image)
VALUES 
 (1, 'צידנית', 2, 2, 5, null, 'camping/img1.jpg'),
 (2, 'שולחן מתקפל', 5, 5, 10, null, 'camping/img2.jpg'),
 (3, 'מחצלות', 10, 10, 10, null, 'camping/img3.jpg'),
 (4, 'מאוורר', 1, 1, 20, null, 'camping/img4.jpg'),
 (5, 'פרוגקטור', 1, 1, 10, null, 'camping/img5.jpg'),
 (6, 'כבל מאריך', 4, 4, 5, 20, 'camping/img6.jpg');